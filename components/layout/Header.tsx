'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import MobileMenu from './MobileMenu';
import SearchBar from '@/components/ui/SearchBar';

const navCategories = [
  { key: 'skincare', href: '/skincare' },
  { key: 'maquillage', href: '/maquillage' },
  { key: 'reviews', href: '/reviews' },
  { key: 'wellness', href: '/wellness' },
  { key: 'marques', href: '/marques-suisses' },
  { key: 'mode', href: '/mode' },
  { key: 'cheveux', href: '/cheveux' },
];

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md shadow-sm'
            : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* Top bar */}
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 hover:bg-rose-clair rounded-lg transition-colors"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Logo */}
            <Link href={`/${locale}`} className="flex-shrink-0">
              <h1 className="font-playfair text-2xl lg:text-3xl font-bold tracking-tight text-noir-elegant">
                BELLE <span className="text-rose-principal">SUISSE</span>
              </h1>
            </Link>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 hover:bg-rose-clair rounded-full transition-colors"
                aria-label="Search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <LanguageSwitcher />
              <Link
                href={`/${locale}/newsletter`}
                className="hidden md:inline-flex items-center px-4 py-2 bg-noir-elegant text-white text-sm rounded-full hover:bg-noir-elegant/90 transition-colors"
              >
                {t('newsletter')}
              </Link>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center justify-center gap-1 pb-3 -mt-1">
            {navCategories.map((cat) => (
              <Link
                key={cat.key}
                href={`/${locale}${cat.href}`}
                className="px-4 py-2 text-sm text-noir-elegant/80 hover:text-noir-elegant hover:bg-rose-clair rounded-full transition-all duration-200"
              >
                {t(cat.key)}
              </Link>
            ))}
          </nav>

          {/* Search bar */}
          {searchOpen && (
            <div className="pb-4">
              <SearchBar onClose={() => setSearchOpen(false)} />
            </div>
          )}
        </div>
      </header>

      {/* Spacer */}
      <div className="h-16 lg:h-28" />

      {/* Mobile menu */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
