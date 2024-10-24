import "./globals.css";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import localFont from "next/font/local";
import Header from "@/components/Header";

// Sahne eklenecek
// import dynamic from "next/dynamic";
// const Scene = dynamic(() => import("@/components/Hero/Scene"), { ssr: false });

const azonix = localFont({ src: "./fonts/Azonix.otf", variable: "--font-azonix" });

export const metadata = {
  title: "Fatih Kabul",
  description: "Zamazingo Recai",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased overflow-x-hidden selection:bg-transparent text-neutral-100 bg-[#09090B] ${GeistSans.className} ${GeistMono.variable} ${azonix.variable}`}
      >                                           
        <Header />
        {children}
      </body>
    </html>
  );
}