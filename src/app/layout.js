import { Nunito, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Generative AI Workflow Generator",
  description: "A project for the SNAP Lab to assist with the scientific process",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${sourceSans.variable} bg-gradient-to-br from-[#4182D8] via-[#2A5FA8] to-[#1E4478] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
