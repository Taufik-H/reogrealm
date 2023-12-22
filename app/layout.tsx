import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { montserrat } from "./font";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ReogRealm",
  description: "Mengangkat Budaya, Menyelami Keindahan Reog Ponorogo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head></head>
      <body className="bg-slate-50 ">
        <header className={montserrat.className}>
          <Navbar />
          <div className="overflow-hidden">
            <Hero />
          </div>
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
