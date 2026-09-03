import React from 'react';
import { AlertTriangle, TrendingDown, Clock, DollarSign } from 'lucide-react';

export default function ProblemSection() {
  const stats = [
    {
      icon: TrendingDown,
      value: '35%',
      label: 'Annual Crop Loss',
      desc: 'Indian farmers suffer devastating yield losses due to unmanaged pest outbreaks & fungal blights.',
      color: 'text-amber-400',
    },
    {
      icon: Clock,
      value: '4-7 Days',
      label: 'Diagnosis Delay',
      desc: 'Traditional manual lab testing or physical expert visits take days—by which crops wilt irreversibly.',
      color: 'text-red-400',
    },
    {
      icon: DollarSign,
      value: 'High Cost',
      label: 'Prohibitive Sensors',
      desc: 'Imported smart agriculture sensors and hardware setups are financially out of reach for smallholders.',
      color: 'text-orange-400',
    },
  ];

  return (
    <section id="problem" className="min-h-screen relative flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-5xl w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-4">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>The Agricultural Crisis</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Undetected Blights Destroy <br className="hidden sm:inline" />
            <span className="text-amber-400">35% of Indian Crop Yields</span>
          </h2>
          <p className="text-base sm:text-lg text-[#74C69D]/90 max-w-2xl mx-auto">
            Indian farmers face massive annual financial destruction due to delayed diagnosis, micro-climate volatility, and lack of affordable localized tech.
          </p>
        </div>

        {/* 3 Key Problem Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-6 rounded-2xl border border-[#40916C]/30 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-[#081C15]/80 border border-[#40916C]/40">
                      <Icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <span className={`text-4xl font-extrabold font-mono ${stat.color}`}>
                      {stat.value}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{stat.label}</h3>
                  <p className="text-xs text-[#74C69D]/80 leading-relaxed">{stat.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
