'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import ArticleGrid from '@/components/articles/ArticleGrid';
import Breadcrumb from '@/components/layout/Breadcrumb';
import SearchBar from '@/components/ui/SearchBar';

interface SearchResult {
  title: string;
  excerpt: string;
  category: string;
  slug: string;
  image: string;
  date: string;
}

export default function SearchContent() {
  const t = useTranslations('search');
  const locale = useLocale();
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    setLoading(true);
    fetch(`/api/search?q=${encodeURIComponent(query)}`)
      .then((res) => res.json())
      .then((data) => {
        setResults(data.results || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [query]);

  const mapped = results.map((r) => ({
    title: r.title,
    excerpt: r.excerpt,
    image: r.image,
    category: r.category,
    categoryLabel: r.category,
    author: '',
    date: r.date,
    readTime: 5,
    slug: r.slug,
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: t('title') }]} />

      <h1 className="font-playfair text-4xl font-bold text-noir-elegant mb-8">
        {t('title')}
      </h1>

      <div className="max-w-xl mb-10">
        <SearchBar />
      </div>

      {query && (
        <p className="text-gris-doux mb-6">
          {t('results_for')} &quot;{query}&quot;
        </p>
      )}

      {loading ? (
        <div className="text-center py-20 text-gris-doux">...</div>
      ) : mapped.length > 0 ? (
        <ArticleGrid articles={mapped} locale={locale} columns={3} />
      ) : query ? (
        <p className="text-center py-20 text-gris-doux text-lg">{t('no_results')}</p>
      ) : null}
    </div>
  );
}
