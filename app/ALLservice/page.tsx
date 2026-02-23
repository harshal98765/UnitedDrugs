"use client"

import React from "react"
import Image from "next/image"
import {
  Pill,
  Truck,
  ShieldCheck,
  Calendar,
  Activity,
  Stethoscope,
  Microscope,
  HeartPulse,
  CheckCircle2,
  Clock,
  Syringe,
  Droplets,
  Brain,
  Thermometer,
  ChevronRight,
  ClipboardList,
  Heart,
  Zap,
} from "lucide-react"
import service1 from "./service1.jpg"

export default function ServicesPage() {
  const specialties = [
    { name: "Autoimmune Conditions", icon: ShieldCheck },
    { name: "Hormone Therapy", icon: Droplets },
    { name: "Chronic Pain", icon: Thermometer },
    { name: "Mental Health / ADHD", icon: Brain },
    { name: "Metabolic Disorders", icon: Activity },
    { name: "Specialty Injectables", icon: Stethoscope },
  ]

  return (
    <main className="bg-white text-slate-800 overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <Image
          src="/1.jpg"
          alt="Pharmacy Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B2C4D]/85 via-[#1E5FA8]/70 to-white/80" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs uppercase tracking-widest">
            Full-Service Pharmacy
          </span>
          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            Modern Pharmacy Care,
            <br />
            <span className="text-cyan-200">Designed Around You</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/90">
            From everyday prescriptions to specialty therapies, our clinical team
            delivers care that’s personal, compliant, and convenient.
          </p>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-24 bg-gradient-to-b from-white to-[#F4F9FF]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            { icon: Truck, title: "Free Local Delivery", desc: "Secure delivery to your home or office" },
            { icon: ShieldCheck, title: "Insurance & Prior Auth", desc: "We handle approvals and paperwork" },
            { icon: Calendar, title: "MedSync Program", desc: "One delivery date for all refills" },
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i} className="rounded-2xl bg-white p-8 border border-blue-100 shadow-sm hover:shadow-lg transition">
                <Icon className="text-blue-700 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* FEATURE BLOCK */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase mb-4">
              Clinical Excellence
            </span>
            <h2 className="text-4xl font-black text-slate-900 mb-6">
              Full-Service Pharmacy Solutions
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              We manage prescriptions, insurance coordination, specialty therapies,
              vaccinations, and chronic care — all in one place.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Prescription Fulfillment",
                "Custom Compounding",
                "Vaccinations",
                "Chronic Care Support",
              ].map((text) => (
                <div key={text} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="text-blue-600 w-5 h-5" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-blue-100">
            <Image src={service1} alt="Pharmacy Care" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* COMPOUNDING */}
      <section className="py-24 bg-[#F4F9FF]">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900">Custom Compounding</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Personalized medications crafted for dosage, form, allergies, and special needs.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            ["Customized Creams", "GLP-1 Support", "Strength Adjustments"],
            ["Pediatric Flavoring", "Dye-Free Options", "Liquid Compounds"],
            ["Veterinary Compounding", "Pet Dosages", "Flavor Adjustments"],
          ].map((items, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 border border-blue-100 shadow-sm">
              <h3 className="font-bold text-blue-700 mb-4 flex items-center gap-2">
                <Microscope className="w-5 h-5" /> Specialty Formulations
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* SPECIALTY MEDS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="bg-gradient-to-br from-[#0B2C4D] to-[#1E5FA8] text-white rounded-3xl p-12 shadow-2xl">
            <Zap className="w-8 h-8 mb-6 text-cyan-200" />
            <h2 className="text-4xl font-black mb-6">Specialty Medications</h2>
            <p className="text-white/80 mb-8">
              We manage complex therapies and insurance approvals so you can focus on healing.
            </p>

            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <ClipboardList className="w-4 h-4" /> Prior Authorization
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4" /> Clinical Oversight
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {specialties.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="bg-white border border-blue-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition group">
                  <Icon className="text-blue-600 mb-3" />
                  <h4 className="font-bold text-slate-900">{item.name}</h4>
                  <div className="flex items-center gap-1 mt-2 text-xs text-blue-500 opacity-0 group-hover:opacity-100 transition">
                    Expert Care Available <ChevronRight className="w-3 h-3" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* MTM */}
      <section className="py-24 bg-gradient-to-b from-white to-[#F4F9FF]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Free", sub: "BP & Glucose", icon: Activity },
              { label: "Walk-in", sub: "Flu & COVID", icon: Syringe },
              { label: "Expert", sub: "Consults", icon: Stethoscope },
              { label: "SMS", sub: "Refill Alerts", icon: Clock },
            ].map((stat, i) => {
              const Icon = stat.icon
              return (
                <div key={i} className="bg-white p-8 rounded-2xl text-center border border-blue-100">
                  <Icon className="mx-auto mb-3 text-blue-600" />
                  <p className="text-2xl font-bold">{stat.label}</p>
                  <p className="text-xs text-slate-500 uppercase">{stat.sub}</p>
                </div>
              )
            })}
          </div>

          <div>
            <h2 className="text-4xl font-black text-slate-900 mb-6">
              Medication Therapy Management
            </h2>
            <p className="text-slate-600 text-lg mb-6">
              Comprehensive medication reviews to prevent interactions and optimize therapy.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl text-sm font-bold">
              <HeartPulse className="w-4 h-4" /> Personalized Care Coordination
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}