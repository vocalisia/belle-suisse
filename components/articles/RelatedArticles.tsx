import ArticleGrid from './ArticleGrid';

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

interface RelatedArticlesProps {
  articles: Article[];
  locale: string;
  title?: string;
}

export default function RelatedArticles({ articles, locale, title = 'Articles similaires' }: RelatedArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t">
      <h2 className="font-playfair text-2xl font-bold text-noir-elegant mb-8">
        {title}
      </h2>
      <ArticleGrid articles={articles} locale={locale} columns={3} />
    </section>
  );
}
