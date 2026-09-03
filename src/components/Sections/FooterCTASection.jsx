import React from 'react';
import { Shield, Sparkles, Heart, Mail, Code2 } from 'lucide-react';

export default function FooterCTASection() {
  return (
    <footer id="cta" className="min-h-screen relative flex flex-col justify-between items-center px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      <div className="max-w-4xl w-full text-center my-auto flex flex-col items-center">
        {/* Emblem */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#1B4332] to-[#40916C] border border-[#B9FBC0]/40 flex items-center justify-center mb-6 shadow-2xl shadow-[#40916C]/40 animate-pulse">
          <Shield className="w-8 h-8 text-[#B9FBC0]" />
        </div>

        <h2 className="text-3xl sm:text-6xl font-extrabold text-white mb-4 tracking-tight">
          Ready to Protect India’s Crops?
        </h2>

        <p className="text-base sm:text-xl text-[#74C69D]/90 max-w-2xl mx-auto mb-8 font-medium">
          AgriShield AI brings low-cost AI detection, IoT sensing, and multilingual voice advisory directly into the hands of farmers.
        </p>

        {/* CTA Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 px-8 py-3.5 rounded-full font-extrabold text-sm bg-gradient-to-r from-[#40916C] via-[#52B788] to-[#B9FBC0] text-[#081C15] shadow-xl shadow-[#40916C]/30 hover:scale-105 transition-all"
          >
            <Sparkles className="w-4 h-4 text-[#081C15]" />
            <span>Replay 3D Experience</span>
          </button>

          <a
            href="mailto:contact@agrishield.ai"
            className="flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm glass-panel text-[#D8F3DC] border border-[#40916C]/40 hover:border-[#B9FBC0]/60 hover:text-white transition-all"
          >
            <Mail className="w-4 h-4 text-[#B9FBC0]" />
            <span>Contact Team</span>
          </a>
        </div>

        {/* Hackathon Project Credits Card */}
        <div className="glass-panel p-6 rounded-2xl border border-[#40916C]/30 max-w-xl w-full text-left">
          <div className="flex items-center justify-between mb-3 border-b border-[#40916C]/30 pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B9FBC0]">
              Hackathon Project Submission
            </span>
            <span className="text-[10px] font-mono text-[#74C69D]">v1.0.0</span>
          </div>

          <div className="text-xs text-[#D8F3DC]/80 space-y-1.5">
            <p><strong className="text-white">Project:</strong> AgriShield AI Ecosystem</p>
            <p><strong className="text-white">Built For:</strong> Smart Agriculture & Rural Impact</p>
            <p><strong className="text-white">Tech:</strong> React + React Three Fiber + GSAP + Lenis + Tailwind CSS</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="w-full max-w-5xl border-t border-[#40916C]/20 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#74C69D]/70 gap-3">
        <div className="flex items-center gap-1.5">
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-red-400 fill-current" />
          <span>for Agriculture & Farmers</span>
        </div>

        <div>
          © 2026 AgriShield AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
