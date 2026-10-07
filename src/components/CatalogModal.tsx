/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Search, Check, Plus, ShoppingCart, ArrowRight } from 'lucide-react';
import { CATALOG_PLANTS, PlantItem } from '../data/plants';

interface CatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItemIds: string[];
  onToggleCartItem: (plant: PlantItem) => void;
  onOpenCart: () => void;
}

export const CatalogModal: React.FC<CatalogModalProps> = ({
  isOpen,
  onClose,
  cartItemIds,
  onToggleCartItem,
  onOpenCart,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const filteredPlants = CATALOG_PLANTS.filter((plant) => {
    const matchesCategory =
      activeCategory === 'all' || plant.category === activeCategory;
    const matchesSearch =
      plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plant.botanicalName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plant.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-5xl max-h-[92vh] bg-[#111111] border border-neutral-800 rounded-3xl shadow-2xl flex flex-col z-10 overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-neutral-800/80 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-semibold tracking-wider uppercase text-neutral-400">
                Каталог растений и фитодекора
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-medium text-white mt-1">
              Растения для офисных интерьеров
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {cartItemIds.length > 0 && (
              <button
                onClick={() => {
                  onClose();
                  onOpenCart();
                }}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-medium transition-colors"
              >
                <ShoppingCart className="w-4 h-4 text-emerald-400" />
                <span>Смета ({cartItemIds.length})</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-neutral-800/60 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Закрыть каталог"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="p-4 sm:px-8 border-b border-neutral-900 bg-neutral-950/40 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          {/* Categories */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {[
              { id: 'all', label: 'Все' },
              { id: 'easy-care', label: 'Неприхотливые' },
              { id: 'tall', label: 'Крупномеры' },
              { id: 'low-light', label: 'Теневыносливые' },
              { id: 'walls', label: 'Фитостены' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-white text-black'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative min-w-[200px] sm:w-64">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Поиск по названию..."
              className="w-full pl-9 pr-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500"
            />
          </div>
        </div>

        {/* Plant Cards Grid */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredPlants.map((plant) => {
              const inCart = cartItemIds.includes(plant.id);
              return (
                <div
                  key={plant.id}
                  className="bg-[#171717] border border-neutral-800/90 rounded-2xl p-5 flex flex-col justify-between hover:border-neutral-700 transition-all duration-200 group"
                >
                  <div>
                    {/* Top row */}
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-medium text-white group-hover:text-emerald-400 transition-colors">
                          {plant.name}
                        </h3>
                        <p className="text-xs text-neutral-400 italic">
                          {plant.botanicalName}
                        </p>
                      </div>
                      {plant.popular && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-950 text-emerald-400 border border-emerald-800">
                          Популярно
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-neutral-400 mt-3 leading-relaxed">
                      {plant.description}
                    </p>

                    {/* Metadata Specs */}
                    <div className="mt-4 pt-3 border-t border-neutral-800/80 space-y-1.5 text-xs text-neutral-400">
                      <div className="flex justify-between">
                        <span className="text-neutral-500">Высота:</span>
                        <span className="text-neutral-300 font-medium">{plant.height}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-500">Свет:</span>
                        <span className="text-neutral-300 font-medium">{plant.lightNeed}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-500">Полив:</span>
                        <span className="text-neutral-300 font-medium">{plant.watering}</span>
                      </div>
                    </div>
                  </div>

                  {/* Price & Add button */}
                  <div className="mt-5 pt-3 border-t border-neutral-800/80 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-neutral-500 uppercase">С кашпо и грунтом</div>
                      <div className="text-base font-semibold text-white font-mono tabular-nums">
                        {plant.price.toLocaleString('ru-RU')} ₽
                      </div>
                    </div>

                    <button
                      onClick={() => onToggleCartItem(plant)}
                      className={`px-3.5 py-2 rounded-full text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                        inCart
                          ? 'bg-emerald-500 text-black font-semibold'
                          : 'bg-white hover:bg-neutral-200 text-black'
                      }`}
                    >
                      {inCart ? (
                        <>
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                          <span>В смете</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Добавить</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredPlants.length === 0 && (
            <div className="py-16 text-center text-neutral-500">
              <p>По вашему запросу растения не найдены.</p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 border-t border-neutral-800/80 bg-neutral-950 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-400 text-center sm:text-left">
            Все растения поставляются пересаженными в дизайнерские кашпо с субстратом Lechuza-Pon и автополивом.
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full border border-neutral-700 text-xs font-medium text-neutral-300 hover:text-white hover:bg-neutral-900 transition-colors cursor-pointer"
            >
              Закрыть
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenCart();
              }}
              className="px-5 py-2 rounded-full bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>Перейти к смете</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
