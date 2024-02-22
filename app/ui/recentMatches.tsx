import { supabase } from "@/libs/supabase";
import React from "react";
import { SheduleData } from "./matches";
import PreviouseMatch from "./previouseMatch";
import CurrentMatch from "./currentMatch";
import NextMatch from "./nextMatch";

const RecentMatches = async () => {
  const { data, error } = await supabase
    .from<any, SheduleData>("lista_meczy")
    .select("*")
    .order("matchTime", { ascending: true })
    .returns<SheduleData[]>();

  if (!data) return null;

  // Get today's date
  const today = new Date();

  // Find next match, last match, and other matches
  const currentMatch = data.find((match) => new Date(match.matchTime) > today);
  const previouseMatch = data.reduce(
    (prev, curr) =>
      new Date(curr.matchTime) < today
        ? prev === null || new Date(curr.matchTime) > new Date(prev!.matchTime)
          ? curr
          : prev
        : prev,
    null as SheduleData | null // Specify null as initial value
  );

  // Find the match after nextMatch
  const nextMatch = data.find(
    (match) => new Date(match.matchTime) > new Date(currentMatch!.matchTime)
  );

  return (
    <section id="recent" className="pt-[100px] lg:pt-[190px]">
      <div className="max-w-app">
        <div className="mb-12">
          <p className="text-white text-3xl font-extrabold mb-7">MECZE</p>
          <span className="w-full max-w-[300px] h-[5px] bg-[#DC8A02] block"></span>
        </div>
        <div className="flex flex-col lg:flex-row items-start gap-4 sm:border-solid sm:border-[5px] border-white rounded-md sm:p-10">
          {previouseMatch && <PreviouseMatch previouseMatch={previouseMatch} />}
          {currentMatch && <CurrentMatch currentMatch={currentMatch} />}
          {nextMatch && <NextMatch nextMatch={nextMatch} />}
        </div>
      </div>
    </section>
  );
};

export default RecentMatches;
