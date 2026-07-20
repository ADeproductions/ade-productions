import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ADE Productions | Event Management & Production",
  description:
    "ADE Productions specializes in event management, graduation ceremonies, conferences, corporate events, and full event production services in Egypt.",

  verification: {
    google: "OPL9oLNauLPJ7ZO79HD93CdkiqCIYPb3x5hUYPXVQjE",
  },

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  openGraph: {
    title: "ADE Productions",
    description:
      "Professional Event Management & Production Services.",
    url: "https://ade-productions.vercel.app",
    siteName: "ADE Productions",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "ADE Productions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ADE Productions",
    url: "https://ade-productions.vercel.app",
    logo: "https://ade-productions.vercel.app/logo.png",
    email: "adeevents7@gmail.com",
    telephone: "+201019721981",
    sameAs: [
      "https://www.instagram.com/adeevents.eg",
      "https://wa.me/201142414301",
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {children}
        <Analytics />
      </body>
    </html>
  );
}