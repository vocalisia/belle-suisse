import { useTranslations, useLocale } from 'next-intl';
import ArticleGrid from '@/components/articles/ArticleGrid';
import NewsletterBanner from '@/components/newsletter/NewsletterBanner';
import Breadcrumb from '@/components/layout/Breadcrumb';
import JsonLd from '@/components/seo/JsonLd';
import { getArticlesByCategory, type Article } from '@/lib/articles';

const categoryLabels: Record<string, Record<string, string>> = {
  fr: { skincare: 'Skincare', maquillage: 'Maquillage', reviews: 'Reviews', wellness: 'Wellness & Spa', 'marques-suisses': 'Marques Suisses', mode: 'Mode', cheveux: 'Cheveux' },
  de: { skincare: 'Hautpflege', maquillage: 'Make-up', reviews: 'Bewertungen', wellness: 'Wellness & Spa', 'marques-suisses': 'Schweizer Marken', mode: 'Mode', cheveux: 'Haare' },
  en: { skincare: 'Skincare', maquillage: 'Makeup', reviews: 'Reviews', wellness: 'Wellness & Spa', 'marques-suisses': 'Swiss Brands', mode: 'Fashion', cheveux: 'Hair' },
  it: { skincare: 'Skincare', maquillage: 'Trucco', reviews: 'Recensioni', wellness: 'Wellness & Spa', 'marques-suisses': 'Marchi Svizzeri', mode: 'Moda', cheveux: 'Capelli' },
  ru: { skincare: 'Уход за кожей', maquillage: 'Макияж', reviews: 'Обзоры', wellness: 'Велнес и Спа', 'marques-suisses': 'Швейцарские бренды', mode: 'Мода', cheveux: 'Волосы' },
};

interface CategoryPageProps {
  category: string;
}

export default function CategoryPage({ category }: CategoryPageProps) {
  const t = useTranslations('article');
  const locale = useLocale();
  const articles = getArticlesByCategory(category);
  const labels = categoryLabels[locale] || categoryLabels.fr;
  const categoryLabel = labels[category] || category;

  const mapped = articles.map((a) => ({
    title: a.title,
    excerpt: a.excerpt,
    image: a.image,
    category: a.category,
    categoryLabel,
    author: a.author,
    date: a.date,
    readTime: a.readTime,
    slug: a.slug,
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: categoryLabel }]} />
      <h1 className="font-playfair text-4xl md:text-5xl font-bold text-noir-elegant mb-8">
        {categoryLabel}
      </h1>
      {mapped.length > 0 ? (
        <ArticleGrid articles={mapped} locale={locale} columns={3} minReadLabel={t('min_read')} />
      ) : (
        <p className="text-gris-doux text-center py-20 text-lg">Aucun article pour le moment.</p>
      )}
      <div className="mt-16">
        <NewsletterBanner />
      </div>
    </div>
  );
}
