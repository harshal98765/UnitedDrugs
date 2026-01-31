'use client'

import React, { useState, useEffect } from 'react'
import Papa from 'papaparse'
import { Search, Phone, X } from 'lucide-react'

/* =============================== */
/* COMPONENT */
/* =============================== */

export default function MedicationAvailabilitySearch() {
  const [showTerms, setShowTerms] = useState(false)
  const [query, setQuery] = useState('')
  const [selectedMedication, setSelectedMedication] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [medicationList, setMedicationList] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  /* =============================== */
  /* LOAD CSV */
  /* =============================== */

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

  /* =============================== */
  /* FILTER LOGIC */
  /* =============================== */

  const filtered =
    query.length > 0
      ? medicationList
          .filter((m) => m.toLowerCase().includes(query.toLowerCase()))
          .slice(0, 12)
      : []

  const selectMedication = (med: string) => {
    setSelectedMedication(med)
    setQuery(med)
    setShowModal(true)
  }

  /* =============================== */
  /* BACKEND SUBMIT */
  /* =============================== */

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)

    const payload = {
  medicationName: String(
    formData.get('medicationName') ||
      selectedMedication ||
      query ||
      ''
  ),
  firstName: String(formData.get('firstName') || ''),
  lastName: String(formData.get('lastName') || ''),
  dob: String(formData.get('dob') || ''),
  phone: String(formData.get('phone') || ''),
  email: String(formData.get('email') || ''),
  consent: true,
}


    try {
      setLoading(true)

      await fetch(
        'https://rxflow-backend-80te.onrender.com/api/mail/medication-availability',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      )

      setShowModal(false)
      setSubmitted(true)
    } catch (error) {
      alert('Something went wrong. Please try again.')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  /* =============================== */
  /* UI */
  /* =============================== */
  

  return (
    <section className="min-h-screen bg-gradient-to-t from-[#D6EBFF] via-[#F0F7FF] to-white px-4 py-12 md:py-16">
      <div className="max-w-2xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className=" text-4xl md:text-5xl font-bold text-[#0B2C4D] mb-4">
            Find Your Medication
          </h2>
          <p className="text-base md:text-lg text-slate-600">
            Check availability of your prescription medication at BergenRoad Pharmacy
          </p>
        </div>

        {/* SEARCH BAR */}
        <div className="relative mb-6">
          <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-[#1E5FA8]">
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
            className="w-full pl-14 pr-6 py-4 md:py-5 text-lg md:text-xl border-2 border-blue-300 rounded-2xl focus:ring-4 focus:ring-blue-400 focus:border-[#1E5FA8] outline-none transition-all duration-200 shadow-lg"
          />

          {/* SUGGESTIONS */}
          {filtered.length > 0 && !selectedMedication && (
            <div className="absolute z-30 bg-white w-full mt-2 rounded-2xl border-2 border-blue-200 shadow-xl max-h-80 overflow-y-auto">
              {filtered.map((med, idx) => (
                <button
                  key={`${med}-${idx}`}
                  onClick={() => selectMedication(med)}
                  className={`w-full text-left px-5 py-4 text-base font-medium hover:bg-blue-100 transition-colors duration-150 ${
                    idx !== filtered.length - 1 ? 'border-b border-blue-100' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Search className="w-5 h-5 text-blue-500" />
                    <span className="text-[#0B2C4D]">{med}</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* THREE INFO BOXES — RESTORED */}
        {!submitted && !selectedMedication && (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
              {/* <div className="text-[#1E5FA8] mb-3 text-3xl">✓</div> */}
              <h3 className="text-lg font-bold text-[#0B2C4D] mb-2">
                Quick Search
              </h3>
              <p className="text-sm text-slate-600">
                Find any medication from our comprehensive database in seconds
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
              {/* <div className="text-[#1E5FA8] mb-3 text-3xl">📞</div> */}
              <h3 className="text-lg font-bold text-[#0B2C4D] mb-2">
                Easy Confirmation
              </h3>
              <p className="text-sm text-slate-600">
                Get instant confirmation of medication availability from our pharmacy
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
              {/* <div className="text-[#1E5FA8] mb-3 text-3xl">⏱️</div> */}
              <h3 className="text-lg font-bold text-[#0B2C4D] mb-2">
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
              <span className="bg-blue-100 text-[#0B2C4D] px-6 py-2.5 rounded-full text-base font-bold">
                ✔ Typically Available
              </span>
            </div>

            <div className="text-center space-y-3">
              <p className="text-xl font-bold text-[#0B2C4D]">
                {selectedMedication}
              </p>
              <p className="text-base text-slate-700 leading-relaxed">
                This medication is typically stocked or sourced by BergenRoad Pharmacy. Availability can change in real time.
              </p>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-lg">
              <p className="text-orange-800 font-semibold text-base">
                📞 Please call the pharmacy to confirm same-day availability
              </p>
            </div>

            <div className="flex justify-center pt-2">
              <a
                href="tel:+1 201-434-8062"
                className="bg-[#0B2C4D] hover:bg-[#143A66] text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 shadow-lg"
              >
                <Phone className="w-6 h-6" />
                Call Pharmacy: 201-434-8062
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
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-600"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#0B2C4D] mb-2">
                  Verify Your Information
                </h3>
                <p className="text-slate-600 text-base">
                  We will contact you regarding{' '}
                  <span className="font-semibold text-[#1E5FA8]">
                    {selectedMedication}
                  </span>
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">

                <input
  name="medicationName"
  required
  defaultValue={selectedMedication || query}
  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg bg-slate-100"
  placeholder="Medication Name"
/>


                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    name="firstName"
                    required
                    placeholder="First Name"
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg"
                  />
                  <input
                    name="lastName"
                    required
                    placeholder="Last Name"
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg"
                  />
                </div>

                <div className="relative max-w-[260px] sm:max-w-[240px] md:max-w-full">

                <input
                  id="dob"
                  name="dob"
                  type="date"
                  required
                  className="peer w-full px-4 py-3 border-2 border-slate-200 rounded-lg ios-date"
                />

  {/* Fake placeholder */}
                <span
                  className="
                    pointer-events-none
                    absolute left-4 top-1/2 -translate-y-1/2
                    text-slate-400 text-sm
                    transition-all

                    peer-focus:opacity-0
                    peer-[&:not(:placeholder-shown)]:opacity-0
                    md:hidden
                  "
                >
                  Date of Birth
                </span>
              </div>


                <input
                  name="phone"
                  required
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg"
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Email (optional)"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg"
                />

                <label className="flex gap-3 text-sm text-slate-700 p-4 bg-blue-50 rounded-lg">
  <input
    type="checkbox"
    required
    className="w-5 h-5 accent-[#1E5FA8] mt-0.5"
  />

  <span className="leading-relaxed">
    I authorize BergenRoad Pharmacy to contact me regarding this request.
    {" "}
    <button
      type="button"
      onClick={() => setShowTerms(true)}
      className="text-blue-600 underline font-medium hover:text-blue-800"
    >
      Terms and Conditions
    </button>
    {showTerms && (
  <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
    <div className="bg-white max-w-lg w-full rounded-2xl p-6 shadow-2xl relative">

      {/* Close */}
      <button
        onClick={() => setShowTerms(false)}
        className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
      >
        ✕
      </button>

      <h3 className="text-xl font-bold text-green-900 mb-4">
        Terms & Conditions
      </h3>

      <div className="space-y-3 text-sm text-slate-700 leading-relaxed max-h-[60vh] overflow-y-auto">

        <p>
          By submitting this form, you confirm that all information provided is
          accurate, complete, and truthful to the best of your knowledge.
        </p>

        <p>
          You authorize BergenRoad Pharmacy to contact you via phone, text
          message, or email regarding your prescription inquiry, medication
          availability, insurance verification, or savings options.
        </p>

        <p>
          Information submitted through this form is used solely for pharmacy
          communication and will not be sold or shared with third parties except
          as required for prescription processing or insurance verification.
        </p>

        <p>
          By continuing, you acknowledge that electronic submission constitutes
          your consent in accordance with applicable federal and state
          regulations, including HIPAA privacy guidelines.
        </p>

      </div>

      <div className="pt-4 text-right">
        <button
          onClick={() => setShowTerms(false)}
          className="bg-[#0B2C4D] hover:bg-[#143A66] text-white px-6 py-2 rounded-lg font-semibold"
        >
          I Understand
        </button>
      </div>

    </div>
  </div>
)}

  </span>
</label>


                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#0B2C4D] hover:bg-[#143A66] text-white py-4 rounded-xl font-bold shadow-lg"
                >
                  {loading ? 'Submitting...' : 'Check Availability'}
                </button>

              </form>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
