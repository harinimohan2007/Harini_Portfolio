import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { CINEMATIC_EASE, magneticButtonProps } from '../utils/motion';
import { DoodleSparkle } from './DoodleAssets';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Milestones', href: '#achievements' },
  { name: 'Projects', href: '#projects' },
  { name: 'Capabilities', href: '#skills' },
  { name: 'Leadership', href: '#leadership' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      const sections = ['hero', 'about', 'achievements', 'projects', 'skills', 'leadership', 'education', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 75;
      window.scrollTo({
        top: topOffset,
        behavior: shouldReduceMotion ? 'auto' : 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[#FAF7EE]/90 backdrop-blur-md border-b border-[#7E2231]/15 shadow-sm shadow-[#7E2231]/5'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Brand Wordmark (Reference image title style) */}
          <motion.a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7E2231] rounded-sm cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full border-1.5 border-[#7E2231] bg-[#F9DDD6] flex items-center justify-center shadow-[1.5px_1.5px_0px_#7E2231]">
              <span className="font-cursive font-bold text-base text-[#7E2231] -mt-0.5">H</span>
            </div>
            <div className="flex flex-col">
              <span className="font-cursive text-2xl sm:text-3xl font-bold tracking-tight text-[#7E2231] group-hover:text-[#9E2A2B] transition-colors leading-none">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] font-typewriter tracking-widest uppercase text-[#8A635D] mt-0.5 hidden sm:block">
                PORTFOLIO 2026–2027
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-typewriter uppercase tracking-wider" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative py-1 font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7E2231] rounded ${
                    isActive ? 'text-[#7E2231]' : 'text-[#6B5550] hover:text-[#7E2231]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#7E2231] rounded-full"
                      transition={
                        shouldReduceMotion
                          ? { duration: 0 }
                          : { type: 'spring', stiffness: 400, damping: 32 }
                      }
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Header Action: Contact CTA styled like a pastel scrapbook button */}
          <div className="hidden sm:flex items-center gap-4">
            <motion.a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              {...(shouldReduceMotion ? {} : magneticButtonProps)}
              className="relative inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#7E2231] bg-[#F9DDD6] hover:bg-[#F5CAC2] border-1.5 border-[#7E2231] rounded-xl shadow-[2px_2px_0px_#7E2231] hover:shadow-[1px_1px_0px_#7E2231] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7E2231]"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#7E2231] rounded-lg border border-[#7E2231]/30 bg-white shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7E2231] cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: CINEMATIC_EASE }}
            className="fixed inset-x-0 top-[62px] z-40 bg-[#FAF7EE] border-b-2 border-[#7E2231] p-6 lg:hidden shadow-xl"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#7E2231]/15 text-xs text-[#8A635D] font-typewriter">
                <span>CATEGORÍAS / SECTIONS</span>
                <span className="font-cursive text-lg text-[#7E2231]">Harini M.</span>
              </div>
              {NAV_LINKS.map((link, idx) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04, duration: 0.2, ease: CINEMATIC_EASE }}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`py-2 text-base font-bold font-typewriter uppercase flex items-center justify-between transition-colors ${
                      isActive ? 'text-[#7E2231] pl-2 border-l-2 border-[#7E2231] bg-[#F9DDD6]/50 rounded-r' : 'text-[#553C38] hover:text-[#7E2231]'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50" />
                  </motion.a>
                );
              })}
              <div className="pt-4 border-t border-[#7E2231]/15 flex items-center justify-between">
                <span className="text-xs font-typewriter text-[#8A635D]">CS Undergrad · 2027</span>
                <motion.a
                  href="#contact"
                  {...(shouldReduceMotion ? {} : magneticButtonProps)}
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-[#7E2231] text-[#FAF7EE] rounded-xl shadow-[2px_2px_0px_#332624]"
                >
                  Contact
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
