import type { Metadata } from "next";
import "./globals.css";
import { redHatFont } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Grove Street Ballerz",
  description:
    "Odkryj świat koszykówki z Grove Street Ballers! Jesteśmy zespołem, którego pasja i determinacja przenoszą nas na szczyty zwycięstw. Śledź nasze aktualności, poznaj tajniki treningu i wejdź za kulisy emocjonujących meczów. Grove Street Ballers - więcej niż drużyna, to wspólnota, która inspiruje do sukcesu!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </head>
      <body className={redHatFont.className}>{children}</body>
    </html>
  );
}
