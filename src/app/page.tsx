import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsCounter } from "@/components/home/StatsCounter";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { CoursesSection } from "@/components/home/CoursesSection";
import { PortfolioSlider } from "@/components/home/PortfolioSlider";
import { Testimonials } from "@/components/home/Testimonials";
import { CTABanner } from "@/components/home/CTABanner";
import { COMPANY, CONTACT, SOCIAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sure Advice | sure-advice HR Outsourcing & Business Consulting in Egypt",
  description:
    "Sure Advice (sure-advice) helps businesses in Egypt with HR outsourcing, payroll, accounting, legal support, and growth consulting. Searching for sure advice, sure, or advice? Start here.",
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
    "business consulting Egypt",
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY.name,
  alternateName: ["Sure Advice", "sure-advice", "sure advice", "sure", "advice"],
  url: COMPANY.url,
  logo: `${COMPANY.url}${COMPANY.logo}`,
  email: CONTACT.email,
  telephone: CONTACT.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cairo",
    addressCountry: "EG",
  },
  sameAs: [SOCIAL_LINKS.facebook, SOCIAL_LINKS.linkedin, SOCIAL_LINKS.instagram],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: COMPANY.name,
  alternateName: ["Sure Advice", "sure-advice", "sure advice", "sure", "advice"],
  url: COMPANY.url,
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <HeroSection />
      <StatsCounter />
      <AboutPreview />
      <ServicesGrid />
      <CoursesSection />
      <PortfolioSlider />
      <Testimonials />
      <CTABanner />
    </>
  );
}
