import Footer from "@/app/_components/footer";
import { CMS_NAME } from "@/lib/constants";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import cn from "classnames";
import { ThemeSwitcher } from "./_components/theme-switcher";

import "./globals.css";
import Header from "./_components/header";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://mikaelsen-cunningham.github.io/"),
  title: `Robyn Mikaelsen-Cunningham`,
  description: `A statically generated blog example using Next.js and ${CMS_NAME}.`,
  openGraph: {
    images: "/avatar.png",
  },
  icons: {
    icon: "/favicon/favicon.ico",
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
        <Header />
        <ThemeSwitcher />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
