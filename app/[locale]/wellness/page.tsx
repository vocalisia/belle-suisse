import { unstable_setRequestLocale } from 'next-intl/server';
import CategoryPage from '@/components/pages/CategoryPage';

export const metadata = { title: 'Wellness & Spa' };

export default function WellnessPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  return <CategoryPage category="wellness" />;
}
