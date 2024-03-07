import { SheduleData } from "@/app/ui/matches";
import todayOrTomorrowMatch from "@/app/ui/todayOrTomorrowMatch";
import { supabase } from "@/libs/supabase";
import { unstable_noStore } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface NewsletterData {
  id: number;
  email: string;
  created_at: string;
}

const formatDate = (value: number) => {
  return `${new Date(value).getDate().toString().padStart(2, "0")}.${(
    new Date(value).getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}.${new Date(value).getFullYear()}`;
};

const formatTime = (value: number) => {
  return `${new Date(value).getHours().toString().padStart(2, "0")}:${new Date(
    value
  )
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;
};

export const dynamic = "force-dynamic";

export const GET = async (req: NextRequest, res: NextResponse) => {
  unstable_noStore();
  try {
    const { data } = await supabase
      .from<any, SheduleData>("lista_meczy")
      .select("*")
      .order("matchTime", { ascending: true })
      .returns<SheduleData[]>();

    if (!data) {
      console.error("There was error with trying to prepare email!");
      return new Response(
        JSON.stringify({
          message: "There was error with trying to prepare email!",
        }),
        {
          status: 400,
        }
      );
    }

    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1); // Set to tomorrow

    // FOR TESTING
    // const testData = data.find((match) => new Date(match.matchTime) > today);

    // if (!testData) {
    //   console.error("Test error");
    //   return new Response(
    //     JSON.stringify({
    //       message: "Test error",
    //     }),
    //     {
    //       status: 400,
    //     }
    //   );
    // }

    // await resend.emails.send({
    //   from: "Grove Street Ballerz <GroveStreetBallerz@email-app.website>",
    //   to: ["rosiu978@gmail.com"],
    //   subject: `${true ? "Dziś" : "Jutro"} (${formatDate(
    //     testData.matchTime
    //   )}) o godzinie ${formatTime(
    //     testData.matchTime
    //   )} zagraj z nami! Grove Street Ballers czekają na boisku (${
    //     testData.venue
    //   }) !`,
    //   html: todayOrTomorrowMatch(testData, 45, true),
    // });

    const currentMatch = data.find((match) => {
      const matchDate = new Date(match.matchTime);
      return (
        (matchDate.getDate() === today.getDate() &&
          matchDate.getMonth() === today.getMonth() &&
          matchDate.getFullYear() === today.getFullYear()) ||
        (matchDate.getDate() === tomorrow.getDate() &&
          matchDate.getMonth() === tomorrow.getMonth() &&
          matchDate.getFullYear() === tomorrow.getFullYear())
      );
    });

    if (!currentMatch) {
      console.error("No match today or tomorrow!");
      return new Response(
        JSON.stringify({ message: "No match today or tomorrow!" }),
        {
          status: 400,
        }
      );
    }

    const isMatchToday =
      new Date(currentMatch?.matchTime).getDay() === today.getDay();

    const { data: newsletterData, error } = await supabase
      .from("newsletter")
      .select("*")
      .returns<NewsletterData[]>();

    if (error || !newsletterData) {
      console.error("There was error with trying to get newsletter data!");
      return new Response(JSON.stringify({ message: error?.message }), {
        status: 400,
      });
    }

    const sendData = newsletterData.map((item) => ({
      from: "Grove Street Ballerz <GroveStreetBallerz@email-app.website>",
      to: [item.email],
      subject: `${isMatchToday ? "Dziś" : "Jutro"} (${formatDate(
        currentMatch.matchTime
      )}) o godzinie ${formatTime(
        currentMatch.matchTime
      )} zagraj z nami! Grove Street Ballers czekają na boisku (${
        currentMatch.venue
      }) !`,
      html: todayOrTomorrowMatch(currentMatch, item.id, isMatchToday),
    }));

    const { error: resendError } = await resend.batch.send(sendData);

    if (resendError) {
      console.error(
        "There was error with trying to start automation!",
        resendError
      );
      return new Response(JSON.stringify({ message: resendError }), {
        status: 400,
      });
    }

    return new Response(JSON.stringify("working!"), { status: 200 });
  } catch (error: any) {
    console.error("Automation failed:", error.message);
    return new Response(
      JSON.stringify({ message: "Automation failed", error: error.message }),
      { status: 200 }
    );
  }
};
