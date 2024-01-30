import backgroundImage from "@/public/bg_header.jpg";

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full text-white relative">
      <div className="h-[1000px]">{children}</div>
    </main>
  );
};

export default Main;
