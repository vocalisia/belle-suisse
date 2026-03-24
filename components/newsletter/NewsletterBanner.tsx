'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function NewsletterBanner() {
  const t = useTranslations('newsletter');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-rose-clair via-rose-principal/20 to-rose-clair">
      <div className="relative px-6 py-12 md:py-16 md:px-12 text-center">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-noir-elegant mb-3">
          {t('title')}
        </h2>
        <p className="text-gris-doux mb-8 max-w-md mx-auto">
          {t('subtitle')}
        </p>
        {status === 'success' ? (
          <p className="text-lg font-medium text-noir-elegant">{t('success')}</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('placeholder')}
              required
              className="flex-1 px-5 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-principal text-sm"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-6 py-3 bg-noir-elegant text-white rounded-full text-sm font-medium hover:bg-noir-elegant/90 transition-colors disabled:opacity-50"
            >
              {status === 'loading' ? '...' : t('button')}
            </button>
          </form>
        )}
        {status === 'error' && (
          <p className="mt-3 text-sm text-red-500">{t('error')}</p>
        )}
        <p className="mt-4 text-xs text-gris-doux">
          {t('count', { count: "10'000+" })}
        </p>
      </div>
    </section>
  );
}
