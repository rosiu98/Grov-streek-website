import React from "react";

type Props = {
  children: React.ReactNode;
};

const HeaderColumns = ({ children }: Props) => {
  return (
    <div className="w-full max-w-full pt-[4rem] md:pt-0">
      <div className="max-w-app flex items-center justify-between gap-[5rem] md:gap-5 flex-wrap">
        {children}
      </div>
    </div>
  );
};

export default HeaderColumns;
