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
    previousPharmacyNumber: "",
    transferAll: false,
    medications: [{ name: "", rxNumber: "" }],
    notes: "",
    termsAgreed: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }))
  }

  const handleMedicationChange = (index: number, field: string, value: string) => {
    const updatedMeds = [...formData.medications]
    updatedMeds[index] = { ...updatedMeds[index], [field]: value }
    setFormData((prev) => ({
      ...prev,
      medications: updatedMeds,
    }))
  }

  const addMedication = () => {
    setFormData((prev) => ({
      ...prev,
      medications: [...prev.medications, { name: "", rxNumber: "" }],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  return (
    <div className="relative min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-50/90 via-green-50/80 to-green-50/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-100/20 to-emerald-200/40" />

      {/* Content */}
      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Transfer a Prescription</h1>
          <p className="text-lg text-gray-600">Complete our secure form to transfer your prescriptions to us</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 sm:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Patient Details Section */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Patient Details</h2>
              <p className="text-gray-600 mb-6">
                Tell us about you so that we can verify who you are with your old pharmacy
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                  <span className="px-3 py-3 bg-gray-100 border-r border-gray-300 text-sm font-medium text-gray-700">
                    🇮🇳 +91
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <input
                  type="date"
                  name="birthday"
                  value={formData.birthday}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
            </div>

            {/* Previous Pharmacy Info Section */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Previous Pharmacy Info</h2>
              <p className="text-gray-600 mb-6">Tell us about your old pharmacy so we can transfer your medications</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="previousPharmacyName"
                  placeholder="Pharmacy Name"
                  value={formData.previousPharmacyName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
                <input
                  type="text"
                  name="previousPharmacyNumber"
                  placeholder="Pharmacy Number"
                  value={formData.previousPharmacyNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
            </div>

            {/* Prescriptions Section */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Prescriptions</h2>
              <p className="text-gray-600 mb-6">
                Add the medication name and Rx number for all that you'd like to transfer
              </p>

              <div className="mb-6 flex items-center gap-3">
                <input
                  type="checkbox"
                  id="transferAll"
                  checked={formData.transferAll}
                  onChange={(e) => handleCheckboxChange("transferAll", e.target.checked)}
                  className="w-5 h-5 cursor-pointer"
                />
                <label htmlFor="transferAll" className="text-gray-700 cursor-pointer">
                  Transfer all of my medications
                </label>
              </div>

              {!formData.transferAll && (
                <div className="space-y-4">
                  {formData.medications.map((med, index) => (
                    <div key={index} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Medication Name"
                        value={med.name}
                        onChange={(e) => handleMedicationChange(index, "name", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                      <input
                        type="text"
                        placeholder="Rx Number"
                        value={med.rxNumber}
                        onChange={(e) => handleMedicationChange(index, "rxNumber", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addMedication}
                    className="mt-4 px-4 py-2 text-green-600 border border-green-600 rounded-lg hover:bg-green-50 transition-colors"
                  >
                    + Add Another Medication
                  </button>
                </div>
              )}
            </div>

            {/* Notes Section */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Notes for Pharmacy (Optional)</h2>
              <p className="text-gray-600 mb-6">
                Verify your insurance here or in the pharmacy when you get your medication
              </p>

              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                placeholder="Enter any additional notes..."
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
              />
            </div>

            {/* Terms of Service Section */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                Terms of Service <span className="text-red-500">*</span>
              </h3>

              <div className="flex items-start gap-3 mb-8">
                <input
                  type="checkbox"
                  id="termsAgreed"
                  checked={formData.termsAgreed}
                  onChange={(e) => handleCheckboxChange("termsAgreed", e.target.checked)}
                  className="w-5 h-5 cursor-pointer mt-1"
                  required
                />
                <label htmlFor="termsAgreed" className="text-gray-700 cursor-pointer">
                  I agree to the Terms and Conditions and Privacy Policy
                </label>
              </div>

              <button
                type="submit"
                disabled={!formData.termsAgreed}
                className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
