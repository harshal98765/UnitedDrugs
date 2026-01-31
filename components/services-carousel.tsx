"use client"

import { useState, useEffect } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Pill,
  Truck,
  Clock,
  HeartHandshake,
  Sparkles,
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Truck,
    title: "Free Delivery Service",
    description:
      "Enjoy fast, reliable home delivery of your prescriptions and health products at no extra cost convenient, secure, and right to your doorstep.",
    color: "from-[#0B2C4D]/15 to-[#0B2C4D]/5",
    accentColor: "text-[#0B2C4D]",
    badge: "Fast Track",
  },
  {
    icon: Clock,
    title: "Always Available",
    description:
      "Dedicated pharmacy support available Monday–Friday 9:00 AM–6:00 PM and Saturday 9:00 AM–3:00 PM. Expert consultation whenever you need guidance on your medications.",
    color: "from-[#1E5FA8]/15 to-[#1E5FA8]/5",
    accentColor: "text-[#1E5FA8]",
    badge: "Extended Hours",
  },
  {
    icon: Pill,
    title: "Compounding Services",
    description:
      "Customized medications prepared to meet individual patient needs, including tailored dosages, alternative forms, and allergen-free solutions for better treatment outcomes.",
    color: "from-blue-500/15 to-blue-500/5",
    accentColor: "text-blue-600",
    badge: "Premium Service",
  },
]

export default function ServicesCarousel() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [direction, setDirection] = useState("right")

  useEffect(() => {
    if (!isAutoPlay) return
    const timer = setInterval(() => {
      setDirection("right")
      setCurrent((prev) => (prev + 1) % services.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [isAutoPlay])

  const next = () => {
    setDirection("right")
    setCurrent((prev) => (prev + 1) % services.length)
    setIsAutoPlay(false)
  }

  const prev = () => {
    setDirection("left")
    setCurrent((prev) => (prev - 1 + services.length) % services.length)
    setIsAutoPlay(false)
  }

  return (
    <section
      id="services"
     className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-gray-100 overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-[#1E5FA8]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#0B2C4D]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-20 animate-slideInUp space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#0B2C4D]/10 px-4 py-2 rounded-full border border-[#0B2C4D]/20">
            <Sparkles className="w-4 h-4 text-[#0B2C4D]" />
            <span className="text-sm font-semibold text-[#0B2C4D]">
              WHY CHOOSE US
            </span>
          </div>

          <h2 className="hero-title  leading-tight">
            <span className="text-foreground">What We </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2C4D] to-[#1E5FA8]">
              Provide
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Experience exceptional healthcare solutions designed to exceed your
            expectations and ensure your wellness.
          </p>
        </div>

        {/* CAROUSEL */}
        <div className="relative animate-fadeInScale">
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-all duration-700 ease-out"
              style={{
                transform: `translateX(-${current * 100}%)`,
              }}
            >
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <div key={index} className="w-full flex-shrink-0">
                    <div
                      className={`bg-gradient-to-br ${service.color} rounded-3xl p-12 md:p-16 lg:p-20 border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-500`}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col items-start gap-8">
                          <div className="px-3 py-1.5 bg-white/60 border border-white/80 rounded-full text-xs font-semibold tracking-wide text-[#0B2C4D]">
                            {service.badge}
                          </div>

                          <div className="animate-float">
                            <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-white/70 to-white/30 rounded-3xl flex items-center justify-center shadow-lg backdrop-blur-sm border border-white/60">
                              <Icon
                                className={`${service.accentColor} w-12 h-12 md:w-16 md:h-16`}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="space-y-6">
                          <h3 className="text-4xl md:text-5xl font-bold  text-foreground leading-tight">
                            {service.title}
                          </h3>

                          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                            {service.description}
                          </p>

                          <Link href="/ALLservice">
                            <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#0B2C4D] text-white font-semibold rounded-xl hover:bg-[#143A66] transition-all duration-300 hover:-translate-y-1 mt-2">
                              Learn More
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* NAV BUTTONS */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 md:-translate-x-16 lg:-translate-x-20 bg-gradient-to-r from-[#0B2C4D] to-[#143A66] text-white rounded-full p-4 hover:shadow-lg transition-all z-10 group"
          >
            <ChevronLeft className="w-6 h-6 group-hover:scale-125 transition-transform" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 md:translate-x-16 lg:translate-x-20 bg-gradient-to-r from-[#143A66] to-[#0B2C4D] text-white rounded-full p-4 hover:shadow-lg transition-all z-10 group"
          >
            <ChevronRight className="w-6 h-6 group-hover:scale-125 transition-transform" />
          </button>

          {/* DOTS */}
          <div className="flex justify-center gap-4 mt-12">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrent(index)
                  setIsAutoPlay(false)
                }}
                className={`transition-all duration-500 rounded-full ${
                  index === current
                    ? "bg-gradient-to-r from-[#0B2C4D] to-[#1E5FA8] w-12 h-4 shadow-lg"
                    : "bg-blue-300 w-4 h-4 hover:bg-[#1E5FA8]/50 hover:scale-125"
                }`}
              />
            ))}
          </div>

          <div className="text-center mt-8 text-muted-foreground text-sm font-medium">
            <span className="text-[#0B2C4D] font-semibold">
              {current + 1}
            </span>{" "}
            of {services.length}
          </div>
        </div>
      </div>
    </section>
  )
}
