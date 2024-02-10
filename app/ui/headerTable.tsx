import { supabase } from "@/libs/supabase";
import clsx from "clsx";
import { revalidatePath } from "next/cache";
import Image from "next/image";
import React from "react";
import logoPlaceholder from "@/public/logo_placeholder.png";

interface TableData {
  id: number;
  created_at: string;
  position: number;
  teamName: string;
  gp: number;
  wins: number;
  loses: number;
  points: number;
  winration: string;
  for: number;
  agst: number;
  gd: number;
  str: number;
  lastMatchesArray: string; // Assuming this is a JSON string representation
  teamLogo: string | null;
  teamCode: string;
  teamUrl: string;
}

const HeaderTable = async () => {
  const { data, error } = await supabase
    .from<any, TableData>("lista_wynikow")
    .select("*")
    .order("position", { ascending: true })
    .returns<TableData[]>();
  //   revalidatePath("/");

  if (error || !data) return null;

  return (
    <div className="self-start w-full max-w-[440px]">
      <h3 className="text-2xl text-white font-bold uppercase mb-3">
        Statystyki:
      </h3>
      <div className="w-full rounded-md bg-white overflow-auto text-[#31404b] shadow-box">
        <div className="p-6  font-semibold border border-transparent border-b border-b-gray-100 border-l-emerald-700 border-l-4 relative">
          Diwizja I
        </div>
        <div className="p-2 md:p-4 pb-1 text-[12px] md:text-base">
          <table className="header_table w-full max-w-full text-center">
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th>M</th>
                <th>PKT</th>
                <th>Z/P</th>
                <th>Win</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr
                  className={`${
                    item.teamName === "Grove Street Ballerz" && "font-bold"
                  }`}
                  key={item.id}
                >
                  <td className="!pr-2 md:!pr-7">0{item.position}</td>
                  <td className="td_teamName">
                    <div className={"flex items-center justify-start gap-3"}>
                      <Image
                        src={item.teamLogo || logoPlaceholder.src}
                        alt={item.teamName}
                        width={25}
                        height={25}
                      />
                      <span className="hidden md:block">{item.teamName}</span>
                      <span className="block md:hidden">{item.teamCode}</span>
                    </div>
                  </td>
                  <td className="table_data">{item.gp}</td>
                  <td className="table_data">{item.points}</td>
                  <td className="table_data">
                    {item.wins}/{item.loses}
                  </td>
                  <td className="table_data">{item.winration}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HeaderTable;
