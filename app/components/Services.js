'use client';

import { useState } from 'react';
import { useLanguage } from '@/app/components/LanguageContext';
import PlaceholderImage from '@/app/components/PlaceholderImage';
import ScrollReveal from '@/app/components/ScrollReveal';

function ServiceCard({ card, delay }) {
  return (
    <ScrollReveal delay={delay}>
      <div
        className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 h-full"
        style={{
          backgroundColor: '#0F1E38',
          border: '1px solid rgba(137,207,240,0.1)',
        }}
      >
        <PlaceholderImage label={card.placeholder} className="aspect-video w-full" />
        <div className="p-6 flex flex-col flex-1">
          <h3 className="font-display font-semibold text-lg text-white mb-2">
            {card.title}
          </h3>
          <p className="text-sm leading-relaxed flex-1" style={{ color: 'rgba(255,255,255,0.55)' }}>
            {card.description}
          </p>
          {card.cta && (
            <a
              href="#booking"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity duration-200 hover:opacity-70 cursor-pointer"
              style={{ color: '#89CFF0' }}
            >
              {card.cta}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function Services() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const cards = t('services.cards');
  const mainCards = cards.slice(0, 3);
  const otherCards = cards.slice(3);

  return (
    <section id="services" className="py-24 px-5 sm:px-8" style={{ backgroundColor: '#0A1628' }}>
      <div className="max-w-7xl mx-auto">

        {/* Main services */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: '#89CFF0' }}>
              What We Offer
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
              {t('services.heading')}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {mainCards.map((card, i) => (
            <ServiceCard key={i} card={card} delay={i * 70} />
          ))}
        </div>

        {/* Other services toggle */}
        <ScrollReveal>
          <button
            onClick={() => setOpen(o => !o)}
            className="w-full flex items-center gap-4 group cursor-pointer"
            aria-expanded={open}
          >
            <div className="flex-1 h-px transition-colors duration-300" style={{ backgroundColor: open ? 'rgba(137,207,240,0.25)' : 'rgba(137,207,240,0.12)' }} />
            <span className="flex items-center gap-2 font-display font-semibold text-base whitespace-nowrap transition-colors duration-200" style={{ color: open ? '#89CFF0' : 'rgba(255,255,255,0.6)' }}>
              {t('services.otherHeading')}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                style={{
                  transition: 'transform 0.3s cubic-bezier(0.22,1,0.36,1)',
                  transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
            <div className="flex-1 h-px transition-colors duration-300" style={{ backgroundColor: open ? 'rgba(137,207,240,0.25)' : 'rgba(137,207,240,0.12)' }} />
          </button>
        </ScrollReveal>

        {/* Collapsible cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateRows: open ? '1fr' : '0fr',
            transition: 'grid-template-rows 0.4s cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          <div style={{ overflow: 'hidden' }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-10">
              {otherCards.map((card, i) => (
                <ServiceCard key={i} card={card} delay={i * 70} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
