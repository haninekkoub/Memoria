import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navBar";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/toaster";

//fonts
const drukWideWeb = localFont({
  src: "../font/Druk-Wide-Web-Medium-Regular.ttf",
  display: "swap",
  variable: "--drukWideWeb",
});
const aThuluth = localFont({
  src: "../font/A.Thuluth.ttf",
  display: "swap",
  variable: "--aThuluth",
});
const expressway = localFont({
  src: [
    {
      path: "../font/ExpresswayBk.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../font/ExpresswaySb.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../font/ExpresswayXb.otf",
      weight: "800",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--expressway",
});

//metaData
export const metadata: Metadata = {
  title: "Memoria",
  description: "memoria app for learning",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${drukWideWeb.variable} ${aThuluth.variable} ${expressway.variable} bg-background `}
      >
        <Toaster />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
