/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export const PlantIllustration: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Ambient glow behind plant with theme blue */}
      <div className="absolute w-52 h-52 bg-[#5548e2]/25 rounded-full blur-3xl pointer-events-none" />
      
      <svg
        viewBox="0 0 400 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-[280px] drop-shadow-2xl select-none"
      >
        <defs>
          {/* Pot gradients */}
          <linearGradient id="potGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f5f5f0" />
            <stop offset="45%" stopColor="#e2e2dc" />
            <stop offset="85%" stopColor="#b8b8b0" />
            <stop offset="100%" stopColor="#8c8c84" />
          </linearGradient>

          <linearGradient id="potInner" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2a2a2a" />
            <stop offset="100%" stopColor="#141414" />
          </linearGradient>

          {/* Leaves gradients */}
          <linearGradient id="leafGrad1" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#86efac" />
            <stop offset="35%" stopColor="#22c55e" />
            <stop offset="75%" stopColor="#15803d" />
            <stop offset="100%" stopColor="#14532d" />
          </linearGradient>

          <linearGradient id="leafGrad2" x1="0%" y1="10%" x2="100%" y2="90%">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="50%" stopColor="#16a34a" />
            <stop offset="100%" stopColor="#052e16" />
          </linearGradient>

          <linearGradient id="leafGrad3" x1="10%" y1="0%" x2="90%" y2="100%">
            <stop offset="0%" stopColor="#a7f3d0" />
            <stop offset="40%" stopColor="#10b981" />
            <stop offset="80%" stopColor="#047857" />
            <stop offset="100%" stopColor="#064e3b" />
          </linearGradient>

          <linearGradient id="leafHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          {/* Ground shadow */}
          <radialGradient id="potShadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#000000" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Soft shadow under pot */}
        <ellipse cx="200" cy="410" rx="90" ry="18" fill="url(#potShadow)" />

        {/* --- Foliage Group --- */}
        <g id="foliage">
          {/* Back leaves */}
          <path
            d="M200 240 C170 180 120 140 100 80 C130 90 180 140 200 240 Z"
            fill="url(#leafGrad2)"
            opacity="0.85"
          />
          <path
            d="M200 240 C230 170 280 130 305 70 C280 90 230 150 200 240 Z"
            fill="url(#leafGrad1)"
            opacity="0.85"
          />

          {/* Top center dominant shoot */}
          <path
            d="M200 230 C190 140 170 60 200 20 C225 60 210 140 200 230 Z"
            fill="url(#leafGrad3)"
          />
          <path
            d="M200 20 C201 80 201 160 200 230"
            stroke="#bbf7d0"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.6"
          />

          {/* Left arched broad leaf */}
          <path
            d="M195 245 C150 210 90 190 50 160 C70 140 140 150 180 220 Z"
            fill="url(#leafGrad1)"
          />
          <path
            d="M50 160 C100 175 150 200 195 245"
            stroke="#86efac"
            strokeWidth="2"
            opacity="0.5"
          />

          {/* Right arched broad leaf */}
          <path
            d="M205 245 C250 210 310 190 350 160 C330 140 260 150 220 220 Z"
            fill="url(#leafGrad2)"
          />
          <path
            d="M350 160 C300 175 250 200 205 245"
            stroke="#86efac"
            strokeWidth="2"
            opacity="0.5"
          />

          {/* Mid-tier front left lush leaf */}
          <path
            d="M195 250 C160 230 100 220 70 205 C85 185 150 185 190 235 Z"
            fill="url(#leafGrad3)"
          />
          <path
            d="M70 205 C115 210 155 225 195 250"
            stroke="#bbf7d0"
            strokeWidth="1.8"
            opacity="0.45"
          />

          {/* Mid-tier front right lush leaf */}
          <path
            d="M205 250 C240 230 300 220 330 205 C315 185 250 185 210 235 Z"
            fill="url(#leafGrad1)"
          />
          <path
            d="M330 205 C285 210 245 225 205 250"
            stroke="#bbf7d0"
            strokeWidth="1.8"
            opacity="0.45"
          />

          {/* Center foreground vibrant leaves with high contrast veins */}
          <path
            d="M198 255 C175 220 140 160 160 100 C185 125 195 180 200 250 Z"
            fill="url(#leafGrad2)"
          />
          <path
            d="M160 100 C170 150 185 200 198 255"
            stroke="#bbf7d0"
            strokeWidth="2"
            opacity="0.7"
          />

          <path
            d="M202 255 C225 220 260 160 240 100 C215 125 205 180 200 250 Z"
            fill="url(#leafGrad3)"
          />
          <path
            d="M240 100 C230 150 215 200 202 255"
            stroke="#bbf7d0"
            strokeWidth="2"
            opacity="0.7"
          />

          {/* Central front leaf drooping gracefully */}
          <path
            d="M190 250 C180 210 185 175 200 145 C215 175 220 210 210 250 Z"
            fill="url(#leafGrad1)"
          />
          <path
            d="M200 145 C200 180 200 220 200 255"
            stroke="#86efac"
            strokeWidth="2"
            opacity="0.6"
          />

          {/* Leaf gloss shine highlights */}
          <path
            d="M185 155 C190 170 192 195 190 220 C185 215 180 185 185 155 Z"
            fill="url(#leafHighlight)"
          />
          <path
            d="M215 155 C210 170 208 195 210 220 C215 215 220 185 215 155 Z"
            fill="url(#leafHighlight)"
          />
        </g>

        {/* --- Ceramic Ribbed Bowl Pot --- */}
        <g id="pot">
          {/* Soil / pot opening interior */}
          <ellipse cx="200" cy="270" rx="72" ry="16" fill="url(#potInner)" />

          {/* Round ceramic pot body */}
          <path
            d="M128 270 
               C110 320 125 385 160 398 
               C180 405 220 405 240 398 
               C275 385 290 320 272 270 
               Z"
            fill="url(#potGrad)"
          />

          {/* Ceramic pot ribbing / ridges (vertical grooves) */}
          <g stroke="#ffffff" strokeOpacity="0.25" strokeWidth="1.2" fill="none">
            <path d="M140 280 C130 325 142 375 165 395" />
            <path d="M155 277 C148 325 156 380 175 398" />
            <path d="M170 274 C166 325 172 382 185 401" />
            <path d="M185 272 C184 325 186 383 195 402" />
            <path d="M200 271 C200 325 200 383 200 402" />
            <path d="M215 272 C216 325 214 383 205 402" />
            <path d="M230 274 C234 325 228 382 215 401" />
            <path d="M245 277 C252 325 244 380 225 398" />
            <path d="M260 280 C270 325 258 375 235 395" />
          </g>

          {/* Rim light highlight */}
          <path
            d="M130 272 C160 264 240 264 270 272"
            stroke="#ffffff"
            strokeOpacity="0.6"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Subtle base shadow accent */}
          <ellipse cx="200" cy="398" rx="36" ry="6" fill="#000000" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
};
