import { supabase } from "@/libs/supabase";
import { unstable_noStore } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer-core";

export const dynamic = "force-dynamic";

export const GET = async (req: NextRequest, res: NextResponse) => {
  unstable_noStore();
  try {
    const sheduleUrl =
      "https://hosted.dcd.shared.geniussports.com/LMBA/en/competition/37942/team/164993/schedule";

    const browser = await puppeteer.connect({
      browserWSEndpoint: `wss://chrome.browserless.io?token=${process.env.BLESS_TOKEN}`,
    });

    const page = await browser.newPage();

    await page.goto(sheduleUrl);

    // Wait for some time or use other strategies to ensure content is loaded
    await page.waitForTimeout(2000);

    const sheduleData = await page.evaluate(() => {
      const matches = Array.from(document.querySelectorAll(".match-wrap"));

      return matches.map((match) => {
        const matchTime =
          match.querySelector(".match-time span")?.textContent?.trim() || "";
        const venue = match.querySelector(".match-venue a")?.textContent || "";

        const homeTeamName =
          match.querySelector(".home-team .teamnames")?.textContent?.trim() ||
          "";
        const homeTeamLogoUrl =
          match.querySelector(".home-team-logo img")?.getAttribute("src") || "";

        const homeTeamScore =
          match
            .querySelector(".home-team .homescore .fake-cell")
            ?.textContent?.trim()
            .toString() || "";

        const awayTeamName =
          match.querySelector(".away-team .teamnames")?.textContent?.trim() ||
          "";
        const awayTeamLogoUrl =
          match.querySelector(".away-team-logo img")?.getAttribute("src") || "";

        const awayTeamScore =
          match
            .querySelector(".away-team .awayscore .fake-cell")
            ?.textContent?.trim()
            .toString() || "";

        return {
          matchTime: Number(Date.parse(matchTime)),
          venue,
          homeTeamName,
          homeTeamLogoUrl,
          homeTeamScore,
          awayTeamName,
          awayTeamLogoUrl,
          awayTeamScore,
        };
      });
    });

    if (sheduleData) {
      await supabase.from("lista_meczy").delete().gte("id", 0);
    }

    const { data: supabaseData } = await supabase
      .from("lista_meczy")
      .insert(sheduleData)
      .select("*");

    await browser.close();

    return new Response(JSON.stringify(supabaseData), { status: 200 });
  } catch (error: any) {
    console.error("Scraping failed:", error.message);
    return new Response(
      JSON.stringify({ message: "Scraping failed", error: error.message }),
      { status: 200 }
    );
  }
};
