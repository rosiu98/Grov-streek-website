import { supabase } from "@/libs/supabase";
import MatchesCard from "./matchesCard";

export interface SheduleData {
  id: number;
  matchTime: number;
  venue: string;
  homeTeamName: string;
  homeTeamLogoUrl: string | null;
  awayTeamName: string;
  awayTeamLogoUrl: string | null;
}

const Matches = async () => {
  const { data, error } = await supabase
    .from<any, SheduleData>("lista_meczy")
    .select("*")
    .order("matchTime", { ascending: true })
    .returns<SheduleData[]>();

  if (!data) return null;

  return (
    <section className="pt-[100px] lg:pt-[140px] pb-10">
      <div className="max-w-app">
        <div className="mb-12">
          <p className="text-white text-3xl font-extrabold mb-7">
            TERMINARZ I WYNIKI
          </p>
          <span className="w-full max-w-[300px] h-[5px] bg-[#DC8A02] block"></span>
        </div>

        <MatchesCard wyniki={data} />
      </div>
    </section>
  );
};

export default Matches;
