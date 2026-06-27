'use client';

import { useState } from 'react';
import { useLanguage } from '@/app/components/LanguageContext';
import ScrollReveal from '@/app/components/ScrollReveal';

export default function FAQ() {
  const { t } = useLanguage();
  const items = t('faq.items');
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-24 px-5 sm:px-8" style={{ backgroundColor: '#0A1628' }}>
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
              style={{ color: '#89CFF0' }}
            >
              FAQ
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
              {t('faq.heading')}
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <ScrollReveal key={i} delay={i * 55}>
                <div
                  className="rounded-2xl overflow-hidden transition-all duration-200"
                  style={{
                    backgroundColor: isOpen
                      ? 'rgba(137,207,240,0.06)'
                      : 'rgba(255,255,255,0.03)',
                    border: isOpen
                      ? '1px solid rgba(137,207,240,0.2)'
                      : '1px solid rgba(137,207,240,0.1)',
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-white text-sm sm:text-base leading-snug">
                      {item.q}
                    </span>
                    <span
                      className="flex-shrink-0 transition-transform duration-300"
                      style={{
                        color: '#89CFF0',
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                      }}
                      aria-hidden="true"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5">
                      <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                        {item.a}
                      </p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
