import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Compass, Sparkles, Users } from 'lucide-react';
import { ABOUT_STORY, PERSONAL_INFO } from '../data/portfolioData';
import { CINEMATIC_EASE, staggerContainer, fadeInUp } from '../utils/motion';
import { WashiTape, DoodleStar, DoodleArrow } from './DoodleAssets';

const PILLAR_ICONS = [
  <Compass key="product" className="w-5 h-5 text-[#7E2231]" />,
  <Sparkles key="ai" className="w-5 h-5 text-[#8BA878]" />,
  <Users key="leadership" className="w-5 h-5 text-[#D97768]" />
];

const PILLAR_STICKER_COLORS = [
  'bg-[#F9DDD6] text-[#7E2231]',
  'bg-[#DDE8D4] text-[#557345]',
  'bg-[#FEF3C7] text-[#92400E]'
];

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="relative py-28 px-5 sm:px-8 border-t-2 border-[#7E2231]/15 bg-[#FDFBF7]"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: CINEMATIC_EASE }}
          className="mb-16 max-w-3xl relative"
        >
          <div className="inline-flex items-center gap-2 font-typewriter text-xs uppercase tracking-widest text-[#7E2231] bg-[#F9DDD6] px-3 py-1 rounded-sm border border-[#7E2231]/30 mb-4">
            <span>01</span>
            <span>·</span>
            <span>About Me &amp; Philosophy</span>
          </div>

          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-[#332624] leading-tight"
          >
            {ABOUT_STORY.headline}
          </h2>

          <span className="font-cursive text-2xl text-[#7E2231] block mt-2">
            turning curiosity into working digital prototypes ~
          </span>
        </motion.div>

        {/* Story Grid: Editorial narrative on left, scrapbook cards on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Narrative voice with Sketchbook Styling */}
          <motion.div
            variants={staggerContainer(0.12, 0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-6 space-y-6 text-[#4A3B37] text-base sm:text-lg leading-relaxed font-normal"
          >
            {ABOUT_STORY.paragraphs.map((p, index) => (
              <motion.p
                key={index}
                variants={fadeInUp(0, 0.6, 16)}
                className={index === 0 ? 'text-[#332624] text-xl font-medium leading-relaxed' : ''}
              >
                {p}
              </motion.p>
            ))}

            {/* Quick Summary Highlights Box (Styled like a pinned polaroid/card) */}
            <motion.div
              variants={fadeInUp(0.1, 0.6, 16)}
              className="pt-6 mt-8 border-t border-[#7E2231]/20"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="relative p-4 rounded-xl bg-white border-1.5 border-[#7E2231] shadow-[2.5px_2.5px_0px_#7E2231]">
                  <WashiTape color="blush" rotate="-3deg" className="-top-3 left-6" />
                  <p className="text-[10px] font-typewriter text-[#8A635D] uppercase tracking-wider mb-1">
                    Institution
                  </p>
                  <p className="text-sm font-bold font-display text-[#332624] leading-snug">
                    {PERSONAL_INFO.college}
                  </p>
                </div>

                <div className="relative p-4 rounded-xl bg-white border-1.5 border-[#7E2231] shadow-[2.5px_2.5px_0px_#7E2231]">
                  <WashiTape color="sage" rotate="2deg" className="-top-3 right-6" />
                  <p className="text-[10px] font-typewriter text-[#8A635D] uppercase tracking-wider mb-1">
                    Responsibility
                  </p>
                  <p className="text-sm font-bold font-display text-[#7E2231] leading-snug">
                    Chairman, Technegen CS Dept
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Three Editorial Highlights with Scrapbook Cards */}
          <motion.div
            variants={staggerContainer(0.14, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            {ABOUT_STORY.pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                variants={fadeInUp(0, 0.55, 18)}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: -3,
                        boxShadow: '4px 4px 0px #7E2231',
                        transition: { duration: 0.2, ease: CINEMATIC_EASE }
                      }
                }
                className="group relative p-6 sm:p-7 rounded-2xl bg-white border-1.5 border-[#7E2231] shadow-[3px_3px_0px_#7E2231] transition-all"
              >
                {/* Washi tape on first card */}
                {idx === 0 && <WashiTape color="butter" rotate="1deg" className="-top-3 right-8" />}

                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl border border-[#7E2231]/30 ${PILLAR_STICKER_COLORS[idx]}`}>
                    {PILLAR_ICONS[idx]}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="text-lg font-bold font-display text-[#332624] group-hover:text-[#7E2231] transition-colors">
                        {pillar.title}
                      </h3>
                      <span className="text-xs font-typewriter text-[#8A635D]">0{idx + 1}</span>
                    </div>

                    <p className="text-sm text-[#4A3B37] leading-relaxed mb-3">
                      {pillar.shortDesc}
                    </p>

                    <p className="text-xs text-[#6B5550] leading-normal border-t border-[#7E2231]/10 pt-2.5 font-typewriter">
                      {pillar.details}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
