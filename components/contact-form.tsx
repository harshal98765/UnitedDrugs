"use client";

import type React from "react";
import { useState } from "react";
import { Mail, Phone, MapPin, HelpCircle, Send } from "lucide-react";
import Link from "next/link";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitted(false);

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      setError("All fields are required");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "https://rxflow-backend-1-ky18.onrender.com/api/mail/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();
      if (!response.ok)
        throw new Error(data?.message || "Failed to send message.");

      setSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (err: any) {
      setError(err?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-28 bg-gradient-to-b from-white via-[#F4F9FF] to-white overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute -top-24 -left-24 w-[420px] h-[420px] bg-blue-100/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-[420px] h-[420px] bg-[#1E5FA8]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Contact <span className="text-blue-700">Our Pharmacy Team</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Need assistance with prescriptions, refills, or delivery? Our
            support team is here to help.
          </p>
        </div>

        {/* LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* LEFT – SUPPORT HUB */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm hover:shadow-xl transition">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Call Us</p>
                  <p className="text-sm text-slate-600">(973) 482-9300</p>
                  <p className="text-xs text-slate-500">
                    Extended hours support
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm hover:shadow-xl transition">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Email Support</p>
                  <p className="text-sm text-slate-600">Udrugs507@gmail.com</p>
                  <p className="text-xs text-slate-500">
                    Replies within 2 hours
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm hover:shadow-xl transition">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Visit Us</p>
                  <p className="text-sm text-slate-600">507 Central Ave</p>
                  <p className="text-xs text-slate-500">
                    Newark, NJ 07107, United States
                  </p>
                </div>
              </div>
            </div>

            <Link href="/faqs">
              <button className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-white bg-[#0B2C4D] hover:bg-[#143A66] hover:shadow-lg transition">
                <HelpCircle className="w-5 h-5" />
                Visit FAQs
              </button>
            </Link>
          </div>

          {/* RIGHT – FORM PANEL */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl p-10">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-6">
                    <Mail className="text-blue-700" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Message Sent Successfully
                  </h3>
                  <p className="text-slate-600">
                    Our pharmacy team will reach out shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <p className="text-red-600 text-sm font-medium">{error}</p>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      className="input-base"
                    />
                    <input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      className="input-base"
                    />
                  </div>

                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="input-base"
                  />

                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="input-base"
                  />

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    rows={5}
                    className="input-base resize-none"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#0B2C4D] text-white font-bold py-4 rounded-xl hover:bg-[#143A66] hover:shadow-lg transition flex items-center justify-center gap-2"
                  >
                    {loading ? "Sending..." : "Send Message"}
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Input base style */}
      <style jsx>{`
        .input-base {
          width: 100%;
          padding: 14px 16px;
          border-radius: 10px;
          border: 1px solid #e2e8f0;
          outline: none;
          font-size: 15px;
          transition: all 0.2s ease;
        }
        .input-base:focus {
          border-color: #1e5fa8;
          box-shadow: 0 0 0 3px rgba(30, 95, 168, 0.15);
        }
      `}</style>
    </section>
  );
}
