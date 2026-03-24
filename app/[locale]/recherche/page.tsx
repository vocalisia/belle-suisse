import { Suspense } from 'react';
import { unstable_setRequestLocale } from 'next-intl/server';
import SearchContent from './SearchContent';

export default function RecherchePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-20 text-center text-gris-doux">...</div>}>
      <SearchContent />
    </Suspense>
  );
}
