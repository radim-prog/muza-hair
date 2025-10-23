import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Múza Hair - Vlasové extenze pro kadeřnice",
  description: "E-shop pro vlasové extenze s AI Color-Match. Prodej po gramech, 10 S-odstínů, kvalita EE/EU.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
