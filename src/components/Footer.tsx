/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface FooterProps {
  onOpenCatalog: () => void;
  onOpenCalculator: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCatalog, onOpenCalculator }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-black border-t border-neutral-900 py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Navigation Links matching reference */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6 sm:gap-10 text-sm font-medium text-neutral-400">
            <button
              onClick={() => scrollTo('about')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              О нас
            </button>
            <button
              onClick={onOpenCatalog}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Ассортимент
            </button>
            <button
              onClick={onOpenCalculator}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Заказать
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Контакты
            </button>
          </div>

          {/* Right Logo Pill matching reference */}
          <div className="flex items-center">
            <a
              href="#"
              className="group inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-neutral-700 hover:border-emerald-500/80 transition-colors bg-neutral-950/60"
              aria-label="Green Space Главная"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 group-hover:scale-110 transition-transform" />
              <span className="text-emerald-400 font-semibold tracking-tight text-sm">Green</span>
              <span className="text-white font-medium tracking-tight text-sm">Space</span>
            </a>
          </div>

        </div>

        {/* Quiet copyright subline */}
        <div className="mt-8 pt-6 border-t border-neutral-900/60 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-600 gap-3">
          <p>© {new Date().getFullYear()} Green Space. Профессиональное фитооформление коммерческих пространств.</p>
          <p>Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
