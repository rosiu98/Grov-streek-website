import React from "react";
import { SheduleData } from "./matches";
import Image from "next/image";
import logoPlaceholder from "@/public/logo_placeholder.png";
import { cn } from "@/lib/utils";
import MapPin from "./mapPin";

type Props = {
  nextMatch: SheduleData;
};

const NextMatch = ({ nextMatch }: Props) => {
  return (
    <div
      className="bg-white rounded-md border-[4px]
    border-[#DC8A02] py-6 w-full lg:w-auto px-5 lg:px-10 text-[#31404b] text-center"
    >
      <p className="text-xl font-bold mb-10">Kolejny Mecz</p>
      <div className="flex justify-between items-center gap-6">
        <div className="flex items-center flex-col justify-between gap-4 w-full">
          <Image
            src={nextMatch.homeTeamLogoUrl || logoPlaceholder.src}
            alt={nextMatch.homeTeamName}
            height={50}
            width={50}
            className="w-[32px] md:w-[50px] h-auto"
          />
          <span
            className={cn(
              "font-medium text-sm md:text-md",
              nextMatch.homeTeamName === "Grove Street Ballerz" && "font-bold"
            )}
          >
            {nextMatch.homeTeamName}
          </span>
        </div>
        <div>
          <span className="text-base md:text-xl font-bold">vs</span>
        </div>
        <div className="flex items-center flex-col justify-between gap-4 w-full">
          <Image
            src={nextMatch.awayTeamLogoUrl || logoPlaceholder.src}
            alt={nextMatch.awayTeamName}
            height={50}
            width={50}
            className="w-[32px] md:w-[50px] h-auto"
          />
          <span
            className={cn(
              "font-medium text-sm md:text-md",
              nextMatch.awayTeamName === "Grove Street Ballerz" && "font-bold"
            )}
          >
            {nextMatch.awayTeamName}
          </span>
        </div>
      </div>
      <div className="text-md pt-6 pb-3 px-3 font-bold">
        {`${new Date(nextMatch.matchTime)
          .getDate()
          .toString()
          .padStart(2, "0")}.${(new Date(nextMatch.matchTime).getMonth() + 1)
          .toString()
          .padStart(2, "0")}.${new Date(nextMatch.matchTime).getFullYear()}`}
      </div>
      <div className="text-md pb-3 px-3 flex gap-1 justify-center items-center">
        <MapPin /> {nextMatch.venue}
      </div>
      <div className="text-md text-center mb-3">
        {`Godz. ${new Date(nextMatch.matchTime)
          .getHours()
          .toString()
          .padStart(2, "0")}:${new Date(nextMatch.matchTime)
          .getMinutes()
          .toString()
          .padStart(2, "0")}`}
      </div>
    </div>
  );
};

export default NextMatch;
