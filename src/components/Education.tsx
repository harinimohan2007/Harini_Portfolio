import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { GraduationCap, Award, Check, School } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { CINEMATIC_EASE, fadeInUp, staggerContainer } from '../utils/motion';
import { WashiTape, PushPin, DoodleStar } from './DoodleAssets';

export default function Education() {
  const primaryDegree = EDUCATION_DATA[0];
  const secondaryEducation = EDUCATION_DATA.slice(1);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="education"
      className="relative py-28 px-5 sm:px-8 border-t-2 border-[#7E2231]/15 bg-[#FAF7EE]"
      aria-labelledby="education-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: CINEMATIC_EASE }}
          className="mb-16 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 font-typewriter text-xs uppercase tracking-widest text-[#7E2231] bg-[#F9DDD6] px-3 py-1 rounded-sm border border-[#7E2231]/30 mb-4">
            <span>06</span>
            <span>·</span>
            <span>Academic Background</span>
          </div>
          <h2
            id="education-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-[#332624]"
          >
            Academic foundations and scholastic honors.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Primary Degree Feature Card (Col-Span 7) - Styled like a certificate / diploma folio */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: CINEMATIC_EASE }}
            whileHover={
              shouldReduceMotion
                ? {}
                : {
                    y: -3,
                    boxShadow: '4px 4px 0px #7E2231',
                    transition: { duration: 0.22, ease: CINEMATIC_EASE }
                  }
            }
            className="lg:col-span-7 rounded-3xl bg-white border-2 border-[#7E2231] p-6 sm:p-10 shadow-[3.5px_3.5px_0px_#7E2231] relative overflow-hidden transition-all"
          >
            <WashiTape color="sage" rotate="-2deg" className="-top-3 left-8" />

            <div className="flex items-start justify-between gap-4 mb-6 pt-1">
              <div className="p-3 rounded-2xl bg-[#DDE8D4] border border-[#8BA878] text-[#3E6B27]">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div className="text-right">
                <span className="text-3xl sm:text-4xl font-bold font-display text-[#7E2231]">{primaryDegree.score}</span>
                <span className="block text-xs font-typewriter text-[#8A635D]">{primaryDegree.scoreType}</span>
              </div>
            </div>

            <div className="mb-6">
              <span className="text-xs font-typewriter uppercase tracking-wider text-[#7E2231] font-bold">
                {primaryDegree.period}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#332624] mt-1">
                {primaryDegree.degree}
              </h3>
              <p className="text-base text-[#4A3B37] mt-1 font-medium">
                {primaryDegree.institution}
              </p>
            </div>

            {/* Merit Scholarship Badge */}
            {primaryDegree.honors && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#FEF3C7] border border-[#F59E0B] text-[#92400E] text-xs font-typewriter font-bold mb-6 shadow-2xs">
                <Award className="w-4 h-4 text-[#D97706]" />
                <span>★ {primaryDegree.honors}</span>
              </div>
            )}

            {/* Coursework & Responsibilities */}
            {primaryDegree.highlights && (
              <div className="space-y-2.5 pt-6 border-t border-[#7E2231]/15">
                <p className="text-xs font-typewriter uppercase tracking-wider text-[#8A635D] mb-2 font-bold">
                  Academic Focus &amp; Involvements
                </p>
                {primaryDegree.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A3B37]">
                    <Check className="w-4 h-4 text-[#7E2231] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Secondary Schooling Records (Col-Span 5) */}
          <motion.div
            variants={staggerContainer(0.1, 0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {secondaryEducation.map((edu, idx) => (
              <motion.div
                key={edu.degree}
                variants={fadeInUp(0, 0.55, 16)}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: -2,
                        boxShadow: '3px 3px 0px #7E2231',
                        transition: { duration: 0.2 }
                      }
                }
                className="relative p-6 sm:p-7 rounded-3xl bg-white border-1.5 border-[#7E2231] shadow-[2.5px_2.5px_0px_#7E2231] transition-all"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span className="text-xs font-typewriter text-[#8A635D]">{edu.period}</span>
                    <h4 className="text-lg font-bold font-display text-[#332624] mt-1">
                      {edu.degree}
                    </h4>
                    <p className="text-xs text-[#6B5550] mt-0.5 font-typewriter">{edu.institution}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold font-display text-[#7E2231]">{edu.score}</span>
                    <span className="block text-[10px] font-typewriter text-[#8A635D]">{edu.scoreType}</span>
                  </div>
                </div>

                {edu.highlights && (
                  <div className="pt-3 border-t border-[#7E2231]/10 text-xs text-[#8A635D] font-typewriter flex items-center gap-2">
                    <School className="w-3.5 h-3.5 text-[#7E2231]" />
                    <span>{edu.highlights.join(' · ')}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
