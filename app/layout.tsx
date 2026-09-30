import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { personalInfo } from "@/data/portfolio";
import JsonLd from "@/components/JsonLd";
import { getSiteUrl } from "@/lib/site";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = getSiteUrl();
const title = `${personalInfo.name} | ${personalInfo.role}`;
const description = `${personalInfo.headline}. ${personalInfo.subheadline}`;
const ogImage = {
  url: personalInfo.profilePhoto,
  width: 800,
  height: 800,
  alt: personalInfo.name,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${personalInfo.name}`,
  },
  description,
  keywords: [
    "Shopify Developer",
    "Shopify Plus",
    "Ecommerce Developer",
    "Liquid",
    "Checkout Extensibility",
    "Theme Development",
    personalInfo.name,
  ],
  authors: [{ name: personalInfo.name, url: siteUrl }],
  creator: personalInfo.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description: personalInfo.headline,
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: title,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: personalInfo.headline,
    images: [personalInfo.profilePhoto],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={inter.className}>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
