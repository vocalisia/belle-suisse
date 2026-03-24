import Image from 'next/image';
import Badge from '@/components/ui/Badge';

interface ArticleHeroProps {
  title: string;
  image: string;
  category: string;
  categoryLabel: string;
  author: string;
  date: string;
  readTime: number;
  publishedLabel?: string;
  byLabel?: string;
  minReadLabel?: string;
}

export default function ArticleHero({
  title, image, category, categoryLabel, author, date, readTime,
  publishedLabel = 'Publié le', byLabel = 'Par', minReadLabel = 'min de lecture'
}: ArticleHeroProps) {
  return (
    <div className="relative">
      <div className="relative aspect-[21/9] md:aspect-[21/7] rounded-2xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <Badge variant="rose" className="mb-4">{categoryLabel}</Badge>
          <h1 className="font-playfair text-3xl md:text-5xl font-bold text-white mb-4 max-w-4xl">
            {title}
          </h1>
          <div className="flex items-center gap-4 text-white/80 text-sm">
            <span>{byLabel} <strong className="text-white">{author}</strong></span>
            <span>&middot;</span>
            <span>{publishedLabel} {date}</span>
            <span>&middot;</span>
            <span>{readTime} {minReadLabel}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
