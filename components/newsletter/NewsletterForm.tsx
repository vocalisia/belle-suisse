'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';

export default function NewsletterForm() {
  const t = useTranslations('newsletter');
  const locale = useLocale();
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, firstName, language: locale }),
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
        setFirstName('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-8">
        <p className="text-2xl font-playfair font-bold text-noir-elegant">{t('success')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="Prénom"
        className="w-full px-5 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-principal"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t('placeholder')}
        required
        className="w-full px-5 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-principal"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-3 bg-noir-elegant text-white rounded-full font-medium hover:bg-noir-elegant/90 transition-colors disabled:opacity-50"
      >
        {status === 'loading' ? '...' : t('button')}
      </button>
      {status === 'error' && <p className="text-sm text-red-500 text-center">{t('error')}</p>}
    </form>
  );
}
