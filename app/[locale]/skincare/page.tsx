import { unstable_setRequestLocale } from 'next-intl/server';
import CategoryPage from '@/components/pages/CategoryPage';
export default function SkincarePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  return <CategoryPage category="skincare" />;
}
