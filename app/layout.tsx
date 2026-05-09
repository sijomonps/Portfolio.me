import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
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
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
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
