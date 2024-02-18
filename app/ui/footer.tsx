import Image from "next/image";
import GroveStreetLogo from "@/public/grove-street-logo.svg";
import SocialIcons from "./socialIcons";
import Link from "next/link";
import { Button } from "./button";
import NewsletterSignUp from "./newsletterSignUp";

const Footer = () => {
  return (
    <footer className="pt-[100px] lg:pt-[140px]">
      <div className="w-full bg-black text-white py-[100px]">
        <div className="max-w-app">
          <div className="flex flex-col lg:flex-row items-start justify-start gap-16">
            <div className="mx-auto min-w-[140px]">
              <div className="mb-9">
                <Image
                  src={GroveStreetLogo.src}
                  alt="Grove Street Logo"
                  width={120}
                  height={120}
                  className="block mx-auto"
                />
              </div>
              <div className="flex flex-col gap-5 text-white text-center mb-9">
                <p>Grove Street Ballerz</p>
                <p>ul. Centrum D 9</p>
                <p>32-092 Kraków</p>
              </div>
              <div className="">
                <SocialIcons />
              </div>
            </div>
            <div className="border-b-2 border-r-gray-100 lg:border-b-0 lg:border-r-2 lg:border-r-gray-100 w-full lg:w-2 h-2 lg:h-[328px]"></div>
            <div className="pt-8 mx-auto">
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-[10%] lg:gap-20 items-center font-bold transition-all min-w-0  lg:min-w-[310px]">
                <a className="hover:underline transition-all" href="#ambitions">
                  O NAS
                </a>
                <a className="hover:underline transition-all" href="#news">
                  AKTUALNOŚCI
                </a>
                <a className="hover:underline transition-all" href="#mecze">
                  MECZE
                </a>
                <a className="hover:underline transition-all" href="/">
                  DRUZYNA
                </a>
                <a className="hover:underline transition-all" href="#mecze">
                  WYNIKI
                </a>
              </div>
            </div>
            <div className="border-b-2 border-r-gray-100 lg:border-b-0 lg:border-r-2 lg:border-r-gray-100 w-full lg:w-2 h-2 lg:h-[328px]"></div>
            <div className="self-center">
              <div className="mb-5 max-w-[600px]">
                <h4 className="font-bold mb-5">
                  Dołącz do naszego ekskluzywnego newslettera i bądź na bieżąco
                  z najnowszymi wydarzeniami, ofertami specjalnymi i kulissami
                  naszego zespołu!
                </h4>
                <p className="mb-5">
                  Chcesz być na pierwszym miejscu, gdy chodzi o aktualności z
                  koszykarskiego świata Grove Street Ballers? Dołącz do naszego
                  newslettera i otrzymuj regularne aktualizacje, ekskluzywne
                  treści oraz zaproszenia na wyjątkowe wydarzenia. Bądź częścią
                  naszej koszykarskiej społeczności i czerp inspirację z naszej
                  pasji, determinacji i wspólnych sukcesów!
                </p>
                <p>
                  Nie przegap żadnej ważnej informacji ani okazji do wsparcia
                  naszego zespołu. Wpisz swój adres e-mail poniżej i dołącz do
                  naszej koszykarskiej rodziny już dziś!
                </p>
              </div>
              <NewsletterSignUp />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
