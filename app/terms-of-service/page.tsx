import { FileText, Gavel, ShieldCheck, AlertTriangle } from "lucide-react"

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero */}
      <section className="border-b bg-white/90 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B2C4D]">
            Terms of Service
          </h1>
          <p className="mt-4 max-w-2xl text-gray-600">
            Terms and conditions governing the use of our pharmacy services, platforms,
            and prescription processing systems.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm text-blue-800">
            <Gavel className="h-4 w-4" />
            Governed by New Jersey Law
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left – Overview */}
        <aside className="lg:sticky lg:top-24 h-fit rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
          <h3 className="font-semibold text-[#0B2C4D] mb-4">Key Terms Overview</h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-blue-900" />
              User Responsibilities
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-blue-700" />
              Regulatory Compliance
            </li>
            <li className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-blue-700" />
              Service Limitations
            </li>
          </ul>

          <div className="mt-6 rounded-xl bg-blue-50 p-4 text-xs text-gray-600">
            Last updated:{" "}
            <span className="font-medium text-[#0B2C4D]">
              {new Date().toLocaleDateString()}
            </span>
          </div>
        </aside>

        {/* Right – Main Terms */}
        <div className="lg:col-span-2 space-y-8">
          <div className="rounded-2xl border border-blue-100 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-[#0B2C4D] mb-3">
              1. Eligibility & User Responsibility
            </h2>
            <p className="text-gray-700 leading-relaxed">
              By using our pharmacy services or submitting any prescription request, you confirm
              that you are the patient or an authorized representative. You are responsible for
              ensuring that all information provided is accurate, current, and complete.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-[#0B2C4D] mb-3">
              2. Regulatory & Legal Compliance
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Prescription services are governed by applicable federal and state laws, including
              New Jersey Board of Pharmacy regulations, DEA requirements, prescriber authorization
              rules, and controlled substance regulations. All prescriptions are subject to
              pharmacist verification and professional judgment.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-[#0B2C4D] mb-3">
              3. Service Limitations
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to decline, delay, or cancel any request or service that is
              unsafe, incomplete, invalid, suspected of fraud, or non-compliant with applicable
              regulations or professional standards.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-[#0B2C4D] mb-3">
              4. No Medical Advice Disclaimer
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Information provided through our website or digital platforms does not constitute
              medical advice. Always consult a licensed healthcare provider regarding diagnosis,
              treatment, or medication-related decisions.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-[#0B2C4D] mb-3">
              5. Governing Law
            </h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms of Service are governed by and construed in accordance with the laws
              of the State of New Jersey, without regard to conflict-of-law principles.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-[#0B2C4D] mb-3">
              Questions About These Terms?
            </h2>
            <p className="text-gray-700">
              For questions regarding these Terms of Service, please contact your local pharmacy
              or our compliance team.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}