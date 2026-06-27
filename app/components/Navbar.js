'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/app/components/LanguageContext';

export default function Navbar() {
  const { lang, toggle, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.portfolio'), href: '#portfolio' },
    { label: t('nav.pricing'), href: '#pricing' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(10,22,40,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(137,207,240,0.08)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16">
        <a
          href="#"
          className="font-display font-bold text-lg sm:text-xl tracking-tight text-white transition-colors duration-200 hover:text-baby-blue"
        >
          Altura Visuals PR
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/65 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            className="text-sm font-semibold px-5 py-2 rounded-full cursor-pointer transition-all duration-200 hover:opacity-85"
            style={{ backgroundColor: '#89CFF0', color: '#0A1628' }}
          >
            {t('nav.bookNow')}
          </a>
          <button
            onClick={toggle}
            className="text-xs font-bold px-3 py-1.5 rounded border cursor-pointer transition-all duration-200 hover:bg-white/5"
            style={{ borderColor: 'rgba(137,207,240,0.35)', color: '#89CFF0' }}
            aria-label="Toggle language"
          >
            {lang === 'en' ? 'ES' : 'EN'}
          </button>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggle}
            className="text-xs font-bold px-2.5 py-1 rounded border cursor-pointer"
            style={{ borderColor: 'rgba(137,207,240,0.35)', color: '#89CFF0' }}
            aria-label="Toggle language"
          >
            {lang === 'en' ? 'ES' : 'EN'}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white p-1 cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="md:hidden px-5 pb-6 pt-2 flex flex-col gap-4 border-t"
          style={{
            backgroundColor: 'rgba(10,22,40,0.98)',
            backdropFilter: 'blur(14px)',
            borderColor: 'rgba(137,207,240,0.08)',
          }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/75 text-base font-medium hover:text-white transition-colors cursor-pointer py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            className="text-center text-sm font-semibold px-5 py-3 rounded-full cursor-pointer transition-opacity hover:opacity-85 mt-1"
            style={{ backgroundColor: '#89CFF0', color: '#0A1628' }}
            onClick={() => setMenuOpen(false)}
          >
            {t('nav.bookNow')}
          </a>
        </div>
      )}
    </nav>
  );
}
