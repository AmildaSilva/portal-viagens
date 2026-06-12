import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "./components/Header"; 
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Portal de Viagens",
  description: "Descubra os melhores destinos turísticos do mundo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
