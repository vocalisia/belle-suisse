import type { Metadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';
import ArticleDetailPage from '@/components/pages/ArticleDetailPage';
import { generateArticleMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }: { params: { locale: string; slug: string } }): Promise<Metadata> {
  return generateArticleMetadata(params.slug, params.locale, 'skincare');
}

export default function SkincareArticlePage({ params }: { params: { locale: string; slug: string } }) {
  unstable_setRequestLocale(params.locale);
  return <ArticleDetailPage slug={params.slug} />;
}
