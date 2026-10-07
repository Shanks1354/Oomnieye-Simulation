/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export const ShowcaseSection: React.FC = () => {
  return (
    <section id="about" className="relative w-full bg-transparent pt-28 sm:pt-36 lg:pt-48 pb-14 sm:pb-20 lg:pb-24 overflow-hidden">
      {/* Background ambient blue glow on right */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[450px] h-[320px] bg-gradient-to-l from-[#5548e2]/15 to-transparent rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end">
          
          {/* Right-Aligned Decreased Box Size */}
          <div className="w-full max-w-[560px]">
            <div className="relative rounded-3xl p-6 sm:p-8 text-right flex flex-col items-end space-y-3 bg-gradient-to-bl from-white/[0.06] via-[#5548e2]/[0.08] to-transparent backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(85,72,226,0.15),inset_0_1px_1px_0_rgba(255,255,255,0.2)]">
              
              {/* Subtle top glare reflection */}
              <div className="absolute top-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-black/40 backdrop-blur-md shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5548e2] shadow-[0_0_6px_#5548e2] animate-pulse" />
                <span className="text-[11px] font-semibold tracking-widest uppercase text-[#8b80ff]">
                  LIVE OPERATIONAL DATA
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-medium text-white tracking-tight leading-[1.14] text-balance">
                See what your assets are telling you.
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base text-neutral-300/90 font-normal leading-relaxed text-balance pt-1">
                Connect physical assets with live sensor data to understand their current state at a glance.
              </p>

              {/* Right-aligned accent line in theme blue gradient */}
              <div className="w-14 h-1 bg-gradient-to-l from-[#5548e2] to-[#7064f5] rounded-full mt-3 shadow-[0_0_10px_rgba(85,72,226,0.5)]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
