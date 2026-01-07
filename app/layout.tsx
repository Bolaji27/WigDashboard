import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Instrument_Serif } from "next/font/google";
import { Instrument_Sans } from "next/font/google";
import { Jomolhari } from "next/font/google";
import { Josefin_Slab } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import { Hanuman } from "next/font/google";
import { Kalnia } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "dashboard",
  description: "built by Bolaji",
};

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"], // Instrument Serif only has regular
  variable: "--font-instrument-serif",
});
const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
});
const jomolhari = Jomolhari({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jomolhari",
});
const josefinSlab = Josefin_Slab({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-josefin-slab",
  display: "swap",
});
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-josefin-sans",
  display: "swap",
});
const hanuman = Hanuman({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-hanuman",
  display: "swap",
});
const kalnia = Kalnia({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-kalnia",
  display: "swap",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${kalnia.variable} ${geistMono.variable} ${hanuman.variable} ${instrumentSerif.variable} ${jomolhari.variable} ${josefinSans.variable} ${instrumentSans.variable} ${josefinSlab.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
