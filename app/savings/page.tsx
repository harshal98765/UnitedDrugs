'use client'

import React, { useState } from 'react'
import { Upload, CheckCircle, DollarSign, ShieldCheck } from 'lucide-react'

export default function SavingsCopayHelp() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  /* =============================== */
  /* SUBMIT TO BACKEND */
  /* =============================== */

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()

  //   const form = e.currentTarget
  //   const formData = new FormData(form)

  //   const payload = {
  //     firstName: formData.get('firstName'),
  //     lastName: formData.get('lastName'),
  //     dob: formData.get('dob'),
  //     phone: formData.get('phone'),

  //     medicationName: formData.get('medicationName'),
  //     strength: formData.get('strength'),

  //     insuranceStatus: formData.get('insuranceStatus'),
  //     expensiveElsewhere: formData.get('expensiveElsewhere'),

  //     currentPharmacy: formData.get('currentPharmacy'),
  //     approximatePrice: formData.get('approximatePrice'),
  //     consent : formData.get('yes'),
  //     insuranceCard: formData.get('insuranceCard'),


  //     source: 'Life Care Pharmacy – Savings & Copay Help',
  //   }

  //   try {
  //     setLoading(true)

  //     await fetch(
  //       'https://rxflow-backend.onrender.com/api/mail/savings-request',
  //       {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(payload),
  //       }
  //     )

  //     setSubmitted(true)
  //   } catch (error) {
  //     alert('Unable to submit request. Please try again.')
  //     console.error(error)
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()

  const form = e.currentTarget
  const formData = new FormData(form)

  formData.append(
    'source',
    'Life Care Pharmacy – Savings & Copay Help'
  )

  try {
    setLoading(true)

    const response = await fetch(
      'https://rxflow-backend-80te.onrender.com/api/mail/savings-request',
      {
        method: 'POST',
        body: formData, // ✅ multipart/form-data
      }
    )

    if (!response.ok) {
      throw new Error('Submission failed')
    }

    setSubmitted(true)
  } catch (error) {
    console.error(error)
    alert('Unable to submit request. Please try again.')
  } finally {
    setLoading(false)
  }
}

const inputStyle =
  "w-full px-4 py-3 rounded-xl border-[1.5px] border-slate-300 bg-white " +
  "text-slate-900 placeholder-slate-400 " +
  "focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-green-600 transition"


  return (
    <section className="min-h-screen bg-gradient-to-b from-green-50 to-white px-4 py-14 md:py-20">
      <div className="max-w-3xl mx-auto">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-12">
          <h2 className="serif-heading text-4xl md:text-5xl font-bold text-green-900 mb-4">
            Savings & Copay Help
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We help review manufacturer savings cards, discount pricing, and prior authorization support when eligible.
          </p>
        </div>

        {/* ================= SUCCESS ================= */}
        {submitted ? (
          <div className="bg-white border-2 border-green-200 rounded-3xl p-10 shadow-xl text-center space-y-6">
            <div className="flex justify-center">
              <CheckCircle className="w-16 h-16 text-green-600" />
            </div>

            <h3 className="serif-heading text-3xl font-bold text-green-900">
              Request Received
            </h3>

            <p className="text-slate-700 text-lg">
              Thank you. A member of our pharmacy team will review savings options and contact you.
            </p>

            <p className="text-sm text-slate-500 max-w-xl mx-auto">
              Eligibility varies by medication and insurance type.
            </p>
          </div>
        ) : (

        /* ================= FORM ================= */
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-2xl border-2 border-green-200 p-8 md:p-12 space-y-8"
        >

          {/* ===== PATIENT INFO ===== */}
          <div>
            <h3 className="serif-heading text-2xl font-bold text-green-900 mb-4">
              Patient Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                name="firstName"
                required
                placeholder="First Name"
                className={inputStyle}
              />

              <input
                name="lastName"
                required
                placeholder="Last Name"
                className={inputStyle}
              />

              <input
                name="dob"
                required
                type="date"
                className={inputStyle}
              />

              <input
                name="phone"
                required
                placeholder="Phone Number"
                className={inputStyle}
              />
            </div>
          </div>

          {/* ===== MEDICATION INFO ===== */}
          <div>
            <h3 className="serif-heading text-2xl font-bold text-green-900 mb-4">
              Medication Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                name="medicationName"
                required
                placeholder="Medication name (ex: Ozempic)"
                className={inputStyle}
              />

              <input
                name="strength"
                required
                placeholder="Strength (ex: 0.5 mg)"
                className={inputStyle}
              />
            </div>
          </div>

          {/* ===== INSURANCE STATUS ===== */}
          <div>
            <h3 className="serif-heading text-2xl font-bold text-green-900 mb-4">
              Insurance Status
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['Have insurance', 'No insurance', 'Not sure'].map((opt) => (
                <label
                  key={opt}
                  className="flex items-center gap-3 border-2 border-slate-200 rounded-xl px-4 py-4 cursor-pointer hover:border-green-400 transition"
                >
                  <input type="radio" name="insuranceStatus" value={opt} required />
                  <span className="font-medium text-slate-700">{opt}</span>
                </label>
              ))}
            </div>
          </div>

          {/* ===== COST QUESTION ===== */}
          <div>
            <h3 className="serif-heading text-2xl font-bold text-green-900 mb-4">
              Cost Experience
            </h3>

            <label className="block mb-3 text-slate-700 font-medium">
              Was this medication expensive at another pharmacy?
            </label>

            <div className="grid grid-cols-3 gap-4">
              {['Yes', 'No', 'Not sure'].map((opt) => (
                <label
                  key={opt}
                  className="flex items-center gap-3 border-2 border-slate-200 rounded-xl px-4 py-4 cursor-pointer hover:border-green-400 transition"
                >
                  <input type="radio" name="expensiveElsewhere" value={opt} required />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>

          {/* ===== OPTIONAL INFO ===== */}
          <div>
            <h3 className="serif-heading text-2xl font-bold text-green-900 mb-4">
              Optional Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                name="currentPharmacy"
                placeholder="Current pharmacy name (optional)"
                className={inputStyle}
              />

              <input
                name="approximatePrice"
                placeholder="Approximate price paid or quoted (optional)"
                className={inputStyle}
              />
            </div>

            <label className="mt-5 flex items-center justify-center gap-3 border-2 border-dashed border-green-300 rounded-xl p-6 cursor-pointer hover:bg-green-50 transition">
              <Upload className="w-6 h-6 text-green-600" />
              <span className="text-green-700 font-medium">
                Upload insurance card (optional)
              </span>
              <input type="file" name="insuranceCard" accept="image/*,.pdf" hidden />
            </label>
          </div>

          {/* ===== CONSENT ===== */}
          <label className="flex gap-3 text-sm text-slate-700 bg-green-50 p-5 rounded-xl cursor-pointer">
            <input type="checkbox" name="consent" value="true" required className="mt-1 accent-green-600" />
            I authorize Life Care Pharmacy to review available savings options when eligible.
          </label>

          {/* ===== SUBMIT ===== */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-5 rounded-2xl font-bold text-lg shadow-lg transition"
          >
            {loading ? 'Submitting...' : 'Request Savings Review'}
          </button>

          {/* ===== DISCLAIMER ===== */}
          <div className="pt-6 border-t text-sm text-slate-500 leading-relaxed space-y-2">
            <p>
              Savings are not guaranteed and vary by medication and insurance type.
            </p>
            <p>
              Manufacturer programs may not be available for patients with government-funded insurance
              (including Medicare or Medicaid).
            </p>
            <p>
              Final pricing is confirmed by the pharmacy.
            </p>
          </div>
        </form>
        )}

        {/* ===== TRUST STRIP ===== */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white rounded-xl p-6 border border-green-100 shadow-sm">
            <DollarSign className="mx-auto text-green-600 mb-2" />
            <p className="font-semibold text-green-900">Copay Card Review</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-green-100 shadow-sm">
            <ShieldCheck className="mx-auto text-green-600 mb-2" />
            <p className="font-semibold text-green-900">Insurance Guidance</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-green-100 shadow-sm">
            <CheckCircle className="mx-auto text-green-600 mb-2" />
            <p className="font-semibold text-green-900">Prior Auth Support</p>
          </div>
        </div>

      </div>
    </section>
  )
}
