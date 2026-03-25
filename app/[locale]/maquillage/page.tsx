import { unstable_setRequestLocale } from 'next-intl/server';
import CategoryPage from '@/components/pages/CategoryPage';

export const metadata = { title: 'Maquillage' };

export default function MaquillagePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  return <CategoryPage category="maquillage" />;
}
