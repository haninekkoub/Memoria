import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navBar";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/toaster";

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
        className={`${drukWideWeb.variable} ${aThuluth.variable} bg-background `}
      >
        <Toaster />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
