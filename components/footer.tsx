"use client"

import { useState } from "react"
import Link from "next/link"
import { Heart } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [showLegalModal, setShowLegalModal] = useState(false)
  const [legalType, setLegalType] = useState<"privacy" | "terms" | "hipaa" | "contact">("privacy")

  const openLegalModal = (type: "privacy" | "terms" | "hipaa" | "contact") => {
    setLegalType(type)
    setShowLegalModal(true)
  }

  return (
    <>
      <footer className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-16">

            <div>
              <Image
                src="/logo.png"
                alt="DrugDropRx Logo"
                width={180}
                height={60}
                className="mb-4 object-contain"
              />
              <p className="text-primary-foreground/80 mb-4">
                Your trusted pharmacy partner for secure, reliable prescription services.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <Link href="#home" className="hover:text-primary-foreground transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="hover:text-primary-foreground transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-primary-foreground transition">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-primary-foreground transition">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Services</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <a href="#" className="hover:text-primary-foreground transition">
                    RX Submission
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-foreground transition">
                    Fast Delivery
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-foreground transition">
                    Customer Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-foreground transition">
                    Insurance
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Legal</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <button
                    onClick={() => openLegalModal("privacy")}
                    className="hover:text-primary-foreground transition"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openLegalModal("terms")}
                    className="hover:text-primary-foreground transition"
                  >
                    Terms of Service
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openLegalModal("hipaa")}
                    className="hover:text-primary-foreground transition"
                  >
                    HIPAA Compliance
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openLegalModal("contact")}
                    className="hover:text-primary-foreground transition"
                  >
                    Contact Info
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20"></div>

          <div className="py-8 flex flex-col sm:flex-row justify-between items-center text-primary-foreground/80 text-sm">
  <p>© {currentYear} LifeCarePharmacy. All rights reserved.</p>

  <p className="flex items-center gap-1 mt-4 sm:mt-0">
    Made with{" "}
    <a
      href="https://drugdroprx.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-secondary hover:scale-110 transition-transform"
      aria-label="Visit DrugDropRx website"
    >
      <Heart size={16} className="text-secondary cursor-pointer" />
    </a>
    {" "}for your health
  </p>
</div>

        </div>
      </footer>

      {showLegalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white w-full max-w-3xl rounded-xl shadow-xl overflow-hidden">

            <div className="flex justify-between items-center px-6 py-4 border-b">
              <h2 className="text-xl font-bold text-gray-900">
                {legalType === "privacy" && "Privacy Policy"}
                {legalType === "terms" && "Terms of Service"}
                {legalType === "hipaa" && "HIPAA Compliance"}
                {legalType === "contact" && "Contact Information"}
              </h2>
              <button
                onClick={() => setShowLegalModal(false)}
                className="text-gray-500 hover:text-gray-800 text-2xl leading-none"
              >
                ×
              </button>
            </div>

            <div className="px-6 py-4 max-h-[60vh] overflow-y-auto text-sm text-gray-700 space-y-4 leading-relaxed">

              {legalType === "privacy" && (
                <>
                  <p>
                    We collect, use, and protect your personal and health information in strict compliance with HIPAA,
                    the HITECH Act, and New Jersey privacy laws. Your information is used only for prescription processing,
                    clinical care, billing, and regulatory compliance. We do not sell your personal or health information.
                  </p>
                  <p>
                    Your information may be shared with prescribers, pharmacies, insurance plans, PBMs, Medicare,
                    Medicaid, auditors, and regulatory authorities as permitted by law. All third parties are required
                    to maintain confidentiality and security of your information.
                  </p>
                  <p>
                    We maintain administrative, physical, and technical safeguards to protect your data against
                    unauthorized access, loss, or misuse.
                  </p>
                </>
              )}

              {legalType === "terms" && (
                <>
                  <p>
                    By using our pharmacy services or submitting a prescription request, you confirm that you are the
                    patient or an authorized representative and that all information provided is accurate and complete.
                  </p>
                  <p>
                    Prescription services are subject to federal law, New Jersey Board of Pharmacy regulations, DEA
                    requirements, prescriber authorization rules, and controlled substance regulations.
                  </p>
                  <p>
                    All services are subject to pharmacist review and professional judgment. We reserve the right to
                    decline any request that is unsafe, invalid, incomplete, or non-compliant.
                  </p>
                  <p>
                    These Terms are governed by the laws of the State of New Jersey.
                  </p>
                </>
              )}

              {legalType === "hipaa" && (
                <>
                  <p>
                    We are fully compliant with the Health Insurance Portability and Accountability Act (HIPAA) and
                    maintain strict safeguards to protect your protected health information (PHI).
                  </p>
                  <p>
                    You have the right to access your records, request corrections, request restrictions on disclosures,
                    and receive an accounting of disclosures. Requests must be made in writing.
                  </p>
                  <p>
                    If you believe your privacy rights have been violated, you may file a complaint with our Privacy
                    Officer or with the U.S. Department of Health & Human Services. We will not retaliate for any complaint.
                  </p>
                </>
              )}

              {legalType === "contact" && (
                <>
                  <p className="font-semibold text-gray-900">Life Care Pharmacy</p>
                  <p>
                    Phone:{" "}
                    <a href="tel:+12014251187" className="text-blue-600 underline">
                      +1 201-425-1187
                    </a>
                  </p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:Lifecarepharmacyllc@gmail.com"
                      className="text-blue-600 underline"
                    >
                      Lifecarepharmacyllc@gmail.com
                    </a>
                  </p>
                </>
              )}

            </div>

            <div className="px-6 py-4 border-t text-right">
              <button
                onClick={() => setShowLegalModal(false)}
                className="px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  )
}
