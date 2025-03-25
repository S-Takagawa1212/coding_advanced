import { Geist, Geist_Mono } from "next/font/google";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import type { Metadata } from "next";
import "../../styles/base.css";
import "../../styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Casteria",
  description: "今時のおしゃれカフェ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main className="">
          <p>here is main</p>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
