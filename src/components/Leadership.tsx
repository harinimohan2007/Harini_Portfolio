import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { CheckCircle2, Calendar } from 'lucide-react';
import { LEADERSHIP_ROLES } from '../data/portfolioData';
import { CINEMATIC_EASE, fadeInUp, staggerContainer } from '../utils/motion';
import { WashiTape, PushPin, DoodleStar } from './DoodleAssets';

export default function Leadership() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="leadership"
      className="relative py-28 px-5 sm:px-8 border-t-2 border-[#7E2231]/15 bg-[#FDFBF7]"
      aria-labelledby="leadership-heading"
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
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 font-typewriter text-xs uppercase tracking-widest text-[#7E2231] bg-[#F9DDD6] px-3 py-1 rounded-sm border border-[#7E2231]/30 mb-4">
              <span>05</span>
              <span>·</span>
              <span>Departmental Leadership</span>
            </div>
            <h2
              id="leadership-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-[#332624] leading-tight"
            >
              Leadership is turning ideas into coordinated action.
            </h2>
          </div>

          <p className="text-xs font-typewriter text-[#8A635D] max-w-xs">
            Stewardship within the Technegen Computer Science Department Association at Sankara College.
          </p>
        </motion.div>

        {/* Timeline Showcase with Scrapbook Notebook Cards */}
        <div className="relative">
          {/* Vertical dashed timeline line */}
          <div className="hidden lg:block absolute left-8 top-8 bottom-8 w-[2px] border-l-2 border-dashed border-[#7E2231]/30" />

          <motion.div
            variants={staggerContainer(0.12, 0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="space-y-8 lg:space-y-12"
          >
            {LEADERSHIP_ROLES.map((role, idx) => (
              <motion.div
                key={role.role + role.period}
                variants={fadeInUp(0, 0.6, 20)}
                className="relative lg:pl-24"
              >
                {/* Timeline node marker on desktop: playful stamp */}
                <div className="hidden lg:flex absolute left-5 top-8 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-[#7E2231] items-center justify-center shadow-[1.5px_1.5px_0px_#7E2231]">
                  <DoodleStar className="w-4 h-4 text-[#7E2231]" fill={role.isCurrent ? "#F9DDD6" : "#FAF7EE"} />
                </div>

                {/* Editorial Leadership Card */}
                <motion.div
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : {
                          y: -3,
                          boxShadow: '4px 4px 0px #7E2231',
                          transition: { duration: 0.22, ease: CINEMATIC_EASE }
                        }
                  }
                  className={`relative p-6 sm:p-8 rounded-3xl border-2 transition-all ${
                    role.isCurrent
                      ? 'bg-white border-[#7E2231] shadow-[3.5px_3.5px_0px_#7E2231]'
                      : 'bg-white/90 border-[#7E2231]/30 shadow-[2px_2px_0px_#7E2231]'
                  }`}
                >
                  {role.isCurrent && <WashiTape color="blush" rotate="-2deg" className="-top-3 right-10" />}

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-typewriter mb-1">
                        <span className="text-[#7E2231] font-bold">
                          {role.organization}
                        </span>
                        {role.isCurrent && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-typewriter uppercase tracking-wider bg-[#F9DDD6] text-[#7E2231] font-bold border border-[#7E2231]/30">
                            Current Role
                          </span>
                        )}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#332624]">
                        {role.role}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-typewriter text-[#7E2231] bg-[#FAF7EE] px-3.5 py-1.5 rounded-xl border border-[#7E2231]/30 self-start sm:self-auto font-bold">
                      <Calendar className="w-3.5 h-3.5 text-[#7E2231]" />
                      <span>{role.period}</span>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-[#4A3B37] leading-relaxed mb-6 font-normal">
                    {role.description}
                  </p>

                  {/* Key Contributions */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-6 border-t border-[#7E2231]/15">
                    {role.keyContributions.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs text-[#4A3B37]">
                        <CheckCircle2 className="w-4 h-4 text-[#7E2231] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Impact metric highlight */}
                  <div className="mt-6 pt-4 border-t border-[#7E2231]/10 flex items-center justify-between text-xs font-typewriter text-[#8A635D]">
                    <span>Tenure Milestone</span>
                    <span className="text-[#7E2231] font-bold">{role.impactMetrics}</span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
