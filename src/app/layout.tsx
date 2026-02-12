import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import cn from "classnames";

import "./globals.css";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://mikaelsen-cunningham.github.io/"),
  title: `Robyn Mikaelsen-Cunningham`,
  description: `Mikaelsen-Cunningham's personal website, showcasing projects, experience, and a roadmap for future development.`,
  openGraph: {
    images: "/avatar.png",
  },
  icons: {
    icon: "/favicon/favicon.ico",
  },
  verification: {
    google: "ceUjdqLT9gCqfk-hvP-UamclidRZ9j5IsK-mPcxxa_Y",
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          robotoMono.className,
          "flex flex-col min-h-screen items-center ",
          "bg-gray-50 text-gray-700 antialiased",
          "dark:bg-stone-900 dark:text-slate-200",
        )}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
