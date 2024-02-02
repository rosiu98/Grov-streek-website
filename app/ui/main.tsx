import backgroundImage from "@/public/bg_header.jpg";

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full text-white relative">
      <div className="min-h-[1000px] h-full">{children}</div>
    </main>
  );
};

export default Main;
