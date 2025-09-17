import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "../components/footer";
import Header from "../components/navbar"

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
        className={`${roboto.className}`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}