"use client"

import { Phone } from "lucide-react"

export default function FloatingCallButton() {
  return (
    <a
      href="tel:+12014348062"
      aria-label="Call Us"
      className="
        fixed z-50 group
        right-4 bottom-4
        md:right-6 md:top-[90%] md:-translate-y-1/2 md:bottom-auto
      "
    >
      {/* Tooltip – Desktop only */}
      <span
        className="
          hidden md:block
          absolute right-16 top-1/2 -translate-y-1/2
          whitespace-nowrap
          opacity-0 group-hover:opacity-100 transition
          bg-foreground text-background
          text-xs px-3 py-1 rounded-lg shadow-lg
        "
      >
        Call Us
      </span>

      {/* Button */}
      <div
        className="
          relative flex items-center justify-center
          w-11 h-11 md:w-13 md:h-13
          rounded-xl
          bg-[#0c42b6] dark:bg-[#193852]
          shadow-md transition-all duration-300
          group-hover:scale-105 group-hover:shadow-lg
        "
      >
        {/* Pulse – now works on mobile too */}
        <span className="absolute inset-0 rounded-xl bg-[#2f4f2f] dark:bg-[#3b6b3b] opacity-30 animate-ping" />

        <Phone
          className="
            relative z-10
            w-5 h-5 md:w-6 md:h-6
            text-white
            group-hover:rotate-12 transition-transform
          "
        />
      </div>
    </a>
  )
}
