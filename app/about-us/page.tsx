"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Users, Pill, CheckCircle, Stethoscope, Leaf, Building, Heart, ShieldCheck, Award, Microscope, Search } from "lucide-react"
import about1 from "./about1.jpg"

/**
 * Custom hook for scroll-triggered animations
 */
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

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

// ============================================
// HERO SECTION
// ============================================
function HeroSection() {
  return (
    <section className="relative h-[500px] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/1.jpg" alt="About Us Hero" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 to-[#D6EBFF]/90" />
      </div>

      <div className="relative text-center px-6 z-10">
        <h1 className="text-5xl md:text-8xl font-black text-white drop-shadow-md">
          About <span className="text-[#E8F4FF]">Us</span>
        </h1>
        <div className="mt-4 h-1.5 w-24 bg-blue-500 mx-auto rounded-full" />
        <p className="mt-6 text-blue-50 text-lg max-w-xl mx-auto font-medium">
          Dedicated to providing healthcare solutions that prioritize your well-being above all else.
        </p>
      </div>
    </section>
  )
}

// ============================================
// STATS & QUALITY CARE (Aligned Grid)
// ============================================
function InfoGridSection() {
  const { ref, isVisible } = useScrollAnimation()

  const stats = [
    { icon: <Users />, number: "119K+", label: "Happy Patients" },
    { icon: <Pill />, number: "29+", label: "Medical Services" },
    { icon: <CheckCircle />, number: "149K+", label: "Problems Solved" },
    { icon: <Stethoscope />, number: "199", label: "Specialist Doctors" },
  ]

  const services = [
    { icon: <Leaf />, title: "Vitamins", desc: "Crafted to support your daily well-being." },
    { icon: <Building />, title: "Generic Plan", desc: "Affordable healthcare without compromise." },
    { icon: <Heart />, title: "Vaccinations", desc: "A strong defense against illness." },
  ]

  return (
    <section ref={ref} className="py-16 px-6 max-w-7xl mx-auto relative z-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">

        {/* Card 1: Our Impact */}
        <div className={`flex flex-col bg-white rounded-3xl shadow-xl p-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-2xl font-bold text-blue-900 mb-8 border-l-4 border-blue-400 pl-4">Our Impact</h2>
          <div className="grid grid-cols-2 gap-8 flex-grow">
            {stats.map((stat, i) => (
              <div key={i} className="text-left">
                <div className="text-blue-600 mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-gray-800">{stat.number}</div>
                <div className="text-xs uppercase text-gray-500 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Card 2: Highest Quality Care */}
        <div className={`flex flex-col bg-[#E8F4FF] p-8 rounded-3xl transition-all delay-200 duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl font-bold text-blue-900 mb-2">Highest Quality Care</h2>
          <p className="text-blue-800/70 mb-6 font-medium">Our expert team works tirelessly to provide the best service.</p>
          <div className="relative flex-grow h-64 w-full overflow-hidden rounded-[2rem]">
            <Image
              src={about1}
              alt="Care"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Card 3: Services List */}
        <div className="flex flex-col space-y-4">
          {services.map((s, i) => (
            <div key={i} className={`flex items-center gap-4 bg-white p-6 h-full rounded-2xl shadow-sm border border-blue-50 transition-all duration-700 delay-${i * 100} ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="p-3 bg-[#D6EBFF] rounded-xl text-blue-700 shrink-0">{s.icon}</div>
              <div>
                <h4 className="font-bold text-gray-800 text-sm">{s.title}</h4>
                <p className="text-xs text-gray-500">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// WHY US SECTION
// ============================================
function WhyUsSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-16 bg-[#D6EBFF]/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className={`relative ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'} transition-all duration-1000`}>
          <div className="absolute -top-4 -left-4 w-full h-full border-2 border-blue-200 rounded-2xl z-0" />
          <Image src="/3.gif" alt="Best Among Others" width={600} height={400} className="relative z-10 rounded-2xl shadow-2xl border-4 border-white" />
        </div>

        <div className={`${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'} transition-all duration-1000`}>
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Best Choice</span>
          <h2 className="text-4xl md:text-5xl font-black text-blue-900 mt-2 mb-6">Why Are We The Preferred Choice?</h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>Our team of clinically trained professionals collaborates with you to deliver personalized and convenient one-stop services that improve your quality of life.</p>
            <p className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
              We fulfill prescriptions in-store, via phone, or e-prescriptions with free swift, confidential delivery.
            </p>
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
    <section ref={ref} className="py-20 px-6 bg-[#D6EBFF]/20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full opacity-40 blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className={`md:w-5/12 relative ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} transition-all duration-1000`}>
          <div className="relative z-10 w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
            <Image src="/r.png" alt="Pharmacy Professional Care" fill className="object-cover object-top" />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 rounded-2xl -z-10 flex items-center justify-center">
            <Microscope className="text-white w-12 h-12" />
          </div>
        </div>

        <div className={`md:w-7/12 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'} transition-all duration-1000`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 text-blue-700 text-xs font-bold mb-6">
            <ShieldCheck className="w-4 h-4" /> QUALITY ASSURED
          </div>
          <h2 className="text-5xl font-black text-blue-950 mb-2">Clinical <span className="text-blue-600">Excellence</span></h2>
          <p className="text-xl font-semibold text-blue-800/80 mb-8 italic">Expert Pharmaceutical Management</p>
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p className="relative pl-6 border-l-2 border-blue-300">
              "We believe healthcare should be accessible, transparent, and personalized."
            </p>
            <p>Our clinical approach integrates modern pharmaceutical science with compassionate care.</p>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl shadow-sm border border-blue-50">
              <Award className="text-blue-500 w-5 h-5" />
              <span className="text-sm font-bold text-gray-800">Certified Standards</span>
            </div>
            <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl shadow-sm border border-blue-50">
              <Search className="text-blue-500 w-5 h-5" />
              <span className="text-sm font-bold text-gray-800">Precision Verified</span>
            </div>
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
    <main className="relative w-full bg-white overflow-hidden">
      <HeroSection />
      {/* Removed space-y-12 to tighten the layout */}
      <div className="flex flex-col">
        <InfoGridSection />
        <WhyUsSection />
        <PharmacistSection />
      </div>

      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-40">
        <div className="absolute top-[20%] -right-20 w-96 h-96 bg-[#D6EBFF] rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] -left-20 w-96 h-96 bg-blue-100 rounded-full blur-[120px]" />
      </div>
    </main>
  )
}