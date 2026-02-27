"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/ALLservice" },
  { label: "Savings & Copay Help", href: "/savings" },
  { label: "Contact Us", href: "/#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      {/* ================= TOP ALERT ================= */}
      {/* ================= TOP ALERT ================= */}
      {showAlert && (
        <div
          className="
    fixed top-0 w-full z-41
    bg-gradient-to-r
    from-[#D6EBFF]
    via-[#F0F7FF]
    to-[#D6EBFF]
    text-[#0B2C4D]
    pointer-events-none
  "
        >
          <div className="max-w-7xl mx-auto px-3 py-2 flex items-center justify-center relative">
            <p
              className="
    pointer-events-auto
    inline-block
    whitespace-nowrap
    text-[13px]
    md:text-base
    font-semibold
    animate-slide-left
  "
            >
              Horizon NJ Health members welcome •{" "}
              <a
                href="tel:+19734829300"
                className="underline font-bold hover:text-blue-700"
              >
                Call (973) 482-9300
              </a>
            </p>

            {/* ❌ CLOSE BUTTON — DESKTOP ONLY */}
            <button
              onClick={() => setShowAlert(false)}
              className="
    pointer-events-auto
    hidden md:flex
    absolute right-4
    hover:bg-black/10
    rounded-md
    p-1
    transition
  "
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
        bg-gradient-to-r
        from-[#ffffff]
        via-[#2870b8]
        to-[#175a9c]
        backdrop-blur-md
        text-white
        shadow-lg
        h-20
        z-40
        transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            {/* Logo */}
            <div
              className="flex items-center h-20 cursor-pointer"
              aria-label="Go to homepage"
              onClick={() => {
                if (pathname === "/") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                } else {
                  router.push("/");
                }
              }}
            >
              <Image
                src="/logo.png"
                alt="Life Care Pharmacy – Jersey City NJ"
                width={360}
                height={180}
                priority
                className="
    object-contain
    h-[230px]
    w-auto
    cursor-pointer
    translate-y-1
    -translate-x-12
  "
              />
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-medium transition-colors hover:text-blue-200"
                >
                  {item.label}
                </Link>
              ))}

              {/* CTA */}
              <a
                href="tel:++19734829300"
                className="flex items-center gap-3 text-gray-800 bg-white px-5 py-2.5 rounded-lg shadow"
              >
                <span className="p-2 text-gray-800 rounded-md">
                  <Phone size={18} />
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-gray-800">
                    Free Consultation
                  </p>
                  <p className="text-xs opacity-90 text-gray-800">
                    (973) 482-9300
                  </p>
                </div>
              </a>
            </div>

            {/* Mobile Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {/* ================= MOBILE MENU ================= */}
          {isOpen && (
            <div className="md:hidden relative overflow-hidden rounded-b-2xl animate-slideInUp">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B2C4D] via-[#0E3A66] to-[#0B2C4D]" />

              <div className="relative z-10 px-2 pb-6 pt-4 bg-gradient-to-b from-[#007cc4] to-[#d6d7d8]">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block py-3 px-3 font-semibold rounded-lg "
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                <a
                  href="tel:+12014348062"
                  className="mt-4 flex bg-white items-center justify-center gap-2 text-gray-800 px-3 py-3 rounded-xl shadow hover:bg-blue-100"
                >
                  <Phone size={18} className="text-gray-800" />

                  <p className="text-sm font-semibold text-gray-800">
                    Free Consultation — (973) 482-9300
                  </p>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
