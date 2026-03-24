import ArticleCard from './ArticleCard';

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

interface ArticleGridProps {
  articles: Article[];
  locale: string;
  columns?: 2 | 3 | 4;
  readMoreLabel?: string;
  minReadLabel?: string;
}

export default function ArticleGrid({ articles, locale, columns = 3, readMoreLabel, minReadLabel }: ArticleGridProps) {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6`}>
      {articles.map((article, i) => (
        <ArticleCard
          key={i}
          {...article}
          locale={locale}
          readMoreLabel={readMoreLabel}
          minReadLabel={minReadLabel}
        />
      ))}
    </div>
  );
}
