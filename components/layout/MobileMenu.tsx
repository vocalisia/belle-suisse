'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

const navCategories = [
  { key: 'skincare', href: '/skincare' },
  { key: 'maquillage', href: '/maquillage' },
  { key: 'reviews', href: '/reviews' },
  { key: 'wellness', href: '/wellness' },
  { key: 'marques', href: '/marques-suisses' },
  { key: 'mode', href: '/mode' },
  { key: 'cheveux', href: '/cheveux' },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const t = useTranslations('nav');
  const locale = useLocale();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Slide-in panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white z-50 transform transition-transform duration-300 ease-out lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="font-playfair text-xl font-bold text-noir-elegant">
              BELLE <span className="text-rose-principal">SUISSE</span>
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-rose-clair rounded-full transition-colors"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 overflow-y-auto py-4">
            {navCategories.map((cat) => (
              <Link
                key={cat.key}
                href={`/${locale}${cat.href}`}
                onClick={onClose}
                className="block px-6 py-3 text-lg text-noir-elegant hover:bg-rose-clair transition-colors"
              >
                {t(cat.key)}
              </Link>
            ))}

            <div className="border-t mt-4 pt-4">
              <Link
                href={`/${locale}/newsletter`}
                onClick={onClose}
                className="block px-6 py-3 text-lg text-rose-principal font-medium"
              >
                {t('newsletter')}
              </Link>
              <Link
                href={`/${locale}/a-propos`}
                onClick={onClose}
                className="block px-6 py-3 text-noir-elegant hover:bg-rose-clair"
              >
                {t('about')}
              </Link>
              <Link
                href={`/${locale}/contact`}
                onClick={onClose}
                className="block px-6 py-3 text-noir-elegant hover:bg-rose-clair"
              >
                {t('contact')}
              </Link>
            </div>
          </nav>

          {/* Footer with language */}
          <div className="p-4 border-t">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </>
  );
}
