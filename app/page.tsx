"use client";

import HeroSection from "@/components/hero-section";
import ServicesCarousel from "@/components/services-carousel";
import FeaturesSection from "@/components/features-section";
import ContactForm from "@/components/contact-form";
import ServiceRegionsSection from "@/components/ServiceRegionsSection";
import Services from "@/components/services-page";
import TransferPrescriptionBanner from "@/components/TransferPrescriptionBanner";
import SearchBar from "@/components/MedicationAvailabilitySearch";
// import SavingsCopayHelp from "@/components/SavingsCopayHelp"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <Services />
      <TransferPrescriptionBanner />
      <SearchBar />
      <ServicesCarousel />
      <FeaturesSection />
      <ServiceRegionsSection />
      {/* <SavingsCopayHelp /> */}
      <ContactForm />
    </main>
  );
}
