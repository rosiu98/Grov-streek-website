import HeaderFollowUs from "./headerFollowUs";

type Props = {
  children: React.ReactNode;
};

const HeaderColumns = ({ children }: Props) => {
  return (
    <div className="w-full max-w-full pt-[4rem] lg:pt-0 pb-[5.5rem] lg:pb-0">
      <div className="max-w-app flex items-center justify-between gap-[5rem] md:gap-5 flex-wrap">
        {children}
      </div>
      <HeaderFollowUs />
    </div>
  );
};

export default HeaderColumns;
