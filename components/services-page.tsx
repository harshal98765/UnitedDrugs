'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowRight, Pill, ClipboardList, HeartPulse } from 'lucide-react'

export default function WhatWeOfferSection() {
  const offers = [
    {
      image: '/medicine01.png',
      title: 'Precision Compounding',
      description:
        'Custom-formulated medications crafted specifically for your health requirements and sensitivities',
      color: 'from-[#0B2C4D] to-[#143A66]',
      icon: Pill,
    },
    {
      image: '/checkup01.png',
      title: 'Generic Plan',
      description:
        'Cost-effective generic alternatives without compromising on quality or efficay for common conditions',
      color: 'from-[#1E5FA8] to-[#2F80ED]',
      icon: ClipboardList,
    },
    {
      image: '/vaccin01.png',
      title: 'Care Support',
      description:
        'Expert guidance for managing diabetes, hypertension, thyroid disorders, and other long-term conditions',
      color: 'from-[#3B82F6] to-[#0EA5E9]',
      icon: HeartPulse,
    },
  ]

  // ✅ SECOND CARD ACTIVE BY DEFAULT
  const [active, setActive] = useState(1)

  const prev = () =>
    setActive((prev) => (prev === 0 ? offers.length - 1 : prev - 1))

  const next = () =>
    setActive((prev) => (prev === offers.length - 1 ? 0 : prev + 1))

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="hero-title  text-foreground leading-tight">
            What We{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2C4D] to-[#1E5FA8]">
              Offer
            </span>
          </h2>

          <p className="text-muted-foreground mt-4 text-lg">
            Full-service pharmacy solutions built for your needs
          </p>
        </div>

        {/* ================= MOBILE SLIDER ================= */}
        <div className="block md:hidden relative">

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${active * 100}%)`,
              }}
            >
              {offers.map((offer, index) => {
                const Icon = offer.icon
                return (
                  <div
                    key={index}
                    className="min-w-full flex justify-center px-4"
                  >
                    <div className="w-full max-w-sm h-[420px] rounded-3xl overflow-hidden relative">

                      <div
                        className="absolute inset-0 bg-center bg-no-repeat opacity-20"
                        style={{
                          backgroundImage: `url(${offer.image})`,
                          backgroundSize: '70%',
                        }}
                      />

                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${offer.color} opacity-80`}
                      />

                      <div className="relative z-10 h-full p-8 flex flex-col justify-center text-center text-white">
                        <div className="mx-auto mb-6 w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                          <Icon className="w-8 h-8" />
                        </div>

                        <h3 className="text-2xl font-semibold mb-4">
                          {offer.title}
                        </h3>

                        <p className="text-sm text-white/90 leading-relaxed">
                          {offer.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 shadow-md hover:bg-blue-50 rounded-full p-2"
          >
            <ArrowLeft />
          </button>

          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 shadow-md hover:bg-blue-50 rounded-full p-2"
          >
            <ArrowRight />
          </button>
        </div>

        {/* ================= DESKTOP CAROUSEL ================= */}
        <div className="hidden md:flex relative items-center justify-center">

          <button
            onClick={prev}
            className="absolute left-0 z-20 bg-white shadow-lg rounded-full p-3 hover:scale-110 transition"
          >
            <ArrowLeft />
          </button>

          <div className="flex gap-8 transition-transform duration-700">
            {offers.map((offer, index) => {
              const isActive = index === active
              const Icon = offer.icon

              return (
                <div
                  key={index}
                  onClick={() => setActive(index)}
                  className={`
                    relative rounded-3xl overflow-hidden cursor-pointer
                    transition-all duration-700
                    ${isActive ? 'scale-110 opacity-100' : 'scale-90 opacity-50'}
                  `}
                  style={{
                    width: isActive ? 320 : 260,
                    height: isActive ? 420 : 360,
                  }}
                >
                  <div
                    className="absolute inset-0 bg-center bg-no-repeat opacity-20"
                    style={{
                      backgroundImage: `url(${offer.image})`,
                      backgroundSize: '70%',
                    }}
                  />

                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${offer.color} opacity-70`}
                  />

                  <div className="relative z-10 h-full p-8 flex flex-col justify-center text-center text-white">
                    <div className="mx-auto mb-6 w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                      <Icon className="w-8 h-8" />
                    </div>

                    <h3 className="text-2xl font-semibold mb-4">
                      {offer.title}
                    </h3>

                    {isActive && (
                      <p className="text-sm text-white/90 leading-relaxed">
                        {offer.description}
                      </p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          <button
            onClick={next}
            className="absolute right-0 z-20 bg-white shadow-lg rounded-full p-3 hover:scale-110 transition"
          >
            <ArrowRight />
          </button>
        </div>

        {/* DOTS */}
        <div className="flex justify-center mt-8 gap-2">
          {offers.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all
                ${i === active ? 'bg-[#0B2C4D] w-6' : 'bg-blue-300 w-2'}
              `}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
