'use client';

import { useLanguage } from '@/app/components/LanguageContext';
import ScrollReveal from '@/app/components/ScrollReveal';

function LightningIcon({ color }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill={color}
      className="flex-shrink-0 mt-0.5"
      aria-hidden="true"
    >
      <path d="M13 2L4.5 13.5H11L10 22L20.5 10.5H14L13 2Z" />
    </svg>
  );
}

function isDelivery(text) {
  return /delivery|entrega/i.test(text);
}

export default function Pricing() {
  const { t } = useLanguage();
  const packages = t('pricing.packages');
  const addons = t('pricing.addons');

  return (
    <section id="pricing" className="py-24 px-5 sm:px-8" style={{ backgroundColor: '#0A1628' }}>
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
              style={{ color: '#89CFF0' }}
            >
              Packages
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
              {t('pricing.heading')}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {packages.map((pkg, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div
                className="relative flex flex-col h-full rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
                style={
                  pkg.popular
                    ? {
                        backgroundColor: '#89CFF0',
                        boxShadow: '0 0 48px rgba(137,207,240,0.18)',
                      }
                    : {
                        backgroundColor: '#0F1E38',
                        border: '1px solid rgba(137,207,240,0.12)',
                      }
                }
              >
                {pkg.popular && (
                  <span
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap"
                    style={{ backgroundColor: '#0A1628', color: '#89CFF0' }}
                  >
                    {t('pricing.mostPopular')}
                  </span>
                )}

                <div className="mb-7">
                  <h3
                    className="font-display font-bold text-xl mb-3"
                    style={{ color: pkg.popular ? '#0A1628' : '#ffffff' }}
                  >
                    {pkg.name}
                  </h3>
                  <p
                    className="font-display font-bold text-5xl"
                    style={{ color: pkg.popular ? '#0A1628' : '#89CFF0' }}
                  >
                    {pkg.price}
                  </p>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {pkg.features.map((feature, j) => {
                    const delivery = isDelivery(feature);
                    const iconColor = delivery
                      ? '#F59E0B'
                      : pkg.popular
                      ? '#0A1628'
                      : '#89CFF0';
                    const textColor = delivery
                      ? pkg.popular ? '#92400E' : '#FCD34D'
                      : pkg.popular
                      ? '#0A1628'
                      : 'rgba(255,255,255,0.65)';
                    return (
                      <li key={j} className="flex items-start gap-2.5">
                        <LightningIcon color={iconColor} />
                        <span
                          className={`text-sm leading-snug${delivery ? ' font-semibold' : ''}`}
                          style={{ color: textColor }}
                        >
                          {feature}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                <a
                  href="#booking"
                  className="block text-center py-3 px-6 rounded-full font-semibold text-sm transition-opacity duration-200 hover:opacity-80 cursor-pointer"
                  style={
                    pkg.popular
                      ? { backgroundColor: '#0A1628', color: '#89CFF0' }
                      : {
                          backgroundColor: 'rgba(137,207,240,0.08)',
                          color: '#89CFF0',
                          border: '1px solid rgba(137,207,240,0.25)',
                        }
                  }
                >
                  {t('pricing.bookPackage')}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Add-ons */}
        <ScrollReveal>
          <div
            className="rounded-2xl p-8"
            style={{
              backgroundColor: '#0F1E38',
              border: '1px solid rgba(137,207,240,0.1)',
            }}
          >
            <h3 className="font-display font-semibold text-xl text-white mb-6">
              {addons.heading}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {addons.items.map((addon, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between gap-3 p-4 rounded-xl"
                  style={{
                    backgroundColor: 'rgba(137,207,240,0.04)',
                    border: '1px solid rgba(137,207,240,0.08)',
                  }}
                >
                  <span className="text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                    {addon.name}
                  </span>
                  <span className="font-semibold text-sm flex-shrink-0" style={{ color: '#89CFF0' }}>
                    {addon.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
