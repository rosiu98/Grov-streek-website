"use client";

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
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

const Navbar = () => {
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const headerElement = document.querySelector("header"); // Change the selector as needed

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      const shouldFixNavbar = !entry.isIntersecting;

      if (shouldFixNavbar && !isNavbarFixed) {
        setIsNavbarFixed(true);
      } else if (!shouldFixNavbar && isNavbarFixed) {
        setIsNavbarFixed(false);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0,
    });

    if (headerElement) {
      observer.observe(headerElement);
    }

    return () => {
      if (headerElement) {
        observer.unobserve(headerElement);
      }
    };
  }, [isNavbarFixed]);

  return (
    <>
      {isNavbarFixed && <div className="h-[100px] lg:h-[116px]"></div>}

      <nav
        ref={navbarRef}
        className={clsx(
          `relative z-30 top-0 w-full max-w-full bg-black bg-opacity-45 text-white`,
          isNavbarFixed && "!fixed navbar-enter"
        )}
      >
        <div className="navbar-container flex flex-row items-center justify-end max-w-app m-auto relative py-8">
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
            <a className="navbar-link" href="#ambitions">
              O NAS
            </a>
            <a className="navbar-link" href="#news">
              AKTUALNOŚCI
            </a>
            <a className="navbar-link" href="#mecze">
              MECZE
            </a>
            <Link className="navbar-link" href="/">
              DRUZYNA
            </Link>
            <Link className="navbar-link" href="#mecze">
              WYNIKI
            </Link>
            <Button target="_blank" href="https://www.facebook.com/GSBallerz">
              KONTAKT
            </Button>
          </div>
          <div className="lg:hidden block">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <NavbarSvg />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel className="font-bold">
                  Nawigacja
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <a href="#ambitions">O Nas</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#news">Aktualności</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#mecze">Mecze</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/">Druzyna</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#mecze">Wyniki</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/">Kontakt</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
