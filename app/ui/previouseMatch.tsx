import React from "react";
import { SheduleData } from "./matches";
import Image from "next/image";
import logoPlaceholder from "@/public/logo_placeholder.png";
import { cn } from "@/lib/utils";
import MapPin from "./mapPin";

type Props = {
  previouseMatch: SheduleData;
};

const PreviouseMatch = ({ previouseMatch }: Props) => {
  return (
    <div
      className="bg-white rounded-md border-[4px]
    border-[#DC8A02] py-6 w-full lg:w-auto px-5 lg:px-10 text-[#31404b] text-center"
    >
      <p className="text-xl font-bold mb-10">Ostatni Mecz</p>
      <div className="flex justify-between items-center gap-6">
        <div className="flex items-center flex-col justify-between gap-4 w-full">
          <Image
            src={previouseMatch.homeTeamLogoUrl || logoPlaceholder.src}
            alt={previouseMatch.homeTeamName}
            height={50}
            width={50}
            className="w-[32px] md:w-[50px] h-auto"
          />
          <span
            className={cn(
              "font-medium text-sm md:text-md",
              previouseMatch.homeTeamName === "Grove Street Ballerz" &&
                "font-bold"
            )}
          >
            {previouseMatch.homeTeamName}
          </span>
        </div>
        <div>
          <span className="text-base md:text-xl font-bold">
            {previouseMatch.homeTeamScore}&nbsp;:&nbsp;
            {previouseMatch.awayTeamScore}
          </span>
        </div>
        <div className="flex items-center flex-col justify-between gap-4 w-full">
          <Image
            src={previouseMatch.awayTeamLogoUrl || logoPlaceholder.src}
            alt={previouseMatch.awayTeamName}
            height={50}
            width={50}
            className="w-[32px] md:w-[50px] h-auto"
          />
          <span
            className={cn(
              "font-medium text-sm md:text-md",
              previouseMatch.awayTeamName === "Grove Street Ballerz" &&
                "font-bold"
            )}
          >
            {previouseMatch.awayTeamName}
          </span>
        </div>
      </div>
      <div className="text-md pt-6 pb-3 px-3 font-bold">
        {`${new Date(previouseMatch.matchTime)
          .getDate()
          .toString()
          .padStart(2, "0")}.${(
          new Date(previouseMatch.matchTime).getMonth() + 1
        )
          .toString()
          .padStart(2, "0")}.${new Date(
          previouseMatch.matchTime
        ).getFullYear()}`}
      </div>
      <div className="text-md pb-3 px-3 flex gap-1 justify-center items-center">
        <MapPin /> {previouseMatch.venue}
      </div>
    </div>
  );
};

export default PreviouseMatch;
