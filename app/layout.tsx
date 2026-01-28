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
    default: "Life Care Pharmacy | Trusted Community Pharmacy",
    template: "%s | Life Care Pharmacy",
  },

  description:
    "Life Care Pharmacy in Jersey City, NJ offering free prescription delivery, vaccinations, compounding, and insurance assistance.",

  applicationName: "Life Care Pharmacy",

  metadataBase: new URL("https://lifecarepharmacyrx.com"),

  openGraph: {
    title: "Life Care Pharmacy",
    description:
      "Your Health, Our Priority. Fast, secure, and professional pharmacy services.",
    url: "https://lifecarepharmacyrx.com",
    siteName: "Life Care Pharmacy",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Life Care Pharmacy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Life Care Pharmacy",
    description:
      "Fast, secure, and professional pharmacy services in Jersey City, NJ.",
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

        {/* Page Content */}
        <main className="pt-20">{children}</main>

        <Footer />
        <FloatingCallButton />
        <Analytics />
      </body>
    </html>
  )
}
