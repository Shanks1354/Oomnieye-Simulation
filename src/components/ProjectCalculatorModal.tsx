/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Calculator, Check, ArrowRight, Sparkles, Building2 } from 'lucide-react';

interface ProjectCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyToContact: (summary: string) => void;
}

export const ProjectCalculatorModal: React.FC<ProjectCalculatorModalProps> = ({
  isOpen,
  onClose,
  onApplyToContact,
}) => {
  const [area, setArea] = useState<number>(250);
  const [style, setStyle] = useState<'minimal' | 'optimum' | 'lush'>('optimum');
  const [includeMossWall, setIncludeMossWall] = useState(true);
  const [includeMaintenance, setIncludeMaintenance] = useState(true);

  if (!isOpen) return null;

  // Calculation formulas
  const densityMultiplier = style === 'minimal' ? 0.06 : style === 'optimum' ? 0.12 : 0.2;
  const estimatedPlants = Math.max(4, Math.round(area * densityMultiplier));
  const baseCost = estimatedPlants * 14500;
  const mossCost = includeMossWall ? 65000 : 0;
  const maintenanceMonthly = includeMaintenance ? Math.round(estimatedPlants * 650) : 0;
  const totalEstimatedCost = baseCost + mossCost;

  const handleApply = () => {
    const styleLabel =
      style === 'minimal' ? 'Минимализм' : style === 'optimum' ? 'Оптимальный' : 'Тропический оазис';
    const summary = `Расчет проекта: Площадь ${area} м², Стиль "${styleLabel}", ~${estimatedPlants} растений. ${
      includeMossWall ? 'Включая фитостену. ' : ''
    }${includeMaintenance ? 'Требуется сервисное обслуживание.' : ''} Предварительная стоимость: ${totalEstimatedCost.toLocaleString('ru-RU')} ₽.`;

    onApplyToContact(summary);
    onClose();

    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-2xl bg-[#111111] border border-neutral-800 rounded-3xl shadow-2xl p-6 sm:p-8 z-10 text-white overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-neutral-800/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-emerald-400">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-medium text-white">
                Калькулятор озеленения офиса
              </h3>
              <p className="text-xs text-neutral-400">
                Мгновенный предварительный расчет под вашу площадь
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Закрыть калькулятор"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="py-6 space-y-6">
          
          {/* 1. Square meters slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-semibold uppercase text-neutral-400 tracking-wider">
                Площадь помещения
              </label>
              <span className="text-lg font-mono font-semibold text-emerald-400">
                {area} м²
              </span>
            </div>
            <input
              type="range"
              min={30}
              max={1500}
              step={10}
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer h-2 bg-neutral-800 rounded-lg appearance-none"
            />
            <div className="flex justify-between text-[11px] text-neutral-500 mt-1 font-mono">
              <span>30 м²</span>
              <span>500 м²</span>
              <span>1000 м²</span>
              <span>1500+ м²</span>
            </div>
          </div>

          {/* 2. Style & Density Options */}
          <div>
            <label className="text-xs font-semibold uppercase text-neutral-400 tracking-wider block mb-3">
              Плотность и формат озеленения
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                {
                  id: 'minimal',
                  title: 'Минимализм',
                  desc: 'Точечные акценты и крупномеры в ключевых точках',
                },
                {
                  id: 'optimum',
                  title: 'Оптимальный',
                  desc: 'Сбалансированное зонирование и настольные кашпо',
                },
                {
                  id: 'lush',
                  title: 'Тропический',
                  desc: 'Максимальная плотность, фитоперегородки и оазис',
                },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setStyle(item.id as any)}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    style === item.id
                      ? 'border-emerald-500/80 bg-emerald-950/20 text-white'
                      : 'border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:border-neutral-700'
                  }`}
                >
                  <div className="text-sm font-medium text-white">{item.title}</div>
                  <div className="text-[11px] text-neutral-400 mt-1 leading-snug">{item.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* 3. Extra add-ons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <button
              type="button"
              onClick={() => setIncludeMossWall(!includeMossWall)}
              className={`p-3 rounded-xl border flex items-center justify-between text-left transition-colors cursor-pointer ${
                includeMossWall
                  ? 'border-emerald-500/60 bg-emerald-950/20 text-white'
                  : 'border-neutral-800 bg-neutral-900/40 text-neutral-400'
              }`}
            >
              <div>
                <div className="text-xs font-medium text-white">Фитостена из мха</div>
                <div className="text-[10px] text-neutral-400">+65 000 ₽</div>
              </div>
              <div
                className={`w-5 h-5 rounded flex items-center justify-center border ${
                  includeMossWall
                    ? 'bg-emerald-500 border-emerald-500 text-black'
                    : 'border-neutral-700'
                }`}
              >
                {includeMossWall && <Check className="w-3.5 h-3.5 stroke-[3]" />}
              </div>
            </button>

            <button
              type="button"
              onClick={() => setIncludeMaintenance(!includeMaintenance)}
              className={`p-3 rounded-xl border flex items-center justify-between text-left transition-colors cursor-pointer ${
                includeMaintenance
                  ? 'border-emerald-500/60 bg-emerald-950/20 text-white'
                  : 'border-neutral-800 bg-neutral-900/40 text-neutral-400'
              }`}
            >
              <div>
                <div className="text-xs font-medium text-white">Сервисный уход</div>
                <div className="text-[10px] text-neutral-400">Гарантия замены</div>
              </div>
              <div
                className={`w-5 h-5 rounded flex items-center justify-center border ${
                  includeMaintenance
                    ? 'bg-emerald-500 border-emerald-500 text-black'
                    : 'border-neutral-700'
                }`}
              >
                {includeMaintenance && <Check className="w-3.5 h-3.5 stroke-[3]" />}
              </div>
            </button>
          </div>

          {/* 4. Total Output Summary Card */}
          <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs text-neutral-400">
                Ориентировочное число растений: <span className="text-white font-medium font-mono">~{estimatedPlants} шт.</span>
              </div>
              <div className="text-2xl font-medium text-white font-mono mt-0.5">
                {totalEstimatedCost.toLocaleString('ru-RU')} ₽
              </div>
              {includeMaintenance && (
                <div className="text-[11px] text-emerald-400 mt-0.5">
                  Сервис: ~{maintenanceMonthly.toLocaleString('ru-RU')} ₽/мес
                </div>
              )}
            </div>

            <button
              onClick={handleApply}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Перенести в форму заявки</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
