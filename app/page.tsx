"use client"

import HeroSection from "@/components/hero-section"
import ServicesCarousel from "@/components/services-carousel"
import FeaturesSection from "@/components/features-section"
import ContactForm from "@/components/contact-form"
import ServiceRegionsSection from "@/components/ServiceRegionsSection"
import FloatingCallButton from "@/components/FloatingCallButton"
import Services from "@/components/services-page"
import TransferPrescriptionBanner from "@/components/TransferPrescriptionBanner"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <Services />
      <TransferPrescriptionBanner />
      <ServicesCarousel />
      <FeaturesSection />
      <ServiceRegionsSection />
      <ContactForm />
      <FloatingCallButton />
    </main>
  )
}
