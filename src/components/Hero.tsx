/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-transparent pt-14 sm:pt-20 lg:pt-24 pb-28 sm:pb-36 lg:pb-48 overflow-hidden">
      {/* Background ambient blue glow on left */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 w-[450px] h-[320px] bg-gradient-to-r from-[#5548e2]/15 to-transparent rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-start">
          
          {/* Left-Aligned Decreased Box Size */}
          <div className="w-full max-w-[560px]">
            <div className="relative rounded-3xl p-6 sm:p-8 text-left flex flex-col justify-center space-y-3 bg-gradient-to-br from-white/[0.06] via-[#5548e2]/[0.08] to-transparent backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(85,72,226,0.15),inset_0_1px_1px_0_rgba(255,255,255,0.2)]">
              
              {/* Subtle top glare reflection */}
              <div className="absolute top-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full border border-white/10 bg-black/40 backdrop-blur-md shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5548e2] shadow-[0_0_6px_#5548e2] animate-pulse" />
                <span className="text-[11px] font-semibold tracking-widest uppercase text-[#8b80ff]">
                  CONNECTED VISIBILITY
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-medium tracking-tight text-white leading-[1.14] text-balance">
                Every camera becomes a point of insight.
              </h2>
              
              {/* Description */}
              <p className="text-sm sm:text-base text-neutral-300/90 font-normal leading-relaxed text-balance pt-1">
                Navigate directly to cameras across your site and see what's happening where it matters.
              </p>

              {/* Subtle blue gradient accent bar */}
              <div className="w-14 h-1 bg-gradient-to-r from-[#5548e2] to-[#7064f5] rounded-full mt-3 shadow-[0_0_10px_rgba(85,72,226,0.5)]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
