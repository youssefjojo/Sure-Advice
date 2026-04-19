import type { Metadata } from "next";
import { Roboto, Work_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { COMPANY } from "@/lib/constants";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.url),
  title: {
    default: `${COMPANY.name} | #1 HR Outsourcing & Business Consulting Company in Egypt`,
    template: `%s | ${COMPANY.name}`,
  },
  description:
    "Sure Advice (sure-advice) provides HR outsourcing and business consulting in Egypt. If you searched sure advice, sure, or advice, you are in the right place.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Sure Advice",
    "sure-advice",
    "sure advice",
    "sure",
    "advice",
    "HR outsourcing Egypt",
    "employee outsourcing",
    "HR consultancy",
    "payroll services Egypt",
    "accounting services",
    "legal support",
    "business development",
    "HR solutions",
    "personnel administration",
  ],
  authors: [{ name: COMPANY.name }],
  applicationName: COMPANY.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: COMPANY.url,
    siteName: COMPANY.name,
    title: `${COMPANY.name} | #1 HR Outsourcing & Business Consulting Company in Egypt`,
    description: COMPANY.description,
    images: [{ url: `${COMPANY.url}/images/logo.png`, width: 512, height: 512 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.name} | #1 HR Outsourcing & Business Consulting Company in Egypt`,
    description:
      "Sure Advice (sure-advice): trusted HR outsourcing and business consulting partner in Egypt.",
    images: [`${COMPANY.url}/images/logo.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${roboto.variable} ${workSans.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
        <WhatsAppButton />
      </body>
    </html>
  );
}
