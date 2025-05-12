import type { Metadata } from "next";
import "./globals.scss";
import { cn } from "@/lib/utils"; // Make sure you have this utility imported

import { Jura, Dancing_Script, Lato } from "next/font/google";
import Footer from "@/components/common/footer";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: "Sportans",
  description: "We are the leader in sports education",
};

// Configure the fonts
const jura = Jura({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jura",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dancing-script",
});

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
  weight: ["400", "700"], // Add the weights you need
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <link
        rel="icon"
        href="https://cdn.pixabay.com/photo/2013/07/13/09/46/basketball-155997_960_720.png"
        type="image/png"
        sizes="32x32"
      />
      <html lang="en">
        <body
          className={cn(
            "antialiased",
            jura.variable,
            dancingScript.variable,
            lato.variable
          )}
        >
          <Providers>{children}</Providers>
          <Footer />
        </body>
      </html>
    </>
  );
}
