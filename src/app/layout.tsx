import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Covil das Cartas",
  description: "Página voltada para vendas de produtos TCG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}