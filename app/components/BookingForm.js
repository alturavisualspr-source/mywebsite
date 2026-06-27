'use client';

import { useActionState } from 'react';
import { useLanguage } from '@/app/components/LanguageContext';
import { submitBooking } from '@/app/actions';
import ScrollReveal from '@/app/components/ScrollReveal';

const SERVICE_VALUES = [
  'Full Aerial Coverage',
  'Social Listing Bundle',
  'Express Creator Bundle',
  'Project Monitoring Quote',
  'Site Inspection Quote',
  'Other',
];

const inputBase = {
  backgroundColor: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(137,207,240,0.15)',
  borderRadius: '12px',
  color: '#ffffff',
  outline: 'none',
  transition: 'border-color 0.2s',
};

export default function BookingForm() {
  const { t } = useLanguage();
  const [state, action, isPending] = useActionState(submitBooking, null);
  const serviceLabels = t('booking.services');

  const labelClass = 'block text-xs font-semibold uppercase tracking-wider mb-2';
  const inputClass = 'w-full px-4 py-3 text-sm placeholder:text-white/25';

  return (
    <section id="booking" className="py-24 px-5 sm:px-8" style={{ backgroundColor: '#0F1E38' }}>
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
              style={{ color: '#89CFF0' }}
            >
              Get Started
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
              {t('booking.heading')}
            </h2>
          </div>
        </ScrollReveal>

        {state?.success ? (
          <ScrollReveal>
            <div
              className="text-center py-16 rounded-2xl"
              style={{
                backgroundColor: 'rgba(137,207,240,0.06)',
                border: '1px solid rgba(137,207,240,0.18)',
              }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                style={{ backgroundColor: 'rgba(137,207,240,0.12)' }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#89CFF0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-2">
                {t('booking.thankYou')}
              </h3>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
                {t('booking.success')}
              </p>
            </div>
          </ScrollReveal>
        ) : (
          <ScrollReveal>
            <form action={action} className="space-y-5" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="full_name" className={labelClass} style={{ color: 'rgba(255,255,255,0.5)' }}>
                    {t('booking.fields.fullName')} *
                  </label>
                  <input
                    id="full_name"
                    name="full_name"
                    type="text"
                    required
                    placeholder="John Smith"
                    autoComplete="name"
                    className={inputClass}
                    style={inputBase}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(137,207,240,0.45)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(137,207,240,0.15)')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass} style={{ color: 'rgba(255,255,255,0.5)' }}>
                    {t('booking.fields.email')} *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    autoComplete="email"
                    className={inputClass}
                    style={inputBase}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(137,207,240,0.45)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(137,207,240,0.15)')}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass} style={{ color: 'rgba(255,255,255,0.5)' }}>
                    {t('booking.fields.phone')} *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+1 (787) 000-0000"
                    autoComplete="tel"
                    className={inputClass}
                    style={inputBase}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(137,207,240,0.45)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(137,207,240,0.15)')}
                  />
                </div>
                <div>
                  <label htmlFor="service_type" className={labelClass} style={{ color: 'rgba(255,255,255,0.5)' }}>
                    {t('booking.fields.serviceType')} *
                  </label>
                  <select
                    id="service_type"
                    name="service_type"
                    required
                    className={`${inputClass} cursor-pointer`}
                    style={{ ...inputBase, colorScheme: 'dark' }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(137,207,240,0.45)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(137,207,240,0.15)')}
                  >
                    <option value="" style={{ backgroundColor: '#0F1E38' }}>—</option>
                    {SERVICE_VALUES.map((value, i) => (
                      <option
                        key={value}
                        value={value}
                        style={{ backgroundColor: '#0F1E38' }}
                      >
                        {serviceLabels[i]}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="property_address" className={labelClass} style={{ color: 'rgba(255,255,255,0.5)' }}>
                  {t('booking.fields.address')}
                </label>
                <input
                  id="property_address"
                  name="property_address"
                  type="text"
                  placeholder="123 Main St, San Juan, PR 00901"
                  autoComplete="street-address"
                  className={inputClass}
                  style={inputBase}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(137,207,240,0.45)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(137,207,240,0.15)')}
                />
              </div>

              <div>
                <label htmlFor="preferred_date" className={labelClass} style={{ color: 'rgba(255,255,255,0.5)' }}>
                  {t('booking.fields.date')}
                </label>
                <input
                  id="preferred_date"
                  name="preferred_date"
                  type="date"
                  className={inputClass}
                  style={{ ...inputBase, colorScheme: 'dark' }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(137,207,240,0.45)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(137,207,240,0.15)')}
                />
              </div>

              <div>
                <label htmlFor="message" className={labelClass} style={{ color: 'rgba(255,255,255,0.5)' }}>
                  {t('booking.fields.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your property or project..."
                  className={`${inputClass} resize-y`}
                  style={inputBase}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(137,207,240,0.45)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(137,207,240,0.15)')}
                />
              </div>

              {state?.error && (
                <p
                  className="text-sm text-center"
                  style={{ color: '#f87171' }}
                  role="alert"
                >
                  {t('booking.error')}
                </p>
              )}

              <button
                type="submit"
                disabled={isPending}
                className="w-full py-4 rounded-full font-semibold text-base transition-opacity duration-200 hover:opacity-80 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
                style={{ backgroundColor: '#89CFF0', color: '#0A1628' }}
              >
                {isPending ? '...' : t('booking.submit')}
              </button>
            </form>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
