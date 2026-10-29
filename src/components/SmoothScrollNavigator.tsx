import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { ChevronUp, ChevronDown, ArrowUp } from 'lucide-react';

const SECTIONS = [
  { id: 'hero', label: 'Intro' },
  { id: 'about', label: 'About & Story' },
  { id: 'achievements', label: 'Milestones' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Capabilities' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function SmoothScrollNavigator() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [showScrollControls, setShowScrollControls] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalDocHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Calculate scroll progress percentage (0 - 100)
      const progress = totalDocHeight > 0 ? Math.min(100, Math.max(0, (scrollY / totalDocHeight) * 100)) : 0;
      setScrollProgress(progress);

      // Show floating smooth controls once user scrolls past initial hero
      setShowScrollControls(scrollY > 220);

      // Identify active section
      const triggerY = scrollY + window.innerHeight * 0.4;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const elementTop = rect.top + scrollY;
          if (triggerY >= elementTop) {
            setCurrentSectionIndex(i);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const target = SECTIONS[index];
    if (!target) return;
    const el = document.getElementById(target.id);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 75;
      window.scrollTo({
        top: topOffset,
        behavior: shouldReduceMotion ? 'auto' : 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? 'auto' : 'smooth'
    });
  };

  const goToNextSection = () => {
    if (currentSectionIndex < SECTIONS.length - 1) {
      scrollToSection(currentSectionIndex + 1);
    }
  };

  const goToPrevSection = () => {
    if (currentSectionIndex > 0) {
      scrollToSection(currentSectionIndex - 1);
    } else {
      scrollToTop();
    }
  };

  const nextSection = currentSectionIndex < SECTIONS.length - 1 ? SECTIONS[currentSectionIndex + 1] : null;
  const prevSection = currentSectionIndex > 0 ? SECTIONS[currentSectionIndex - 1] : null;

  // Circular progress calculations for SVG ring
  const radius = 17;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      {/* 1. Top Reading Progress Indicator Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[3px] z-50 pointer-events-none bg-transparent"
        aria-hidden="true"
      >
        <div
          className="h-full bg-gradient-to-r from-[#7E2231] via-[#D97768] to-[#F59E0B] transition-all duration-150 ease-out shadow-[0_1px_4px_rgba(126,34,49,0.3)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 2. Floating Bottom-Right Smooth Navigation Widget */}
      <AnimatePresence>
        {showScrollControls && (
          <motion.aside
            initial={{ opacity: 0, scale: 0.85, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-2 select-none"
            aria-label="Smooth Scroll Navigator"
          >
            {/* Quick Section Glide Controller */}
            <div className="flex flex-col items-center bg-[#FAF7EE]/95 backdrop-blur-md border-1.5 border-[#7E2231] rounded-2xl shadow-[3px_3px_0px_#7E2231] p-1.5 gap-1.5">
              
              {/* Previous Section / Top button */}
              <button
                onClick={goToPrevSection}
                className="group relative p-2 rounded-xl text-[#7E2231] hover:bg-[#F9DDD6] active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7E2231] cursor-pointer"
                aria-label={prevSection ? `Smooth scroll up to ${prevSection.label}` : 'Smooth scroll to top'}
                title={prevSection ? `Previous: ${prevSection.label}` : 'Top of page'}
              >
                <ChevronUp className="w-4 h-4 stroke-[2.5] group-hover:-translate-y-0.5 transition-transform" />
                <span className="sr-only">Previous Section</span>
              </button>

              {/* Circular Scroll Progress Ring with Top Jump */}
              <button
                onClick={scrollToTop}
                className="group relative w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-[#F9DDD6]/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7E2231] cursor-pointer"
                aria-label={`Scroll to top (${Math.round(scrollProgress)}% viewed)`}
                title="Scroll back to top"
              >
                {/* SVG Progress Circle */}
                <svg className="w-10 h-10 -rotate-90 pointer-events-none" viewBox="0 0 40 40">
                  <circle
                    cx="20"
                    cy="20"
                    r={radius}
                    className="stroke-[#7E2231]/15"
                    strokeWidth="2.5"
                    fill="transparent"
                  />
                  <circle
                    cx="20"
                    cy="20"
                    r={radius}
                    className="stroke-[#7E2231] transition-all duration-150"
                    strokeWidth="2.5"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    fill="transparent"
                  />
                </svg>

                {/* Center Percentage or Up Arrow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <ArrowUp className="w-3.5 h-3.5 text-[#7E2231] group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </button>

              {/* Next Section button (if not at last section) */}
              {nextSection && (
                <button
                  onClick={goToNextSection}
                  className="group relative p-2 rounded-xl text-[#7E2231] hover:bg-[#F9DDD6] active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7E2231] cursor-pointer"
                  aria-label={`Smooth scroll down to ${nextSection.label}`}
                  title={`Next: ${nextSection.label}`}
                >
                  <ChevronDown className="w-4 h-4 stroke-[2.5] group-hover:translate-y-0.5 transition-transform" />
                  <span className="sr-only">Next Section: {nextSection.label}</span>
                </button>
              )}
            </div>

            {/* Micro Badge Showing Current Section */}
            <div className="px-2.5 py-1 rounded-md bg-white border border-[#7E2231]/40 shadow-[1.5px_1.5px_0px_#7E2231] text-[10px] font-typewriter text-[#7E2231] font-bold">
              {Math.round(scrollProgress)}%
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
