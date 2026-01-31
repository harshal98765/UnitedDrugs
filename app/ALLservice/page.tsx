"use client"

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { 
  Pill, Truck, ShieldCheck, Calendar, Activity, 
  Stethoscope, Microscope, HeartPulse, CheckCircle2, 
  Clock, Sparkles, Syringe, Droplets, Brain, Thermometer, ChevronRight,
  ClipboardList, Heart, Zap
} from "lucide-react";
import service1 from "./service1.jpg"
/**
 * Custom hook for scroll-triggered animations
 */
function useScrollAnimation() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

export default function ServicesPage() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  const specialties = [
    { name: "Autoimmune Conditions", icon: <ShieldCheck className="w-5 h-5" /> },
    { name: "Hormone Therapy", icon: <Droplets className="w-5 h-5" /> },
    { name: "Chronic Pain", icon: <Thermometer className="w-5 h-5" /> },
    { name: "Mental Health / ADHD", icon: <Brain className="w-5 h-5" /> },
    { name: "Metabolic Disorders", icon: <Activity className="w-5 h-5" /> },
    { name: "Specialty Injectables", icon: <Stethoscope className="w-5 h-5" /> },
  ];

  return (
    <div className="bg-white font-sans text-slate-800 overflow-hidden">
      
      {/* --- Modern Hero Section --- */}
      <section className="relative h-[400px] w-full flex items-center justify-center bg-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           <Image src="/1.jpg" alt="Service Hero" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 to-[#D6EBFF]/90" />
        
        <div className="relative text-center px-6 z-10">
          <h1 className="text-5xl md:text-7xl font-black text-white drop-shadow-md">
            Our <span className="text-[#E8F4FF]">Services</span>
          </h1>
          <div className="mt-4 h-1.5 w-24 bg-blue-500 mx-auto rounded-full" />
          <p className="mt-6 text-blue-50 text-lg max-w-2xl mx-auto font-medium">
            Providing comprehensive, patient-focused care with a commitment to clinical excellence and modern convenience.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 space-y-32 py-24">
        
        {/* --- Full-Service Pharmacy Bento Section --- */}
        <section ref={sectionRef} className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4">
              Comprehensive Care
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-6 leading-tight">
              Full-Service <br /> Pharmacy Solutions
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              We handle the heavy lifting for you. From insurance coordination to fast fulfillment, we make managing your health effortless.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                "Prescription fulfillment", "Compounding services", "Specialty medications", 
                "Vaccinations", "Pain management", "Diabetes care"
              ].map((item) => (
                <div key={item} className="flex items-center space-x-3 text-slate-700 font-medium">
                  <CheckCircle2 className="text-blue-500 w-5 h-5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="p-6 bg-[#E8F4FF] rounded-2xl border border-blue-100 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="text-blue-600 w-5 h-5" />
                <h4 className="font-bold text-blue-900 uppercase text-sm tracking-wider">Hassle-Free Transfers</h4>
              </div>
              <p className="text-sm text-blue-800/70">
                Switching is easy. We handle the entire transfer process—no phone calls required. Usually ready the same day.
              </p>
            </div>
          </div>

          <div className={`relative h-[500px] transition-all duration-1000 delay-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
             <div className="absolute inset-0 border-2 border-blue-100 rounded-[3rem] -rotate-3" />
             <div className="relative h-full w-full rounded-[3rem] overflow-hidden shadow-2xl">
               <Image src={service1} alt="Pharmacy" fill className="object-cover" />
             </div>
          </div>
        </section>

        {/* --- High-Impact Convenience Grid --- */}
        <section className="grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: <Truck className="w-8 h-8" />, 
              title: "FREE Local Delivery", 
              desc: "Medications brought directly to your door. Market-leading convenience so you never have to rush." 
            },
            { 
              icon: <ShieldCheck className="w-8 h-8" />, 
              title: "Prior Auth Support", 
              desc: "We work with your providers to handle complex authorizations, ensuring therapy approval without the headache." 
            },
            { 
              icon: <Calendar className="w-8 h-8" />, 
              title: "MedSync Program", 
              desc: "Consolidate your monthly prescriptions into a single, predictable delivery date. Simplify your routine." 
            },
          ].map((card, i) => (
            <div key={i} className="group bg-white p-10 rounded-[2.5rem] border border-blue-50 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-500">
              <div className="w-16 h-16 bg-[#D6EBFF] rounded-2xl flex items-center justify-center mb-8 text-blue-700 transition-transform group-hover:scale-110">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-950">{card.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {card.desc}
              </p>
            </div>
          ))}
        </section>

        {/* --- Custom Compounding Section --- */}
        <section className="py-20 px-8 bg-[#D6EBFF]/20 rounded-[3rem] border border-blue-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 blur-3xl rounded-full -mr-20 -mt-20" />
          
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl font-black text-blue-950">Custom Compounding</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto italic">
              Specialized dosage forms and strengths tailored to your unique biology using pharmaceutical-grade ingredients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {[
              { 
                title: "Therapeutic Solutions", 
                items: ["Customized Creams & Gels", "GLP-1 Support", "Strength Adjustments"] 
              },
              { 
                title: "Specialty Forms", 
                items: ["Pediatric Flavoring", "Allergy-friendly (Dye-free)", "Oral Liquids"] 
              },
              { 
                title: "Veterinary Care", 
                items: ["Compounding for Pets", "Animal-friendly Dosages", "Pet-specific Flavoring"] 
              }
            ].map((box, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-blue-50 hover:translate-y-[-5px] transition-transform duration-300">
                <h3 className="font-bold text-blue-700 mb-5 flex items-center gap-2">
                  <Microscope className="w-5 h-5" /> {box.title}
                </h3>
                <ul className="space-y-3">
                  {box.items.map(item => (
                    <li key={item} className="text-sm text-slate-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* --- MTM & Clinical Stats Section --- */}
        <section className="grid lg:grid-cols-2 gap-20 items-center">
           <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Free", sub: "BP & Glucose", icon: <Activity /> },
                { label: "Walk-in", sub: "Flu & COVID", icon: <Syringe /> },
                { label: "Expert", sub: "Consultations", icon: <Stethoscope /> },
                { label: "SMS", sub: "Refill Alerts", icon: <Clock /> },
              ].map((stat, i) => (
                <div key={i} className="bg-[#E8F4FF] p-8 rounded-3xl text-center border border-blue-100 flex flex-col items-center gap-2 transition-colors hover:bg-blue-100">
                  <div className="text-blue-600 mb-2">{stat.icon}</div>
                  <span className="block text-2xl font-bold text-blue-900">{stat.label}</span>
                  <span className="text-xs text-blue-700 font-bold uppercase tracking-wider">{stat.sub}</span>
                </div>
              ))}
           </div>
           <div>
              <h2 className="text-4xl font-black text-blue-950 mb-6">Medication Therapy Management</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Our clinical team provides comprehensive reviews of your medications to prevent interactions, optimize dosage, and ensure you are achieving the best health outcomes possible.
              </p>
              <div className="flex items-center space-x-4">
                <div className="px-6 py-3 bg-blue-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-blue-200 flex items-center gap-2">
                  <HeartPulse className="w-4 h-4" /> Care Coordination
                </div>
                <span className="text-blue-500 text-sm font-semibold italic">Personalized clinical oversight</span>
              </div>
           </div>
        </section>

        {/* --- RESTRUCTURED: Specialty Medications Section --- */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 items-stretch">
              
              {/* Left Panel: The Core Benefit */}
              <div className="lg:w-1/2 bg-blue-950 rounded-[3rem] p-12 md:p-16 text-white relative overflow-hidden shadow-2xl flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-blue-500 rounded-2xl shadow-lg shadow-blue-500/20">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-blue-400 font-bold uppercase tracking-[0.2em] text-xs">High-Impact Therapy</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Specialty <br/><span className="text-blue-400">Medications</span></h2>
                  <p className="text-blue-100/70 text-lg mb-8 leading-relaxed">
                    We bridge the gap between complex therapy and daily life. Our team navigates insurance barriers and specialist coordination so you can focus on healing.
                  </p>
                  <div className="flex flex-wrap gap-6 border-t border-white/10 pt-8 mt-8">
                    <div className="flex items-center gap-3">
                      <ClipboardList className="text-blue-400 w-5 h-5" />
                      <span className="text-sm font-medium">Prior Authorization Support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Heart className="text-blue-400 w-5 h-5" />
                      <span className="text-sm font-medium">Clinical Oversight</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Panel: The Condition Cloud */}
              <div className="lg:w-1/2 flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
                  {specialties.map((item, i) => (
                    <div 
                      key={i} 
                      className="group bg-white border border-blue-50 p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-500 flex flex-col justify-between"
                    >
                      <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center transition-colors group-hover:bg-blue-600 group-hover:text-white">
                        {item.icon}
                      </div>
                      <div className="mt-6">
                        <h3 className="font-bold text-blue-950 text-lg group-hover:text-blue-600 transition-colors">
                          {item.name}
                        </h3>
                        <div className="flex items-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-[10px] font-black uppercase text-blue-400 tracking-widest">Expert Care Available</span>
                          <ChevronRight className="w-3 h-3 text-blue-400" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>
    </div>
  );
}