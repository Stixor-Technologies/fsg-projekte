import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/header/header";
import Footer from "@/components/footer";

import "./globals.css";
import { Toaster } from "react-hot-toast";

const proximaThin = localFont({
  src: "./fonts/Proxima-Nova-Thin.otf",
  variable: "--font-proxima-thin",
});

const proximaRegular = localFont({
  src: "./fonts/Proxima-Nova-Regular.otf",
  variable: "--font-proxima-regular",
});

const proximaSemiBold = localFont({
  src: "./fonts/Proxima-Nova-Semibold.otf",
  variable: "--font-proxima-semibold",
});

const proximaBold = localFont({
  src: "./fonts/Proxima-Nova-Bold.otf",
  variable: "--font-proxima-bold",
});

const GtSuperRegular = localFont({
  src: "./fonts/GT-Super-Text-Regular.otf",
  variable: "--font-gt-regular",
});

const GtSuperBold = localFont({
  src: "./fonts/GT-Super-Text-Bold.otf",
  variable: "--font-gt-bold",
});

const GtSuperRegularItalic = localFont({
  src: "./fonts/GT-Super-Text-Regular-Italic.otf",
  variable: "--font-gt-regular-italic",
});

const GtSuperMedium = localFont({
  src: "./fonts/GT-Super-Text-Medium.otf",
  variable: "--font-gt-medium",
});

const GtSuperBook = localFont({
  src: "./fonts/GT-Super-Text-Book.otf",
  variable: "--font-gt-book",
});

const GtSuperBookItalic = localFont({
  src: "./fonts/GT-Super-Text-Book-Italic.otf",
  variable: "--font-gt-book-italic",
});

const GtSuperDisplay = localFont({
  src: "./fonts/GT-Super-Display-Light.woff2",
  variable: "--font-gt-display-light",
});
const GtSuperDisplayRegular = localFont({
  src: "./fonts/GT-Super-Display-Regular.woff2",
  variable: "--font-gt-display-rg",
});

const GTSuperLightItalic = localFont({
  src: "./fonts/GT-Super-Display-Light-Italic.woff2",
  variable: "--font-gt-display-light-italic",
});

const IvyPresto = localFont({
  src: "./fonts/Ivy-Presto-Display.otf",
  variable: "--font-ivy-presto",
});

export const metadata: Metadata = {
  title: "FSG",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${proximaThin.variable} ${proximaRegular.variable} ${proximaSemiBold.variable} ${proximaBold.variable} ${GtSuperRegular.variable} ${GtSuperRegularItalic.variable} ${GtSuperMedium.variable} ${GtSuperBook.variable} ${GtSuperBookItalic.variable} ${GtSuperDisplay.variable} ${GtSuperBold.variable} font-proxima ${GtSuperDisplayRegular.variable} ${GTSuperLightItalic.variable} ${IvyPresto.variable}`}
      >
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
