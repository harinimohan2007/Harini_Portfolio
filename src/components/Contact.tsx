import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Mail, Linkedin, Github, Copy, Check, ArrowUpRight, Send, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { CINEMATIC_EASE, magneticButtonProps, subtleButtonProps, fadeInUp, staggerContainer } from '../utils/motion';
import { WashiTape, DoodleStar, DoodleSparkle } from './DoodleAssets';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const shouldReduceMotion = useReducedMotion();

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      subject || 'Inquiry regarding collaboration or project'
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-5 sm:px-8 border-t-2 border-[#7E2231]/15 bg-[#FDFBF7] overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Banner Container - Postcard / Letter Desk Style */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: CINEMATIC_EASE }}
          className="relative rounded-3xl bg-white border-2 border-[#7E2231] p-8 sm:p-12 lg:p-16 shadow-[5px_5px_0px_#7E2231] overflow-hidden"
        >
          {/* Washi tape header strips */}
          <WashiTape color="blush" rotate="-2deg" className="-top-3 left-16" />
          <WashiTape color="sage" rotate="2deg" className="-top-3 right-16" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            
            {/* Left Column: Direct Outreach & Verified Channels */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 font-typewriter text-xs uppercase tracking-widest text-[#7E2231] bg-[#F9DDD6] px-3 py-1 rounded-sm border border-[#7E2231]/30 mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Let&apos;s Connect · Get in Touch</span>
                </div>

                <h2
                  id="contact-heading"
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-[#332624] leading-tight mb-4"
                >
                  Have an idea worth building?
                </h2>

                <p className="font-cursive text-2xl text-[#7E2231] mb-6">
                  let&apos;s turn thoughts into interactive reality ~
                </p>

                <p className="text-base text-[#4A3B37] leading-relaxed font-normal mb-8 max-w-xl">
                  I&apos;m interested in technology, product development, creative problem-solving, and opportunities to learn and build meaningful digital experiences.
                </p>
              </div>

              {/* Contact Channels */}
              <motion.div
                variants={staggerContainer(0.1, 0.05)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {/* Email Channel with Copy */}
                <motion.div
                  variants={fadeInUp(0, 0.5, 16)}
                  className="p-4 sm:p-5 rounded-2xl bg-[#FAF7EE] border-1.5 border-[#7E2231] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 rounded-xl bg-[#F9DDD6] text-[#7E2231] border border-[#7E2231]/30">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-[#8A635D] font-typewriter">Direct Email</p>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-sm sm:text-base font-bold font-typewriter text-[#7E2231] hover:underline"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <motion.button
                      onClick={copyEmail}
                      {...(shouldReduceMotion ? {} : subtleButtonProps)}
                      className="px-3.5 py-2 text-xs font-typewriter font-bold bg-white text-[#7E2231] rounded-xl border border-[#7E2231]/40 shadow-2xs hover:bg-[#FAF7EE] flex items-center gap-1.5 cursor-pointer"
                      aria-label="Copy email address"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#3E6B27]" />
                          <span className="text-[#3E6B27]">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#7E2231]" />
                          <span>Copy</span>
                        </>
                      )}
                    </motion.button>
                    <motion.a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      {...(shouldReduceMotion ? {} : magneticButtonProps)}
                      className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-[#7E2231] hover:bg-[#942938] text-[#FAF7EE] rounded-xl shadow-[2px_2px_0px_#332624] flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Compose</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </motion.a>
                  </div>
                </motion.div>

                {/* Social Profiles Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* LinkedIn */}
                  <motion.a
                    variants={fadeInUp(0.05, 0.5, 16)}
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    {...(shouldReduceMotion ? {} : subtleButtonProps)}
                    className="group p-4 sm:p-5 rounded-2xl bg-white hover:bg-[#FAF7EE] border-1.5 border-[#7E2231] shadow-[2.5px_2.5px_0px_#7E2231] transition-all flex items-center justify-between cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-[#DBEAFE] text-[#1E3A8A] border border-[#93C5FD]">
                        <Linkedin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-[#8A635D] font-typewriter">LinkedIn</p>
                        <p className="text-sm font-bold font-typewriter text-[#332624] group-hover:text-[#7E2231]">
                          harini-mohan2007
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#7E2231]" />
                  </motion.a>

                  {/* GitHub */}
                  <motion.a
                    variants={fadeInUp(0.1, 0.5, 16)}
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    {...(shouldReduceMotion ? {} : subtleButtonProps)}
                    className="group p-4 sm:p-5 rounded-2xl bg-white hover:bg-[#FAF7EE] border-1.5 border-[#7E2231] shadow-[2.5px_2.5px_0px_#7E2231] transition-all flex items-center justify-between cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-[#F3E8FF] text-[#6B21A8] border border-[#D8B4FE]">
                        <Github className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-[#8A635D] font-typewriter">GitHub</p>
                        <p className="text-sm font-bold font-typewriter text-[#332624] group-hover:text-[#7E2231]">
                          hxrixi
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#7E2231]" />
                  </motion.a>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Direct Message Drafter with Notepad Styling */}
            <motion.div
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: CINEMATIC_EASE }}
              className="lg:col-span-5 rounded-2xl bg-[#FAF7EE] border-1.5 border-[#7E2231] p-6 sm:p-8 shadow-xs relative"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold font-display text-[#332624]">
                  Send a Quick Note
                </h3>
                <DoodleSparkle className="w-4 h-4 text-[#7E2231]" />
              </div>

              <p className="text-xs text-[#8A635D] mb-6 font-typewriter">
                Prefills directly to Harini&apos;s personal inbox.
              </p>

              <form onSubmit={handleSendEmail} className="space-y-4">
                <div>
                  <label htmlFor="subject-input" className="block text-xs font-typewriter uppercase tracking-wider text-[#332624] font-bold mb-2">
                    Subject / Topic
                  </label>
                  <input
                    id="subject-input"
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Project collaboration, hackathon discussion, role opportunity"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#7E2231]/30 text-sm text-[#332624] placeholder-[#8A635D]/60 focus:outline-none focus:border-[#7E2231] focus:ring-1 focus:ring-[#7E2231] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message-input" className="block text-xs font-typewriter uppercase tracking-wider text-[#332624] font-bold mb-2">
                    Message Note
                  </label>
                  <textarea
                    id="message-input"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hi Harini, I came across your portfolio and would love to discuss..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#7E2231]/30 text-sm text-[#332624] placeholder-[#8A635D]/60 focus:outline-none focus:border-[#7E2231] focus:ring-1 focus:ring-[#7E2231] transition-colors resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  {...(shouldReduceMotion ? {} : magneticButtonProps)}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#FAF7EE] bg-[#7E2231] hover:bg-[#942938] shadow-[2.5px_2.5px_0px_#332624] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7E2231] transition-colors"
                >
                  <span>Launch Email Client</span>
                  <Send className="w-3.5 h-3.5" />
                </motion.button>
              </form>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
