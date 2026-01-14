"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function TelemedicinePage() {
  const imageRef = useRef<HTMLDivElement | null>(null)
  const [showImage, setShowImage] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowImage(true)
        }
      },
      { threshold: 0.2 }
    )

    if (imageRef.current) {
      observer.observe(imageRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative w-full min-h-screen overflow-hidden">

      {/* ===== Gradient Background Layers ===== */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-50/90 via-green-50/80 to-green-50/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-100/20 to-emerald-200/40" />

      {/* ===== Page Content ===== */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-24">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4">
              Telemedicine Clinic
            </h1>

            <p className="text-lg md:text-xl text-[#0A2540]/80 mb-8">
              Your Health, Our Commitment
            </p>

            <p className="text-base md:text-lg text-[#0A2540]/90 leading-relaxed mb-6 max-w-xl">
              Welcome to the gateway of personalized healthcare. At our pharmacy, we are dedicated to providing you with more than just medications — we deliver comprehensive, patient-centered health solutions tailored to your unique needs.
            </p>

            <p className="text-base md:text-lg text-[#0A2540]/90 leading-relaxed mb-6 max-w-xl">
              From weight management programs and custom compounded medications to specialized care in erectile dysfunction and chronic conditions, our expert clinical team ensures you receive the safest, most effective treatments available.
            </p>

            <p className="text-base md:text-lg text-[#0A2540]/90 leading-relaxed max-w-xl">
              Our telemedicine platform allows you to consult licensed healthcare professionals conveniently from home, ensuring privacy, efficiency, and continuity of care without compromising quality.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div
            ref={imageRef}
            className={`relative w-full h-[380px] md:h-[450px] transition-all duration-1000 ease-out
              ${showImage ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}
            `}
          >
            <Image
              src="/4.gif"   // make sure this is in /public
              alt="Telemedicine Consultation"
              fill
              className="object-cover rounded-2xl shadow-2xl"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  )
}
