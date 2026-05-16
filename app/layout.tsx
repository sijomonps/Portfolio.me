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

const siteUrl = new URL("https://sijomonps.github.io");

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Sijomon P S | Full-Stack Developer Portfolio",
    template: "%s | Sijomon P S",
  },
  description:
    "Portfolio of Sijomon P S, a full-stack developer focused on responsive web apps, practical problem solving, and modern frontend-backend development.",
  keywords: [
    "Sijomon P S",
    "Sijomon",
    "sijomonps",
    "Full-stack developer",
    "Web developer",
    "Portfolio",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
  ],
  authors: [{ name: "Sijomon P S", url: siteUrl }],
  creator: "Sijomon P S",
  publisher: "Sijomon P S",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Sijomon P S | Full-Stack Developer Portfolio",
    description:
      "Portfolio of Sijomon P S, a full-stack developer focused on responsive web apps, practical problem solving, and modern frontend-backend development.",
    siteName: "Sijomon P S",
    locale: "en_US",
    images: [
      {
        url: "/avatar.jpg",
        alt: "Sijomon P S",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sijomon P S | Full-Stack Developer Portfolio",
    description:
      "Portfolio of Sijomon P S, a full-stack developer focused on responsive web apps, practical problem solving, and modern frontend-backend development.",
    images: ["/avatar.jpg"],
  },
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
