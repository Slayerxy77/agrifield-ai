import React, { useEffect, useState, useRef } from 'react';
import { Award, ShieldCheck, MapPin, Calculator, CloudSun, DollarSign } from 'lucide-react';

export default function ImpactSection() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const innovations = [
    {
      title: 'Offline AI Diagnostics',
      desc: 'Runs full neural inference on local device storage with zero cellular dependency.',
      icon: ShieldCheck,
    },
    {
      title: 'Precision Dosage Calculator',
      desc: 'Prevents chemical overuse by recommending exact milliliter formulations per acre.',
      icon: Calculator,
    },
    {
      title: 'Micro-Climate Warnings',
      desc: 'Predicts localized frost, humidity spikes, and fungal spore risks 48 hours in advance.',
      icon: CloudSun,
    },
    {
      title: 'Mandi Price Linkage',
      desc: 'Connects farmers directly to nearby wholesale mandis for fair crop pricing.',
      icon: DollarSign,
    },
  ];

  return (
    <section
      id="impact"
      ref={sectionRef}
      className="min-h-screen relative flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-24"
    >
      <div className="max-w-5xl w-full">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B4332] border border-[#FFB703]/40 text-[#FFB703] text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Innovation & Social Impact</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Transforming Agriculture at Scale
          </h2>
          <p className="text-base sm:text-lg text-[#74C69D]/90 max-w-2xl mx-auto">
            Measurable yield improvements, cost savings, and climate resilience for rural farming communities.
          </p>
        </div>

        {/* 4 Animated Impact Stats Counter Badges */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-14">
          {[
            { target: 30, unit: '%', label: 'Cost Reduction', detail: 'Fewer wasted pesticides' },
            { target: 25, unit: '%', label: 'Yield Improvement', detail: 'Harvest loss prevented' },
            { target: 50, unit: 'K+', label: 'Training Images', detail: 'Annotated crop leaves' },
            { target: 200, unit: 'ms', label: 'Inference Speed', detail: 'Instant mobile diagnosis' },
          ].map((stat, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-2xl border border-[#40916C]/40 text-center">
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-[#B9FBC0] mb-1">
                {inView ? stat.target : 0}
                {stat.unit}
              </div>
              <div className="text-xs font-bold text-white mb-1">{stat.label}</div>
              <div className="text-[10px] text-[#74C69D]/80">{stat.detail}</div>
            </div>
          ))}
        </div>

        {/* 4 Innovation Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {innovations.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-6 rounded-2xl border border-[#40916C]/30 flex items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-[#081C15] border border-[#40916C]/40 shrink-0">
                  <Icon className="w-6 h-6 text-[#B9FBC0]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">{card.title}</h3>
                  <p className="text-xs text-[#74C69D]/90 leading-relaxed">{card.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
