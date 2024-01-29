import Link from "next/link";
import FollowUsSvg from "./followUsSvg";
import HeaderSocialIcons from "./headerSocialIcons";

const HeaderFollowUs = () => {
  return (
    <div className="pl-[38px] lg:pl-0 flex items-center justify-start mt-7  gap-3">
      <div className="hidden lg:block">
        <FollowUsSvg />
      </div>
      <p className="text-2xl font-extrabold text-white">ŚLEDŹ NAS</p>
      <span className="w-[25px] h-[4px] bg-white"></span>
      <HeaderSocialIcons />
    </div>
  );
};

export default HeaderFollowUs;
