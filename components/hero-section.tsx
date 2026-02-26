"use client";

import type React from "react";
import { useState } from "react";
import {
  CheckCircle,
  Lock,
  Zap,
  Heart,
  ShieldCheck,
  ClipboardList,
} from "lucide-react";

export default function HeroSection() {
  const [rxNumber, setRxNumber] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitted(false);

    const rxList = rxNumber
      .split(/[\s,]+/)
      .map((rx) => rx.trim())
      .filter(Boolean);

    if (rxList.length === 0) {
      setError("Please enter at least one RX number");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "https://rxflow-backend-1-ky18.onrender.com/api/mail/rx",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ rxNumbers: rxList }),
        },
      );

      const data = await response.json();
      if (!response.ok)
        throw new Error(data?.message || "Server error. Please try again.");

      setSubmitted(true);
      setRxNumber("");
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err: any) {
      setError(
        err?.message || "Failed to submit RX numbers. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8fbff] via-white to-[#eef6ff] overflow-hidden px-4 py-16">
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(#0f172a 1px, transparent 1px),
            linear-gradient(to right, #0f172a 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Soft glow */}
      <div className="absolute -top-40 -right-40 w-[420px] h-[420px] bg-blue-200 rounded-full blur-[140px] opacity-40" />
      <div className="absolute -bottom-40 -left-40 w-[420px] h-[420px] bg-cyan-200 rounded-full blur-[140px] opacity-30" />

      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        {/* <div className="space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mx-auto lg:mx-0">
            <ShieldCheck className="w-4 h-4 text-blue-700" />
            <span className="text-xs md:text-sm font-medium text-blue-800">
              HIPAA Compliant • Secure Transmission
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            Prescription Refills,
            <br />
            <span className="text-blue-700">Handled With Care</span>
          </h1>

          <p className="text-base md:text-lg text-slate-700 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Submit your prescription number online. Our licensed pharmacists in
            Jersey City will process your refill securely and accurately.
          </p>

          <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-xl w-full max-w-lg mx-auto">
            <div className="mb-6 text-center lg:text-left">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                Submit Your Prescription
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Enter one or more RX numbers separated by commas
              </p>
            </div>

            {submitted ? (
              <div className="text-center space-y-4 py-10">
                <CheckCircle className="w-14 h-14 text-green-600 mx-auto" />
                <h3 className="text-lg md:text-xl font-bold text-slate-900">
                  Submission Successful
                </h3>
                <p className="text-slate-600 text-sm">
                  Your request has been securely received by our pharmacy team.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  readOnly
                  value="483920, 592011"
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 text-center text-slate-500 bg-slate-50 text-sm"
                />

                <input
                  type="text"
                  value={rxNumber}
                  onChange={(e) => {
                    setRxNumber(e.target.value);
                    setError("");
                  }}
                  placeholder="Enter RX numbers separated by commas"
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 text-center font-semibold tracking-wide focus:outline-none focus:ring-2 focus:ring-blue-600"
                />

                {error && (
                  <p className="text-red-600 text-sm text-center">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-700 text-white font-semibold py-3 rounded-xl hover:bg-blue-800 transition disabled:opacity-60"
                >
                  {loading ? "Submitting..." : "Request Refill"}
                </button>

                <p className="text-[11px] text-slate-500 text-center">
                  Your information is transmitted securely and handled in
                  compliance with HIPAA.
                </p>
              </form>
            )}
          </div>
        </div> */}
        <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-xl w-full max-w-lg mx-auto">
          <div className="mb-6 text-center lg:text-left">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900">
              Submit Your Prescription
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Enter one or more RX numbers separated by commas
            </p>
          </div>

          {submitted ? (
            <div className="text-center space-y-4 py-10">
              <CheckCircle className="w-14 h-14 text-green-600 mx-auto" />
              <h3 className="text-lg md:text-xl font-bold text-slate-900">
                Submission Successful
              </h3>
              <p className="text-slate-600 text-sm">
                Your request has been securely received by our pharmacy team.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                readOnly
                value="483920, 592011"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 text-center text-slate-500 bg-slate-50 text-sm"
              />

              <input
                type="text"
                value={rxNumber}
                onChange={(e) => {
                  setRxNumber(e.target.value);
                  setError("");
                }}
                placeholder="Enter RX numbers separated by commas"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 text-center font-semibold tracking-wide focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              {error && (
                <p className="text-red-600 text-sm text-center">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-700 text-white font-semibold py-3 rounded-xl hover:bg-blue-800 transition disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Request Refill"}
              </button>

              <p className="text-[11px] text-slate-500 text-center">
                Your information is transmitted securely and handled in
                compliance with HIPAA.
              </p>
            </form>
          )}
        </div>

        {/* RIGHT FORM */}
        {/* <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-xl w-full max-w-lg mx-auto">
          <div className="mb-6 text-center lg:text-left">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900">
              Submit Your Prescription
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Enter one or more RX numbers separated by commas
            </p>
          </div>

          {submitted ? (
            <div className="text-center space-y-4 py-10">
              <CheckCircle className="w-14 h-14 text-green-600 mx-auto" />
              <h3 className="text-lg md:text-xl font-bold text-slate-900">
                Submission Successful
              </h3>
              <p className="text-slate-600 text-sm">
                Your request has been securely received by our pharmacy team.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                readOnly
                value="483920, 592011"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 text-center text-slate-500 bg-slate-50 text-sm"
              />

              <input
                type="text"
                value={rxNumber}
                onChange={(e) => {
                  setRxNumber(e.target.value);
                  setError("");
                }}
                placeholder="Enter RX numbers separated by commas"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 text-center font-semibold tracking-wide focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              {error && (
                <p className="text-red-600 text-sm text-center">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-700 text-white font-semibold py-3 rounded-xl hover:bg-blue-800 transition disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Request Refill"}
              </button>

              <p className="text-[11px] text-slate-500 text-center">
                Your information is transmitted securely and handled in
                compliance with HIPAA.
              </p>
            </form>
          )}
        </div> */}
        <div className="space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mx-auto lg:mx-0">
            <ShieldCheck className="w-4 h-4 text-blue-700" />
            <span className="text-xs md:text-sm font-medium text-blue-800">
              HIPAA Compliant • Secure Transmission
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            Prescription Refills,
            <br />
            <span className="text-blue-700">Handled With Care</span>
          </h1>

          <p className="text-base md:text-lg text-slate-700 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Submit your prescription number online. Our licensed pharmacists in
            Jersey City will process your refill securely and accurately.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {[
              {
                icon: Lock,
                title: "Secure & Private",
                desc: "HIPAA compliant handling",
              },
              {
                icon: ClipboardList,
                title: "Pharmacist Reviewed",
                desc: "Licensed verification",
              },
              {
                icon: Zap,
                title: "Fast Processing",
                desc: "Same-day when available",
              },
              {
                icon: Heart,
                title: "Patient-Centered",
                desc: "Local pharmacy care",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm text-left"
                >
                  <Icon className="text-blue-700 mb-2" />
                  <p className="font-semibold text-slate-900 text-sm">
                    {item.title}
                  </p>
                  <p className="text-xs text-slate-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
