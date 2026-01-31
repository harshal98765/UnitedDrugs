"use client"

import { useState } from "react"
import {
  ChevronDown,
  Pill,
  ShieldCheck,
  DollarSign,
  Beaker,
  Truck,
  Phone,
} from "lucide-react"

const faqSections = [
  {
    category: "Getting Started",
    icon: Pill,
    faqs: [
      {
        q: "How do I fill my prescriptions at Life Care Pharmacy?",
        a: `You can fill your prescriptions in several ways:
• Ask your doctor to send prescriptions directly to Life Care Pharmacy
• Request a transfer from your current pharmacy
• Contact our pharmacy and we will coordinate the transfer for you`,
      },
      {
        q: "Is there a fee to sign up or use Life Care Pharmacy?",
        a: "No. There is no fee to sign up or use our pharmacy services. We welcome patients with or without insurance, and delivery is available at no additional charge for eligible prescriptions.",
      },
    ],
  },

  {
    category: "Medication Availability",
    icon: ShieldCheck,
    faqs: [
      {
        q: "Do you always have medications in stock?",
        a: "Medication availability can change daily due to manufacturer shortages and distributor limits. Please contact the pharmacy for real-time availability confirmation.",
      },
      {
        q: "Do you carry hard-to-find or backordered medications?",
        a: "Yes. We specialize in sourcing difficult-to-find medications and will review available alternatives whenever possible.",
      },
    ],
  },

  {
    category: "ADHD & Controlled Medications",
    icon: ShieldCheck,
    faqs: [
      {
        q: "Do you fill ADHD medications?",
        a: "Yes. Prescriptions are reviewed and dispensed in full compliance with federal and state regulations.",
      },
      {
        q: "Why do you need my information before checking availability?",
        a: "Patient information is required for safety, regulatory compliance, and accurate coordination of care.",
      },
    ],
  },

  {
    category: "Pricing, Insurance & Savings",
    icon: DollarSign,
    faqs: [
      {
        q: "Can you help lower the cost of brand medications?",
        a: "In many cases, yes. We review manufacturer savings cards, discount programs, and cash pricing options when eligible.",
      },
      {
        q: "Do you accept patients without insurance?",
        a: "Yes. We welcome patients with or without insurance and offer competitive cash pricing.",
      },
      {
        q: "Can you provide medication pricing online?",
        a: "Pricing varies by dosage, insurance, and eligibility. Please contact the pharmacy for accurate pricing information.",
      },
    ],
  },

  {
    category: "Compounding Pharmacy",
    icon: Beaker,
    faqs: [
      {
        q: "Do you compound medications?",
        a: "Yes. We specialize in customized compounded medications when commercially available options are not suitable.",
      },
      {
        q: "How long does compounding take?",
        a: "Most compounded prescriptions are prepared within 2–3 business days after prescription verification.",
      },
      {
        q: "Do compounded medications require a prescription?",
        a: "Yes. A valid prescription from a licensed provider is required before compounding can begin.",
      },
    ],
  },

  {
    category: "Delivery & Convenience",
    icon: Truck,
    faqs: [
      {
        q: "Do you offer prescription delivery?",
        a: "Yes. Delivery is available for eligible prescriptions. Timing may vary based on medication type and location.",
      },
    ],
  },

  {
    category: "Specialty & Auto Accident Prescriptions",
    icon: Beaker,
    faqs: [
      {
        q: "What specialty medications do you offer?",
        a: `We support a wide range of specialty services including:
• Women’s Health & Hormone Therapy
• Dermatology
• HIV & Infectious Disease
• Gastroenterology
• Endocrinology
• Rheumatology
• Neurology
• Autoimmune & Inflammatory Conditions`,
      },
      {
        q: "Do you handle auto accident (MVA / PIP) prescriptions?",
        a: "Yes. We assist with injury-related prescriptions including coordination with providers and billing when applicable.",
      },
    ],
  },

  {
    category: "Contact & Support",
    icon: Phone,
    faqs: [
      {
        q: "How can I contact Life Care Pharmacy?",
        a: "You may call us, visit our website, or stop by the pharmacy. Our team is always happy to assist you.",
      },
    ],
  },
]

export default function FaqSection() {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <section className="py-24 bg-gradient-to-b from-background to-white">
      <div className="max-w-5xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="hero-title  leading-tight">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Questions
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Everything you need to know about our pharmacy services, policies,
            and patient care.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-10">
          {faqSections.map((section, idx) => {
            const Icon = section.icon

            return (
              <div key={idx}>
                {/* CATEGORY HEADER */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {section.category}
                  </h3>
                </div>

                {/* QUESTIONS */}
                <div className="space-y-3">
                  {section.faqs.map((faq, i) => {
                    const key = `${idx}-${i}`
                    const isOpen = open === key

                    return (
                      <div
                        key={key}
                        className="border border-border rounded-2xl bg-white shadow-sm overflow-hidden"
                      >
                        <button
                          onClick={() =>
                            setOpen(isOpen ? null : key)
                          }
                          className="w-full flex justify-between items-center px-6 py-5 text-left hover:bg-muted/40 transition"
                        >
                          <span className="font-medium text-foreground">
                            {faq.q}
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 transition-transform ${
                              isOpen ? "rotate-180 text-primary" : ""
                            }`}
                          />
                        </button>

                        {isOpen && (
                          <div className="px-6 pb-6 text-muted-foreground leading-relaxed whitespace-pre-line">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
