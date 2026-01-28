'use client'

import React, { useState, useEffect } from 'react'
import Papa from 'papaparse'
import { Search, Phone, X } from 'lucide-react'

/* =============================== */
/* MASTER MEDICATION LIST */
/* =============================== */



/* =============================== */
/* COMPONENT */
/* =============================== */

export default function MedicationAvailabilitySearch() {
  const [query, setQuery] = useState('')
  const [selectedMedication, setSelectedMedication] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [medicationList, setMedicationList] = useState<string[]>([])

    useEffect(() => {
    Papa.parse('/drugs.csv', {
      header: true,
      download: true,
      skipEmptyLines: true,
      complete: (results) => {
        const rows = results.data as Array<{
          DrugName?: string
          Form?: string
          Strength?: string
        }>

        const formatted = rows
          .map((d) =>
            [d.DrugName, d.Form, d.Strength]
              .filter(Boolean)
              .join(' ')
              .replace(/\s+/g, ' ')
              .trim()
          )
          .filter(Boolean)

        setMedicationList(formatted)
      },
    })
  }, [])


  const filtered =
    query.length > 0
      ? medicationList.filter(m =>
          m.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 12)
      : []

  const selectMedication = (med: string) => {
    setSelectedMedication(med)
    setQuery(med)
    setShowModal(true)
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-green-50 to-white px-4 py-12 md:py-16">
      <div className="max-w-2xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="serif-heading text-4xl md:text-5xl font-bold text-green-900 mb-4">
  Find Your Medication
</h2>

          <p className="text-base md:text-lg text-slate-600">
            Check availability of your prescription medication at Life Care Pharmacy
          </p>
        </div>

        {/* SEARCH BAR - LARGER */}
        <div className="relative mb-6">
          <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-green-600">
            <Search className="w-6 h-6" />
          </div>

          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setSelectedMedication(null)
              setSubmitted(false)
            }}
            placeholder="Search medication name..."
            className="w-full pl-14 pr-6 py-4 md:py-5 text-lg md:text-xl border-2 border-green-300 rounded-2xl focus:ring-4 focus:ring-green-400 focus:border-green-600 outline-none transition-all duration-200 shadow-lg"
          />

          {/* SUGGESTIONS DROPDOWN */}
          {filtered.length > 0 && !selectedMedication && (
            <div className="absolute z-30 bg-white w-full mt-2 rounded-2xl border-2 border-green-200 shadow-xl max-h-80 overflow-y-auto">
              {filtered.map((med, idx) => (
                <button
                  key={med}
                  onClick={() => selectMedication(med)}
                  className={`w-full text-left px-5 py-4 text-base font-medium hover:bg-green-100 transition-colors duration-150 ${
                    idx !== filtered.length - 1 ? 'border-b border-green-100' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Search className="w-5 h-5 text-green-500" />
                    <span className="text-green-900">{med}</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* INFO SECTION - Show when no search or result */}
        {!submitted && !selectedMedication && (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-green-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-green-600 mb-3 text-3xl">
                ✓
              </div>
              <h3 className="text-lg font-bold text-green-900 mb-2">
                Quick Search
              </h3>
              <p className="text-sm text-slate-600">
                Find any medication from our comprehensive database in seconds
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-green-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-green-600 mb-3 text-3xl">
                📞
              </div>
              <h3 className="text-lg font-bold text-green-900 mb-2">
                Easy Confirmation
              </h3>
              <p className="text-sm text-slate-600">
                Get instant confirmation of medication availability from our pharmacy
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-green-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-green-600 mb-3 text-3xl">
                ⏱️
              </div>
              <h3 className="text-lg font-bold text-green-900 mb-2">
                Quick Response
              </h3>
              <p className="text-sm text-slate-600">
                Our team will contact you shortly with availability details
              </p>
            </div>
          </div>
        )}

        {/* RESULT */}
        {submitted && selectedMedication && (
          <div className="mt-12 bg-white border-2 border-green-200 rounded-3xl p-8 shadow-xl space-y-6">
            <div className="flex justify-center">
              <span className="bg-green-100 text-green-800 px-6 py-2.5 rounded-full text-base font-bold">
                ✔ Typically Available
              </span>
            </div>

            <div className="text-center space-y-3">
              <p className="text-xl font-bold text-green-900">
                {selectedMedication}
              </p>
              <p className="text-base text-slate-700 leading-relaxed">
                This medication is typically stocked or sourced by Life Care Pharmacy. Availability can change in real time.
              </p>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-lg">
              <p className="text-orange-800 font-semibold text-base">
                📞 Please call the pharmacy to confirm same-day availability
              </p>
            </div>

            <div className="flex justify-center pt-2">
              <a
                href="tel:2014251187"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-3 transition-colors duration-200 shadow-lg"
              >
                <Phone className="w-6 h-6" />
                Call Pharmacy: (201) 425-1187
              </a>
            </div>

            <div className="text-sm text-center text-slate-500 space-y-1 pt-4 border-t border-slate-200">
              <p>✓ Prescription required</p>
              <p>✓ Availability subject to change</p>
              <p>✓ Dispensing subject to pharmacist review</p>
            </div>
          </div>
        )}

        {/* MODAL */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4 py-8">
            <div className="bg-white rounded-3xl p-8 w-full max-w-md relative shadow-2xl">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-green-900 mb-2">
                  Verify Your Information
                </h3>
                <p className="text-slate-600 text-base">
                  We will contact you with availability information for <span className="font-semibold text-green-700">{selectedMedication}</span>
                </p>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setShowModal(false)
                  setSubmitted(true)
                }}
                className="space-y-4"
              >
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      First Name
                    </label>
                    <input 
                      required 
                      placeholder="John" 
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Last Name
                    </label>
                    <input 
                      required 
                      placeholder="Doe" 
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all text-base"
                    />
                  </div>
                </div>

                {/* Date Field */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Date of Birth
                  </label>
                  <input 
                    type="date" 
                    required 
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all text-base"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input 
                    placeholder="(201) 425-1187" 
                    required 
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all text-base"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email"
                    placeholder="john@example.com" 
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all text-base"
                  />
                </div>

                {/* Consent Checkbox */}
                <label className="flex gap-3 text-sm text-slate-700 p-4 bg-green-50 rounded-lg cursor-pointer hover:bg-green-100 transition-colors">
                  <input 
                    type="checkbox" 
                    required 
                    className="w-5 h-5 text-green-600 rounded accent-green-600 cursor-pointer flex-shrink-0 mt-0.5"
                  />
                  <span>
                    I authorize Life Care Pharmacy to contact me regarding this medication request.
                  </span>
                </label>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold text-lg transition-colors duration-200 shadow-lg mt-6"
                >
                  Check Availability
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
