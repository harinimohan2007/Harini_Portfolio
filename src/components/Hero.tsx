import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { DeskIllustration, DoodleStar, DoodleSparkle, DoodleArrow, WashiTape } from './DoodleAssets';
import { PERSONAL_INFO } from '../data/portfolioData';
import { CINEMATIC_EASE, magneticButtonProps, subtleButtonProps } from '../utils/motion';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  const textY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, 40]);
  const sculptureY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, 60]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 75;
      window.scrollTo({
        top: topOffset,
        behavior: shouldReduceMotion ? 'auto' : 'smooth'
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.6,
        ease: CINEMATIC_EASE
      }
    }
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-28 pb-12 px-5 sm:px-8 bg-[#FAF7EE]"
      aria-label="Introduction & Creative Atelier"
    >
      {/* Whimsical scrapbook background textures & doodles */}
      <div className="absolute top-16 right-12 opacity-80 hidden lg:block pointer-events-none">
        <DoodleSparkle className="w-8 h-8 text-[#7E2231]" />
      </div>
      <div className="absolute top-36 left-8 opacity-70 hidden sm:block pointer-events-none">
        <DoodleStar className="w-6 h-6 text-[#7E2231]" fill="#FEF3C7" />
      </div>
      <div className="absolute bottom-28 right-8 opacity-75 hidden md:block pointer-events-none">
        <DoodleStar className="w-7 h-7 text-[#7E2231]" fill="#F9DDD6" />
      </div>

      {/* Main Hero Grid */}
      <div className="relative max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center z-10 my-auto">
        
        {/* Left Column: Expressive Typography, Subtitle Kicker & Narrative */}
        <motion.div
          style={{ y: textY }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          {/* Status Tape / Stamp (Reference scrapbook detail) */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-4">
            <span className="font-typewriter text-xs text-[#7E2231] bg-[#F9DDD6] px-3 py-1 rounded-md border border-[#7E2231]/30 shadow-xs">
              ★ {PERSONAL_INFO.status}
            </span>
            <span className="text-xs font-typewriter text-[#8A635D] hidden sm:inline">
              · {PERSONAL_INFO.scholarship}
            </span>
          </motion.div>

          {/* Flowing Cursive Title (Exact aesthetic of "Valentina Cuitiño" from reference) */}
          <motion.h1
            variants={itemVariants}
            className="font-cursive text-6xl sm:text-7xl md:text-8xl lg:text-[102px] font-bold text-[#7E2231] leading-[0.95] mb-3 tracking-tight"
          >
            Harini Mohan
          </motion.h1>

          {/* Subtitle with Blush Highlighter Strip (Directly inspired by reference) */}
          <motion.div variants={itemVariants} className="mb-6 flex flex-wrap items-center gap-2">
            <span className="font-typewriter font-bold text-xs sm:text-sm tracking-wider uppercase text-[#7E2231] bg-[#F9DDD6] px-3 py-1 rounded-sm border-l-2 border-[#7E2231]">
              {PERSONAL_INFO.tagline}
            </span>
            <span className="font-typewriter text-xs sm:text-sm tracking-wide text-[#7E2231] font-semibold">
              · AI-Assisted Product Builder
            </span>
          </motion.div>

          {/* Supporting Bio */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-[#4A3B37] font-normal leading-relaxed max-w-xl mb-8"
          >
            &ldquo;{PERSONAL_INFO.bioIntro}&rdquo;
          </motion.p>

          {/* Scrapbook CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 pt-1"
          >
            <motion.button
              onClick={() => scrollTo('projects')}
              {...(shouldReduceMotion ? {} : magneticButtonProps)}
              className="relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-[#FAF7EE] bg-[#7E2231] hover:bg-[#942938] rounded-2xl shadow-[3px_3px_0px_#332624] hover:shadow-[1.5px_1.5px_0px_#332624] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7E2231] group"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-4 h-4 text-[#FAF7EE] group-hover:translate-y-0.5 transition-transform" />
            </motion.button>

            <motion.button
              onClick={() => scrollTo('about')}
              {...(shouldReduceMotion ? {} : subtleButtonProps)}
              className="relative inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#7E2231] bg-white hover:bg-[#FDFBF7] border-1.5 border-[#7E2231] rounded-2xl shadow-[3px_3px_0px_#7E2231] hover:shadow-[1.5px_1.5px_0px_#7E2231] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7E2231]"
            >
              <span>About Me</span>
              <ArrowUpRight className="w-4 h-4 text-[#7E2231]" />
            </motion.button>
          </motion.div>

          {/* Quick Hand-Drawn Stats Note */}
          <motion.div
            variants={itemVariants}
            className="mt-10 pt-5 border-t border-[#7E2231]/20 flex flex-wrap items-center gap-6 text-[#7E2231]"
          >
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-2xl text-[#7E2231]">92%</span>
              <span className="text-[11px] font-typewriter text-[#8A635D] uppercase leading-tight">Academic<br/>Average</span>
            </div>
            <div className="h-6 w-[1px] bg-[#7E2231]/20" />
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-2xl text-[#7E2231]">Chairman</span>
              <span className="text-[11px] font-typewriter text-[#8A635D] uppercase leading-tight">Technegen<br/>CS Dept</span>
            </div>
            <div className="h-6 w-[1px] bg-[#7E2231]/20" />
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-2xl text-[#7E2231]">120+</span>
              <span className="text-[11px] font-typewriter text-[#8A635D] uppercase leading-tight">Students<br/>Mentored</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Hand-Drawn Creative Desk Illustration + Interactive 3D Sculpture */}
        <motion.div
          style={{ y: sculptureY }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: CINEMATIC_EASE }}
          className="lg:col-span-5 relative flex flex-col items-center justify-center"
        >
          {/* Creative Desk Workspace Illustration directly inspired by reference */}
          <div className="relative w-full max-w-lg">
            <DeskIllustration />

            {/* Playful Handwritten Annotation Note for Codi, the Continuous 3D Mascot */}
            <div className="absolute -bottom-4 right-4 bg-white px-3 py-1.5 rounded-lg border border-[#7E2231] shadow-[2px_2px_0px_#7E2231] rotate-2 hidden sm:flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#7E2231] animate-ping" />
              <span className="font-cursive text-sm font-bold text-[#7E2231]">
                meet Codi · 3D story guide (scroll to journey)
              </span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* BOTTOM CATEGORIES BAR (Directly matching the 4 editorial columns in reference!) */}
      <div className="relative w-full max-w-7xl mx-auto mt-12 pt-6 border-t-2 border-[#7E2231] z-20">
        <div className="text-[11px] font-typewriter text-[#8A635D] uppercase tracking-wider mb-4 flex items-center justify-between">
          <span>Categorías / Project Domains</span>
          <span>Portfolio 2026–2027</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="p-3 rounded-xl bg-white border border-[#7E2231]/20 hover:border-[#7E2231] transition-all group">
            <p className="font-typewriter font-bold text-xs uppercase tracking-wider text-[#7E2231] group-hover:underline">
              Sustainability
            </p>
            <p className="text-[11px] font-typewriter text-[#8A635D] mt-1 leading-normal">
              EcoLens: Product comparison web app concept
            </p>
          </div>

          <div className="p-3 rounded-xl bg-white border border-[#7E2231]/20 hover:border-[#7E2231] transition-all group">
            <p className="font-typewriter font-bold text-xs uppercase tracking-wider text-[#7E2231] group-hover:underline">
              Decision AI
            </p>
            <p className="text-[11px] font-typewriter text-[#8A635D] mt-1 leading-normal">
              FACTORA: Manufacturing risk &amp; what-if simulation
            </p>
          </div>

          <div className="p-3 rounded-xl bg-white border border-[#7E2231]/20 hover:border-[#7E2231] transition-all group">
            <p className="font-typewriter font-bold text-xs uppercase tracking-wider text-[#7E2231] group-hover:underline">
              Accessibility
            </p>
            <p className="text-[11px] font-typewriter text-[#8A635D] mt-1 leading-normal">
              Assistive Navigation: 3rd Prize Hackathon mobile app
            </p>
          </div>

          <div className="p-3 rounded-xl bg-white border border-[#7E2231]/20 hover:border-[#7E2231] transition-all group">
            <p className="font-typewriter font-bold text-xs uppercase tracking-wider text-[#7E2231] group-hover:underline">
              Urban Flow
            </p>
            <p className="text-[11px] font-typewriter text-[#8A635D] mt-1 leading-normal">
              Traffic Congestion: 2nd Prize Ideathon prototype
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
