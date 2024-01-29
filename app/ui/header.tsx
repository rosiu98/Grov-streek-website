import headerBackgroundImage from "@/public/bg_header.jpg";

type Props = {
  children: React.ReactNode;
};

const Header = ({ children }: Props) => {
  return (
    <header
      style={{ backgroundImage: `url(${headerBackgroundImage.src})` }}
      className="h-full lg:h-screen min-h-[1100px] grid items-start bg-cover bg-center text-white"
    >
      {children}
    </header>
  );
};

export default Header;
