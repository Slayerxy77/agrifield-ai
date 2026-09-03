import React from 'react';
import { Layers, Terminal, Database, HardDrive, Cpu, Smartphone } from 'lucide-react';

export default function TechStackSection() {
  const stackItems = [
    {
      layer: '1. Mobile & Frontend UI',
      icon: Smartphone,
      tech: 'Flutter / React Web',
      role: 'Cross-platform mobile camera UI, 60fps rendering & offline caching',
      badge: 'Client Layer',
      color: 'border-[#74C69D] text-[#74C69D]',
    },
    {
      layer: '2. Computer Vision & AI',
      icon: Cpu,
      tech: 'PyTorch, OpenCV & TFLite',
      role: 'Quantized MobileNetV3 model with 95.8% disease classification accuracy',
      badge: 'AI Layer',
      color: 'border-[#B9FBC0] text-[#B9FBC0]',
    },
    {
      layer: '3. Backend Services',
      icon: Terminal,
      tech: 'FastAPI & Node.js',
      role: 'High-concurrency microservices for telemetry sync & advisory generation',
      badge: 'API Layer',
      color: 'border-[#52B788] text-[#52B788]',
    },
    {
      layer: '4. IoT & Hardware',
      icon: HardDrive,
      tech: 'ESP32, DHT22, NPK Sensors',
      role: 'Micro-climate sensing nodes with solar power management & LoRaWAN radios',
      badge: 'Edge Layer',
      color: 'border-[#FFB703] text-[#FFB703]',
    },
    {
      layer: '5. Database & Cloud',
      icon: Database,
      tech: 'PostgreSQL, Firebase & AWS S3',
      role: 'Geospatial agricultural data storage, real-time sync & image dataset bucket',
      badge: 'Data Layer',
      color: 'border-[#7F5539] text-[#E0A96D]',
    },
  ];

  return (
    <section id="tech" className="min-h-screen relative flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-5xl w-full">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B4332] border border-[#52B788]/40 text-[#52B788] text-xs font-bold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Exploded Tech Stack</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Production-Grade Ecosystem Stack
          </h2>
          <p className="text-base sm:text-lg text-[#74C69D]/90 max-w-2xl mx-auto">
            Architected for low latency, offline operation, and seamless scalability across rural India.
          </p>
        </div>

        {/* Exploded Tech Stack Grid Overlay */}
        <div className="glass-panel rounded-3xl border border-[#40916C]/40 p-6 sm:p-8 space-y-4">
          {stackItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl bg-[#081C15]/70 border border-[#40916C]/30 hover:border-[#B9FBC0]/50 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-[#1B4332] border border-[#40916C]/50">
                    <Icon className="w-5 h-5 text-[#B9FBC0]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-white">{item.layer}</span>
                      <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded border ${item.color}`}>
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-xs text-[#74C69D]/80">{item.role}</p>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-xs font-bold font-mono text-[#B9FBC0] px-3 py-1.5 rounded bg-[#1B4332]/80 border border-[#40916C]/40 inline-block">
                    {item.tech}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
