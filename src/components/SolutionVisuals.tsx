/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export const SolutionVisual: React.FC<{ type: string; className?: string }> = ({
  type,
  className = '',
}) => {
  switch (type) {
    case 'digital-twin':
      return (
        <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <defs>
            <linearGradient id="dtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7064f5" />
              <stop offset="100%" stopColor="#3b2ec6" />
            </linearGradient>
            <radialGradient id="dtGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#5548e2" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#5548e2" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="320" height="200" fill="#0d0d18" fillOpacity="0.4" rx="12" />
          <circle cx="160" cy="100" r="80" fill="url(#dtGlow)" />
          {/* Spatial Grid Base */}
          <g stroke="#26253b" strokeWidth="1" strokeDasharray="3 3">
            <line x1="60" y1="160" x2="260" y2="160" />
            <line x1="80" y1="140" x2="240" y2="140" />
            <line x1="100" y1="120" x2="220" y2="120" />
            <line x1="160" y1="40" x2="60" y2="160" />
            <line x1="160" y1="40" x2="260" y2="160" />
          </g>
          {/* 3D Isometric Digital Twin Structure */}
          <path d="M160 45 L220 80 L160 115 L100 80 Z" fill="#1b1836" stroke="#5548e2" strokeWidth="1.5" />
          <path d="M100 80 L160 115 L160 165 L100 130 Z" fill="#131129" stroke="#5548e2" strokeWidth="1.5" />
          <path d="M220 80 L160 115 L160 165 L220 130 Z" fill="#1f1b40" stroke="#7064f5" strokeWidth="1.5" />
          {/* Interior Wireframe Layers */}
          <path d="M160 70 L195 90 L160 110 L125 90 Z" stroke="#8a7ff8" strokeWidth="1" strokeDasharray="2 2" fill="none" />
          <path d="M160 95 L195 115 L160 135 L125 115 Z" stroke="#8a7ff8" strokeWidth="1" strokeDasharray="2 2" fill="none" />
          {/* Spatial Nodes */}
          <circle cx="160" cy="45" r="4" fill="#ffffff" />
          <circle cx="160" cy="45" r="7" stroke="#7064f5" strokeWidth="1.5" />
          <circle cx="100" cy="80" r="3" fill="#5548e2" />
          <circle cx="220" cy="80" r="3" fill="#5548e2" />
          <circle cx="160" cy="115" r="3.5" fill="#7064f5" />
          <circle cx="160" cy="165" r="3" fill="#5548e2" />
        </svg>
      );

    case 'time-machine':
      return (
        <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <defs>
            <radialGradient id="tmGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#5548e2" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#5548e2" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="320" height="200" fill="#0d0d18" fillOpacity="0.4" rx="12" />
          <circle cx="160" cy="100" r="85" fill="url(#tmGlow)" />
          {/* Concentric Temporal Rings */}
          <circle cx="160" cy="100" r="68" stroke="#25243b" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="160" cy="100" r="50" stroke="#363259" strokeWidth="1.5" />
          <circle cx="160" cy="100" r="32" stroke="#5548e2" strokeWidth="2" strokeDasharray="6 3" />
          {/* Temporal Timeline Axis */}
          <line x1="50" y1="100" x2="270" y2="100" stroke="#32304d" strokeWidth="1.5" />
          {/* Timeline markers */}
          {[-70, -45, -20, 0, 20, 45, 70].map((offset, i) => (
            <line
              key={i}
              x1={160 + offset}
              y1={i === 3 ? 88 : 94}
              x2={160 + offset}
              y2={i === 3 ? 112 : 106}
              stroke={i === 3 ? '#ffffff' : '#5548e2'}
              strokeWidth={i === 3 ? 2.5 : 1}
            />
          ))}
          {/* Orbiting Time Pointer */}
          <path d="M160 100 L195 65" stroke="#7064f5" strokeWidth="2" strokeLinecap="round" />
          <circle cx="160" cy="100" r="5" fill="#ffffff" />
          <circle cx="195" cy="65" r="5" fill="#7064f5" />
          <circle cx="195" cy="65" r="9" stroke="#7064f5" strokeWidth="1.5" strokeDasharray="2 2" />
          {/* Time scrubber arc indicator */}
          <path d="M125 100 A35 35 0 0 1 195 100" stroke="#8a7ff8" strokeWidth="2" fill="none" />
        </svg>
      );

    case 'omni-watch':
      return (
        <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <defs>
            <radialGradient id="owGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#5548e2" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#5548e2" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="320" height="200" fill="#0d0d18" fillOpacity="0.4" rx="12" />
          <circle cx="160" cy="100" r="80" fill="url(#owGlow)" />
          {/* Optical FOV cone */}
          <path d="M160 100 L70 40 L70 160 Z" fill="#5548e2" fillOpacity="0.08" />
          <path d="M160 100 L250 40 L250 160 Z" fill="#5548e2" fillOpacity="0.08" />
          {/* Surveillance HUD Reticle */}
          <circle cx="160" cy="100" r="55" stroke="#37335e" strokeWidth="1" />
          <circle cx="160" cy="100" r="38" stroke="#5548e2" strokeWidth="1.5" strokeDasharray="8 4" />
          <circle cx="160" cy="100" r="18" stroke="#7064f5" strokeWidth="1.5" />
          <circle cx="160" cy="100" r="4" fill="#ffffff" />
          {/* Reticle Brackets (HUD crosshairs) */}
          <path d="M115 75 L115 65 L125 65" stroke="#7064f5" strokeWidth="2" fill="none" />
          <path d="M205 75 L205 65 L195 65" stroke="#7064f5" strokeWidth="2" fill="none" />
          <path d="M115 125 L115 135 L125 135" stroke="#7064f5" strokeWidth="2" fill="none" />
          <path d="M205 125 L205 135 L195 135" stroke="#7064f5" strokeWidth="2" fill="none" />
          {/* Detection vector targets */}
          <rect x="210" y="80" width="28" height="20" rx="3" stroke="#8a7ff8" strokeWidth="1" strokeDasharray="2 2" fill="none" />
          <rect x="85" y="110" width="24" height="20" rx="3" stroke="#8a7ff8" strokeWidth="1" strokeDasharray="2 2" fill="none" />
        </svg>
      );

    case 'stadium-management':
      return (
        <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <defs>
            <radialGradient id="smGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#5548e2" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#5548e2" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="320" height="200" fill="#0d0d18" fillOpacity="0.4" rx="12" />
          <circle cx="160" cy="100" r="80" fill="url(#smGlow)" />
          {/* Stadium Tiered Ovals */}
          <ellipse cx="160" cy="100" rx="90" ry="52" stroke="#2b2848" strokeWidth="1" strokeDasharray="3 3" />
          <ellipse cx="160" cy="100" rx="72" ry="40" stroke="#3d3768" strokeWidth="1.5" />
          <ellipse cx="160" cy="100" rx="52" ry="28" stroke="#5548e2" strokeWidth="1.5" />
          <ellipse cx="160" cy="100" rx="34" ry="18" fill="#1b1836" stroke="#7064f5" strokeWidth="1.5" />
          {/* Pitch Field Lines */}
          <line x1="160" y1="83" x2="160" y2="117" stroke="#8a7ff8" strokeWidth="1" />
          <circle cx="160" cy="100" r="5" stroke="#8a7ff8" strokeWidth="1" fill="none" />
          {/* Gate Access / Flow Nodes */}
          <g fill="#7064f5">
            <circle cx="70" cy="100" r="3" />
            <circle cx="250" cy="100" r="3" />
            <circle cx="160" cy="48" r="3" />
            <circle cx="160" cy="152" r="3" />
            <circle cx="100" cy="65" r="2.5" fill="#ffffff" />
            <circle cx="220" cy="65" r="2.5" fill="#ffffff" />
            <circle cx="100" cy="135" r="2.5" fill="#ffffff" />
            <circle cx="220" cy="135" r="2.5" fill="#ffffff" />
          </g>
        </svg>
      );

    case 'mining-management':
      return (
        <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <defs>
            <radialGradient id="mmGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#5548e2" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#5548e2" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="320" height="200" fill="#0d0d18" fillOpacity="0.4" rx="12" />
          <circle cx="160" cy="100" r="80" fill="url(#mmGlow)" />
          {/* Topographic 3D Mining Pit Contours */}
          <path
            d="M60 145 C90 120 120 135 160 130 C200 125 230 140 260 145"
            stroke="#2e2b4d"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M75 125 C105 105 130 115 160 110 C190 105 220 120 245 125"
            stroke="#413c6e"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M90 105 C115 90 135 95 160 92 C185 88 205 100 230 105"
            stroke="#5548e2"
            strokeWidth="1.8"
            fill="none"
          />
          <path
            d="M110 85 C130 75 145 78 160 76 C175 74 190 82 210 85"
            stroke="#7064f5"
            strokeWidth="1.8"
            fill="none"
          />
          <path
            d="M130 65 C145 58 152 60 160 58 C168 57 175 62 190 65"
            stroke="#8a7ff8"
            strokeWidth="2"
            fill="none"
          />
          {/* Elevation Depth Crossings */}
          <line x1="160" y1="58" x2="160" y2="130" stroke="#5548e2" strokeWidth="1" strokeDasharray="3 3" />
          {/* Extraction telemetry points */}
          <circle cx="160" cy="58" r="3.5" fill="#ffffff" />
          <circle cx="130" cy="65" r="2.5" fill="#7064f5" />
          <circle cx="190" cy="65" r="2.5" fill="#7064f5" />
          <circle cx="110" cy="85" r="2.5" fill="#5548e2" />
          <circle cx="210" cy="85" r="2.5" fill="#5548e2" />
          <circle cx="90" cy="105" r="3" fill="#ffffff" />
          <circle cx="90" cy="105" r="6" stroke="#7064f5" strokeWidth="1" strokeDasharray="2 2" />
        </svg>
      );

    default:
      return null;
  }
};
