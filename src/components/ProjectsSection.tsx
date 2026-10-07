/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { SolutionVisual } from './SolutionVisuals';

interface SolutionItem {
  id: string;
  number: string;
  name: string;
  shortDesc: string;
}

const SOLUTIONS: SolutionItem[] = [
  {
    id: 'digital-twin',
    number: '01',
    name: 'Digital Twin',
    shortDesc: 'A live 3D spatial replica connecting CAD, BIM, cameras, and IoT sensors into one unified operational model.',
  },
  {
    id: 'time-machine',
    number: '02',
    name: 'Time Machine',
    shortDesc: 'Historical 4D temporal playback to review incidents, track spatial deviations, and reconstruct past operations.',
  },
  {
    id: 'omni-watch',
    number: '03',
    name: 'Omni Watch',
    shortDesc: 'Autonomous optical telemetry and AI spatial monitoring across site cameras with instant anomaly detection.',
  },
  {
    id: 'stadium-management',
    number: '04',
    name: 'Stadium Management',
    shortDesc: 'Real-time crowd flow analytics, perimeter visibility, and turnstile telemetry for large-scale venues.',
  },
  {
    id: 'mining-management',
    number: '05',
    name: 'Mining Management',
    shortDesc: '3D elevation contour tracking, heavy machinery spatial telemetry, and haulage safety in open-pit operations.',
  },
];

export const ProjectsSection: React.FC = () => {
  const [activeModalItem, setActiveModalItem] = useState<SolutionItem | null>(null);

  return (
    <section className="relative w-full bg-transparent py-20 sm:py-28 lg:py-36 overflow-hidden">
      {/* Background ambient blue glow */}
      <div className="absolute left-1/2 bottom-12 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-[#5548e2]/20 via-[#7064f5]/10 to-transparent rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Description */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="relative rounded-3xl p-6 sm:p-10 text-left flex flex-col items-start bg-gradient-to-br from-white/[0.06] via-[#5548e2]/[0.08] to-transparent backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(85,72,226,0.15),inset_0_1px_1px_0_rgba(255,255,255,0.2)]">
            {/* Subtle top glare reflection */}
            <div className="absolute top-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-black/40 backdrop-blur-md mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5548e2] shadow-[0_0_6px_#5548e2] animate-pulse" />
              <span className="text-[11px] font-semibold tracking-widest uppercase text-[#8b80ff]">
                SOLUTIONS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-medium text-white tracking-tight leading-[1.12] text-balance">
              And this is just the beginning.
            </h2>

            <p className="mt-4 text-base sm:text-lg text-neutral-300/90 font-normal leading-relaxed text-balance">
              Turn your connected environment into deeper operational intelligence with Oomnieye's specialized solutions.
            </p>
          </div>
        </div>

        {/* 
          The 5 Transparent Glassmorphic Boxes with Blue Theme Gradient:
          - Image inside the box
          - Name written under it
          - Glassmorphism: backdrop-blur-2xl, border-white/10, slight blue gradient
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
          {SOLUTIONS.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group relative rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 bg-gradient-to-b from-white/[0.06] via-[#5548e2]/[0.08] to-transparent backdrop-blur-2xl border border-white/10 hover:border-[#7064f5]/70 shadow-[0_8px_32px_0_rgba(85,72,226,0.12),inset_0_1px_1px_0_rgba(255,255,255,0.2)] hover:shadow-[0_12px_40px_0_rgba(85,72,226,0.3),inset_0_1px_1px_0_rgba(255,255,255,0.35)] cursor-pointer select-none"
            >
              {/* Subtle top glare reflection */}
              <div className="absolute top-0 inset-x-4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

              {/* Visual Image container */}
              <div className="w-full aspect-[16/11] p-2 flex items-center justify-center overflow-hidden border-b border-white/[0.08] bg-black/20">
                <SolutionVisual
                  type={item.id}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Name written under the image */}
              <div className="p-4 sm:p-5 flex items-center justify-between bg-black/30 backdrop-blur-md">
                <h3 className="text-base sm:text-lg font-medium text-white tracking-tight group-hover:text-[#8b80ff] transition-colors leading-snug">
                  {item.name}
                </h3>
                <div className="w-7 h-7 rounded-full bg-white/[0.06] border border-white/10 group-hover:bg-[#5548e2] group-hover:border-[#7064f5] text-neutral-400 group-hover:text-white flex items-center justify-center transition-all ml-2 shrink-0 shadow-sm">
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Detail Modal on Click with Matching Glassmorphism */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fade-in">
          <div
            className="fixed inset-0"
            onClick={() => setActiveModalItem(null)}
          />

          <div className="relative w-full max-w-lg rounded-3xl shadow-[0_16px_50px_0_rgba(85,72,226,0.25),inset_0_1px_1px_0_rgba(255,255,255,0.25)] p-6 sm:p-8 z-10 text-white overflow-hidden bg-gradient-to-b from-white/[0.08] via-[#5548e2]/[0.10] to-black/90 backdrop-blur-3xl border border-white/15">
            {/* Top reflection */}
            <div className="absolute top-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#5548e2] shadow-[0_0_8px_#5548e2]" />
                <span className="text-xs font-mono text-[#8b80ff]">Oomnieye Solution</span>
              </div>
              <button
                onClick={() => setActiveModalItem(null)}
                className="p-1.5 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Visual Preview */}
            <div className="w-full aspect-video rounded-xl bg-black/40 my-5 overflow-hidden border border-white/10 p-2 shadow-inner">
              <SolutionVisual type={activeModalItem.id} className="w-full h-full object-cover" />
            </div>

            {/* Title & Description */}
            <div>
              <h3 className="text-2xl font-medium text-white tracking-tight">
                {activeModalItem.name}
              </h3>
              <p className="mt-2 text-sm text-neutral-300/90 leading-relaxed">
                {activeModalItem.shortDesc}
              </p>
            </div>

            {/* Modal Bottom */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-end">
              <button
                onClick={() => setActiveModalItem(null)}
                className="px-5 py-2 rounded-full bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-colors cursor-pointer shadow-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
