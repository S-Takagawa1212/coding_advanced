import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "単語クイズアプリ",
  description: "シンプルで楽しく学べる単語クイズアプリ！",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white text-gray-900 antialiased min-h-screen`}
      >
        {/* ヘッダー */}
        <header className="bg-blue-600 text-white shadow-md">
          <div className="container mx-auto flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold">
              <Link href="/">単語クイズアプリ</Link>
            </h1>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link
                    href="/"
                  className="px-4 py-2 rounded-lg font-semibold bg-blue-500 text-white shadow-md hover:bg-blue-700 transition duration-300"
                  >
                    ホーム
                  </Link>
                </li>
                <li>
                  <Link
                    href="/quiz"
                  className="px-4 py-2 rounded-lg font-semibold bg-blue-500 text-white shadow-md hover:bg-blue-700 transition duration-300"
                  >
                    クイズ
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* メインコンテンツ */}
        <main className="container mx-auto p-6 min-h-screen bg-white shadow-md rounded-lg my-8">
          {children}
        </main>

        {/* フッター */}
        <footer className="bg-blue-600 text-white py-6 shadow-md">
          <div className="container mx-auto text-center">
            <p className="mb-2">&copy; 2025 単語クイズアプリ. All Rights Reserved.</p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition duration-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition duration-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition duration-300"
              >
                <FaInstagram size={24} />
              </a>
            </div>
            <p className="mt-4 text-sm">&copy; 2025 単語クイズアプリ. All Rights Reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
