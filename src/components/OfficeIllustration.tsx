/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Play } from 'lucide-react';

interface OfficeIllustrationProps {
  onPlayClick?: () => void;
  className?: string;
}

export const OfficeIllustration: React.FC<OfficeIllustrationProps> = ({
  onPlayClick,
  className = '',
}) => {
  return (
    <div
      onClick={onPlayClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onPlayClick?.();
        }
      }}
      className={`group relative overflow-hidden rounded-2xl md:rounded-3xl border border-neutral-800/80 bg-neutral-900 cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-[#5548e2] ${className}`}
    >
      <svg
        viewBox="0 0 800 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      >
        <defs>
          {/* Sky / Window light gradient */}
          <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#dbeafe" />
            <stop offset="60%" stopColor="#f1f5f9" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>

          {/* Wooden conference table gradient */}
          <linearGradient id="woodTable" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#e8dfd8" />
            <stop offset="50%" stopColor="#d7ccc8" />
            <stop offset="100%" stopColor="#c7b8af" />
          </linearGradient>

          {/* Floor gradient */}
          <linearGradient id="floorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#27272a" />
            <stop offset="100%" stopColor="#18181b" />
          </linearGradient>

          {/* Plant leaves gradient green */}
          <linearGradient id="green1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="100%" stopColor="#15803d" />
          </linearGradient>

          <linearGradient id="green2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#052e16" />
          </linearGradient>

          {/* Overlay vignette */}
          <linearGradient id="officeVignette" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.2" />
            <stop offset="60%" stopColor="#000000" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {/* 1. Panoramic architectural window backdrop */}
        <rect x="0" y="0" width="800" height="480" fill="url(#skyGrad)" />

        {/* City skyline silhouettes outside windows */}
        <g opacity="0.35" fill="#94a3b8">
          <rect x="180" y="110" width="45" height="180" rx="2" />
          <rect x="235" y="80" width="60" height="210" rx="2" />
          <rect x="305" y="130" width="50" height="160" rx="2" />
          <rect x="365" y="95" width="70" height="195" rx="2" />
          <rect x="445" y="120" width="55" height="170" rx="2" />
          <rect x="510" y="70" width="65" height="220" rx="2" />
          <rect x="585" y="105" width="50" height="185" rx="2" />
        </g>

        {/* Window structural mullions */}
        <g stroke="#cbd5e1" strokeWidth="6" opacity="0.8">
          <line x1="200" y1="0" x2="200" y2="300" />
          <line x1="380" y1="0" x2="380" y2="300" />
          <line x1="560" y1="0" x2="560" y2="300" />
          <line x1="720" y1="0" x2="720" y2="300" />
          <line x1="0" y1="280" x2="800" y2="280" strokeWidth="8" />
        </g>

        {/* 2. Office Floor */}
        <path d="M0 280 L800 280 L800 480 L0 480 Z" fill="url(#floorGrad)" />

        {/* Floor planks subtle lines */}
        <g stroke="#3f3f46" strokeWidth="1" opacity="0.4">
          <line x1="100" y1="280" x2="0" y2="480" />
          <line x1="250" y1="280" x2="160" y2="480" />
          <line x1="400" y1="280" x2="380" y2="480" />
          <line x1="550" y1="280" x2="600" y2="480" />
          <line x1="700" y1="280" x2="800" y2="480" />
        </g>

        {/* 3. Central Modern Conference Table & Ergonomic Chairs */}
        {/* Table Shadow */}
        <ellipse cx="360" cy="380" rx="190" ry="25" fill="#09090b" opacity="0.6" />

        {/* Table Top (Smooth Oval Curve) */}
        <path
          d="M200 350 C200 310 520 310 520 350 C520 375 200 375 200 350 Z"
          fill="url(#woodTable)"
        />
        {/* Table edge highlight */}
        <path
          d="M200 350 C200 370 520 370 520 350"
          stroke="#b0a297"
          strokeWidth="4"
        />

        {/* Table Leg Base */}
        <path d="M350 365 L345 420 L375 420 L370 365 Z" fill="#18181b" />
        <ellipse cx="360" cy="420" rx="45" ry="8" fill="#27272a" />

        {/* Office Chairs around table */}
        {/* Left chair */}
        <path d="M230 330 C220 300 250 270 270 290 C260 320 240 340 230 330 Z" fill="#3f3f46" />
        {/* Right chairs */}
        <path d="M450 320 C460 280 490 280 480 320 Z" fill="#27272a" />
        <path d="M310 300 C320 270 350 270 340 300 Z" fill="#334155" />

        {/* Laptops and notebook items on desk */}
        <rect x="280" y="332" width="28" height="16" rx="2" fill="#94a3b8" />
        <rect x="410" y="335" width="26" height="15" rx="2" fill="#cbd5e1" />
        <circle cx="360" cy="340" r="5" fill="#ffffff" opacity="0.8" />

        {/* Team figures collaborating (clean silhouettes) */}
        {/* Person standing presenting */}
        <circle cx="395" cy="245" r="12" fill="#475569" />
        <path d="M380 262 C380 258 410 258 410 262 L405 320 L385 320 Z" fill="#1e293b" />
        <rect x="402" y="275" width="16" height="8" rx="2" fill="#f8fafc" />

        {/* Person seated left */}
        <circle cx="260" cy="275" r="11" fill="#64748b" />
        <path d="M248 290 C248 286 272 286 272 290 L270 340 L250 340 Z" fill="#334155" />

        {/* Person seated center */}
        <circle cx="335" cy="280" r="10" fill="#475569" />
        <path d="M325 294 C325 290 345 290 345 294 L342 335 L328 335 Z" fill="#0f172a" />

        {/* 4. Lush Indoor Greenery Framing Left and Foreground */}
        {/* Large Ficus / Monstera on Left */}
        <g id="leftPlantGroup">
          <ellipse cx="80" cy="450" rx="55" ry="16" fill="#000000" opacity="0.7" />
          <path d="M40 400 L60 455 L100 455 L120 400 Z" fill="#404040" />

          {/* Monstera leaves left */}
          <path d="M70 410 C20 380 -20 300 10 230 C40 250 70 320 80 410 Z" fill="url(#green2)" />
          <path d="M85 410 C50 330 30 240 80 180 C110 210 110 310 85 410 Z" fill="url(#green1)" />
          <path d="M90 410 C90 320 120 220 160 190 C170 240 140 330 90 410 Z" fill="url(#green2)" />
          <path d="M80 420 C30 390 10 340 30 290 C60 310 75 370 80 420 Z" fill="url(#green1)" />
          <path d="M75 430 C10 420 -30 380 -10 320 C20 350 60 390 75 430 Z" fill="url(#green2)" />
        </g>

        {/* Lush Greenery Framing Right & Background Pillars */}
        <g id="rightPlantGroup">
          <ellipse cx="710" cy="445" rx="50" ry="15" fill="#000000" opacity="0.7" />
          <path d="M680 405 L695 450 L730 450 L745 405 Z" fill="#303030" />

          {/* Tall palms / Ficus foliage right */}
          <path d="M710 410 C690 320 660 210 620 160 C660 170 700 280 710 410 Z" fill="url(#green1)" />
          <path d="M715 410 C740 310 790 220 830 180 C810 240 760 330 715 410 Z" fill="url(#green2)" />
          <path d="M720 410 C700 340 710 250 740 200 C760 240 750 320 720 410 Z" fill="url(#green1)" />
          <path d="M705 415 C650 370 610 320 630 260 C660 290 690 350 705 415 Z" fill="url(#green2)" />
        </g>

        {/* Foreground hanging planter vines top left */}
        <g id="hangingPlanters" opacity="0.9">
          <line x1="120" y1="0" x2="120" y2="40" stroke="#71717a" strokeWidth="2" />
          <path d="M100 40 L140 40 L130 55 L110 55 Z" fill="#27272a" />
          <path d="M120 50 C110 90 90 120 80 150 C95 130 115 100 120 50 Z" fill="url(#green1)" />
          <path d="M125 50 C135 95 145 130 140 160 C130 130 125 95 125 50 Z" fill="url(#green2)" />
        </g>

        {/* Overall subtle cinematic vignette */}
        <rect x="0" y="0" width="800" height="480" fill="url(#officeVignette)" />
      </svg>

      {/* Play button overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/35 transition-colors">
        <div className="relative flex items-center justify-center">
          {/* Pulsing ring on hover */}
          <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-white/30 group-hover:border-[#7064f5] group-hover:scale-110 transition-all duration-300" />
          
          {/* Main frosted play button circle */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/60 flex items-center justify-center shadow-2xl group-hover:scale-105 group-hover:bg-white/30 transition-all duration-300">
            <Play className="w-7 h-7 sm:w-8 sm:h-8 text-white fill-white ml-1 transition-transform group-hover:scale-110" />
          </div>
        </div>
      </div>

      {/* Subtitle badge in bottom left */}
      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-xs sm:text-sm font-medium text-white/90 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#5548e2] animate-pulse" />
        <span>Видео-экскурсия по реализованным проектам</span>
      </div>
    </div>
  );
};
