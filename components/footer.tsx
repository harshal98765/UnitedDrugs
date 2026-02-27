"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showLegalModal, setShowLegalModal] = useState(false);
  const [legalType, setLegalType] = useState<
    "privacy" | "terms" | "hipaa" | "contact"
  >("privacy");

  const openLegalModal = (type: "privacy" | "terms" | "hipaa" | "contact") => {
    setLegalType(type);
    setShowLegalModal(true);
  };

  return (
    <>
      <footer className="bg-[#0B2C4D] text-white !animate-none !transform-none !rotate-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-16">
            <div>
              <div className="-mb-4">
                <Image
                  src="/logo.png"
                  alt="DrugDropRx Logo"
                  width={180}
                  height={60}
                  priority
                  className="object-contain scale-165" // 👈 zoom in (125%)
                />
              </div>

              <p className="text-white/80 mb-4">
                Your trusted pharmacy partner for secure, reliable prescription
                services.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 text-white">Quick Links</h4>
              <div role="list" className="space-y-2 text-white/80">
                <div role="listitem">
                  <Link
                    href="#home"
                    className="hover:text-primary-foreground transition"
                  >
                    Home
                  </Link>
                </div>
                <div role="listitem">
                  <Link
                    href="/about-us"
                    className="hover:text-primary-foreground transition"
                  >
                    About Us
                  </Link>
                </div>
                <div role="listitem">
                  <Link
                    href="#contact"
                    className="hover:text-primary-foreground transition"
                  >
                    Services
                  </Link>
                </div>
                <div role="listitem">
                  <Link
                    href="#contact"
                    className="hover:text-primary-foreground transition"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Services</h4>
              <div role="list" className="space-y-2 text-primary-foreground/80">
                <div role="listitem">
                  <a
                    href="#"
                    className="hover:text-primary-foreground transition"
                  >
                    RX Submission
                  </a>
                </div>
                <div role="listitem">
                  <a
                    href="#"
                    className="hover:text-primary-foreground transition"
                  >
                    Fast Delivery
                  </a>
                </div>
                <div role="listitem">
                  <a
                    href="#"
                    className="hover:text-primary-foreground transition"
                  >
                    Customer Support
                  </a>
                </div>
                <div role="listitem">
                  <a
                    href="#"
                    className="hover:text-primary-foreground transition"
                  >
                    Insurance
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Legal</h4>
              <div role="list" className="space-y-2 text-primary-foreground/80">
                <div role="listitem">
                  <Link href="/privacy-policy" className="hover:text-primary-foreground transition">
        Privacy Policy
      </Link>
                </div>
                <div role="listitem">
                  <Link href="/terms-of-service" className="hover:text-primary-foreground transition">
        Terms of Service
      </Link>
                </div>
                <div role="listitem">
                  <button
                    onClick={() => openLegalModal("hipaa")}
                    className="hover:text-primary-foreground transition"
                  >
                    HIPAA Compliance
                  </button>
                </div>
                <div role="listitem">
                  <button
                    onClick={() => openLegalModal("contact")}
                    className="hover:text-primary-foreground transition"
                  >
                    Contact Info
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20"></div>

          <div className="py-8 flex flex-col sm:flex-row justify-between items-center text-white/80 text-sm">
            <p>© {currentYear} United Drugs. All rights reserved.</p>

            <p className="flex items-center gap-1 mt-4 sm:mt-0">
              Made with{" "}
              <a
                href="https://drugdroprx.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#1E5FA8] hover:scale-110 transition-transform"
                aria-label="Visit DrugDropRx website"
              >
                <Heart size={16} className="text-[#1E5FA8] cursor-pointer" />
              </a>{" "}
              for your health
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
                    We collect, use, and protect your personal and health
                    information in strict compliance with HIPAA, the HITECH Act,
                    and New Jersey privacy laws. Your information is used only
                    for prescription processing, clinical care, billing, and
                    regulatory compliance. We do not sell your personal or
                    health information.
                  </p>
                  <p>
                    Your information may be shared with prescribers, pharmacies,
                    insurance plans, PBMs, Medicare, Medicaid, auditors, and
                    regulatory authorities as permitted by law. All third
                    parties are required to maintain confidentiality and
                    security of your information.
                  </p>
                  <p>
                    We maintain administrative, physical, and technical
                    safeguards to protect your data against unauthorized access,
                    loss, or misuse.
                  </p>
                </>
              )}

              {legalType === "terms" && (
                <>
                  <p>
                    By using our pharmacy services or submitting a prescription
                    request, you confirm that you are the patient or an
                    authorized representative and that all information provided
                    is accurate and complete.
                  </p>
                  <p>
                    Prescription services are subject to federal law, New Jersey
                    Board of Pharmacy regulations, DEA requirements, prescriber
                    authorization rules, and controlled substance regulations.
                  </p>
                  <p>
                    All services are subject to pharmacist review and
                    professional judgment. We reserve the right to decline any
                    request that is unsafe, invalid, incomplete, or
                    non-compliant.
                  </p>
                  <p>
                    These Terms are governed by the laws of the State of New
                    Jersey.
                  </p>
                </>
              )}

              {legalType === "hipaa" && (
                <>
                  <p>
                    We are fully compliant with the Health Insurance Portability
                    and Accountability Act (HIPAA) and maintain strict
                    safeguards to protect your protected health information
                    (PHI).
                  </p>
                  <p>
                    You have the right to access your records, request
                    corrections, request restrictions on disclosures, and
                    receive an accounting of disclosures. Requests must be made
                    in writing.
                  </p>
                  <p>
                    If you believe your privacy rights have been violated, you
                    may file a complaint with our Privacy Officer or with the
                    U.S. Department of Health & Human Services. We will not
                    retaliate for any complaint.
                  </p>
                </>
              )}

              {legalType === "contact" && (
                <>
                  <p className="font-semibold text-gray-900">
                    United Drugs Pharmacy
                  </p>
                  <p>
                    Phone:{" "}
                    <a
                      href="tel:+19734829300"
                      className="text-blue-600 underline"
                    >
                      (973) 482-9300
                    </a>
                  </p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:Udrugs507@gmail.com"
                      className="text-blue-600 underline"
                    >
                      Udrugs507@gmail.com
                    </a>
                  </p>
                </>
              )}
            </div>

            <div className="px-6 py-4 border-t text-right">
              <button
                onClick={() => setShowLegalModal(false)}
                className="px-6 py-2 rounded-lg bg-[#0B2C4D] text-white font-semibold hover:bg-[#143A66] transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
