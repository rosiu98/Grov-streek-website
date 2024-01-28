import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
}

export function Button({ children, className, href, ...rest }: ButtonProps) {
  return (
    <Link
      {...rest}
      href={href}
      className={clsx(
        "px-4 py-3 border-solid border-2 border-white font-[900] inline-block",
        className
      )}
    >
      {children}
    </Link>
  );
}
