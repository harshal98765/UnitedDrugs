import { ShieldCheck, Lock, Share2, FileText } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero */}
      <section className="border-b bg-white/90 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B2C4D]">
            Privacy Policy
          </h1>
          <p className="mt-4 max-w-2xl text-gray-600">
            How we collect, use, protect, and share your personal and health information in
            compliance with HIPAA and applicable laws.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm text-blue-800">
            <ShieldCheck className="h-4 w-4" />
            HIPAA & HITECH Compliant
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left – Navigation / Highlights */}
        <aside className="lg:sticky lg:top-24 h-fit rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
          <h3 className="font-semibold text-[#0B2C4D] mb-4">Policy Overview</h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-blue-900" />
              Data Protection & Security
            </li>
            <li className="flex items-center gap-2">
              <Share2 className="h-4 w-4 text-blue-700" />
              Permitted Disclosures
            </li>
            <li className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-blue-700" />
              Your Rights
            </li>
          </ul>

          <div className="mt-6 rounded-xl bg-blue-50 p-4 text-xs text-gray-600">
            Last updated:{" "}
            <span className="font-medium text-[#0B2C4D]">
              {new Date().toLocaleDateString()}
            </span>
          </div>
        </aside>

        {/* Right – Main Policy Content */}
        <div className="lg:col-span-2 space-y-8">
          {[
            {
              title: "1. Information We Collect",
              content:
                "We collect personal and protected health information (PHI) necessary to provide pharmacy services, including prescription processing, clinical care, billing, insurance coordination, and regulatory compliance. This may include your name, date of birth, contact details, prescription details, and insurance information.",
            },
            {
              title: "2. How We Use Your Information",
              list: [
                "Process and dispense prescriptions",
                "Provide clinical and pharmaceutical care",
                "Coordinate with prescribers and insurers",
                "Meet legal, regulatory, and audit requirements",
              ],
            },
            {
              title: "3. Information Sharing",
              content:
                "Your information may be shared with prescribers, pharmacies, PBMs, insurance plans, Medicare, Medicaid, auditors, and regulatory authorities as permitted by law. All third parties are required to maintain confidentiality and security of your data.",
            },
            {
              title: "4. Data Protection & Safeguards",
              content:
                "We implement administrative, physical, and technical safeguards to protect your data from unauthorized access, loss, misuse, or disclosure. Access to PHI is restricted to authorized personnel only.",
            },
            {
              title: "5. Your Privacy Rights",
              list: [
                "Request access to your records",
                "Request corrections to inaccurate information",
                "Request restrictions on disclosures",
                "Receive an accounting of disclosures",
              ],
            },
          ].map((section, i) => (
            <div
              key={i}
              className="rounded-2xl border border-blue-100 bg-white p-8 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-[#0B2C4D] mb-3">
                {section.title}
              </h2>

              {section.content && (
                <p className="text-gray-700 leading-relaxed">
                  {section.content}
                </p>
              )}

              {section.list && (
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-[#0B2C4D] mb-3">
              Questions or Concerns?
            </h2>
            <p className="text-gray-700">
              If you have questions about this Privacy Policy or believe your privacy rights
              have been violated, please contact our Privacy Officer or your local pharmacy.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}