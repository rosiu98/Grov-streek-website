import React from "react";
import { SheduleData } from "./matches";
import Image from "next/image";
import logoPlaceholder from "@/public/logo_placeholder.png";
import { cn } from "@/lib/utils";
import MapPin from "./mapPin";

type Props = {
  currentMatch: SheduleData;
};

const CurrentMatch = ({ currentMatch }: Props) => {
  return (
    <div
      className="bg-white rounded-md border-[4px]
    border-[#DC8A02] w-full lg:w-auto py-6 px-5 lg:px-10 text-[#31404b] text-center flex-1"
    >
      <p className="text-xl lg:text-2xl font-bold mb-16">Najbliższy Mecz</p>
      <div className="flex justify-between items-center gap-6">
        <div className="flex items-center flex-col justify-between gap-4 w-full">
          <Image
            src={currentMatch.homeTeamLogoUrl || logoPlaceholder.src}
            alt={currentMatch.homeTeamName}
            height={80}
            width={80}
            className="w-[32px] md:w-[80px] h-auto"
          />
          <span
            className={cn(
              "font-medium text-sm md:text-lg",
              currentMatch.homeTeamName === "Grove Street Ballerz" &&
                "font-bold"
            )}
          >
            {currentMatch.homeTeamName}
          </span>
        </div>
        <div>
          <span className="text-base md:text-xl font-bold">vs</span>
        </div>
        <div className="flex items-center flex-col justify-between gap-4 w-full">
          <Image
            src={currentMatch.awayTeamLogoUrl || logoPlaceholder.src}
            alt={currentMatch.awayTeamName}
            height={80}
            width={80}
            className="w-[32px] md:w-[80px] h-auto"
          />
          <span
            className={cn(
              "font-medium text-sm md:text-lg",
              currentMatch.awayTeamName === "Grove Street Ballerz" &&
                "font-bold"
            )}
          >
            {currentMatch.awayTeamName}
          </span>
        </div>
      </div>
      <div className="hidden lg:block max-w-[80%] mx-auto h-[4px] bg-[#162222d9] mt-16 mb-10"></div>
      <div className="text-xl font-semibold mb-5 mt-8 lg:mt-0">Ligowy</div>
      <div className="text-xl lg:text-3xl pb-3 px-3 font-bold mb-6">
        {`${new Date(currentMatch.matchTime)
          .getDate()
          .toString()
          .padStart(2, "0")}.${(new Date(currentMatch.matchTime).getMonth() + 1)
          .toString()
          .padStart(2, "0")}.${new Date(currentMatch.matchTime).getFullYear()}`}
      </div>
      <div className="text-md pb-3 px-3 flex gap-1 justify-center items-center">
        <MapPin /> {currentMatch.venue}
      </div>
      <div className="text-xl text-center mb-8">
        {`Godz. ${new Date(currentMatch.matchTime)
          .getHours()
          .toString()
          .padStart(2, "0")}:${new Date(currentMatch.matchTime)
          .getMinutes()
          .toString()
          .padStart(2, "0")}`}
      </div>
    </div>
  );
};

export default CurrentMatch;
