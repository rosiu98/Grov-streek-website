import { getGoogleSheetsData } from "@/libs/gsheets";
import Header from "./ui/header";
import HeaderColumns from "./ui/headerColumns";
import HeaderTable, { TableData } from "./ui/headerTable";
import HeaderTitle from "./ui/headerTitle";
import Main from "./ui/main";
import Navbar from "./ui/navbar";
import News from "./ui/news";
import FacebookPosts from "./ui/facebookPosts";
import Ambitions from "./ui/ambitions";
import Matches from "./ui/matches";
import Footer from "./ui/footer";
import Stopka from "./ui/stopka";
import RecentMatches from "./ui/recentMatches";
import { supabase } from "@/libs/supabase";

export const revalidate = 900;

export default async function Home() {
  const { data, error } = await supabase
    .from<any, TableData>("lista_wynikow")
    .select("*")
    .order("position", { ascending: true })
    .returns<TableData[]>();
  //   revalidatePath("/");

  if (error || !data) return null;

  return (
    <>
      <Header>
        <Navbar />
        <HeaderColumns>
          <HeaderTitle />
          <HeaderTable data={data} />
        </HeaderColumns>
      </Header>
      <Main>
        <RecentMatches />
        <News />
        <FacebookPosts />
        <Ambitions />
        <Matches />
        <Footer />
        <Stopka />
      </Main>
    </>
  );
}
