import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navBar";
import localFont from "next/font/local";

const drukWideWeb = localFont({
  src: "../font/Druk-Wide-Web-Medium-Regular.ttf",
  display: "swap",
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
      <body className={drukWideWeb.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
