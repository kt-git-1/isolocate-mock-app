import "./globals.css";
import { Footer } from "./components/Footer";

export const metadata = {
  title: "所属集団判別ツール",
  description: "所属集団を判別するためのWebアプリ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-white text-slate-900">{children}<Footer /></body>
    </html>
  );
}