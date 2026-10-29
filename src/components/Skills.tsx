import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Terminal, Cpu, Wrench, Shield, Sparkles } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { CINEMATIC_EASE, subtleButtonProps, fadeInUp, staggerContainer } from '../utils/motion';
import { DoodleStar, DoodleSparkle, WashiTape } from './DoodleAssets';

const GROUP_ICONS = [
  <Terminal key="prog" className="w-5 h-5 text-[#B45309]" />,
  <Cpu key="ai" className="w-5 h-5 text-[#7E2231]" />,
  <Wrench key="tools" className="w-5 h-5 text-[#2563EB]" />,
  <Shield key="strengths" className="w-5 h-5 text-[#15803D]" />
];

const TAB_BG_COLORS = [
  'hover:bg-[#FEF3C7]/60',
  'hover:bg-[#F9DDD6]/60',
  'hover:bg-[#DBEAFE]/60',
  'hover:bg-[#DCFCE7]/60'
];

export default function Skills() {
  const [activeGroupIndex, setActiveGroupIndex] = useState<number>(1);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="relative py-28 px-5 sm:px-8 border-t-2 border-[#7E2231]/15 bg-[#FAF7EE]"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: CINEMATIC_EASE }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 font-typewriter text-xs uppercase tracking-widest text-[#7E2231] bg-[#F9DDD6] px-3 py-1 rounded-sm border border-[#7E2231]/30 mb-4">
              <span>04</span>
              <span>·</span>
              <span>Technical Capabilities</span>
            </div>
            <h2
              id="skills-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-[#332624]"
            >
              Curiosity-driven, practical, and focused on AI-assisted rapid prototyping.
            </h2>
          </div>

          <p className="text-xs font-typewriter text-[#8A635D] max-w-sm">
            Honest representation of core competencies — grounded in academic fundamentals, generative development, and collaborative execution.
          </p>
        </motion.div>

        {/* Index Tab Switcher */}
        <motion.div
          variants={staggerContainer(0.08, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8"
        >
          {SKILL_CATEGORIES.map((cat, idx) => {
            const isSelected = activeGroupIndex === idx;
            return (
              <motion.button
                key={cat.title}
                variants={fadeInUp(0, 0.5, 16)}
                onClick={() => setActiveGroupIndex(idx)}
                {...(shouldReduceMotion ? {} : subtleButtonProps)}
                className={`relative text-left p-4 sm:p-5 rounded-2xl transition-all border-2 cursor-pointer ${
                  isSelected
                    ? 'bg-white border-[#7E2231] shadow-[3px_3px_0px_#7E2231]'
                    : `bg-white/60 border-[#7E2231]/25 text-[#6B5550] ${TAB_BG_COLORS[idx]}`
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-xl bg-[#FAF7EE] border border-[#7E2231]/20">
                    {GROUP_ICONS[idx]}
                  </div>
                  <span className="text-[10px] font-typewriter text-[#8A635D]">0{idx + 1}</span>
                </div>
                <h3 className={`font-display font-bold text-sm sm:text-base ${isSelected ? 'text-[#7E2231]' : 'text-[#332624]'}`}>
                  {cat.title}
                </h3>
                <p className="text-xs text-[#8A635D] font-typewriter mt-0.5">
                  {cat.skills.length} competencies
                </p>

                {isSelected && (
                  <motion.div
                    layoutId="activeSkillBar"
                    className="absolute -bottom-1 inset-x-6 h-[3px] bg-[#7E2231] rounded-full"
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { type: 'spring', stiffness: 380, damping: 30 }
                    }
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Detailed Active Category Showcase (Ruled Sketchbook Page) */}
        <div className="relative rounded-3xl bg-white border-2 border-[#7E2231] p-6 sm:p-10 shadow-[4px_4px_0px_#7E2231] overflow-hidden">
          <WashiTape color="sage" rotate="-1deg" className="-top-3 left-12" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeGroupIndex}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: CINEMATIC_EASE }}
            >
              <div className="max-w-2xl mb-8">
                <div className="flex items-center gap-2 text-xs font-typewriter text-[#7E2231] font-bold uppercase tracking-wider mb-1">
                  <span>Domain Focus</span>
                  <span>·</span>
                  <span>{SKILL_CATEGORIES[activeGroupIndex].title}</span>
                </div>
                <p className="text-sm sm:text-base text-[#4A3B37]">
                  {SKILL_CATEGORIES[activeGroupIndex].description}
                </p>
              </div>

              {/* Individual Skills in Active Category */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {SKILL_CATEGORIES[activeGroupIndex].skills.map((skill, sIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: sIdx * 0.05, ease: CINEMATIC_EASE }}
                    whileHover={
                      shouldReduceMotion
                        ? {}
                        : {
                            y: -2,
                            boxShadow: '3px 3px 0px #7E2231',
                            transition: { duration: 0.18 }
                          }
                    }
                    className="p-5 rounded-2xl bg-[#FDFBF7] border-1.5 border-[#7E2231]/30 hover:border-[#7E2231] transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-base font-bold font-display text-[#332624]">
                        {skill.name}
                      </span>
                      <DoodleSparkle className="w-3.5 h-3.5 text-[#7E2231]" />
                    </div>

                    <p className="text-xs font-typewriter text-[#7E2231] font-bold mb-2">
                      {skill.focus}
                    </p>

                    <p className="text-xs text-[#6B5550] leading-relaxed font-typewriter">
                      {skill.context}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Philosophical summary footer */}
          <div className="mt-8 pt-6 border-t border-[#7E2231]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-typewriter text-[#8A635D]">
            <span className="flex items-center gap-2 text-[#332624]">
              <DoodleStar className="w-3.5 h-3.5 text-[#7E2231]" fill="#FEF3C7" />
              Moving ideas to prototypes with rapid feedback loops and rigorous collaboration.
            </span>
            <span className="font-cursive text-base text-[#7E2231]">practical capabilities · zero fluff</span>
          </div>
        </div>
      </div>
    </section>
  );
}
