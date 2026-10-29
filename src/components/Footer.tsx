import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { subtleButtonProps } from '../utils/motion';
import { DoodleSparkle } from './DoodleAssets';

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? 'auto' : 'smooth'
    });
  };

  return (
    <footer className="relative py-12 px-5 sm:px-8 border-t-2 border-[#7E2231]/15 bg-[#FAF7EE] text-[#6B5550] text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand Identity (Cursive signature) */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="font-cursive text-2xl font-bold text-[#7E2231]">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[#7E2231]/30">·</span>
            <span className="font-typewriter text-[11px] text-[#8A635D] uppercase tracking-wider">
              Creative Developer in the Making
            </span>
          </div>
          <p className="text-[11px] text-[#8A635D] font-typewriter">
            Computer Science Undergraduate • Sankara College • 2024–2027
          </p>
        </div>

        {/* Center: Recruiter Summary */}
        <div className="text-center text-[11px] font-typewriter text-[#7E2231] font-bold bg-[#F9DDD6] px-3 py-1 rounded-sm border border-[#7E2231]/30">
          <span>92% Academic Avg · Merit Scholar · Technegen Chairman</span>
        </div>

        {/* Right: Back to Top */}
        <div className="flex items-center gap-4">
          <motion.button
            onClick={scrollToTop}
            {...(shouldReduceMotion ? {} : subtleButtonProps)}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white text-[#7E2231] font-typewriter font-bold border-1.5 border-[#7E2231] shadow-[2px_2px_0px_#7E2231] hover:bg-[#FDFBF7] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7E2231]"
            aria-label="Back to top"
          >
            <span className="text-[11px]">Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </motion.button>
        </div>

      </div>
    </footer>
  );
}
