import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";

const SfPro = localFont({
  src: [
    {
      path: "../fonts/SF-Pro-Display-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/SF-Pro-Display-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/SF-Pro-Display-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--sfPro",
});
const Outreque = localFont({
  src: [
    {
      path: "../fonts/OutrequeLight.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/OutrequeRegular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/OutrequeMedium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/OutrequeBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/OutrequeBlack.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--outreque",
});
export const metadata: Metadata = {
  title: "Bunkbed Studio",
  description: "Bunkbed Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${SfPro.variable} ${Outreque.variable} relative w-[86vw] max-w-[1240px] py-14 bg-white mx-auto`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
