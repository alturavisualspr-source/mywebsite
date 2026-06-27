'use client';

import { useLanguage } from '@/app/components/LanguageContext';
import PlaceholderImage from '@/app/components/PlaceholderImage';
import ScrollReveal from '@/app/components/ScrollReveal';

export default function Portfolio() {
  const { t } = useLanguage();
  const slots = t('portfolio.slots');

  return (
    <section id="portfolio" className="py-24 px-5 sm:px-8" style={{ backgroundColor: '#0F1E38' }}>
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
              style={{ color: '#89CFF0' }}
            >
              Gallery
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
              {t('portfolio.heading')}
            </h2>
          </div>
        </ScrollReveal>

        {/* Desktop masonry grid */}
        <div
          className="hidden md:grid gap-4"
          style={{
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'repeat(3, 220px)',
          }}
        >
          <ScrollReveal delay={0} className="col-span-2 row-span-1">
            <PlaceholderImage
              label={slots[0]}
              className="w-full h-full rounded-xl cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            />
          </ScrollReveal>
          <ScrollReveal delay={60} className="col-span-1 row-span-2">
            <PlaceholderImage
              label={slots[1]}
              className="w-full h-full rounded-xl cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            />
          </ScrollReveal>
          <ScrollReveal delay={120} className="col-span-1 row-span-1">
            <PlaceholderImage
              label={slots[2]}
              className="w-full h-full rounded-xl cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            />
          </ScrollReveal>
          <ScrollReveal delay={180} className="col-span-1 row-span-1">
            <PlaceholderImage
              label={slots[3]}
              className="w-full h-full rounded-xl cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            />
          </ScrollReveal>
          <ScrollReveal delay={240} className="col-span-2 row-span-1">
            <PlaceholderImage
              label={slots[4]}
              className="w-full h-full rounded-xl cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            />
          </ScrollReveal>
          <ScrollReveal delay={300} className="col-span-1 row-span-1">
            <PlaceholderImage
              label={slots[5]}
              className="w-full h-full rounded-xl cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            />
          </ScrollReveal>
        </div>

        {/* Mobile grid */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
          {slots.map((slot, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <PlaceholderImage
                label={slot}
                className="w-full aspect-video rounded-xl"
              />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-10 text-center">
          <button
            className="px-8 py-3 rounded-full border text-sm font-semibold transition-all duration-200 cursor-pointer hover:bg-white/5"
            style={{ borderColor: 'rgba(137,207,240,0.35)', color: '#89CFF0' }}
          >
            {t('portfolio.viewMore')}
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
}
