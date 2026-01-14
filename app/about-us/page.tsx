"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Users, Pill, CheckCircle, Stethoscope, Leaf, Building, Heart } from "lucide-react"

function useScrollAnimation() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

// ============================================
// HERO SECTION
// ============================================
function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative h-96 w-full overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/1.jpg"
          alt="About Us Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
      </div>

      {/* Content */}
      <div
        className={`relative flex items-center justify-start h-full px-8 md:px-16 transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
        }`}
      >
        <h1 className="hero-title serif-heading leading-tight text-balance">
          <span className="text-white">About </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Us
          </span>
        </h1>
      </div>
    </section>
  )
}

// ============================================
// STATS SECTION
// ============================================
interface StatItem {
  icon: React.ReactNode
  number: string
  label: string
}

function StatsSection() {
  const { ref, isVisible } = useScrollAnimation()

  const stats: StatItem[] = [
    { icon: <Users className="w-8 h-8" />, number: "119K+", label: "Happy Patients" },
    { icon: <Pill className="w-8 h-8" />, number: "29+", label: "Medical Services" },
    { icon: <CheckCircle className="w-8 h-8" />, number: "149K+", label: "Problems Solved" },
    { icon: <Stethoscope className="w-8 h-8" />, number: "199", label: "Specialist Doctors" },
  ]

  return (
    <section ref={ref} className="py-12 px-8 md:px-16 -mt-24 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-white rounded-2xl shadow-lg p-8">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={`text-center transition-all duration-700 transform ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            <div className="flex justify-center mb-3 text-green-700">{stat.icon}</div>
            <h3 className="text-3xl md:text-4xl font-bold text-green-900 mb-1">{stat.number}</h3>
            <p className="text-gray-600 text-sm uppercase tracking-wide">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// ============================================
// QUALITY CARE SECTION
// ============================================
interface ServiceItem {
  icon: React.ReactNode
  title: string
  description: string
}

function QualityCareSection() {
  const { ref, isVisible } = useScrollAnimation()

  const services: ServiceItem[] = [
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Vitamins & Supplements",
      description:
        "Unlock the power of optimal health with our carefully curated selection of vitamins and supplements, meticulously crafted to support your well-being",
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Generic Plan",
      description:
        "Discover the perfect prescription for affordable healthcare with our comprehensive range of high-quality generic plans, designed to meet your needs without compromising on quality",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Vaccinations",
      description:
        "Shield yourself and your loved ones from preventable diseases with our trusted vaccinations, providing a strong defense against illness and promoting a healthier future",
    },
  ]

  return (
    <section ref={ref} className="py-16 px-8 md:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <Image
              src="/2.jpg"
              alt="Quality Care Services"
              width={500}
              height={400}
              className="rounded-xl shadow-lg w-full"
            />
          </div>

          {/* Right: Content */}
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4 text-balance">
              Delivering the highest quality care.
            </h2>
            <p className="text-gray-600 mb-8">
              Our team of expert pharmacists and staff works to provide the highest quality
            </p>

            <div className="space-y-6">
              {services.map((service, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 text-green-700 mt-1">{service.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// BEST AMONG SECTION
// ============================================
function BestAmongSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-16 px-8 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div
            className={`transition-all duration-1000 transform order-2 md:order-1 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6 text-balance">
              We Are Best Among Others?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              At LifeCare Pharmacy, our team of clinically trained pharmacists collaborates with you to deliver
              personalized and convenient one-stop services that improve your quality of life.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We fulfill both new and existing prescriptions in-store, over the phone, through e-prescriptions.
              Moreover, we provide swift and confidential delivery and shipping services, completely free of charge.
            </p>
            <p className="text-gray-600 leading-relaxed">
              LifeCare Pharmacy also offers convenient packaging options to assist you in managing your medication while
              on the move or at home.
            </p>
          </div>

          {/* Right: Images */}
          <div
            className={`transition-all duration-1000 transform order-1 md:order-2 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative h-96">
              <Image
                src="/3.gif"
                alt="Best Among Others"
                fill
                className="object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// PHARMACIST SECTION
// ============================================
function PharmacistSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-16 px-8 md:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative h-96 md:h-full min-h-96">
              <Image
                src="/7.jpeg"
                alt="Uzair Chachar - Lead Pharmacist"
                fill
                className="object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-2">Meet our Pharmacist</h2>
            <h3 className="text-2xl font-bold text-green-800 mb-1">Uzair Chachar</h3>
            <p className="text-lg font-semibold text-gray-700 mb-6">Retail Pharmacist/Manager</p>
            <p className="text-gray-600 leading-relaxed">
              As the Pharmacist in Charge, I bring over a decade of dedicated experience to LifeCare Pharmacy. With a
              commitment to putting patients first, I go above and beyond to ensure everyone receives the highest level
              of care.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              I hold a PharmD degree from Long Island University, reflecting my dedication to staying at the forefront
              of pharmaceutical knowledge. Your well-being is my priority, and I am here to provide expert guidance and
              support for all your healthcare needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// MAIN PAGE COMPONENT
// ============================================
export default function AboutPage() {
  return (
    <main className="relative w-full overflow-hidden">

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-50/90 via-green-50/80 to-green-50/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-100/20 to-emerald-200/40" />

      {/* Page Content */}
      <div className="relative z-10">
        <HeroSection />
        <StatsSection />
        <QualityCareSection />
        <BestAmongSection />
        <PharmacistSection />
      </div>

    </main>
  )
}
