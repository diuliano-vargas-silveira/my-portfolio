import Header from "@/components/commons/header";
import Tabs from "@/components/commons/tabs";
import NavigationBar from "@/components/commons/navigation-bar";

import { Roboto_Flex } from "next/font/google";
import { Providers } from "./providers";

import "./globals.css";

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "My Portfolio",
  description:
    "Diuliano Vargas da Silveira portfolio, maked with love and a little bit of JS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${robotoFlex.variable} overflow-hidden bg-gray-900 font-sans`}
      >
        <Providers>
          <main className="flex-1">
            <Header />
            <section className="flex min-h-screen w-full flex-row font-sans">
              <NavigationBar />
              <section className="flex w-full flex-col bg-gray-800">
                <Tabs />

                <div className="h-full border border-r-0 border-gray-950">
                  {children}
                </div>
              </section>
            </section>
            <footer></footer>
          </main>
        </Providers>
      </body>
    </html>
  );
}
