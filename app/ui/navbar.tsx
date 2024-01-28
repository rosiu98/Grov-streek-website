import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import GroveStreetLogo from "@/public/grove-street-logo.svg";
import { Button } from "./button";
import NavbarSvg from "./navbarSvg";

const Navbar = () => {
  return (
    <nav className="sticky top-0 w-full max-w-full  bg-black bg-opacity-45 text-white">
      <div className="flex flex-row items-center justify-end max-w-app m-auto relative py-8">
        <div>
          <Image
            src={GroveStreetLogo.src}
            width={200}
            height={200}
            alt="Grove Street Logo"
            className="w-[100px] lg:w-[200px] absolute top-[1rem] left-0"
          />
        </div>
        <div className="hidden lg:flex flex-row items-center gap-5 font-medium">
          <Link href="/">O NAS</Link>
          <Link href="/">AKTUALNOŚCI</Link>
          <Link href="/">MECZE</Link>
          <Link href="/">DRUZYNA</Link>
          <Link href="/">WYNIKI</Link>
          <Button href="/">KONTAKT</Button>
        </div>
        <div className="lg:hidden block">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <NavbarSvg />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel className="font-bold">
                Nawigacja
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/">O Nas</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/">Aktualności</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/">Mecze</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/">Druzyna</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/">
                  <Link href="/">Wyniki</Link>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/">Kontakt</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
