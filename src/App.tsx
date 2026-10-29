/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import SmoothScrollNavigator from './components/SmoothScrollNavigator';
import Scroll3DStoryCanvas from './components/Scroll3DStoryCanvas';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Leadership from './components/Leadership';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth > 1024 && !window.matchMedia('(hover: none)').matches);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    const handlePointerMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener('resize', checkDesktop);
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FAF7EE] text-[#332624] selection:bg-[#F9DDD6] selection:text-[#7E2231] overflow-x-hidden font-sans">
      
      {/* Accessibility: Skip to Main Content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#7E2231] focus:text-[#FAF7EE] focus:rounded-lg focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Subtle Warm Pastel Ambient Pointer Glow (Desktop only) */}
      {isDesktop && (
        <div
          className="pointer-events-none fixed z-30 transition-transform duration-100 ease-out"
          style={{
            transform: `translate(${cursorPos.x - 200}px, ${cursorPos.y - 200}px)`,
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(249, 221, 214, 0.45) 0%, rgba(221, 232, 212, 0.15) 45%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
      )}

      {/* Primary Top Navigation */}
      <Navbar />

      {/* Continuous Scroll-Driven 3D Story Canvas */}
      <Scroll3DStoryCanvas />

      {/* Effortless Smooth Scroll Navigator & Reading Progress */}
      <SmoothScrollNavigator />

      {/* Main Content Area */}
      <main id="main-content" className="relative z-10">
        <Hero />
        <About />
        <Achievements />
        <Projects />
        <Skills />
        <Leadership />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
