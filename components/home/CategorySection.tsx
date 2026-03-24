import Link from 'next/link';
import ArticleGrid from '@/components/articles/ArticleGrid';

interface Article {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  categoryLabel: string;
  author: string;
  date: string;
  readTime: number;
  slug: string;
}

interface CategorySectionProps {
  title: string;
  viewAllLabel: string;
  viewAllHref: string;
  articles: Article[];
  locale: string;
}

export default function CategorySection({ title, viewAllLabel, viewAllHref, articles, locale }: CategorySectionProps) {
  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-playfair text-2xl md:text-3xl font-bold text-noir-elegant">
          {title}
        </h2>
        <Link
          href={viewAllHref}
          className="text-sm text-rose-principal hover:text-noir-elegant transition-colors flex items-center gap-1"
        >
          {viewAllLabel}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
      <ArticleGrid articles={articles} locale={locale} columns={3} />
    </section>
  );
}
