"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Telemedicine Clinic", href: "/telemedicine" },
  { label: "Services", href: "/allservice" },
  { label: "Contact Us", href: "/#contact" }
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav
      className="fixed top-0 w-full
      bg-gradient-to-r from-emerald-50/90 via-white/80 to-emerald-50/60
      backdrop-blur-md
      text-foreground
      shadow-md
      h-20
      z-40
      animate-slideInDown"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img
                src="/logo.png"
                alt="Life Care Pharmacy Logo"
                className="h-14 w-auto object-contain brightness-110 cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-medium hover:text-emerald-700 transition-colors"
              >
                {item.label}
              </Link>
            ))}

            {/* Free Consultation CTA */}
            <a
              href="tel:+12014251187"
              className="flex items-center gap-3 bg-emerald-700 text-white px-5 py-2.5 rounded-lg shadow hover:bg-emerald-800 transition-all"
            >
              <span className="bg-white/20 p-2 rounded-md">
                <Phone size={18} />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold">Free Consultation</p>
                <p className="text-xs opacity-90">+1 201-425-1187</p>
              </div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {isOpen && (
          <div className="md:hidden relative overflow-hidden animate-slideInUp rounded-b-2xl">

            {/* Gradient Background Layers (Darker than Hero) */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/95 via-white/90 to-emerald-100/95" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-200/40 to-emerald-300/50" />

            {/* Content */}
            <div className="relative z-10 px-2 pb-6 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-3 px-3 font-semibold text-foreground hover:text-emerald-800 transition-colors rounded-lg hover:bg-emerald-100/40"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile CTA */}
              <a
                href="tel:+12014251187"
                className="mt-4 flex items-center justify-center gap-3 bg-emerald-700 text-white px-3 py-3 rounded-xl shadow hover:bg-emerald-800 transition-all"
              >
                <Phone size={18} />
                Free Consultation — +1 201-425-1187
              </a>
            </div>

          </div>
        )}
        {/* ================= END MOBILE MENU ================= */}

      </div>
    </nav>
  )
}
