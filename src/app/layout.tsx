import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";
import Whatsapp from "@/components/whatsapp";


// Import Montserrat font
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "www.transcendconsultancy.in",
  description: "Landing page for transcend consultancy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <body className={montserrat.className}>
        
        <Navbar />
        <div className="min-h-dvh">{children}</div>
        <div className="w-full">
          <Whatsapp/>
          <Footer />
        </div>
      </body>
    </html>
  );
}
