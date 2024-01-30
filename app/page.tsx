import Header from "./ui/header";
import HeaderColumns from "./ui/headerColumns";
import HeaderTable from "./ui/headerTable";
import HeaderTitle from "./ui/headerTitle";
import Main from "./ui/main";
import Navbar from "./ui/navbar";
import News from "./ui/news";

export const revalidate = 900;

export default function Home() {
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
        <News />
      </Main>
    </>
  );
}
