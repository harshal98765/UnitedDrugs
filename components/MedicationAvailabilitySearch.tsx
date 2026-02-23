'use client'

import React, { useState, useEffect } from 'react'
import Papa from 'papaparse'
import { Search, Phone, X, ShieldCheck, Pill, CheckCircle2 } from 'lucide-react'

export default function MedicationAvailabilitySearch() {
  const [showTerms, setShowTerms] = useState(false)
  const [query, setQuery] = useState('')
  const [selectedMedication, setSelectedMedication] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [medicationList, setMedicationList] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

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
      ? medicationList
          .filter((m) => m.toLowerCase().includes(query.toLowerCase()))
          .slice(0, 12)
      : []

  const selectMedication = (med: string) => {
    setSelectedMedication(med)
    setQuery(med)
    setShowModal(true)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)

    const payload = {
      medicationName: String(
        formData.get('medicationName') || selectedMedication || query || ''
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
        'https://bergenroad-backend.onrender.com/api/mail/medication-availability',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
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

  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-[#f6f9fe] to-[#eef5ff] px-4 py-16">
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-4">
            <ShieldCheck className="w-4 h-4 text-blue-700" />
            <span className="text-sm font-semibold text-blue-800">
              Secure • HIPAA Compliant
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-3">
            Find Your Medication
          </h2>
          <p className="text-slate-600 text-lg">
            Check availability at United Drugs before you visit
          </p>
        </div>

        {/* SEARCH CARD */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 md:p-8 mb-10">
          <div className="relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-600 w-6 h-6" />
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
                setSelectedMedication(null)
                setSubmitted(false)
              }}
              placeholder="Search medication name..."
              className="w-full pl-14 pr-6 py-4 md:py-5 text-lg md:text-xl border-2 border-blue-200 rounded-2xl focus:ring-4 focus:ring-blue-300 focus:border-blue-600 outline-none transition shadow-sm"
            />

            {filtered.length > 0 && !selectedMedication && (
              <div className="absolute z-30 bg-white w-full mt-2 rounded-2xl border border-blue-200 shadow-xl max-h-80 overflow-y-auto">
                {filtered.map((med, idx) => (
                  <button
                    key={`${med}-${idx}`}
                    onClick={() => selectMedication(med)}
                    className={`w-full text-left px-5 py-4 text-base hover:bg-blue-50 transition ${
                      idx !== filtered.length - 1 ? 'border-b border-blue-100' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Pill className="w-5 h-5 text-blue-500" />
                      <span className="text-slate-900 font-medium">{med}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* INFO CARDS */}
       {!submitted && !selectedMedication && (
  <div className="space-y-6 mb-12">

    {/* ROW 1 – Existing Cards (unchanged) */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        { t: 'Quick Search', d: 'Search thousands of medications in seconds.' },
        { t: 'Easy Confirmation', d: 'We’ll confirm availability for you.' },
        { t: 'Fast Response', d: 'Our pharmacy team responds promptly.' },
      ].map((c) => (
        <div
          key={c.t}
          className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition"
        >
          <CheckCircle2 className="w-6 h-6 text-blue-700 mb-3" />
          <h3 className="font-bold text-slate-900">{c.t}</h3>
          <p className="text-slate-600 text-sm mt-1">{c.d}</p>
        </div>
      ))}
    </div>

    {/* ROW 2 – New Cards (Different Design) */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* Card 4 – Soft Blue Gradient */}
      <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6 shadow-sm hover:shadow-md transition">
        <div className="text-xs font-semibold uppercase tracking-wide text-blue-700 mb-2">
          Secure
        </div>
        <h3 className="font-bold text-slate-900">HIPAA Protected</h3>
        <p className="text-slate-600 text-sm mt-1">
          Your health information is encrypted and handled securely.
        </p>
      </div>

      {/* Card 5 – Icon Badge */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-300 text-blue-700 font-bold">
          Rx
        </div>
        <h3 className="font-bold text-slate-900">Prescription Friendly</h3>
        <p className="text-slate-600 text-sm mt-1">
          Works for new prescriptions, refills, and transfers.
        </p>
      </div>

      {/* Card 6 – Gradient Badge */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
        <span className="inline-flex mb-3 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          Priority
        </span>
        <h3 className="font-bold text-slate-900">Rapid Confirmation</h3>
        <p className="text-slate-600 text-sm mt-1">
          Availability confirmed quickly by our pharmacy team.
        </p>
      </div>

    </div>
  </div>
)}
        {/* RESULT */}
        {/* INFO CARDS */}
{/* RESULT */}
          {submitted && selectedMedication && (
            <div className="mt-12 bg-white border-2 border-blue-200 rounded-3xl p-8 shadow-xl space-y-6">
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
                  href="tel:+1 97343829300"
                  className="bg-[#0B2C4D] hover:bg-[#143A66] text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 shadow-lg"
                >
                  <Phone className="w-6 h-6" />
                  Call Pharmacy: +1 97343829300
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

  {/* Mobile-only fake placeholder */}
  <span
    id="dob-label"
    className="
      absolute left-4 top-1/2 -translate-y-1/2
      text-slate-400 text-sm
      pointer-events-none
      md:hidden
    "
  >
    Date of Birth
  </span>

  <input
    type="date"
    name="dob"
    required
    onChange={(e) => {
      const label = document.getElementById('dob-label')
      if (label) {
        label.style.display = e.target.value ? 'none' : 'block'
      }
    }}
    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg ios-date"
  />
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
      I authorize United Drugs to contact me regarding this request.
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
            You authorize United Drugs to contact you via phone, text
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
