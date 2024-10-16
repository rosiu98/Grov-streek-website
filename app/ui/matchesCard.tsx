"use client";

import Image from "next/image";
import { SheduleData } from "./matches";
import logoPlaceholder from "@/public/logo_placeholder.png";
import { cn } from "@/lib/utils";
import MapPin from "./mapPin";
import { useState } from "react";
import SeasonSelect from "./seasonSelect";

type Props = {
  wyniki: SheduleData[];
};

const MatchesCard = ({ wyniki }: Props) => {
  const [currentSeason, setCurrentSeason] = useState("9");

  const currentWyniki = wyniki.filter((item) => item.season === currentSeason);

  return (
    <div className="flex w-full items-center justify-center gap-8 flex-col max-w-[1200px] mx-auto relative">
      <div className="absolute top-[-40px] md:top-[-100px] right-0">
        <SeasonSelect
          currentSeason={currentSeason}
          setCurrentSeason={setCurrentSeason}
        />
      </div>
      {currentWyniki.map((wynik) => (
        <div
          key={wynik.id}
          className="grid grid-cols-[0.4fr_0.2fr_0.4fr] place-items-center bg-white pt-14 pb-10 md:pb-14 px-5 xs:px-[5%] md:px-[10%] border-[4px] rounded-xl border-[#DC8A02] text-black text-center relative w-full"
        >
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-[#DC8A02] text-white text-xs pt-1 pb-3 px-3 rounded-b-lg font-medium">
            {`${new Date(wynik.matchTime)
              .getDate()
              .toString()
              .padStart(2, "0")}.${(new Date(wynik.matchTime).getMonth() + 1)
              .toString()
              .padStart(2, "0")}.${new Date(
              wynik.matchTime
            ).getFullYear()}`}{" "}
            <br />
            {`Godz. ${new Date(wynik.matchTime)
              .getHours()
              .toString()
              .padStart(2, "0")}:${new Date(wynik.matchTime)
              .getMinutes()
              .toString()
              .padStart(2, "0")}`}
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-black text-xs pb-2 font-medium flex justify-center items-center gap-2">
            <MapPin /> {wynik.venue}
          </div>
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 w-full">
            <span
              className={cn(
                "font-medium text-sm md:text-lg",
                wynik.homeTeamName === "Grove Street Ballerz" && "font-bold"
              )}
            >
              {wynik.homeTeamName}
            </span>
            <Image
              src={wynik.homeTeamLogoUrl || logoPlaceholder.src}
              alt={wynik.homeTeamName}
              width={70}
              height={70}
              className="w-[32px] md:w-[70px] h-auto"
            />
          </div>
          <div>
            {(!wynik.homeTeamScore || !wynik.awayTeamScore) && (
              <span className="text-2xl font-bold">vs</span>
            )}
            {wynik.homeTeamScore && wynik.awayTeamScore && (
              <span className="text-base md:text-2xl font-bold">
                {wynik.homeTeamScore}&nbsp;:&nbsp;{wynik.awayTeamScore}
              </span>
            )}
          </div>
          <div className="flex items-center flex-col md:flex-row justify-between gap-4 w-full">
            <Image
              src={wynik.awayTeamLogoUrl || logoPlaceholder.src}
              alt={wynik.awayTeamName}
              height={70}
              width={70}
              className="w-[32px] md:w-[70px] h-auto"
            />
            <span
              className={cn(
                "font-medium text-sm md:text-lg",
                wynik.awayTeamName === "Grove Street Ballerz" && "font-bold"
              )}
            >
              {wynik.awayTeamName}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MatchesCard;
