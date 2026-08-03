import type { Metadata } from "next";
import { Bebas_Neue, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const displayFont = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sijomon P S | Full-Stack Developer Portfolio",
  description:
    "Portfolio of Sijomon P S, an aspiring full-stack developer focused on responsive web apps, practical problem solving, and modern frontend-backend development.",
  verification: {
    google: "TtdBbPpWogDiMgSiuz6zjh3gKCrhS_Ec_p8urZ-ZziM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" data-theme="dark">
      <body className={`${displayFont.variable} ${bodyFont.variable} font-sans antialiased`}>
        <Script id="scroll-restoration" strategy="beforeInteractive">
          {`(() => {
  window.history.scrollRestoration = "manual";
  window.scrollTo(0, 0);
})();`}
        </Script>
        {children}
      </body>
    </html>
  );
}
