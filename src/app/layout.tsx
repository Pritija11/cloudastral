import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { TopBar } from "@/components/TopBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://cloudastral.ltd";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Cloudastral — Cloud Infrastructure & Engineering",
    template: "%s · Cloudastral",
  },
  description:
    "Cloudastral is a cloud infrastructure and engineering startup based in Kathmandu, Nepal, offering cloud architecture, migration, DevOps automation, security, and managed cloud operations.",
  keywords: [
    "Cloudastral",
    "cloud infrastructure",
    "cloud engineering",
    "DevOps",
    "cloud migration",
    "Kubernetes",
    "Nepal startup",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cloudastral — Cloud Infrastructure & Engineering",
    description:
      "Cloud architecture, migration, DevOps automation, security, and managed cloud operations.",
    siteName: "Cloudastral",
    url: SITE_URL,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloudastral — Cloud Infrastructure & Engineering",
    description:
      "Cloud architecture, migration, DevOps automation, security, and managed cloud operations.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cloudastral",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Cloudastral is a cloud infrastructure and engineering startup based in Kathmandu, Nepal, offering cloud architecture, migration, DevOps automation, security, and managed cloud operations.",
  email: "hello@cloudastral.ltd",
  telephone: "+977-980-1234567",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Putalisadak",
    addressLocality: "Kathmandu",
    postalCode: "44600",
    addressCountry: "NP",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[var(--bg)] text-[var(--fg)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <TopBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
