"use client"

import { Shield, Users, Award, Leaf } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Expert Team",
    description: "Licensed pharmacists with years of professional experience",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "All medications verified and quality checked before dispatch",
  },
  {
    icon: Shield,
    title: "Security First",
    description: "HIPAA-compliant systems protecting your personal health information",
  },
  {
    icon: Leaf,
    title: "Care & Compassion",
    description: "Patient-centered approach to every interaction and prescription",
  },
]

export default function FeaturesSection() {
  return (
    <section id="about" className="relative py-20 overflow-hidden">

      {/* === BLUE THEME BACKGROUND === */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#D6EBFF]/95 via-[#F0F7FF]/90 to-[#D6EBFF]/95" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-200/20 to-blue-300/30" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-16 animate-slideInUp">
          <h2 className="hero-title  leading-tight mb-4">
            <span className="text-foreground">Why </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2C4D] to-[#1E5FA8]">
              Choose Us
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing the highest standard of pharmacy care
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <div
                key={index}
                className="group bg-white/90 backdrop-blur rounded-2xl p-8 border border-blue-100
                hover:shadow-2xl hover:border-[#1E5FA8]
                transition-all duration-300 animate-fadeInScale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* ICON */}
                <div className="mb-6 transform group-hover:scale-110 transition-transform">
                  <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-[#0B2C4D]/10 group-hover:bg-[#1E5FA8]/20">
                    <Icon className="text-[#0B2C4D]" size={28} />
                  </div>
                </div>

                {/* TEXT */}
                <h3 className="text-xl font-bold text-[#0B2C4D] mb-3">
                  {feature.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
