import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScroll from "@/components/ui/SmoothScroll";
import PageTransition from "@/components/ui/PageTransition";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Sijomon P.S | Web Developer & Video Editor",
  description: "A passionate Web Developer & Video Editor crafting beautiful digital experiences. Creating sleek websites and engaging visual content.",
  keywords: ["web developer", "video editor", "portfolio", "Sijomon PS", "frontend developer"],
  authors: [{ name: "Sijomon P.S" }],
  openGraph: {
    title: "Sijomon P.S | Web Developer & Video Editor",
    description: "A passionate Web Developer & Video Editor crafting beautiful digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        <CustomCursor />
        <SmoothScroll>
          <Navbar />
          <PageTransition>
            {children}
          </PageTransition>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
