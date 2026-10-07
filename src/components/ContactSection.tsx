/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CheckCircle2, Send, Loader2, ArrowRight } from 'lucide-react';

interface ContactFormData {
  name: string;
  phone: string;
  comment: string;
}

interface ContactSectionProps {
  initialComment?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialComment = '' }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    comment: initialComment,
  });

  React.useEffect(() => {
    if (initialComment) {
      setFormData((prev) => ({ ...prev, comment: initialComment }));
    }
  }, [initialComment]);

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Partial<ContactFormData> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Пожалуйста, укажите ваше имя';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Пожалуйста, укажите контактный телефон';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Номер телефона должен содержать не менее 10 цифр';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  return (
    <section id="contact" className="relative w-full bg-black py-20 lg:py-28 border-t border-neutral-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Subtitle & Social Icons */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10 lg:min-h-[440px]">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight leading-[1.15] text-balance">
                Обсудим детали<br />
                проекта?
              </h2>
              <p className="text-lg sm:text-xl text-neutral-400 font-normal">
                Свяжитесь с нами
              </p>
            </div>

            {/* Direct Contact info */}
            <div className="space-y-3 pt-2 text-sm text-neutral-400">
              <p className="flex items-center gap-2">
                <span className="text-neutral-500">Телефон:</span>
                <a href="tel:+74951204488" className="text-white hover:text-emerald-400 transition-colors font-medium">
                  +7 (495) 120-44-88
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-neutral-500">Почта:</span>
                <a href="mailto:hello@greenspace.ru" className="text-white hover:text-emerald-400 transition-colors font-medium">
                  hello@greenspace.ru
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-neutral-500">График:</span>
                <span className="text-neutral-300">Пн–Пт с 09:00 до 20:00</span>
              </p>
            </div>

            {/* Social Icons matching reference: VK and Instagram glyphs */}
            <div className="flex items-center gap-4 pt-4">
              {/* VK icon button */}
              <a
                href="https://vk.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white text-black hover:bg-neutral-200 transition-transform hover:scale-105 flex items-center justify-center cursor-pointer shadow-md"
                aria-label="ВКонтакте"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M15.684 0H8.316C2.992 0 0 2.992 0 8.316v7.368C0 21.008 2.992 24 8.316 24h7.368C21.008 24 24 21.008 24 15.684V8.316C24 2.992 21.008 0 15.684 0zm3.692 17.108h-2.144c-.812 0-1.06-.644-2.52-2.108-1.272-1.236-1.836-1.392-2.148-1.392-.444 0-.572.128-.572.744v1.896c0 .532-.172.86-1.564.86-2.308 0-4.872-1.408-6.684-4.02-2.724-3.864-3.468-6.78-3.468-7.376 0-.324.128-.624.748-.624h2.144c.552 0 .764.252.976.848 1.06 3.064 2.832 5.752 3.564 5.752.276 0 .4-.128.4-.828V9.112c-.084-1.508-.884-1.636-.884-2.172 0-.256.216-.516.572-.516h3.364c.468 0 .636.244.636.8v4.356c0 .468.212.636.348.636.276 0 .508-.168 1.024-.684 1.584-1.788 2.716-4.444 2.716-4.444.148-.324.42-.588.988-.588h2.144c.648 0 .788.336.648.8-.264 1.22-2.82 4.828-2.94 5.032-.24.372-.336.54 0 .984.24.324 1.024 1.004 1.548 1.616 1.02 1.188 1.8 2.184 2.016 2.872.216.688-.12 1.04-.696 1.04z" />
                </svg>
              </a>

              {/* Instagram icon button */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white text-black hover:bg-neutral-200 transition-transform hover:scale-105 flex items-center justify-center cursor-pointer shadow-md"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Telegram */}
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-neutral-700 bg-neutral-900/80 hover:bg-neutral-800 text-white transition-transform hover:scale-105 flex items-center justify-center cursor-pointer"
                aria-label="Telegram"
              >
                <Send className="w-5 h-5 text-neutral-300" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            {isSubmitted ? (
              <div className="bg-[#121212] border border-neutral-800 rounded-3xl p-8 sm:p-12 text-center space-y-5 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-medium text-white">Заявка принята!</h3>
                <p className="text-neutral-400 max-w-md mx-auto text-sm leading-relaxed">
                  Спасибо за обращение. Наш ведущий фитодизайнер свяжется с вами в течение 15 минут, чтобы уточнить детали и подготовить индивидуальный расчет.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', phone: '', comment: '' });
                  }}
                  className="mt-4 px-6 py-2.5 rounded-full border border-neutral-700 text-sm text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Отправить еще одну заявку
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Input: Имя */}
                <div>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder="Имя"
                    className="w-full px-6 py-4 rounded-xl bg-neutral-700/60 border border-transparent focus:border-neutral-400 text-white placeholder-neutral-400 text-base outline-none transition-colors"
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-400 mt-1.5 px-2">{errors.name}</p>
                  )}
                </div>

                {/* Input: Телефон */}
                <div>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: undefined });
                    }}
                    placeholder="Телефон"
                    className="w-full px-6 py-4 rounded-xl bg-neutral-700/60 border border-transparent focus:border-neutral-400 text-white placeholder-neutral-400 text-base outline-none transition-colors"
                  />
                  {errors.phone && (
                    <p className="text-xs text-rose-400 mt-1.5 px-2">{errors.phone}</p>
                  )}
                </div>

                {/* Input: Комментарий */}
                <div>
                  <textarea
                    rows={4}
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    placeholder="Комментарий"
                    className="w-full px-6 py-4 rounded-xl bg-neutral-700/60 border border-transparent focus:border-neutral-400 text-white placeholder-neutral-400 text-base outline-none resize-none transition-colors"
                  />
                </div>

                {/* Submit button: Отправить (Bordered pill from reference) */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-8 rounded-full border border-neutral-600 hover:border-white text-white hover:bg-white hover:text-black font-medium text-base transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Отправка...</span>
                      </>
                    ) : (
                      <span>Отправить</span>
                    )}
                  </button>
                </div>

                {/* Microcopy disclaimer */}
                <p className="text-xs text-neutral-500 text-center pt-2 leading-relaxed">
                  Нажимая на кнопку, я даю согласие на обработку персональных данных
                </p>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
