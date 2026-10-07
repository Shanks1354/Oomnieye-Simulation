/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ShoppingCart, ChevronDown, Check, Menu, X } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenCatalog: () => void;
  onOpenCalculator: () => void;
}

const CITIES = ['Москва', 'Санкт-Петербург', 'Казань', 'Екатеринбург', 'Новосибирск'];

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenCatalog,
  onOpenCalculator,
}) => {
  const [selectedCity, setSelectedCity] = useState('Москва');
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-black/90 backdrop-blur-md border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo - Oval Pill format from reference */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="group inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-neutral-700 hover:border-emerald-500/80 transition-colors bg-neutral-950/60"
            aria-label="Green Space Главная"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 group-hover:scale-110 transition-transform" />
            <span className="text-emerald-400 font-semibold tracking-tight text-sm">Green</span>
            <span className="text-white font-medium tracking-tight text-sm">Space</span>
          </a>
        </div>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
          <button
            onClick={() => scrollTo('about')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            О нас
          </button>
          <button
            onClick={() => scrollTo('reasons')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Почему мы
          </button>
          <button
            onClick={onOpenCatalog}
            className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
          >
            Каталог
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Контакты
          </button>
        </nav>

        {/* Right Section: City Selector + Cart */}
        <div className="flex items-center gap-5">
          {/* City Selector */}
          <div className="relative">
            <button
              onClick={() => setCityDropdownOpen(!cityDropdownOpen)}
              className="flex items-center gap-1.5 text-sm font-medium text-neutral-200 hover:text-white transition-colors py-1 px-2 rounded-lg hover:bg-neutral-900"
              aria-label="Выбрать город"
              aria-expanded={cityDropdownOpen}
            >
              <span>{selectedCity}</span>
              <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />
            </button>

            {cityDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-30"
                  onClick={() => setCityDropdownOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-44 rounded-xl bg-neutral-900 border border-neutral-800 shadow-xl py-1 z-40 text-sm">
                  {CITIES.map((city) => (
                    <button
                      key={city}
                      onClick={() => {
                        setSelectedCity(city);
                        setCityDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-neutral-800 flex items-center justify-between text-neutral-300 hover:text-white"
                    >
                      <span>{city}</span>
                      {selectedCity === city && (
                        <Check className="w-4 h-4 text-emerald-400" />
                      )}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Cart Icon */}
          <button
            onClick={onOpenCart}
            className="relative p-2 text-neutral-200 hover:text-white transition-colors rounded-full hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
            aria-label="Корзина проектов"
          >
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 text-black text-xs font-bold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-300 hover:text-white"
            aria-label="Открыть меню"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-900 bg-neutral-950 px-4 pt-3 pb-6 space-y-3">
          <button
            onClick={() => scrollTo('about')}
            className="block w-full text-left py-2 text-base font-medium text-neutral-300 hover:text-white"
          >
            О нас
          </button>
          <button
            onClick={() => scrollTo('reasons')}
            className="block w-full text-left py-2 text-base font-medium text-neutral-300 hover:text-white"
          >
            Почему мы
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenCatalog();
            }}
            className="block w-full text-left py-2 text-base font-medium text-neutral-300 hover:text-white"
          >
            Каталог растений
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenCalculator();
            }}
            className="block w-full text-left py-2 text-base font-medium text-emerald-400 hover:text-emerald-300"
          >
            Рассчитать проект
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="block w-full text-left py-2 text-base font-medium text-neutral-300 hover:text-white"
          >
            Контакты
          </button>
        </div>
      )}
    </header>
  );
};
