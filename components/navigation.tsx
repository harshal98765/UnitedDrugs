"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import Image from "next/image"


const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/ALLservice" },
  { label: "Savings & Copay Help", href: "/savings" },
  { label: "Contact Us", href: "/#contact" }
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [showAlert, setShowAlert] = useState(true)

  return (
    <>
      {/* ================= TOP ALERT ================= */}
      {showAlert && (
  <div className="fixed top-0 w-full z-41 bg-emerald-700 text-white">
    <div className="max-w-7xl mx-auto px-3 py-2 flex items-center justify-center relative">

      {/* Centered Text */}
      <p className="
  text-[13px] 
  md:text-base 
  font-semibold 
  text-center 
  whitespace-nowrap 
  overflow-hidden 
  text-ellipsis
">
  Horizon NJ Health members welcome •{" "}
  <a
    href="tel:2014251187"
    className="underline font-bold hover:text-emerald-200"
  >
    Call 201-425-1187
  </a>
</p>


      {/* Close Button (Right Side) */}
      <button
        onClick={() => setShowAlert(false)}
        className="absolute right-4 hover:bg-white/20 rounded-md p-1 transition"
        aria-label="Close alert"
      >
        <X size={20} />
      </button>

    </div>
  </div>
)}


      {/* ================= NAV BAR ================= */}
      <nav
        className={`fixed w-full
        ${showAlert ? "top-8" : "top-0"}
        bg-gradient-to-r from-emerald-50/90 via-white/80 to-emerald-50/60
        backdrop-blur-md
        text-foreground
        shadow-md
        h-20
        z-40
        transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5">
          <div className="flex justify-between items-center h-20">

            {/* Logo */}
            <Image
  src="/logo.png"
  alt="Life Care Pharmacy – Jersey City NJ"
  width={220}
  height={70}
  priority
/>


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

              {/* CTA */}
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

            {/* Mobile Button */}
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {/* ================= MOBILE MENU ================= */}
          {isOpen && (
            <div className="md:hidden relative overflow-hidden rounded-b-2xl animate-slideInUp">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/95 via-white/90 to-emerald-100/95" />
              <div className="relative z-10 px-2 pb-6 pt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block py-3 px-3 font-semibold hover:text-emerald-800 rounded-lg hover:bg-emerald-100/40"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                <a
                  href="tel:+12014251187"
                  className="mt-4 flex items-center justify-center gap-3 bg-emerald-700 text-white px-3 py-3 rounded-xl shadow hover:bg-emerald-800"
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
    </>
  )
}
