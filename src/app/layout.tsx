import type { Metadata } from "next";
import { Header } from "../components/Header";
import { ProviderRedux } from "../store/provider";
import "./globals.scss";

import { Bangers, Roboto_Mono } from "next/font/google";

const bangers = Bangers({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-hero",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Holding Out For A Hero",
  description: "Developed for Azapfy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${bangers.variable} ${roboto_mono.variable} font-hero`}
    >
      <ProviderRedux>
        <body className={`font-hero`}>
          <Header />
          {children}
        </body>
      </ProviderRedux>
    </html>
  );
}
