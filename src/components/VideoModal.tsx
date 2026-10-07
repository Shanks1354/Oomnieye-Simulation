/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, CheckCircle2 } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCalculator: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  onOpenCalculator,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(25);
  const [activeTab, setActiveTab] = useState<'video' | 'metrics'>('video');

  useEffect(() => {
    let interval: any;
    if (isOpen && isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 300);
    }
    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-4xl bg-[#111111] border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col">
        
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-neutral-800/80 flex items-center justify-between bg-neutral-950/60">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#5548e2] animate-pulse" />
              <span className="text-xs font-semibold tracking-wider uppercase text-[#7064f5]">
                Видео-кейс
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-medium text-white mt-0.5">
              Озеленение штаб-квартиры 1,400 м² в БЦ «Белая Площадь»
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-neutral-800/60 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Закрыть видео"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Area */}
        <div className="relative w-full aspect-video bg-neutral-950 flex items-center justify-center overflow-hidden group">
          {/* Simulated Video Feed Graphic */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40 z-10 pointer-events-none" />

          {/* Animated decorative scene representation */}
          <div className="w-full h-full relative flex items-center justify-center">
            {/* SVG Background Representation of Live Office */}
            <svg viewBox="0 0 800 450" className="w-full h-full object-cover">
              <defs>
                <linearGradient id="wallLight" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1e293b" />
                  <stop offset="100%" stopColor="#0f172a" />
                </linearGradient>
              </defs>
              <rect width="800" height="450" fill="url(#wallLight)" />
              {/* Sunbeam */}
              <polygon points="100,0 250,0 450,450 150,450" fill="#ffffff" opacity="0.05" />
              {/* Window lines */}
              <line x1="120" y1="50" x2="300" y2="50" stroke="#334155" strokeWidth="2" />
              <line x1="120" y1="50" x2="120" y2="380" stroke="#334155" strokeWidth="2" />
              <line x1="300" y1="50" x2="300" y2="380" stroke="#334155" strokeWidth="2" />
              {/* Large lush plants in foreground */}
              <circle cx="200" cy="360" r="80" fill="#15803d" opacity="0.8" />
              <circle cx="230" cy="320" r="70" fill="#22c55e" opacity="0.8" />
              <circle cx="620" cy="350" r="95" fill="#166534" opacity="0.8" />
              <circle cx="580" cy="310" r="80" fill="#4ade80" opacity="0.7" />
              <circle cx="650" cy="280" r="60" fill="#15803d" opacity="0.8" />
            </svg>

            {/* Video center indicator */}
            <div className="absolute z-20 text-center space-y-2 pointer-events-none">
              <div className="inline-block px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs text-white">
                Трансформация интерьера: До и После озеленения
              </div>
              <p className="text-xs text-neutral-400">
                180 растений · 2 фитостены · 5 зон отдыха
              </p>
            </div>
          </div>

          {/* Controls Bar */}
          <div className="absolute bottom-0 inset-x-0 p-4 z-20 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col gap-2">
            {/* Progress bar */}
            <div
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const pos = (e.clientX - rect.left) / rect.width;
                setProgress(Math.round(pos * 100));
              }}
              className="w-full h-1.5 bg-neutral-800 rounded-full cursor-pointer relative overflow-hidden group/bar"
            >
              <div
                className="h-full bg-[#5548e2] rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Buttons Row */}
            <div className="flex items-center justify-between text-xs text-white pt-1">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-[#7064f5] transition-colors cursor-pointer"
                  aria-label={isPlaying ? 'Пауза' : 'Воспроизведение'}
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5 fill-current" />
                  )}
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="hover:text-[#7064f5] transition-colors cursor-pointer"
                  aria-label={isMuted ? 'Включить звук' : 'Выключить звук'}
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5" />
                  ) : (
                    <Volume2 className="w-5 h-5" />
                  )}
                </button>
                <span className="font-mono text-neutral-400">
                  {Math.floor((progress * 0.9) / 60)}:
                  {String(Math.floor((progress * 0.9) % 60)).padStart(2, '0')}{' '}
                  / 1:30
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 rounded bg-[#5548e2]/20 text-[#7064f5] border border-[#5548e2]/40 text-[10px] font-mono">
                  4K 60FPS
                </span>
                <Maximize2 className="w-4 h-4 text-neutral-400 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* Case Metrics Strip */}
        <div className="p-6 bg-[#141414] border-t border-neutral-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          <div className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800">
            <div className="text-xs text-neutral-400">Сроки реализации</div>
            <div className="text-lg font-medium text-white mt-0.5 font-mono">7 рабочих дней</div>
            <div className="text-[11px] text-[#7064f5] mt-1">Без остановки работы офиса</div>
          </div>
          <div className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800">
            <div className="text-xs text-neutral-400">Микроклимат</div>
            <div className="text-lg font-medium text-white mt-0.5 font-mono">+24% влажность</div>
            <div className="text-[11px] text-[#7064f5] mt-1">Оптимально для самочувствия</div>
          </div>
          <div className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800">
            <div className="text-xs text-neutral-400">Сервис и гарантия</div>
            <div className="text-lg font-medium text-white mt-0.5 font-mono">100% приживаемость</div>
            <div className="text-[11px] text-[#7064f5] mt-1">Бесплатная замена при гибели</div>
          </div>
        </div>

        {/* Action button */}
        <div className="p-4 sm:p-5 border-t border-neutral-800/80 bg-neutral-950 flex items-center justify-between">
          <p className="text-xs text-neutral-400">
            Хотите такое же решение для вашего офиса?
          </p>
          <button
            onClick={() => {
              onClose();
              onOpenCalculator();
            }}
            className="px-5 py-2.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-colors cursor-pointer"
          >
            Рассчитать для моего офиса
          </button>
        </div>

      </div>
    </div>
  );
};
