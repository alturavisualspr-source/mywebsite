'use client';

import { useLanguage } from '@/app/components/LanguageContext';
import PlaceholderImage from '@/app/components/PlaceholderImage';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative flex min-h-dvh items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#0A1628' }}
    >
      {/* Background placeholder image */}
      <div className="absolute inset-0">
        <PlaceholderImage label={t('hero.placeholder')} className="w-full h-full" hideLabel />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(10,22,40,0.80) 0%, rgba(10,22,40,0.80) 100%)',
          }}
        />
      </div>

      {/* Drone viewfinder — signature element */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        style={{ animation: 'viewfinder-in 1.4s cubic-bezier(0.22,1,0.36,1) forwards' }}
        aria-hidden="true"
      >
        <div className="relative w-56 h-36 sm:w-[360px] sm:h-56 md:w-[480px] md:h-72">
          <span
            className="absolute top-0 left-0 w-7 h-7 border-t-2 border-l-2"
            style={{ borderColor: '#89CFF0', opacity: 0.55 }}
          />
          <span
            className="absolute top-0 right-0 w-7 h-7 border-t-2 border-r-2"
            style={{ borderColor: '#89CFF0', opacity: 0.55 }}
          />
          <span
            className="absolute bottom-0 left-0 w-7 h-7 border-b-2 border-l-2"
            style={{ borderColor: '#89CFF0', opacity: 0.55 }}
          />
          <span
            className="absolute bottom-0 right-0 w-7 h-7 border-b-2 border-r-2"
            style={{ borderColor: '#89CFF0', opacity: 0.55 }}
          />
          {/* Center cross */}
          <span
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-px"
            style={{ backgroundColor: '#89CFF0', opacity: 0.35 }}
          />
          <span
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-4"
            style={{ backgroundColor: '#89CFF0', opacity: 0.35 }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 text-center max-w-4xl mx-auto">
        <p
          className="text-xs font-semibold uppercase tracking-[0.25em] mb-6"
          style={{ color: '#89CFF0', animation: 'fade-up 0.6s ease 0.3s both' }}
        >
          {t('hero.tagline')}
        </p>
        <h1
          className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] text-white leading-[1.04] tracking-tight mb-6"
          style={{ animation: 'fade-up 0.7s ease 0.5s both' }}
        >
          {t('hero.headline')}
        </h1>
        <p
          className="text-base sm:text-lg text-white/65 max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ animation: 'fade-up 0.7s ease 0.7s both' }}
        >
          {t('hero.subheading')}
        </p>
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animation: 'fade-up 0.7s ease 0.9s both' }}
        >
          <a
            href="#booking"
            className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-base transition-opacity duration-200 hover:opacity-80 cursor-pointer text-center"
            style={{ backgroundColor: '#89CFF0', color: '#0A1628' }}
          >
            {t('hero.ctaPrimary')}
          </a>
          <a
            href="#portfolio"
            className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-base border-2 text-white transition-colors duration-200 hover:border-white cursor-pointer text-center"
            style={{ borderColor: 'rgba(255,255,255,0.35)' }}
          >
            {t('hero.ctaSecondary')}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        style={{ animation: 'fade-in 1s ease 1.8s both' }}
        aria-hidden="true"
      >
        <div
          className="w-px h-10"
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(137,207,240,0.5))',
          }}
        />
      </div>
    </section>
  );
}
