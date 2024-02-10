import { supabase } from "@/libs/supabase";
import { unstable_noStore } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer-core";

export interface ScrapData {
  imageLogo: string;
  Position: string;
  teamName: string;
  teamCode: string;
  teamUrl: string;
  GP: string;
  W: string;
  L: string;
  Pts: string;
  "%won": string;
  For: string;
  Agst: string;
  GD: string;
  Str: string;
  L5: string;
}

export const dynamic = "force-dynamic";

export const GET = async (req: NextRequest, res: NextResponse) => {
  unstable_noStore();
  try {
    const url =
      "https://hosted.dcd.shared.geniussports.com/LMBA/en/competition/37942/standings?phaseName=Division%20I&";

    const sheduleUrl =
      "https://hosted.dcd.shared.geniussports.com/LMBA/en/competition/37942/team/164993/schedule";

    const browser = await puppeteer.connect({
      browserWSEndpoint: `wss://chrome.browserless.io?token=${process.env.BLESS_TOKEN}`,
    });

    const page = await browser.newPage();
    await page.goto(url);

    // Wait for some time or use other strategies to ensure content is loaded
    await page.waitForTimeout(3000);

    const data = await page.evaluate(() => {
      const table = document.querySelector(".table-wrap");
      if (!table) {
        throw new Error("Table not found on the page");
      }

      // Extract data from the table
      const rows = Array.from(table.querySelectorAll("tr")).slice(1); // Skip header row
      const headers = Array.from(table.querySelectorAll("th")).map((th) =>
        th.textContent?.trim()
      );

      const result = rows.map((row) => {
        const cells = Array.from(row.querySelectorAll("td")).map((td) =>
          td.textContent?.trim()
        ) as [string];

        if (!cells || !headers) return;

        // Extract image URL from the "Team" column (assuming it's an img element)
        const teamLogoSrc =
          row.querySelector(".team-logo img")?.getAttribute("src") || null;

        // Change "L5" column to an array
        const l5Array = cells[headers.indexOf("L5")].split(/\s+/);

        // Extract team name, team code, and team URL
        const teamInfoElement = row.querySelector(".team-name a");
        const teamName =
          teamInfoElement
            ?.querySelector(".team-name-full")
            ?.textContent?.trim() || null;
        const teamCode =
          teamInfoElement
            ?.querySelector(".team-name-code")
            ?.textContent?.trim() || null;
        const teamUrl = teamInfoElement?.getAttribute("href") || null;

        const obj: any = {
          imageLogo: teamLogoSrc,
          teamName,
          teamCode,
          teamUrl,
        };

        headers.forEach((header, index) => {
          if (!header) return;

          if (header === "L5") {
            obj[header] = l5Array;
          } else {
            obj[header] = cells[index];
          }
        });

        return obj;
      });

      return result as ScrapData[];
    });

    if (data) {
      await supabase.from("lista_wynikow").delete().gte("id", 0);
    }

    const parseData = data.map((item) => {
      return {
        position: item.Position,
        teamName: item.teamName,
        teamCode: item.teamCode,
        teamUrl: item.teamUrl,
        gp: Number(item.GP),
        wins: Number(item.W),
        loses: Number(item.L),
        points: Number(item.Pts),
        winration: item["%won"],
        for: Number(item.For),
        agst: Number(item.Agst),
        gd: Number(item.GD),
        str: Number(item.Str),
        lastMatchesArray: item.L5,
        teamLogo: item.imageLogo,
      };
    });

    const { data: supabaseData } = await supabase
      .from("lista_wynikow")
      .insert(parseData)
      .select("*");

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

        const awayTeamName =
          match.querySelector(".away-team .teamnames")?.textContent?.trim() ||
          "";
        const awayTeamLogoUrl =
          match.querySelector(".away-team-logo img")?.getAttribute("src") || "";

        return {
          matchTime: Number(Date.parse(matchTime)),
          venue,
          homeTeamName,
          homeTeamLogoUrl,
          awayTeamName,
          awayTeamLogoUrl,
        };
      });
    });

    if (sheduleData) {
      await supabase.from("lista_meczy").delete().gte("id", 0);
    }

    await supabase.from("lista_meczy").insert(sheduleData).select("*");

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
