import React, { ReactNode } from "react";
import Image from "next/image";
import service3 from './service3.jpg';


export default function ServicesPage() {

  return (
  <div className="bg-white font-sans text-slate-800">
    {/* --- Hero Section --- */}
    <section className="bg-gradient-to-b from-green-50 to-white py-16 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">Our Services</h1>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        Dedicated to providing comprehensive, patient-focused care with a commitment to excellence.
      </p>
    </section>

    <div className="max-w-6xl mx-auto px-6 space-y-20 pb-20">
      
      {/* --- Full-Service Pharmacy Section --- */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-green-600 font-semibold tracking-wide uppercase text-sm">Comprehensive Care</span>
          <h2 className="text-3xl font-bold mt-2 mb-6">Full-Service Pharmacy</h2>
          <p className="text-slate-600 mb-6">
            At Life Care Pharmacy, we go beyond standard prescriptions to provide holistic health support.
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
        </div>
        <div className="bg-green-100 rounded-2xl min-w-[200px] h-5/6 flex items-center justify-center border-2 border-green-50">

           <Image src={service3} alt="Full-Service Pharmacy" className="rounded-2xl object-cover h-full w-full" />
        </div>    </section>

      {/* --- Compounding Medications Section (Cards Style) --- */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Compounding Medications</h2>
          <p className="text-slate-600 mt-4 max-w-3xl mx-auto">
            We offer custom solutions tailored to meet the unique needs of each patient using high-quality ingredients and strict quality standards.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border border-slate-100 rounded-xl bg-slate-50 hover:shadow-md transition-shadow">
            <h3 className="font-bold text-green-700 mb-3">Custom Formulations</h3>
            <ul className="text-sm space-y-2 text-slate-600">
              <li>• Hard-to-find strengths</li>
              <li>• Customized creams & gels</li>
              <li>• Oral liquids & capsules</li>
            </ul>
          </div>
          <div className="p-6 border border-slate-100 rounded-xl bg-slate-50 hover:shadow-md transition-shadow">
            <h3 className="font-bold text-green-700 mb-3">Specialty Forms</h3>
            <ul className="text-sm space-y-2 text-slate-600">
              <li>• Suppositories</li>
              <li>• Specialty dosage forms</li>
              <li>• Allergy-friendly (dye-free)</li>
            </ul>
          </div>
          <div className="p-6 border border-slate-100 rounded-xl bg-slate-50 hover:shadow-md transition-shadow">
            <h3 className="font-bold text-green-700 mb-3">Veterinary Care</h3>
            <ul className="text-sm space-y-2 text-slate-600">
              <li>• Compounding for pets</li>
              <li>• Flavoring adjustments</li>
              <li>• Custom animal dosages</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- Specialty Medications Section --- */}
      <section className="bg-green-800 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4">Specialty Medications</h2>
          <p className="text-green-100 mb-8 max-w-5xl">
            We specialize in medications for complex, chronic, and high-cost conditions, providing 
            ongoing support throughout your entire therapy.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Autoimmune Conditions", "Hormone Therapy", "Chronic Pain Management",
              "Metabolic Disorders", "Mental Health", "Specialty Injectables"
            ].map((spec) => (
              <div key={spec} className="bg-green-700/50 flex justify-center items-center backdrop-blur-sm border border-green-600 p-4 rounded-lg">
                <p className="font-medium text-white">{spec}</p>
              </div>
            ))}
          </div>
          
          <p className="mt-8 text-sm text-green-200 italic">
            * We work closely with prescribers and insurance providers to ensure smooth coordination.
          </p>
        </div>
        {/* Decorative Circle */}
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-green-700 rounded-full opacity-50" />
      </section>

    </div>
  </div>
);
}