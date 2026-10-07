/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export const TopHeroSection: React.FC = () => {
  return (
    <section className="relative w-full bg-transparent pt-16 sm:pt-24 lg:pt-32 pb-16 sm:pb-24 lg:pb-28 overflow-hidden">
      {/* Background ambient radial blue gradients */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-[#5548e2]/20 via-[#7064f5]/15 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Transparent Glassmorphism Box with slight blue gradient */}
        <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 text-center flex flex-col items-center bg-gradient-to-b from-white/[0.06] via-[#5548e2]/[0.08] to-transparent backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(85,72,226,0.15),inset_0_1px_1px_0_rgba(255,255,255,0.2)]">
          
          {/* Subtle top glare reflection */}
          <div className="absolute top-0 inset-x-16 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-md mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#5548e2] shadow-[0_0_8px_#5548e2] animate-pulse" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-[#8b80ff]">
              THE PHYSICAL WORLD, CONNECTED
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-medium text-white tracking-tight leading-[1.1] text-balance">
            See your operation as it happens.
          </h1>

          {/* Description */}
          <p className="mt-5 text-base sm:text-lg md:text-xl text-neutral-300/90 font-normal max-w-2xl leading-relaxed text-balance">
            Oomnieye connects cameras, assets, and live operational data into one spatial view of your physical environment.
          </p>

          {/* Minimalist central accent line in theme blue gradient */}
          <div className="w-16 h-1 bg-gradient-to-r from-[#5548e2] to-[#7064f5] rounded-full mt-8 shadow-[0_0_12px_rgba(85,72,226,0.6)]" />

        </div>

      </div>
    </section>
  );
};
