import { Variants } from 'motion/react';

// Unified cinematic bezier curves
export const CINEMATIC_EASE = [0.16, 1, 0.3, 1] as const;
export const SMOOTH_EASE = [0.22, 1, 0.36, 1] as const;

export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0.05): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
      ease: CINEMATIC_EASE
    }
  }
});

export const fadeInUp = (delay = 0, duration = 0.6, distance = 20): Variants => ({
  hidden: { opacity: 0, y: distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration, delay, ease: CINEMATIC_EASE }
  }
});

export const fadeIn = (delay = 0, duration = 0.5): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration, delay, ease: CINEMATIC_EASE }
  }
});

export const scaleIn = (delay = 0, duration = 0.5): Variants => ({
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration, delay, ease: CINEMATIC_EASE }
  }
});

// Sophisticated button interaction configurations
export const magneticButtonProps = {
  whileHover: { scale: 1.025, y: -1 },
  whileTap: { scale: 0.975, y: 0 },
  transition: { duration: 0.18, ease: CINEMATIC_EASE }
};

export const subtleButtonProps = {
  whileHover: { scale: 1.015, y: -0.5 },
  whileTap: { scale: 0.985, y: 0 },
  transition: { duration: 0.15, ease: CINEMATIC_EASE }
};
