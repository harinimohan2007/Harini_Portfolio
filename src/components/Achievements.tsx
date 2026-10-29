import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Award, GraduationCap, Users, Trophy, BookOpen, Presentation } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';
import { AchievementItem } from '../types';
import { CINEMATIC_EASE, staggerContainer, fadeInUp } from '../utils/motion';
import { PushPin, DoodleStar, WashiTape } from './DoodleAssets';

export default function Achievements() {
  const shouldReduceMotion = useReducedMotion();

  const getIcon = (type: AchievementItem['iconType']) => {
    switch (type) {
      case 'scholarship':
        return <GraduationCap className="w-5 h-5 text-[#8BA878]" />;
      case 'leadership':
        return <Users className="w-5 h-5 text-[#7E2231]" />;
      case 'award':
        return <Trophy className="w-5 h-5 text-[#D97768]" />;
      case 'certificate':
        return <BookOpen className="w-5 h-5 text-[#3B82F6]" />;
      case 'seminar':
        return <Presentation className="w-5 h-5 text-[#9333EA]" />;
      default:
        return <Award className="w-5 h-5 text-[#7E2231]" />;
    }
  };

  return (
    <section
      id="achievements"
      className="relative py-28 px-5 sm:px-8 border-t-2 border-[#7E2231]/15 bg-[#FAF7EE]"
      aria-labelledby="achievements-heading"
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
              <span>02</span>
              <span>·</span>
              <span>Milestones &amp; Recognition</span>
            </div>
            <h2
              id="achievements-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-[#332624]"
            >
              Proven academic rigor, competitive innovation, and student leadership.
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-typewriter text-[#8A635D] bg-white px-3.5 py-2 rounded-xl border border-[#7E2231]/20 shadow-xs">
            <DoodleStar className="w-4 h-4 text-[#7E2231]" fill="#FEF3C7" />
            <span>Verified Track Record</span>
          </div>
        </motion.div>

        {/* Featured Big Metrics Banner: Scrapbook Postcard Style */}
        <motion.div
          variants={staggerContainer(0.08, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16"
        >
          <motion.div
            variants={fadeInUp(0, 0.5, 16)}
            whileHover={shouldReduceMotion ? {} : { y: -2, transition: { duration: 0.2 } }}
            className="relative p-6 rounded-2xl bg-white border-1.5 border-[#7E2231] shadow-[3px_3px_0px_#7E2231]"
          >
            <WashiTape color="blush" rotate="-2deg" className="-top-3 left-4" />
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-[#7E2231] tracking-tight">
              92<span className="text-[#8BA878]">%</span>
            </p>
            <p className="text-xs sm:text-sm font-bold text-[#332624] mt-2">Academic Average</p>
            <p className="text-xs text-[#8A635D] font-typewriter mt-1">Merit Scholarship</p>
          </motion.div>

          <motion.div
            variants={fadeInUp(0.05, 0.5, 16)}
            whileHover={shouldReduceMotion ? {} : { y: -2, transition: { duration: 0.2 } }}
            className="relative p-6 rounded-2xl bg-white border-1.5 border-[#7E2231] shadow-[3px_3px_0px_#7E2231]"
          >
            <WashiTape color="sage" rotate="2deg" className="-top-3 right-4" />
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-[#7E2231] tracking-tight">
              Chairman
            </p>
            <p className="text-xs sm:text-sm font-bold text-[#332624] mt-2">Technegen CS Dept</p>
            <p className="text-xs text-[#8A635D] font-typewriter mt-1">2026–2027 (Vice Chair 25–26)</p>
          </motion.div>

          <motion.div
            variants={fadeInUp(0.1, 0.5, 16)}
            whileHover={shouldReduceMotion ? {} : { y: -2, transition: { duration: 0.2 } }}
            className="relative p-6 rounded-2xl bg-white border-1.5 border-[#7E2231] shadow-[3px_3px_0px_#7E2231]"
          >
            <WashiTape color="butter" rotate="-1deg" className="-top-3 left-6" />
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-[#D97768] tracking-tight">
              2x <span className="text-sm font-typewriter text-[#8A635D] font-normal">Wins</span>
            </p>
            <p className="text-xs sm:text-sm font-bold text-[#332624] mt-2">Hackathon &amp; Ideathon</p>
            <p className="text-xs text-[#8A635D] font-typewriter mt-1">3rd Prize &amp; 2nd Prize</p>
          </motion.div>

          <motion.div
            variants={fadeInUp(0.15, 0.5, 16)}
            whileHover={shouldReduceMotion ? {} : { y: -2, transition: { duration: 0.2 } }}
            className="relative p-6 rounded-2xl bg-white border-1.5 border-[#7E2231] shadow-[3px_3px_0px_#7E2231]"
          >
            <WashiTape color="blush" rotate="3deg" className="-top-3 right-6" />
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-[#8BA878] tracking-tight">
              120+
            </p>
            <p className="text-xs sm:text-sm font-bold text-[#332624] mt-2">Students Mentored</p>
            <p className="text-xs text-[#8A635D] font-typewriter mt-1">Hackathon Seminar</p>
          </motion.div>
        </motion.div>

        {/* Pinned Scrapbook Achievement Cards */}
        <motion.div
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {ACHIEVEMENTS.map((item, index) => (
            <motion.div
              key={item.id}
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
              className="relative p-6 sm:p-7 rounded-2xl bg-white border-1.5 border-[#7E2231] shadow-[2.5px_2.5px_0px_#7E2231] transition-all flex flex-col justify-between group cursor-default"
            >
              {/* Pushpin header */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                <PushPin color="#7E2231" className="w-5 h-5 drop-shadow-xs" />
              </div>

              <div>
                <div className="flex items-center justify-between mb-4 pt-1">
                  <div className="p-2 rounded-xl bg-[#FAF7EE] border border-[#7E2231]/20">
                    {getIcon(item.iconType)}
                  </div>
                  <span className="text-xs font-typewriter text-[#8A635D]">
                    {item.dateOrPeriod}
                  </span>
                </div>

                <div className="text-[11px] font-typewriter text-[#7E2231] font-bold mb-1.5 uppercase tracking-wider">
                  {item.category}
                </div>

                <h3 className="text-lg font-bold font-display text-[#332624] group-hover:text-[#7E2231] transition-colors mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-[#4A3B37] leading-relaxed">
                  {item.detail}
                </p>
              </div>

              {item.metric && (
                <div className="mt-6 pt-4 border-t border-[#7E2231]/15 flex items-center justify-between">
                  <span className="text-xs text-[#8A635D] font-typewriter">{item.metricLabel}</span>
                  <span className="text-xs font-bold font-typewriter text-[#7E2231] bg-[#F9DDD6] px-2.5 py-1 rounded border border-[#7E2231]/30">
                    {item.metric}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
