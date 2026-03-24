import { unstable_setRequestLocale } from 'next-intl/server';
import ArticleDetailPage from '@/components/pages/ArticleDetailPage';
export default function MaquillageArticlePage({ params }: { params: { locale: string; slug: string } }) {
  unstable_setRequestLocale(params.locale);
  return <ArticleDetailPage slug={params.slug} />;
}
