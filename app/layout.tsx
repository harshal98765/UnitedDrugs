import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

import FloatingCallButton from "@/components/FloatingCallButton";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
});

/* ============================================
   SEO + META CONFIG (UNITED DRUGS – NEWARK, NJ)
============================================ */

export const metadata: Metadata = {
  title: {
    default: "United Drugs Pharmacy – Local Pharmacy in Newark, NJ",
    template: "%s | United Drugs Pharmacy",
  },

  description:
    "Looking for a pharmacy near Central Ave in Newark, NJ? United Drugs Pharmacy offers free prescription delivery, vaccinations, refills, and personalized care.",

  applicationName: "United Drugs Pharmacy",

  alternates: {
    canonical: "https://uniteddrugsrx.com",
  },

  openGraph: {
    title: "United Drugs Pharmacy | Newark, NJ",
    description:
      "Your neighborhood pharmacy in Newark, NJ. Free delivery, immunizations, and personalized care.",
    url: "https://uniteddrugsrx.com",
    siteName: "United Drugs Pharmacy",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "United Drugs Pharmacy - Newark NJ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "United Drugs Pharmacy | Newark NJ",
    description:
      "Local pharmacy in Newark providing fast service, free delivery & vaccinations.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/* ============================================
   ROOT LAYOUT
============================================ */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navigation />

        {/* ===============================
            STRUCTURED DATA (JSON-LD)
        ================================ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Pharmacy",
              name: "United Drugs Pharmacy",
              url: "https://uniteddrugsrx.com",
              logo: "https://uniteddrugsrx.com/logo.png",
              image: "https://uniteddrugsrx.com/og-image.png",
              description:
                "United Drugs Pharmacy in Newark, NJ offering prescription services, vaccinations, free delivery and insurance assistance.",
              telephone: "+1-973-482-9300",
              email: "Udrugs507@gmail.com",
              priceRange: "$$",

              address: {
                "@type": "PostalAddress",
                streetAddress: "507 Central Ave",
                addressLocality: "Newark",
                addressRegion: "NJ",
                postalCode: "07107",
                addressCountry: "US",
              },

              geo: {
                "@type": "GeoCoordinates",
                latitude: "40.7546",
                longitude: "-74.1737",
              },

              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "10:00",
                  closes: "18:00",
                },
              ],

              sameAs: [
                "https://www.facebook.com/uniteddrugsrx",
                "https://www.instagram.com/uniteddrugsrx",
              ],
            }),
          }}
        />

        <main className="pt-20">{children}</main>

        <Footer />
        <FloatingCallButton />

        <Analytics />
      </body>
    </html>
  );
}
