import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import FloatingCallButton from "@/components/FloatingCallButton"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700"] })

export const metadata: Metadata = {
  title: {
    default: "Life Care Pharmacy | Trusted Pharmacy in Jersey City, NJ",
    template: "%s | Life Care Pharmacy",
  },

  description:
    "Life Care Pharmacy in Jersey City, NJ offering free prescription delivery, vaccinations, compounding, and insurance assistance. Your Health, Our Priority.",

  applicationName: "Life Care Pharmacy",

  metadataBase: new URL("https://lifecarepharmacyrx.com"),

  openGraph: {
    title: "Life Care Pharmacy | Trusted Pharmacy in Jersey City, NJ",
    description:
      "Your Health, Our Priority. Fast, secure, and professional pharmacy services. Free delivery, vaccinations, compounding & more.",
    url: "https://lifecarepharmacyrx.com",
    siteName: "Life Care Pharmacy",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Life Care Pharmacy - Jersey City, NJ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Life Care Pharmacy | Jersey City, NJ",
    description:
      "Fast, secure, and professional pharmacy services in Jersey City, NJ. Free delivery, vaccinations, and more.",
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

  // Add robots meta tag
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navigation />

        {/* Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Pharmacy",
              "name": "Life Care Pharmacy",
              "url": "https://lifecarepharmacyrx.com",
              "logo": "https://lifecarepharmacyrx.com/logo.png",
              "image": "https://lifecarepharmacyrx.com/og-image.png",
              "description": "Life Care Pharmacy in Jersey City, NJ offering free prescription delivery, vaccinations, compounding, and insurance assistance.",
              "telephone": "+1-201-425-1187",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "3199 John F Kennedy Blvd",
                "addressLocality": "Jersey City",
                "addressRegion": "NJ",
                "postalCode": "07306",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "40.7473",
                "longitude": "-74.0431"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "09:00",
                  "closes": "19:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "10:00",
                  "closes": "17:00"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/lifecarepharmacy",
                "https://www.instagram.com/lifecarepharmacy"
              ]
            }),
          }}
        />

        <main className="pt-20">{children}</main>

        <Footer />
        <FloatingCallButton />
        <Analytics />
      </body>
    </html>
  )
}

// import type React from "react"
// import type { Metadata } from "next"
// import { Geist, Geist_Mono, Playfair_Display } from "next/font/google"
// import { Analytics } from "@vercel/analytics/next"
// import "./globals.css"

// import FloatingCallButton from "@/components/FloatingCallButton"
// import Navigation from "@/components/navigation"
// import Footer from "@/components/footer"

// const geist = Geist({ subsets: ["latin"] })
// const geistMono = Geist_Mono({ subsets: ["latin"] })
// const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700"] })

// export const metadata: Metadata = {
//   title: {
//     default: "Life Care Pharmacy | Trusted Pharmacy in Jersey City, NJ",
//     template: "%s | Life Care Pharmacy",
//   },

//   description:
//     "Life Care Pharmacy in Jersey City, NJ offering free prescription delivery, vaccinations, compounding, and insurance assistance. Your Health, Our Priority.",

//   applicationName: "Life Care Pharmacy",

//   metadataBase: new URL("https://lifecarepharmacyrx.com"),

//   openGraph: {
//     title: "Life Care Pharmacy | Trusted Pharmacy in Jersey City, NJ",
//     description:
//       "Your Health, Our Priority. Fast, secure, and professional pharmacy services. Free delivery, vaccinations, compounding & more.",
//     url: "https://lifecarepharmacyrx.com",
//     siteName: "Life Care Pharmacy",
//     type: "website",
//     images: [
//       {
//         url: "/og-image.png",
//         width: 1200,
//         height: 630,
//         alt: "Life Care Pharmacy - Jersey City, NJ",
//       },
//     ],
//   },

//   twitter: {
//     card: "summary_large_image",
//     title: "Life Care Pharmacy | Jersey City, NJ",
//     description:
//       "Fast, secure, and professional pharmacy services in Jersey City, NJ. Free delivery, vaccinations, and more.",
//     images: ["/og-image.png"],
//   },

//   icons: {
//     icon: [
//       { url: "/favicon.ico" },
//       { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
//       { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
//     ],
//     apple: "/apple-touch-icon.png",
//   },

//   // Add robots meta tag
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       'max-video-preview': -1,
//       'max-image-preview': 'large',
//       'max-snippet': -1,
//     },
//   },
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className="font-sans antialiased">
//         <Navigation />

//         {/* Structured Data for Google */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "Pharmacy",
//               "name": "Life Care Pharmacy",
//               "url": "https://lifecarepharmacyrx.com",
//               "logo": "https://lifecarepharmacyrx.com/logo.png",
//               "image": "https://lifecarepharmacyrx.com/og-image.png",
//               "description": "Life Care Pharmacy in Jersey City, NJ offering free prescription delivery, vaccinations, compounding, and insurance assistance.",
//               "telephone": "+1-201-425-1187",
//               "priceRange": "$$",
//               "address": {
//                 "@type": "PostalAddress",
//                 "streetAddress": "3199 John F Kennedy Blvd",
//                 "addressLocality": "Jersey City",
//                 "addressRegion": "NJ",
//                 "postalCode": "07306",
//                 "addressCountry": "US"
//               },
//               "geo": {
//                 "@type": "GeoCoordinates",
//                 "latitude": "40.7473",
//                 "longitude": "-74.0431"
//               },
//               "openingHoursSpecification": [
//                 {
//                   "@type": "OpeningHoursSpecification",
//                   "dayOfWeek": [
//                     "Monday",
//                     "Tuesday",
//                     "Wednesday",
//                     "Thursday",
//                     "Friday"
//                   ],
//                   "opens": "09:00",
//                   "closes": "19:00"
//                 },
//                 {
//                   "@type": "OpeningHoursSpecification",
//                   "dayOfWeek": "Saturday",
//                   "opens": "10:00",
//                   "closes": "17:00"
//                 }
//               ],
//               "sameAs": [
//                 "https://www.facebook.com/lifecarepharmacy",
//                 "https://www.instagram.com/lifecarepharmacy"
//               ]
//             }),
//           }}
//         />

//         <main className="pt-20">{children}</main>

//         <Footer />
//         <FloatingCallButton />
//         <Analytics />
//       </body>
//     </html>
//   )
// }