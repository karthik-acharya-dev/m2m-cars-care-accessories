import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SplashWrapper } from "@/components/SplashWrapper";
import { siteConfig } from "@/data/siteConfig";

export const viewport: Viewport = {
  themeColor: "#090a0c",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.siteUrl),
  title: {
    default: siteConfig.seo.defaultTitle,
    template: `%s | ${siteConfig.businessName}`,
  },
  description: siteConfig.seo.defaultDescription,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.businessName }],
  creator: siteConfig.businessName,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.seo.siteUrl,
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    siteName: siteConfig.businessName,
    images: [
      {
        url: "/images/inside/ANWiy9RRR7rqK0ywbV6u8KaU5rmm5VADLZXi9vbIxlohpLzT94x3W_3es4-EVIklEvTNIHK5P0BSMFHRBof2ZMWxQwGqbkc6hQcUJKlLJ9EidqqZWt7HE_wEpCd6TRxoqrctOIPHMpYYw4032-h3024-k-no.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.businessName} Workshop Bengaluru`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    images: [
      "/images/inside/ANWiy9RRR7rqK0ywbV6u8KaU5rmm5VADLZXi9vbIxlohpLzT94x3W_3es4-EVIklEvTNIHK5P0BSMFHRBof2ZMWxQwGqbkc6hQcUJKlLJ9EidqqZWt7HE_wEpCd6TRxoqrctOIPHMpYYw4032-h3024-k-no.jpg",
    ],
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
  // LocalBusiness Structured Data (Strictly verified details only)
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: siteConfig.businessName,
    description: siteConfig.description,
    url: siteConfig.seo.siteUrl,
    hasMap: siteConfig.googleMapsUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.provisionalAddress,
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.state,
      postalCode: siteConfig.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "12.9248",
      longitude: "77.6293",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Bengaluru",
      },
      {
        "@type": "AdministrativeArea",
        name: "Sarjapur Road",
      },
      {
        "@type": "AdministrativeArea",
        name: "Koramangala",
      },
      {
        "@type": "AdministrativeArea",
        name: "Jakkasandra",
      },
    ],
    priceRange: "₹₹",
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-obsidian text-warm-white flex flex-col min-h-screen">
        <SplashWrapper>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </SplashWrapper>
      </body>
    </html>
  );
}
