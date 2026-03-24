import Image from 'next/image';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  categoryLabel: string;
  author: string;
  date: string;
  readTime: number;
  slug: string;
  locale: string;
  readMoreLabel?: string;
  minReadLabel?: string;
}

export default function ArticleCard({
  title, excerpt, image, category, categoryLabel, author, date, readTime, slug, locale,
  readMoreLabel = 'Lire la suite', minReadLabel = 'min de lecture'
}: ArticleCardProps) {
  return (
    <Link href={`/${locale}/${category}/${slug}`} className="group block">
      <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Badge variant="rose" className="absolute top-3 left-3">
            {categoryLabel}
          </Badge>
        </div>
        <div className="p-5">
          <h3 className="font-playfair text-lg font-bold text-noir-elegant mb-2 line-clamp-2 group-hover:text-rose-principal transition-colors">
            {title}
          </h3>
          <p className="text-gris-doux text-sm line-clamp-2 mb-3">{excerpt}</p>
          <div className="flex items-center justify-between text-xs text-gris-doux">
            <span>{author} &middot; {date}</span>
            <span>{readTime} {minReadLabel}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
