"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Pill, Truck, Clock, HeartHandshake, Sparkles } from "lucide-react"

const services = [
  {
    icon: Pill,
    title: "Vaccinations",
    description:
      "Get expert consultation on your medicine needs with a licensed pharmacist today.We're here whenever you need us.",
    color: "from-primary/15 to-primary/5",
    accentColor: "text-primary",
    badge: "Premium Service",
  },
  {
    icon: Truck,
    title: "Pharmacy Services",
    description:
      "Pharmacy services are essential healthcare services that provide medication, advice, and education to manage health conditions.",
    color: "from-secondary/15 to-secondary/5",
    accentColor: "text-secondary",
    badge: "Fast Track",
  },
  {
    icon: Clock,
    title: "Always Available",
    description: "Round-the-clock support from our dedicated pharmacy team. We're here whenever you need us.Expert consultation on your medicine",
    color: "from-blue-500/15 to-blue-500/5",
    accentColor: "text-blue-600",
    badge: "24/7 Support",
  },
  {
    icon: HeartHandshake,
    title: "Telemedicine Clinic",
    description: "At our pharmacy, we’re dedicated to providing you with not just medications, but with telemedicine services tailored to your individual needs",
    color: "from-orange-400/15 to-orange-400/5",
    accentColor: "text-orange-600",
    badge: "Expert Care",
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
      className="relative py-24 bg-gradient-to-b from-background via-background to-white/50 overflow-hidden"
    >

      <div className="absolute top-40 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  
        <div className="text-center mb-20 animate-slideInUp space-y-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">WHY CHOOSE US</span>
          </div>
          <h2 className="hero-title serif-heading leading-tight">
          <span className="text-foreground">What We </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Offer
          </span>
        </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Experience exceptional healthcare solutions designed to exceed your expectations and ensure your wellness.
          </p>
        </div>

        
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
                      className={`bg-gradient-to-br ${service.color} rounded-3xl p-12 md:p-16 lg:p-20 border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500`}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    
                        <div className="flex flex-col items-start gap-8">
                          <div className="inline-block">
                            <div className="px-3 py-1.5 bg-white/40 border border-white/60 rounded-full text-xs font-semibold tracking-wide text-foreground">
                              {service.badge}
                            </div>
                          </div>

                          <div className="animate-float">
                            <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-white/50 to-white/20 rounded-3xl flex items-center justify-center shadow-lg backdrop-blur-sm border border-white/40">
                              <Icon className={`${service.accentColor} w-12 h-12 md:w-16 md:h-16`} />
                            </div>
                          </div>
                        </div>

                      
                        <div className="space-y-6">
                          <h3 className="text-4xl md:text-5xl font-bold serif-heading text-foreground leading-tight">
                            {service.title}
                          </h3>
                          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                            {service.description}
                          </p>
                          <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1 mt-2">
                            Learn More
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

        
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 md:-translate-x-16 lg:-translate-x-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-full p-4 hover:shadow-lg hover:-translate-y-[calc(50%+4px)] active:translate-y-[-50%] transition-all duration-300 z-10 group"
            aria-label="Previous service"
          >
            <ChevronLeft className="w-6 h-6 group-hover:scale-125 transition-transform" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 md:translate-x-16 lg:translate-x-20 bg-gradient-to-r from-primary/80 to-primary text-primary-foreground rounded-full p-4 hover:shadow-lg hover:-translate-y-[calc(50%+4px)] active:translate-y-[-50%] transition-all duration-300 z-10 group"
            aria-label="Next service"
          >
            <ChevronRight className="w-6 h-6 group-hover:scale-125 transition-transform" />
          </button>

          {/* Dots Indicator - Larger and More Prominent */}
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
                    ? "bg-gradient-to-r from-primary to-secondary w-12 h-4 shadow-lg"
                    : "bg-border/60 w-4 h-4 hover:bg-primary/40 hover:scale-125"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        
          <div className="text-center mt-8 text-muted-foreground text-sm font-medium">
            <span className="text-primary font-semibold">{current + 1}</span> of {services.length}
          </div>
        </div>
      </div>
    </section>
  )
}
