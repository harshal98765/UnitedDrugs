"use client"

import type React from "react"
import { useState } from "react"
import { CheckCircle, Lock, Zap, Heart } from "lucide-react"

export default function HeroSection() {
  const [rxNumber, setRxNumber] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setError("")
  setSubmitted(false)

  const rxList = rxNumber
    .split(/[\s,]+/)
    .map((rx) => rx.trim())
    .filter(Boolean)

  if (rxList.length === 0) {
    setError("Please enter at least one RX number")
    return
  }

  try {
    setLoading(true)

    const response = await fetch("https://rxflow-backend-80te.onrender.com/api/mail/rx", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rxNumbers: rxList,
      }),
    })

    const data = await response.json()

    console.log("RX API STATUS:", response.status)
    console.log("RX API RESPONSE:", data)

    if (!response.ok) {
      throw new Error(data?.message || "Server error. Please try again.")
    }

    // SUCCESS
    setSubmitted(true)
    setRxNumber("")

    setTimeout(() => {
      setSubmitted(false)
    }, 5000)

  } catch (err: any) {
    console.error("RX API Error:", err)
    setError(err?.message || "Failed to submit RX numbers. Please try again.")
  } finally {
    setLoading(false)
  }
}


  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 pb-20 overflow-hidden"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/young-female-doctor-white-medical-suit-with-stethoscope-white-protective-mask-writing-down-notes-white_140725-16510.jpg?semt=ais_hybrid&w=740&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-green-50/90 via-green-50/80 to-green-50/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-100/20 to-emerald-200/40" />

      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* RIGHT FORM – FIRST ON MOBILE */}
          <div className="order-1 lg:order-2 animate-slideInRight">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-border/50 backdrop-blur-sm hover:shadow-3xl transition-shadow duration-500">
              <div className="mb-8">
                <h2 className="text-3xl font-bold serif-heading text-foreground mb-3">
                  Submit Your RX
                </h2>
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
              </div>

              {submitted ? (
                <div className="animate-fadeInScale bg-gradient-to-br from-secondary/5 to-accent/5 border-2 border-secondary rounded-2xl p-8 text-center space-y-4">
                  <div className="inline-block p-3 bg-secondary/10 rounded-full">
                    <CheckCircle className="w-12 h-12 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold serif-heading text-foreground">
                    Success!
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Your prescription has been received and is being processed. Check your email for updates.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">
                      Example RX Numbers (comma separated)
                    </label>
                    <input
                      type="text"
                      value="eg: 483920, 592011"
                      readOnly
                      className="w-full px-6 py-5 text-lg font-semibold text-center border-2 border-border bg-muted rounded-2xl tracking-wider text-muted-foreground"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">
                      Your RX Number
                    </label>
                    <input
                      type="text"
                      value={rxNumber}
                      onChange={(e) => {
                        setRxNumber(e.target.value)
                        setError("")
                      }}
                      placeholder="12345678, RX982341"
                      className="w-full px-6 py-5 text-1xl font-bold tracking-widest text-center border-2 border-border bg-input rounded-2xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300 placeholder:text-muted-foreground/30"
                    />

                    {error && (
                      <p className="text-destructive text-sm mt-3 animate-slideInUp font-medium">
                        {error}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-primary to-primary/90 text-primary-foreground font-bold py-5 px-6 rounded-2xl hover:shadow-lg hover:-translate-y-1 active:translate-y-0 transition-all duration-300 text-lg disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Submitting..." : "Request a Refill"}
                  </button>

                  <div className="pt-6 border-t border-border space-y-2">
                    <p className="text-xs text-muted-foreground text-center">
                      ✓ Military-grade encryption
                    </p>
                    <p className="text-xs text-muted-foreground text-center">
                      ✓ No data sharing • Private & Secure
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* LEFT CONTENT – SECOND ON MOBILE */}
          <div className="order-2 lg:order-1 animate-slideInLeft space-y-8">
            <div className="inline-flex items-center gap-2 bg-accent/15 px-4 py-2 rounded-full border border-accent/30">
              <Heart className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">
                Trusted Healthcare Partner
              </span>
            </div>

            <h1 className="hero-title serif-heading text-foreground leading-tight">
              Your Health,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Our Priority
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-md">
              Fast, secure, and professional pharmacy services in Jersey City, NJ. Submit your prescription online for care and precise fulfillment.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4 animate-slideInUp">
                <div className="mt-1 p-2 bg-primary/10 rounded-lg">
                  <Lock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">100% Secure</p>
                  <p className="text-sm text-muted-foreground">HIPAA compliant & encrypted</p>
                </div>
              </div>

              <div className="flex items-start gap-4 animate-slideInUp">
                <div className="mt-1 p-2 bg-secondary/10 rounded-lg">
                  <Zap className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Fast Processing</p>
                  <p className="text-sm text-muted-foreground">Same-day delivery available</p>
                </div>
              </div>

              <div className="flex items-start gap-4 animate-slideInUp">
                <div className="mt-1 p-2 bg-accent/10 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Licensed Pharmacy</p>
                  <p className="text-sm text-muted-foreground">State certified professionals</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
