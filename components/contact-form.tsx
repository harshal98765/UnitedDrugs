"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, HelpCircle } from "lucide-react"
import Link from "next/link"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSubmitted(false)

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      setError("All fields are required")
      return
    }

    try {
      setLoading(true)

      const response = await fetch(
        "https://rxflow-backend-80te.onrender.com/api/mail/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data?.message || "Failed to send message.")
      }

      setSubmitted(true)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      })

      setTimeout(() => setSubmitted(false), 5000)
    } catch (err: any) {
      setError(err?.message || "Something went wrong.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative py-20 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-50/90 via-green-50/80 to-green-50/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-100/20 to-emerald-200/40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ================= CONTACT INFO ================= */}
          <div className="animate-slideInUp">

            <h2 className="hero-title serif-heading text-foreground leading-tight mb-8">
              Get In{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Touch
              </span>
            </h2>

            <div className="space-y-8">

              {/* PHONE */}
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Phone</h3>
                  <p className="text-muted-foreground">+1 201-425-1187</p>
                  <p className="text-sm text-muted-foreground">
                    Available on extended hours
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Mail className="text-secondary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Email</h3>
                  <p className="text-muted-foreground">
                    Lifecarepharmacyllc@gmail.com
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Response within 2 hours
                  </p>
                </div>
              </div>

              {/* LOCATION */}
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <MapPin className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Location
                  </h3>
                  <p className="text-muted-foreground">
                    3199 John F. Kennedy Blvd
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Jersey City, NJ 07306
                  </p>
                </div>
              </div>

              {/* ✅ FAQ BUTTON */}
              <Link href="/faqs">
                <button className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-primary-foreground bg-gradient-to-r from-primary to-secondary shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <HelpCircle className="w-5 h-5" />
                  Visit Our FAQs
                </button>
              </Link>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="animate-slideInUp" style={{ animationDelay: "0.2s" }}>
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-border">

              {submitted ? (
                <div className="animate-fadeInScale text-center py-12">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-700/20 mb-6">
                    <Mail className="text-blue-700" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  {error && (
                    <p className="text-destructive text-sm font-medium animate-slideInUp">
                      {error}
                    </p>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-green-900 focus:ring-2 focus:ring-green-900/20 transition-all"
                    />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-green-900 focus:ring-2 focus:ring-green-900/20 transition-all"
                    />
                  </div>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-green-900 focus:ring-2 focus:ring-green-900/20 transition-all"
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-green-900 focus:ring-2 focus:ring-green-900/20 transition-all"
                  />

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-green-900 focus:ring-2 focus:ring-green-900/20 transition-all resize-none"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="
                      w-full
                      bg-green-900
                      text-white
                      font-bold
                      py-3
                      px-6
                      rounded-lg
                      hover:bg-green-800
                      transition-all
                      duration-300
                      transform
                      hover:scale-105
                      active:scale-95
                      disabled:opacity-60
                    "
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
