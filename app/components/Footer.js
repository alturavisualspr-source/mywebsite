'use client';

import { useLanguage } from '@/app/components/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const navLinks = [
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.portfolio'), href: '#portfolio' },
    { label: t('nav.pricing'), href: '#pricing' },
    { label: t('nav.bookNow'), href: '#booking' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <footer
      id="contact"
      className="py-16 px-5 sm:px-8"
      style={{
        backgroundColor: '#0A1628',
        borderTop: '1px solid rgba(137,207,240,0.08)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display font-bold text-2xl text-white mb-3">
              Altura Visuals PR
            </h3>
            <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>
              {t('footer.tagline')}
            </p>
            <p className="text-xs uppercase tracking-wider font-semibold" style={{ color: '#89CFF0', opacity: 0.7 }}>
              FAA Part 107 Licensed
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: 'rgba(255,255,255,0.35)' }}
            >
              {t('footer.contact')}
            </h4>
            <div className="space-y-3">
              <a
                href="https://instagram.com/alturavisuals.pr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm transition-colors duration-200 hover:text-baby-blue cursor-pointer"
                style={{ color: 'rgba(255,255,255,0.55)' }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
                @alturavisuals.pr
              </a>
              <a
                href="mailto:alturavisualspr@gmail.com"
                className="flex items-center gap-2.5 text-sm transition-colors duration-200 hover:text-baby-blue cursor-pointer"
                style={{ color: 'rgba(255,255,255,0.55)' }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                alturavisualspr@gmail.com
              </a>
              <a
                href="https://wa.me/WHATSAPP_NUMBER"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm transition-colors duration-200 hover:text-baby-blue cursor-pointer"
                style={{ color: 'rgba(255,255,255,0.55)' }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WHATSAPP_NUMBER
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: 'rgba(255,255,255,0.35)' }}
            >
              {t('footer.navigation')}
            </h4>
            <div className="space-y-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm transition-colors duration-200 hover:text-white cursor-pointer"
                  style={{ color: 'rgba(255,255,255,0.45)' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="pt-8 border-t text-center"
          style={{ borderColor: 'rgba(137,207,240,0.08)' }}
        >
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
