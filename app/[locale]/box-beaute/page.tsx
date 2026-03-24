'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Breadcrumb from '@/components/layout/Breadcrumb';

export default function BoxBeautePage() {
  const t = useTranslations('box');
  const locale = useLocale();
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
        body: JSON.stringify({ email, language: locale }),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: t('title') }]} />

      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1 bg-or-luxe text-white text-xs uppercase tracking-wider rounded-full mb-6">
          {t('coming_soon')}
        </span>
        <h1 className="font-playfair text-4xl md:text-6xl font-bold text-noir-elegant mb-6">
          {t('title')}
        </h1>
        <p className="text-xl text-gris-doux max-w-2xl mx-auto mb-10">
          {t('subtitle')}
        </p>

        <div className="bg-gradient-to-r from-rose-clair via-white to-rose-clair rounded-3xl p-8 md:p-12 max-w-xl mx-auto">
          {status === 'success' ? (
            <p className="text-lg font-playfair font-bold text-noir-elegant">
              Merci ! Vous serez notifié(e) au lancement.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre email"
                required
                className="w-full px-5 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-or-luxe"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-3 bg-or-luxe text-white rounded-full font-medium hover:bg-or-luxe/90 transition-colors disabled:opacity-50"
              >
                {t('join_waitlist')}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* What's inside */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {[
          { icon: '🇨🇭', title: '100% Suisse', desc: 'Uniquement des produits de marques suisses' },
          { icon: '📦', title: '5 produits', desc: 'Soins, maquillage, wellness... la surprise chaque mois' },
          { icon: '💰', title: 'Valeur 150+ CHF', desc: 'Pour seulement 49 CHF par mois' },
        ].map((item) => (
          <div key={item.title} className="text-center p-6 bg-white rounded-2xl shadow-sm">
            <span className="text-4xl mb-4 block">{item.icon}</span>
            <h3 className="font-bold text-noir-elegant mb-2">{item.title}</h3>
            <p className="text-sm text-gris-doux">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
