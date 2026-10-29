import React from 'react';

// Color palette matching the reference image:
// Line color: #7E2231 (Signature warm crimson)
// Accent pink: #F9DDD6
// Accent sage: #DDE8D4
// Accent butter: #FEF3C7
// Accent terracotta: #D97768

export function DeskIllustration({ className = "w-full max-w-xl" }: { className?: string }) {
  return (
    <div className={`relative select-none pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 540 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* Background wall pins & artwork (Inspired by reference) */}
        {/* Butterfly frame */}
        <g transform="translate(10, 50)">
          <rect x="0" y="0" width="46" height="56" rx="3" stroke="#7E2231" strokeWidth="1.5" fill="#FFFFFF" />
          <path d="M23 0 V-6 M20 -6 H26" stroke="#7E2231" strokeWidth="1.2" />
          {/* Butterfly doodle */}
          <path d="M19 28 C12 20 6 22 10 32 C14 38 21 34 22 30" stroke="#7E2231" strokeWidth="1.3" fill="#F9DDD6" />
          <path d="M27 28 C34 20 40 22 36 32 C32 38 25 34 24 30" stroke="#7E2231" strokeWidth="1.3" fill="#F9DDD6" />
          <ellipse cx="23" cy="30" rx="2" ry="7" stroke="#7E2231" strokeWidth="1.3" fill="#7E2231" />
          <path d="M21 23 C18 19 16 18 15 19 M25 23 C28 19 30 18 31 19" stroke="#7E2231" strokeWidth="1" />
        </g>

        {/* Flower frame */}
        <g transform="translate(12, 120)">
          <rect x="0" y="0" width="42" height="52" rx="3" stroke="#7E2231" strokeWidth="1.5" fill="#FFFFFF" />
          <circle cx="21" cy="-4" r="3" stroke="#7E2231" strokeWidth="1.2" fill="#DDE8D4" />
          {/* Flower */}
          <circle cx="21" cy="24" r="4" fill="#FEF3C7" stroke="#7E2231" strokeWidth="1.2" />
          <circle cx="21" cy="16" r="3.5" fill="#F9DDD6" stroke="#7E2231" strokeWidth="1" />
          <circle cx="21" cy="32" r="3.5" fill="#F9DDD6" stroke="#7E2231" strokeWidth="1" />
          <circle cx="13" cy="24" r="3.5" fill="#F9DDD6" stroke="#7E2231" strokeWidth="1" />
          <circle cx="29" cy="24" r="3.5" fill="#F9DDD6" stroke="#7E2231" strokeWidth="1" />
          <path d="M21 32 C21 42 22 46 22 46" stroke="#7E2231" strokeWidth="1.3" />
        </g>

        {/* Potted succulent on left plant stand */}
        <g transform="translate(68, 175)">
          <path d="M12 25 L36 25 L32 50 L16 50 Z" stroke="#7E2231" strokeWidth="1.5" fill="#F4EFE3" />
          <path d="M8 22 H40 V27 H8 Z" stroke="#7E2231" strokeWidth="1.3" fill="#FFFFFF" />
          {/* Plant leaves */}
          <path d="M24 22 C18 10 10 12 12 22" fill="#DDE8D4" stroke="#7E2231" strokeWidth="1.3" />
          <path d="M24 22 C24 8 28 8 28 22" fill="#DDE8D4" stroke="#7E2231" strokeWidth="1.3" />
          <path d="M24 22 C32 10 38 14 34 22" fill="#DDE8D4" stroke="#7E2231" strokeWidth="1.3" />
          <path d="M24 22 C20 15 16 16 18 22" fill="#DDE8D4" stroke="#7E2231" strokeWidth="1.3" />
          {/* Stand lines */}
          <path d="M14 50 V62 M34 50 V62 M10 62 H38" stroke="#7E2231" strokeWidth="1.4" />
        </g>

        {/* Desk Base Structure */}
        {/* Drawers block */}
        <rect x="120" y="145" width="65" height="115" rx="3" stroke="#7E2231" strokeWidth="1.8" fill="#FFFFFF" />
        <line x1="120" y1="174" x2="185" y2="174" stroke="#7E2231" strokeWidth="1.3" />
        <line x1="120" y1="203" x2="185" y2="203" stroke="#7E2231" strokeWidth="1.3" />
        <line x1="120" y1="232" x2="185" y2="232" stroke="#7E2231" strokeWidth="1.3" />
        {/* Drawer handles */}
        <rect x="145" y="157" width="16" height="3" rx="1.5" fill="#7E2231" />
        <rect x="145" y="186" width="16" height="3" rx="1.5" fill="#7E2231" />
        <rect x="145" y="215" width="16" height="3" rx="1.5" fill="#7E2231" />
        <rect x="145" y="244" width="16" height="3" rx="1.5" fill="#7E2231" />

        {/* Desk top surface */}
        <rect x="110" y="140" width="260" height="9" rx="2" stroke="#7E2231" strokeWidth="1.8" fill="#F4EFE3" />
        {/* Right desk legs */}
        <path d="M355 149 V260 M363 149 V260" stroke="#7E2231" strokeWidth="1.8" />
        <line x1="355" y1="250" x2="363" y2="250" stroke="#7E2231" strokeWidth="1.4" />

        {/* Desk Lamp on left */}
        <g transform="translate(130, 85)">
          <path d="M10 55 C10 52 25 52 25 55 Z" stroke="#7E2231" strokeWidth="1.4" fill="#FFFFFF" />
          <path d="M17 52 L26 30 L16 12" stroke="#7E2231" strokeWidth="1.4" fill="none" />
          <path d="M16 12 L30 5 L35 18 L21 25 Z" stroke="#7E2231" strokeWidth="1.4" fill="#FEF3C7" />
          <circle cx="26" cy="30" r="2.5" fill="#7E2231" />
        </g>

        {/* Pen cup & brushes */}
        <g transform="translate(155, 122)">
          <rect x="4" y="8" width="16" height="18" rx="2" stroke="#7E2231" strokeWidth="1.3" fill="#FFFFFF" />
          <line x1="7" y1="8" x2="4" y2="-2" stroke="#7E2231" strokeWidth="1.5" />
          <line x1="12" y1="8" x2="13" y2="-4" stroke="#7E2231" strokeWidth="1.3" />
          <line x1="16" y1="8" x2="20" y2="0" stroke="#7E2231" strokeWidth="1.5" />
        </g>

        {/* Computer Monitor */}
        <g transform="translate(185, 95)">
          <rect x="0" y="0" width="56" height="42" rx="3" stroke="#7E2231" strokeWidth="1.8" fill="#FFFFFF" />
          <rect x="4" y="4" width="48" height="32" rx="1.5" stroke="#7E2231" strokeWidth="1" fill="#FAF7EE" />
          {/* Smiley face sketch on screen like in reference */}
          <circle cx="28" cy="20" r="8" stroke="#7E2231" strokeWidth="1.2" fill="#FEF3C7" />
          <circle cx="25" cy="18" r="1" fill="#7E2231" />
          <circle cx="31" cy="18" r="1" fill="#7E2231" />
          <path d="M25 22 Q28 25 31 22" stroke="#7E2231" strokeWidth="1" fill="none" />
          {/* Stand */}
          <path d="M24 42 L22 47 H34 L32 42" stroke="#7E2231" strokeWidth="1.4" fill="#FFFFFF" />
          {/* Keyboard & mouse */}
          <rect x="6" y="47" width="36" height="4" rx="1" stroke="#7E2231" strokeWidth="1" fill="#FFFFFF" />
          <rect x="46" y="47" width="6" height="4" rx="2" stroke="#7E2231" strokeWidth="1" fill="#FFFFFF" />
        </g>

        {/* Creative Developer Character (Bunny with blush, directly inspired by reference) */}
        <g transform="translate(245, 90)">
          {/* Bunny Ears */}
          <path d="M12 28 C12 8 18 6 20 28" fill="#FFFFFF" stroke="#7E2231" strokeWidth="1.6" />
          <path d="M14 26 C14 14 17 12 18 26" fill="#F9DDD6" />
          <path d="M26 28 C28 8 34 6 34 28" fill="#FFFFFF" stroke="#7E2231" strokeWidth="1.6" />
          <path d="M28 26 C29 14 32 12 32 26" fill="#F9DDD6" />
          {/* Bunny Head */}
          <circle cx="23" cy="38" r="14" fill="#FFFFFF" stroke="#7E2231" strokeWidth="1.6" />
          {/* Eyes & cute expression */}
          <circle cx="18" cy="36" r="1.5" fill="#7E2231" />
          <circle cx="28" cy="36" r="1.5" fill="#7E2231" />
          <path d="M21 40 L23 38 L25 40" stroke="#7E2231" strokeWidth="1" fill="none" />
          {/* Pink blush cheeks */}
          <circle cx="16" cy="40" r="2.5" fill="#F9DDD6" />
          <circle cx="30" cy="40" r="2.5" fill="#F9DDD6" />
          {/* Paws on desk */}
          <ellipse cx="14" cy="54" rx="4" ry="3" fill="#FFFFFF" stroke="#7E2231" strokeWidth="1.3" />
        </g>

        {/* Red / Crimson Spin Chair (Directly from reference) */}
        <g transform="translate(240, 138)">
          {/* Chair backrest */}
          <path d="M10 2 C10 -15 50 -15 50 2 C50 22 10 22 10 2 Z" fill="#9E2A2B" stroke="#7E2231" strokeWidth="1.8" />
          {/* Chair pole */}
          <line x1="30" y1="36" x2="30" y2="60" stroke="#7E2231" strokeWidth="2.5" />
          {/* Chair 5-star legs & wheels */}
          <path d="M30 60 L14 74 M30 60 L46 74 M30 60 L30 78 M30 60 L10 65 M30 60 L50 65" stroke="#7E2231" strokeWidth="2" />
          <circle cx="14" cy="74" r="3" fill="#7E2231" />
          <circle cx="46" cy="74" r="3" fill="#7E2231" />
          <circle cx="30" cy="78" r="3" fill="#7E2231" />
          <circle cx="10" cy="65" r="3" fill="#7E2231" />
          <circle cx="50" cy="65" r="3" fill="#7E2231" />
        </g>

        {/* Coffee Cup with Steam on desk */}
        <g transform="translate(295, 126)">
          <path d="M4 14 H22 L20 25 H6 Z" fill="#FFFFFF" stroke="#7E2231" strokeWidth="1.4" />
          <path d="M22 16 C25 16 26 21 21 22" stroke="#7E2231" strokeWidth="1.2" fill="none" />
          <ellipse cx="13" cy="25" rx="10" ry="1.5" stroke="#7E2231" strokeWidth="1" fill="#FFFFFF" />
          {/* Steam */}
          <path d="M10 10 Q12 6 11 2" stroke="#7E2231" strokeWidth="1" strokeDasharray="1.5 1.5" fill="none" />
          <path d="M16 10 Q14 6 15 2" stroke="#7E2231" strokeWidth="1" strokeDasharray="1.5 1.5" fill="none" />
        </g>

        {/* Desk books & plant on right */}
        <g transform="translate(325, 115)">
          <rect x="0" y="8" width="5" height="25" rx="1" fill="#DDE8D4" stroke="#7E2231" strokeWidth="1.2" />
          <rect x="6" y="4" width="6" height="29" rx="1" fill="#F9DDD6" stroke="#7E2231" strokeWidth="1.2" />
          <rect x="13" y="10" width="5" height="23" rx="1" fill="#FEF3C7" stroke="#7E2231" strokeWidth="1.2" />
          {/* Small potted desk plant */}
          <path d="M24 24 H34 L32 34 H26 Z" fill="#F4EFE3" stroke="#7E2231" strokeWidth="1.2" />
          <path d="M29 24 C26 16 24 18 26 24" fill="#DDE8D4" stroke="#7E2231" strokeWidth="1.1" />
          <path d="M29 24 C32 16 34 18 32 24" fill="#DDE8D4" stroke="#7E2231" strokeWidth="1.1" />
        </g>

        {/* Right Wall Artwork: Poster & Strawberry (from reference) */}
        {/* Flower vase poster */}
        <g transform="translate(410, 80)">
          <rect x="0" y="0" width="44" height="60" rx="3" stroke="#7E2231" strokeWidth="1.5" fill="#FFFFFF" />
          <circle cx="22" cy="-5" r="3" stroke="#7E2231" strokeWidth="1.2" fill="#F9DDD6" />
          {/* Vase with flowers */}
          <path d="M16 42 Q13 54 22 54 Q31 54 28 42 Z" stroke="#7E2231" strokeWidth="1.2" fill="#FEF3C7" />
          <circle cx="22" cy="34" r="3" fill="#F9DDD6" stroke="#7E2231" strokeWidth="1" />
          <circle cx="16" cy="36" r="2.5" fill="#DDE8D4" stroke="#7E2231" strokeWidth="1" />
          <circle cx="28" cy="36" r="2.5" fill="#DDE8D4" stroke="#7E2231" strokeWidth="1" />
        </g>

        {/* Strawberry poster (exact detail from reference!) */}
        <g transform="translate(450, 155)">
          <rect x="0" y="0" width="36" height="46" rx="3" stroke="#7E2231" strokeWidth="1.4" fill="#FFFFFF" />
          <circle cx="18" cy="-4" r="2.5" stroke="#7E2231" strokeWidth="1" fill="#DDE8D4" />
          {/* Strawberry */}
          <path d="M12 20 Q18 36 24 20 Q18 16 12 20 Z" fill="#9E2A2B" stroke="#7E2231" strokeWidth="1.2" />
          <path d="M16 16 L18 13 L20 16" stroke="#DDE8D4" strokeWidth="1.2" fill="none" />
        </g>

        {/* Stack of books on right floor */}
        <g transform="translate(390, 195)">
          <rect x="8" y="32" width="46" height="10" rx="2" fill="#F9DDD6" stroke="#7E2231" strokeWidth="1.3" />
          <rect x="12" y="22" width="40" height="10" rx="2" fill="#9E2A2B" stroke="#7E2231" strokeWidth="1.3" />
          <rect x="16" y="14" width="34" height="8" rx="2" fill="#FEF3C7" stroke="#7E2231" strokeWidth="1.3" />
        </g>

        {/* Paper roll basket on floor */}
        <g transform="translate(320, 200)">
          <rect x="0" y="15" width="36" height="28" rx="2" fill="#7E2231" stroke="#7E2231" strokeWidth="1.4" />
          <line x1="8" y1="15" x2="6" y2="-4" stroke="#7E2231" strokeWidth="2.5" />
          <line x1="16" y1="15" x2="16" y2="-6" stroke="#7E2231" strokeWidth="2.5" />
          <line x1="24" y1="15" x2="26" y2="-2" stroke="#7E2231" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

// Pushpin doodle
export function PushPin({ color = "#7E2231", className = "w-4 h-4" }: { color?: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="12" cy="7" rx="5" ry="4" fill="#F9DDD6" stroke={color} strokeWidth="1.8" />
      <circle cx="12" cy="7" r="2" fill={color} />
      <path d="M12 11 V19 L10 21" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

// Star doodle
export function DoodleStar({ className = "w-5 h-5", fill = "#FEF3C7" }: { className?: string; fill?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2L14.5 9H22L16 13.5L18.5 21L12 16.5L5.5 21L8 13.5L2 9H9.5L12 2Z"
        fill={fill}
        stroke="#7E2231"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Sparkle doodle
export function DoodleSparkle({ className = "w-4 h-4", color = "#7E2231" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2V22M2 12H22M5 5L19 19M19 5L5 19"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Hand-drawn arrow
export function DoodleArrow({ className = "w-8 h-8", color = "#7E2231" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 24 C14 14 26 12 32 18 M32 18 L26 14 M32 18 L28 24"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Washi Tape Component
export function WashiTape({
  className = "",
  color = "blush",
  rotate = "-2deg"
}: {
  className?: string;
  color?: 'blush' | 'sage' | 'butter';
  rotate?: string;
}) {
  const bg = color === 'sage' ? 'bg-[#DDE8D4]/90' : color === 'butter' ? 'bg-[#FEF3C7]/90' : 'bg-[#F9DDD6]/90';
  return (
    <div
      style={{ transform: `rotate(${rotate})` }}
      className={`absolute h-6 w-20 ${bg} border-l-2 border-r-2 border-dashed border-[#7E2231]/30 z-20 pointer-events-none shadow-sm ${className}`}
    />
  );
}
