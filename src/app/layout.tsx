import type { Metadata } from "next";
import { Shippori_Mincho, Noto_Sans_JP } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const shipporiMincho = Shippori_Mincho({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-shippori-mincho",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "YOHAKU Lab — 回復をデザインする研究所",
  description:
    "こころに羽を。からだに余白を。人生に彩りを。心理学・コミュニティデザイン・身体感覚・AIを組み合わせ、「回復」をデザインする研究所です。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${shipporiMincho.variable} ${notoSansJP.variable} h-full`}
    >
      <body className="min-h-dvh flex flex-col font-sans bg-bg text-ink">
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
