import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Vinod S A — Engineering Manager & Product Leader",
  description:
    "Vinod S A is an Engineering Manager and Product Leader with 7+ years building AI-driven healthcare platforms. Based in Bengaluru, India.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-slate-50 text-slate-900">{children}</body>
    </html>
  );
}
