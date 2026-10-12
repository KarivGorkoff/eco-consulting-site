import "./globals.css";
import localFont from "next/font/local";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { company, contact } from "../lib/content";

/*
  Fira Sans is the open-source relative of the typeface in the ECO logo, so the
  site reads as one piece with it. The font files are in ./fonts and are served
  from this site (no request to Google or any other host).
*/
const firaSans = localFont({
  src: [
    { path: "./fonts/FiraSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/FiraSans-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/FiraSans-SemiBold.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-fira-sans",
  display: "swap",
});

const firaSansCondensed = localFont({
  src: [
    { path: "./fonts/FiraSansCondensed-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/FiraSansCondensed-SemiBold.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-fira-condensed",
  display: "swap",
  preload: false,
});

export const metadata = {
  title: {
    default: `${company.name} | Industrial Electrical Contractors | ${company.city}, ${company.provinceCode}`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: company.name,
    title: `${company.name} | Industrial Electrical Contractors`,
    description: company.description,
  },
};

// Describes the business to search engines.
const businessData = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: company.name,
  description: company.description,
  telephone: contact.phoneHref.replace("tel:", ""),
  email: contact.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: company.city,
    addressRegion: company.provinceCode,
    addressCountry: "CA",
  },
  areaServed: "Western Canada",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-CA" className={`${firaSans.variable} ${firaSansCondensed.variable}`}>
      <body className="font-sans">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }} />
      </body>
    </html>
  );
}
