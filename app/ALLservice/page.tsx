import React from "react";
import Image from "next/image";
import service3 from './service3.jpg';

export default function ServicesPage() {
  return (
    <div className="bg-white font-sans text-slate-800">
      {/* --- Hero Section --- */}
      <section className="bg-gradient-to-b from-green-50 to-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">Our Services</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Dedicated to providing comprehensive, patient-focused care with a commitment to clinical excellence and convenience.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-6 space-y-20 pb-20">
        
        {/* --- Full-Service Pharmacy Section --- */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-green-600 font-semibold tracking-wide uppercase text-sm">Comprehensive Care</span>
            <h2 className="text-3xl font-bold mt-2 mb-6">Full-Service Pharmacy</h2>
            <p className="text-slate-600 mb-6">
              At Life Care Pharmacy, we handle the heavy lifting for you. From insurance coordination to fast fulfillment, we make managing your health effortless.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Prescription fulfillment", "Compounding services", "Specialty medications", "Vaccinations", "Pain management",
                "Diabetes care", "Mental health", "Women’s health","Hormone therapy","Auto accident prescriptions"
              ].map((item) => (
                <li key={item} className="flex items-center space-x-2 text-slate-700">
                  <span className="h-2 w-2 bg-green-500 rounded-full" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {/* Hassle-Free Transfer Highlight */}
            <div className="mt-8 p-5 bg-green-50 border border-green-100 rounded-xl">
              <h4 className="font-bold text-green-800 text-sm mb-1 uppercase tracking-wider">Simple Prescription Transfers</h4>
              <p className="text-sm text-slate-600">
                Switching is easy. We handle the entire transfer process—no phone calls or hassle required. Usually ready the same day.
              </p>
            </div>
          </div>
          <div className="bg-green-100 rounded-2xl min-w-[200px] h-full flex items-center justify-center border-2 border-green-50 overflow-hidden shadow-sm">
             <Image src={service3} alt="Full-Service Pharmacy" className="rounded-2xl object-cover h-full w-full" />
          </div>
        </section>

        {/* --- High-Impact Convenience Cards --- */}
        <section className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:border-green-200 transition-colors">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">FREE Local Delivery</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We bring your medications directly to your home or office. Market-leading convenience so you never have to rush to the pharmacy.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:border-green-200 transition-colors">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Prior Auth Support</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We work directly with your providers to handle complex authorizations, ensuring you get your therapy approved without the headache.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:border-green-200 transition-colors">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">MedSync Program</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Consolidate all your monthly prescriptions into a single, predictable pickup or delivery date. Simplify your health routine.
            </p>
          </div>
        </section>

        {/* --- Compounding Medications Section --- */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Custom Compounding</h2>
            <p className="text-slate-600 mt-4 max-w-3xl mx-auto">
              Our specialists create custom dosage forms and strengths using high-quality ingredients tailored to your unique biology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border border-slate-100 rounded-xl bg-slate-50 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-green-700 mb-3">Therapeutic Solutions</h3>
              <ul className="text-sm space-y-2 text-slate-600">
                <li>• Customized Creams & Gels</li>
                <li>• GLP-1 / Weight Loss Support</li>
                <li>• Hard-to-find Strength Adjustments</li>
              </ul>
            </div>
            <div className="p-6 border border-slate-100 rounded-xl bg-slate-50 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-green-700 mb-3">Specialty Forms</h3>
              <ul className="text-sm space-y-2 text-slate-600">
                <li>• Pediatric Flavoring</li>
                <li>• Allergy-friendly (Dye/Sugar-free)</li>
                <li>• Suppositories & Oral Liquids</li>
              </ul>
            </div>
            <div className="p-6 border border-slate-100 rounded-xl bg-slate-50 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-green-700 mb-3">Veterinary Care</h3>
              <ul className="text-sm space-y-2 text-slate-600">
                <li>• Compounding for Pets</li>
                <li>• Easy-to-administer Animal Dosages</li>
                <li>• Pet-specific Flavoring</li>
              </ul>
            </div>
          </div>
        </section>

        {/* --- Medication Therapy Management (MTM) Section --- */}
        <section className="py-12 border-y border-slate-100">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-6 rounded-xl text-center">
                  <span className="block text-2xl font-bold text-green-600 font-sans">Free</span>
                  <span className="text-sm text-slate-600">BP & Glucose Checks</span>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl text-center">
                  <span className="block text-2xl font-bold text-green-600 font-sans">Walk-in</span>
                  <span className="text-sm text-slate-600">Flu & COVID Shots</span>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl text-center">
                  <span className="block text-2xl font-bold text-green-600 font-sans">Expert</span>
                  <span className="text-sm text-slate-600">Ask the Pharmacist</span>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl text-center">
                  <span className="block text-2xl font-bold text-green-600 font-sans">SMS</span>
                  <span className="text-sm text-slate-600">Refill Alerts</span>
                </div>
             </div>
             <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-4">Medication Therapy Management</h2>
                <p className="text-slate-600 mb-6">
                  Our clinical team provides comprehensive reviews of your medications to prevent interactions, optimize dosage, and ensure you are achieving the best health outcomes possible.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-semibold shadow-sm">Care Coordination</div>
                  <span className="text-slate-500 text-sm italic underline decoration-green-200">Personalized clinical oversight</span>
                </div>
             </div>
          </div>
        </section>

        {/* --- Specialty Medications Section --- */}
        <section className="bg-green-800 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative shadow-lg">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Specialty Medications</h2>
            <p className="text-green-100 mb-8 max-w-5xl">
              We provide expert support for complex, high-cost, and chronic conditions. Our team ensures you have 
              the clinical guidance and financial coordination needed for specialty therapy.
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Autoimmune Conditions", "Hormone Therapy", "Chronic Pain Management",
                "Metabolic Disorders", "Mental Health / ADHD", "Specialty Injectables"
              ].map((spec) => (
                <div key={spec} className="bg-green-700/50 flex justify-center items-center backdrop-blur-sm border border-green-600 p-4 rounded-lg hover:bg-green-600/50 transition-colors">
                  <p className="font-medium text-white text-center">{spec}</p>
                </div>
              ))}
            </div>
            
            <p className="mt-8 text-sm text-green-200 italic">
              * We coordinate directly with your specialists and insurance providers for seamless care.
            </p>
          </div>
          {/* Decorative Circle */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-green-700 rounded-full opacity-50" />
        </section>

      </div>
    </div>
  );
}