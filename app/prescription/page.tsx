"use client"

import type React from "react"
import { useState } from "react"

export default function TransferPrescription() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    birthday: "",
    previousPharmacyName: "",
    previousPharmacyPhone: "",
    transferAllMedications: false,
    prescriptions: [{ name: "", rxNumber: "" }],
    notes: "",
    termsAgreed: false,
  })

  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [showTermsModal, setShowTermsModal] = useState(false)
  const [modalAgreed, setModalAgreed] = useState(false)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleMedicationChange = (
    index: number,
    field: "name" | "rxNumber",
    value: string
  ) => {
    const updated = [...formData.prescriptions]
    updated[index] = { ...updated[index], [field]: value }
    setFormData((prev) => ({ ...prev, prescriptions: updated }))
  }

  const addMedication = () => {
    setFormData((prev) => ({
      ...prev,
      prescriptions: [...prev.prescriptions, { name: "", rxNumber: "" }],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setError("")
  setSubmitted(false)

  if (!formData.firstName.trim()) return setError("First name is required")
  if (!formData.lastName.trim()) return setError("Last name is required")
  if (!formData.phone.trim()) return setError("Phone is required")
  if (!formData.birthday.trim()) return setError("Date of birth is required")
  if (!formData.previousPharmacyName.trim())
    return setError("Previous pharmacy name is required")
  if (!formData.previousPharmacyPhone.trim())
    return setError("Previous pharmacy address is required")
  if (!formData.termsAgreed)
    return setError("Please accept Terms of Service")

  if (!formData.transferAllMedications) {
    const hasValid = formData.prescriptions.some(
      (m) => m.name.trim() && m.rxNumber.trim()
    )
    if (!hasValid)
      return setError("Each prescription must have name and Rx number")
  }

  const formatPhone = (phone: string) =>
    phone.replace(/[^\d]/g, "")

  const payload = {
    patient: {
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      phone: formatPhone(formData.phone),
      dob: formData.birthday,
    },
    previousPharmacy: {
      name: formData.previousPharmacyName.trim(),
      address: formData.previousPharmacyPhone.trim(),
    },
    prescriptions: formData.transferAllMedications
      ? [
          {
            name: "ALL",
            rxnumber: "ALL",
          },
        ]
      : formData.prescriptions
          .filter((m) => m.name.trim() && m.rxNumber.trim())
          .map((m) => ({
            name: m.name.trim(),
            rxnumber: m.rxNumber.trim(), // 🔥 LOWERCASE (backend-required)
          })),
    notes: formData.notes.trim(),
  }

  try {
    setLoading(true)

    const response = await fetch(
      "https://rxflow-backend.onrender.com/api/mail/transfer",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    )

    const data = await response.json()
    console.log("API RESPONSE:", data)

    if (!response.ok) {
      throw new Error(data?.message || "Request failed")
    }

    setSubmitted(true)
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      birthday: "",
      previousPharmacyName: "",
      previousPharmacyPhone: "",
      transferAllMedications: false,
      prescriptions: [{ name: "", rxNumber: "" }],
      notes: "",
      termsAgreed: false,
    })

    setTimeout(() => setSubmitted(false), 5000)
  } catch (err: any) {
    setError(err.message || "Failed to submit transfer request")
  } finally {
    setLoading(false)
  }
}


  return (
    <div className="relative min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-r from-green-50/90 via-green-50/80 to-green-50/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-100/20 to-emerald-200/40" />

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Transfer a Prescription</h1>
          <p className="text-lg text-gray-600">Complete our secure form to transfer your prescriptions to us</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 sm:p-12">
          {submitted ? (
            <div className="text-center py-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Request Sent!</h2>
              <p className="text-gray-600">We received your transfer request. Our team will contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Patient Details</h2>
                <p className="text-gray-600 mb-6">Tell us about you so we can verify with your old pharmacy</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
                  <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                    <span className="px-3 py-3 bg-gray-100 border-r border-gray-300 text-sm font-medium text-gray-700">🇺🇸 +1</span>
                    <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleInputChange} className="flex-1 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500" required />
                  </div>

                  <input type="date" name="birthday" value={formData.birthday} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Previous Pharmacy Info</h2>
                <p className="text-gray-600 mb-6">Tell us about your old pharmacy so we can transfer your prescriptions</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" name="previousPharmacyName" placeholder="Pharmacy Name" value={formData.previousPharmacyName} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
                  <input type="text" name="previousPharmacyPhone" placeholder="Pharmacy address" value={formData.previousPharmacyPhone} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Prescriptions</h2>
                <p className="text-gray-600 mb-6">Add medication name + Rx number (optional)</p>

                <div className="space-y-4">
                  {formData.prescriptions.map((med, index) => (
                    <div key={index} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input type="text" placeholder="Medication Name" value={med.name} onChange={(e) => handleMedicationChange(index, "name", e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
                      <input type="text" placeholder="Rx Number" value={med.rxNumber} onChange={(e) => handleMedicationChange(index, "rxNumber", e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
                    </div>
                  ))}

                  <div className="mt-6 flex items-center gap-3">
                    <input type="checkbox" id="transferAllMedications" checked={formData.transferAllMedications} onChange={(e) => handleCheckboxChange("transferAllMedications", e.target.checked)} className="w-5 h-5 cursor-pointer" />
                    <label htmlFor="transferAllMedications" className="text-gray-700 cursor-pointer">Transfer all of my prescriptions</label>
                  </div>

                  {!formData.transferAllMedications && (
                    <button type="button" onClick={addMedication} className="mt-4 px-4 py-2 text-green-700 border border-green-700 rounded-lg hover:bg-green-50 transition-colors">
                      + Add Another Medication
                    </button>
                  )}
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Notes for Pharmacy (Optional)</h2>
                <p className="text-gray-600 mb-6">Add any notes (insurance, preferences, etc.)</p>

                <textarea name="notes" value={formData.notes} onChange={handleInputChange} placeholder="Enter any additional notes..." rows={6} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none" />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                  <button type="button" onClick={() => setShowTermsModal(true)} className="underline decoration-dotted hover:text-blue-600 transition">
                    Terms of Service
                  </button>{" "}
                  <span className="text-red-500">*</span>
                </h3>

                <div className="flex items-start gap-3 mb-4">
                  <input type="checkbox" id="termsAgreed" checked={formData.termsAgreed} readOnly className="w-5 h-5 cursor-pointer mt-1" />
                  <label htmlFor="termsAgreed" onClick={() => setShowTermsModal(true)} className="text-gray-700 cursor-pointer underline decoration-dotted hover:text-blue-600">
                    I agree to the Terms and Conditions and Privacy Policy
                  </label>
                </div>

                {error && <p className="text-red-600 font-medium mb-4">{error}</p>}

                <button type="submit" disabled={!formData.termsAgreed || loading} className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors">
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {showTermsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white w-full max-w-3xl rounded-xl shadow-xl overflow-hidden">

            <div className="flex justify-between items-center px-6 py-4 border-b">
              <h2 className="text-xl font-bold text-gray-900">Terms of Service & Privacy Policy</h2>
              <button onClick={() => { setShowTermsModal(false); setModalAgreed(false) }} className="text-gray-500 hover:text-gray-800 text-2xl leading-none">×</button>
            </div>

           <div className="px-6 py-4 max-h-[60vh] overflow-y-auto text-sm text-gray-700 space-y-4 leading-relaxed">

  <p>
    By submitting a prescription transfer request, you confirm that you are the patient or an authorized representative
    and that all information provided is accurate and complete. Prescription transfers are subject to federal law,
    New Jersey Board of Pharmacy regulations, DEA requirements, prescriber authorization rules, and controlled substance
    regulations. Not all prescriptions are eligible for transfer.
  </p>

  <p>
    You authorize this pharmacy to contact your previous pharmacy and prescriber, request and receive prescription
    information, and store your data as required by law. All transfers are subject to pharmacist review and professional
    judgment. We may decline any transfer that is unsafe, invalid, incomplete, or non-compliant.
  </p>

  <p>
    Insurance coverage, copays, deductibles, and non-covered charges are determined by your plan. You are financially
    responsible for all charges not covered by insurance. Claims may be reversed or reprocessed if required by audits
    or eligibility reviews.
  </p>

  <p>
    Transfer processing time depends on the responsiveness of the previous pharmacy, prescriber availability, insurance
    processing, and regulatory requirements. Same-day completion is not guaranteed.
  </p>

  <p>
    If delivery services are used, delivery is a convenience service and not a guarantee. We are not responsible for
    loss, theft, or damage after confirmed delivery. Identification and signature may be required.
  </p>

  <p>
    By providing your contact information, you consent to receive calls, texts, voicemails, and emails regarding your
    prescriptions, refills, clinical questions, insurance issues, and payments. Message and data rates may apply.
  </p>

  <p>
    We collect, use, and protect your personal and health information in compliance with HIPAA, the HITECH Act,
    New Jersey privacy laws, CMS, DEA, and Board of Pharmacy requirements. Your information may be shared with
    prescribers, pharmacies, insurers, PBMs, government agencies, auditors, and service providers as permitted by law.
    We do not sell your personal or health information.
  </p>

  <p>
    To the fullest extent permitted by law, this pharmacy is not liable for delays or failures caused by third parties.
    Our liability is limited to the amount paid for the transferred prescription. We reserve the right to refuse or
    discontinue service if fraud, abuse, or misuse is suspected.
  </p>

  <p>
    These Terms are governed by the laws of the State of New Jersey. By proceeding, you acknowledge that you have read,
    understood, and agree to these Terms & Conditions and the Privacy Policy.
  </p>

</div>


            <div className="px-6 py-4 border-t">
              <div className="flex items-start gap-3 mb-4">
                <input type="checkbox" id="modalAgreed" checked={modalAgreed} onChange={(e) => setModalAgreed(e.target.checked)} className="w-5 h-5 mt-1 cursor-pointer" />
                <label htmlFor="modalAgreed" className="text-gray-800 cursor-pointer">I have read and agree to all Terms & Conditions and Privacy Policy</label>
              </div>

              <div className="flex justify-end gap-3">
                <button type="button" onClick={() => { setShowTermsModal(false); setModalAgreed(false) }} className="px-4 py-2 rounded-lg border text-gray-700 hover:bg-gray-100">Cancel</button>
                <button type="button" disabled={!modalAgreed} onClick={() => { setFormData((prev) => ({ ...prev, termsAgreed: true })); setShowTermsModal(false) }} className="px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed">
                  Confirm & Agree
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  )
}
