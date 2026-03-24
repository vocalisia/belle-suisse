import Image from 'next/image';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';

interface HeroArticle {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  categoryLabel: string;
  slug: string;
  author: string;
  date: string;
}

interface HeroSectionProps {
  heroTitle: string;
  heroSubtitle: string;
  article: HeroArticle;
  locale: string;
  readMoreLabel: string;
}

export default function HeroSection({ heroTitle, heroSubtitle, article, locale, readMoreLabel }: HeroSectionProps) {
  return (
    <section className="mb-16">
      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="font-playfair text-4xl md:text-6xl font-bold text-noir-elegant mb-4">
          {heroTitle}
        </h1>
        <p className="text-gris-doux text-lg max-w-2xl mx-auto font-cormorant text-xl italic">
          {heroSubtitle}
        </p>
      </div>

      {/* Featured article */}
      <Link href={`/${locale}/${article.category}/${article.slug}`} className="group block">
        <div className="relative aspect-[21/9] rounded-3xl overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <Badge variant="rose" className="mb-3">{article.categoryLabel}</Badge>
            <h2 className="font-playfair text-2xl md:text-4xl font-bold text-white mb-2 max-w-3xl">
              {article.title}
            </h2>
            <p className="text-white/80 text-sm md:text-base max-w-2xl mb-4 hidden md:block">
              {article.excerpt}
            </p>
            <span className="inline-flex items-center gap-2 text-white text-sm font-medium">
              {readMoreLabel}
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </section>
  );
}
