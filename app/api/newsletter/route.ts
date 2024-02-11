import WelcomeEmail from "@/app/ui/welcomeEmail";
import { supabase } from "@/libs/supabase";
import { unstable_noStore } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const dynamic = "force-dynamic";

export const POST = async (req: NextRequest, res: NextResponse) => {
  unstable_noStore();
  try {
    const email = await req.json();

    if (!email) {
      console.error("Email is empty!");
      return new Response(JSON.stringify({ message: "Email is empty!" }), {
        status: 400,
      });
    }

    const { error } = await supabase.from("newsletter").insert({ email });

    if (error) {
      console.error("There was error with trying to submit email!");
      return new Response(JSON.stringify({ message: error.message }), {
        status: 400,
      });
    }

    const { error: resendError } = await resend.emails.send({
      from: "Grove Street Ballerz <onboarding@resend.dev>",
      to: [email],
      subject: "Hello world",
      react: WelcomeEmail(),
    });

    if (resendError) {
      console.error("There was error with trying to send email!", resendError);
      return new Response(JSON.stringify({ message: resendError }), {
        status: 400,
      });
    }

    return new Response(JSON.stringify("working!"), { status: 200 });
  } catch (error: any) {
    console.error("Scraping failed:", error.message);
    return new Response(
      JSON.stringify({ message: "Scraping failed", error: error.message }),
      { status: 200 }
    );
  }
};
