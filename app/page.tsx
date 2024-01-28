import Header from "./ui/header";
import HeaderColumns from "./ui/headerColumns";
import HeaderTable from "./ui/headerTable";
import HeaderTitle from "./ui/headerTitle";
import Navbar from "./ui/navbar";

export default function Home() {
  return (
    <Header>
      <Navbar />
      <HeaderColumns>
        <HeaderTitle />
        <HeaderTable />
      </HeaderColumns>
    </Header>
  );
}
