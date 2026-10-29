import React, { useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { X, ExternalLink, Trophy, CheckCircle } from 'lucide-react';
import { Project } from '../types';
import { CINEMATIC_EASE, magneticButtonProps, subtleButtonProps } from '../utils/motion';
import { WashiTape } from './DoodleAssets';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#332624]/60 backdrop-blur-xs"
        />

        {/* Modal Window with Scrapbook Paper Card Styling */}
        <motion.div
          initial={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, scale: 0.96, y: 16 }
          }
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, scale: 0.96, y: 16 }
          }
          transition={{ duration: 0.28, ease: CINEMATIC_EASE }}
          className="relative w-full max-w-3xl bg-white border-2 border-[#7E2231] rounded-3xl shadow-[6px_6px_0px_#7E2231] overflow-hidden z-10 max-h-[90vh] flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          <WashiTape color="blush" rotate="-1.5deg" className="-top-3 left-12" />

          {/* Modal Header */}
          <div className="p-6 sm:p-8 border-b border-[#7E2231]/15 flex items-start justify-between gap-4 bg-[#FAF7EE] pt-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-typewriter text-[#7E2231] font-bold mb-2">
                <span>{project.category}</span>
                {project.achievement && (
                  <>
                    <span className="text-[#7E2231]/30">·</span>
                    <span className="text-[#7E2231] bg-[#F9DDD6] px-2 py-0.5 rounded border border-[#7E2231]/30 flex items-center gap-1 font-bold">
                      <Trophy className="w-3.5 h-3.5" />
                      {project.achievement}
                    </span>
                  </>
                )}
              </div>
              <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-bold font-display text-[#332624]">
                {project.title}
              </h2>
              <p className="text-xs font-typewriter text-[#8A635D] mt-1">{project.subtitle}</p>
            </div>

            <motion.button
              onClick={onClose}
              whileTap={{ scale: 0.92 }}
              className="p-2 text-[#7E2231] hover:bg-[#F9DDD6] rounded-xl border border-[#7E2231]/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7E2231] cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            <div>
              <h3 className="text-xs font-typewriter uppercase tracking-wider text-[#7E2231] font-bold mb-2">
                Problem Statement &amp; Architectural Focus
              </h3>
              <p className="text-base text-[#4A3B37] leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Key Capabilities */}
            <div>
              <h3 className="text-xs font-typewriter uppercase tracking-wider text-[#7E2231] font-bold mb-3">
                Key Concept Innovations
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF7EE] border border-[#7E2231]/20">
                    <CheckCircle className="w-4 h-4 text-[#7E2231] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#4A3B37] leading-relaxed font-typewriter">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags & Metadata */}
            <div>
              <h3 className="text-xs font-typewriter uppercase tracking-wider text-[#7E2231] font-bold mb-2">
                Technical Context &amp; Methods
              </h3>
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#4A3B37] font-typewriter">
                {project.tags.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded bg-[#FAF7EE] border border-[#7E2231]/30">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-4 sm:p-6 border-t border-[#7E2231]/15 bg-[#FAF7EE] flex items-center justify-between">
            <span className="text-xs text-[#8A635D] font-typewriter">
              Role: {project.role}
            </span>
            {project.liveUrl ? (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                {...(shouldReduceMotion ? {} : magneticButtonProps)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#7E2231] hover:bg-[#942938] text-[#FAF7EE] rounded-xl text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0px_#332624] transition-colors cursor-pointer"
              >
                <span>Launch Live Application</span>
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            ) : (
              <motion.button
                onClick={onClose}
                {...(shouldReduceMotion ? {} : subtleButtonProps)}
                className="px-4 py-2 text-xs font-typewriter font-bold text-[#7E2231] bg-white border border-[#7E2231]/30 rounded-xl cursor-pointer"
              >
                Close Preview
              </motion.button>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
