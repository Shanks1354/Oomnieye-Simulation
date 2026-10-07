/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, CheckCircle2, ShoppingBag } from 'lucide-react';
import { PlantItem } from '../data/plants';

export interface CartItemEntry {
  plant: PlantItem;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItemEntry[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  onOpenCatalog: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onOpenCatalog,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const totalCost = items.reduce(
    (sum, item) => sum + item.plant.price * item.quantity,
    0
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#111111] border-l border-neutral-800 text-white flex flex-col shadow-2xl">
          
          {/* Header */}
          <div className="p-6 border-b border-neutral-800/80 flex items-center justify-between bg-neutral-950/60">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-emerald-400" />
              <h2 className="text-lg font-medium text-white">
                Смета проекта ({items.reduce((acc, i) => acc + i.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Закрыть смету"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-medium text-white">Смета отправлена!</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Мы получили ваш список растений. Менеджер свяжется по номеру {phone} и пришлет спецификацию с учетом доставки и монтажа.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onClearCart();
                    onClose();
                  }}
                  className="mt-4 px-6 py-2.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-colors cursor-pointer"
                >
                  Вернуться на сайт
                </button>
              </div>
            ) : items.length === 0 ? (
              <div className="py-20 text-center space-y-4">
                <p className="text-neutral-400 text-sm">
                  Ваша смета пока пуста. Выберите понравившиеся растения из каталога.
                </p>
                <button
                  onClick={() => {
                    onClose();
                    onOpenCatalog();
                  }}
                  className="px-6 py-2.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-colors cursor-pointer"
                >
                  Открыть каталог растений
                </button>
              </div>
            ) : (
              <>
                {/* Items List */}
                <div className="space-y-4">
                  {items.map(({ plant, quantity }) => (
                    <div
                      key={plant.id}
                      className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800/80 flex items-start justify-between gap-3"
                    >
                      <div className="flex-1">
                        <div className="text-sm font-medium text-white">{plant.name}</div>
                        <div className="text-xs text-neutral-400 italic">{plant.botanicalName}</div>
                        <div className="text-xs text-emerald-400 font-mono mt-1">
                          {plant.price.toLocaleString('ru-RU')} ₽ / шт.
                        </div>

                        {/* Quantity Counter */}
                        <div className="flex items-center gap-2 mt-3">
                          <button
                            onClick={() => onUpdateQuantity(plant.id, -1)}
                            className="w-7 h-7 rounded-md bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-neutral-300 hover:text-white"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-8 text-center text-xs font-mono font-medium">
                            {quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(plant.id, 1)}
                            className="w-7 h-7 rounded-md bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-neutral-300 hover:text-white"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <div className="text-right flex flex-col justify-between items-end h-full">
                        <button
                          onClick={() => onRemoveItem(plant.id)}
                          className="text-neutral-500 hover:text-rose-400 transition-colors p-1"
                          aria-label="Удалить позицию"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <div className="text-sm font-mono font-semibold text-white mt-4">
                          {(plant.price * quantity).toLocaleString('ru-RU')} ₽
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Subtotal Summary */}
                <div className="pt-4 border-t border-neutral-800 space-y-2 text-sm">
                  <div className="flex justify-between text-neutral-400">
                    <span>Растения и кашпо:</span>
                    <span className="font-mono">{totalCost.toLocaleString('ru-RU')} ₽</span>
                  </div>
                  <div className="flex justify-between text-neutral-400">
                    <span>Посадка и автополив:</span>
                    <span className="text-emerald-400">Включено</span>
                  </div>
                  <div className="flex justify-between text-base font-semibold text-white pt-2 border-t border-neutral-800">
                    <span>Итого по смете:</span>
                    <span className="font-mono">{totalCost.toLocaleString('ru-RU')} ₽</span>
                  </div>
                </div>

                {/* Quick Request Form */}
                <form onSubmit={handleSubmit} className="pt-4 border-t border-neutral-800 space-y-3">
                  <div className="text-xs font-semibold uppercase text-neutral-400 tracking-wider">
                    Получить КП и забронировать
                  </div>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ваше имя"
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-800/80 border border-neutral-700 text-xs text-white placeholder-neutral-400 focus:outline-none focus:border-neutral-400"
                  />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Телефон для связи"
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-800/80 border border-neutral-700 text-xs text-white placeholder-neutral-400 focus:outline-none focus:border-neutral-400"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-full bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Отправляем...</span>
                    ) : (
                      <>
                        <span>Запросить коммерческое предложение</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                  <p className="text-[10px] text-neutral-500 text-center leading-relaxed">
                    Предоставим визуализацию расстановки под ваш план БТИ бесплатно
                  </p>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
