'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Breadcrumb from '@/components/layout/Breadcrumb';

export default function ContactPage() {
  const t = useTranslations('contact');
  const locale = useLocale();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, language: locale }),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: t('title') }]} />

      <h1 className="font-playfair text-4xl md:text-5xl font-bold text-noir-elegant mb-8">
        {t('title')}
      </h1>

      {status === 'success' ? (
        <div className="text-center py-16 bg-rose-clair/30 rounded-3xl">
          <p className="text-2xl font-playfair font-bold text-noir-elegant">{t('success')}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5 bg-white rounded-3xl p-8 shadow-sm">
          <div>
            <label className="block text-sm font-medium text-noir-elegant mb-2">{t('name')}</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-principal"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-noir-elegant mb-2">{t('email')}</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-principal"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-noir-elegant mb-2">{t('subject')}</label>
            <input
              type="text"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-principal"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-noir-elegant mb-2">{t('message')}</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-principal resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-3 bg-noir-elegant text-white rounded-full font-medium hover:bg-noir-elegant/90 transition-colors disabled:opacity-50"
          >
            {status === 'loading' ? '...' : t('send')}
          </button>
          {status === 'error' && <p className="text-sm text-red-500 text-center">{t('error')}</p>}
        </form>
      )}
    </div>
  );
}
