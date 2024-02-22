import { getGoogleSheetsData } from "@/libs/gsheets";
import Header from "./ui/header";
import HeaderColumns from "./ui/headerColumns";
import HeaderTable from "./ui/headerTable";
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

export const revalidate = 900;

export default async function Home() {
  return (
    <>
      <Header>
        <Navbar />
        <HeaderColumns>
          <HeaderTitle />
          <HeaderTable />
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
