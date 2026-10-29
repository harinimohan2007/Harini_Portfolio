import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ExternalLink, Trophy, Eye, ArrowUpRight, Check } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import ProjectModal from './ProjectModal';
import ProjectPreviews from './ProjectPreviews';
import { CINEMATIC_EASE, magneticButtonProps, subtleButtonProps, fadeInUp, staggerContainer } from '../utils/motion';
import { WashiTape, DoodleStar } from './DoodleAssets';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="projects"
      className="relative py-28 px-5 sm:px-8 border-t-2 border-[#7E2231]/15 bg-[#FDFBF7]"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with Scrapbook Title */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: CINEMATIC_EASE }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
        >
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 font-typewriter text-xs uppercase tracking-widest text-[#7E2231] bg-[#F9DDD6] px-3 py-1 rounded-sm border border-[#7E2231]/30 mb-4">
              <span>03</span>
              <span>·</span>
              <span>Project Showcase &amp; Prototypes</span>
            </div>
            <h2
              id="projects-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-[#332624] leading-tight"
            >
              Interactive digital products, sustainability tools, and AI prototypes.
            </h2>
          </div>

          <div className="p-3.5 rounded-xl bg-white border-1.5 border-[#7E2231]/30 max-w-xs self-start md:self-auto shadow-xs">
            <p className="text-xs font-typewriter text-[#6B5550] leading-relaxed">
              Exhibition of live production deployments and competitive hackathon prototypes.
            </p>
          </div>
        </motion.div>

        {/* Project Exhibition Grid with Scrapbook Cards */}
        <motion.div
          variants={staggerContainer(0.14, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10"
        >
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onInspect={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>
      </div>

      {/* Deep-dive Inspection Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
  onInspect: () => void;
}

function ProjectCard({ project, index, onInspect }: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      variants={fadeInUp(0, 0.65, 20)}
      whileHover={
        shouldReduceMotion
          ? {}
          : {
              y: -3,
              boxShadow: '5px 5px 0px #7E2231',
              transition: { duration: 0.22, ease: CINEMATIC_EASE }
            }
      }
      className="group relative flex flex-col justify-between rounded-3xl bg-white border-2 border-[#7E2231] p-6 sm:p-8 shadow-[3.5px_3.5px_0px_#7E2231] transition-all"
    >
      {/* Decorative washi tape at top */}
      {index === 0 && <WashiTape color="sage" rotate="-2deg" className="-top-3 left-8" />}
      {index === 1 && <WashiTape color="blush" rotate="2deg" className="-top-3 right-8" />}
      {index === 2 && <WashiTape color="butter" rotate="1deg" className="-top-3 left-10" />}
      {index === 3 && <WashiTape color="blush" rotate="-2deg" className="-top-3 right-10" />}

      <div>
        {/* Header Metadata */}
        <div className="flex items-center justify-between gap-4 mb-3 pt-1">
          <div className="flex items-center gap-2 text-xs font-typewriter text-[#8A635D]">
            <span className="text-[#7E2231] font-bold uppercase">{project.category}</span>
          </div>

          {project.achievement && (
            <div className="flex items-center gap-1.5 text-xs font-typewriter text-[#7E2231] bg-[#F9DDD6] px-2.5 py-1 rounded-md border border-[#7E2231]/30">
              <Trophy className="w-3.5 h-3.5" />
              <span>{project.achievement}</span>
            </div>
          )}
        </div>

        {/* Project Title & Subtitle */}
        <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#332624] group-hover:text-[#7E2231] transition-colors mb-1.5">
          {project.title}
        </h3>
        <p className="text-xs font-typewriter text-[#8A635D] mb-4">
          {project.subtitle}
        </p>

        {/* Narrative Description */}
        <p className="text-sm text-[#4A3B37] leading-relaxed mb-6 font-normal">
          {project.description}
        </p>

        {/* Domain Preview Component */}
        <div className="mb-6">
          <ProjectPreviews project={project} />
        </div>

        {/* Feature Points */}
        <div className="space-y-2 mb-6">
          {project.features.slice(0, 2).map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs text-[#4A3B37]">
              <Check className="w-3.5 h-3.5 text-[#7E2231] shrink-0 mt-0.5" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Actions & Clean Unboxed Tags */}
      <div>
        {/* Clean unboxed metadata with separators */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#8A635D] font-typewriter mb-6 pt-4 border-t border-[#7E2231]/15">
          {project.tags.map((tag, tIdx) => (
            <React.Fragment key={tag}>
              <span>{tag}</span>
              {tIdx < project.tags.length - 1 && <span className="text-[#7E2231]/40">·</span>}
            </React.Fragment>
          ))}
        </div>

        {/* Interactive Action Buttons */}
        <div className="flex items-center justify-between gap-3">
          {project.liveUrl ? (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              {...(shouldReduceMotion ? {} : magneticButtonProps)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#FAF7EE] bg-[#7E2231] hover:bg-[#942938] shadow-[2.5px_2.5px_0px_#332624] hover:shadow-[1.5px_1.5px_0px_#332624] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7E2231] cursor-pointer"
            >
              <span>Launch Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </motion.a>
          ) : (
            <motion.button
              onClick={onInspect}
              {...(shouldReduceMotion ? {} : subtleButtonProps)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#7E2231] bg-white hover:bg-[#FDFBF7] border-1.5 border-[#7E2231] shadow-[2.5px_2.5px_0px_#7E2231] cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5 text-[#7E2231]" />
              <span>Inspect Concept Spec</span>
            </motion.button>
          )}

          <motion.button
            onClick={onInspect}
            {...(shouldReduceMotion ? {} : subtleButtonProps)}
            className="p-2.5 text-[#6B5550] hover:text-[#7E2231] rounded-xl hover:bg-[#FAF7EE] transition-colors text-xs flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7E2231] cursor-pointer"
            title="Inspect project details"
          >
            <span className="font-typewriter text-[11px] font-bold">Specs</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}
