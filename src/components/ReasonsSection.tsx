/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

const REASONS = [
  {
    number: '1',
    title: 'Качество',
    description: 'Используем только лучшие растения, которые сохраняют свой вид на протяжении долгих лет',
  },
  {
    number: '2',
    title: 'Скорость',
    description: 'Ценим ваше время и гарантируем быстрый результат, сохранив при этом высокое качество',
  },
  {
    number: '3',
    title: 'Разнообразие',
    description: 'Предлагаем широкий выбор оформления с учетом ваших пожеланий и бюджета',
  },
  {
    number: '4',
    title: 'Доступность',
    description: 'Готовы реализовать проект любой сложности в любом уголке страны',
  },
];

export const ReasonsSection: React.FC = () => {
  return (
    <section id="reasons" className="relative w-full bg-black py-20 lg:py-28 border-t border-neutral-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium text-white tracking-tight leading-[1.2] text-balance">
            4 причины, почему с нами удобно и надежно работать
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {REASONS.map((reason) => (
            <div
              key={reason.number}
              className="bg-[#121212] border border-neutral-800/80 hover:border-neutral-700 rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[300px] transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Card Number */}
              <div>
                <span className="text-5xl sm:text-6xl font-light text-neutral-300 group-hover:text-white transition-colors font-mono select-none">
                  {reason.number}
                </span>
              </div>

              {/* Card Content */}
              <div className="mt-8 sm:mt-12">
                <h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight mb-3">
                  {reason.title}
                </h3>
                <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed group-hover:text-neutral-300 transition-colors">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
