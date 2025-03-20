import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../styles/base.css";
import "../../styles/style.css";
// 最終的に不要
// import "./globals.css";


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
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        {/* ヘッダー */}
        <header className="gray">
          <div>
            <p>example here is header</p>

          </div>
        </header>

        {/* メインコンテンツ */}
        <main className="">
          <p>here is main</p>
          {children}
        </main>

        {/* フッター */}
        <footer className="">
          <p>here is footer</p>
        </footer>
      </body>
    </html>
  );
}
