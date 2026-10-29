/**
 * Type definitions for Harini M.'s Portfolio
 */

export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  liveUrl?: string;
  achievement?: string;
  tags: string[];
  role: string;
  features: string[];
  accentColor: 'violet' | 'cyan' | 'emerald' | 'amber';
  previewDetails: {
    highlightLabel: string;
    metrics?: { label: string; value: string }[];
    mockupType: 'sustainability' | 'manufacturing' | 'navigation' | 'traffic';
  };
}

export interface AchievementItem {
  id: string;
  title: string;
  category: string;
  detail: string;
  metric?: string;
  metricLabel?: string;
  dateOrPeriod: string;
  iconType: 'award' | 'scholarship' | 'leadership' | 'certificate' | 'seminar';
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    focus: string;
    context: string;
  }[];
}

export interface LeadershipRole {
  role: string;
  organization: string;
  period: string;
  isCurrent?: boolean;
  description: string;
  impactMetrics: string;
  keyContributions: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  scoreType: string;
  honors?: string;
  highlights?: string[];
}
