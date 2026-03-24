import { notFound } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import Breadcrumb from '@/components/layout/Breadcrumb';
import ArticleGrid from '@/components/articles/ArticleGrid';
import NewsletterBanner from '@/components/newsletter/NewsletterBanner';
import JsonLd from '@/components/seo/JsonLd';
import { getBrandBySlug } from '@/lib/brands';
import { getArticlesByCategory, getAllArticles } from '@/lib/articles';

export default function BrandDetailPage({ params }: { params: { locale: string; slug: string } }) {
  unstable_setRequestLocale(params.locale);
  const locale = useLocale();
  const t = useTranslations('article');
  const brand = getBrandBySlug(params.slug);

  if (!brand) notFound();

  // Find articles that mention this brand (by checking tags/content)
  const relatedArticles = getAllArticles()
    .filter((a) =>
      a.tags.some((tag) => tag.toLowerCase().includes(brand.name.toLowerCase())) ||
      a.products.some((p) => p.brand.toLowerCase().includes(brand.name.toLowerCase()))
    )
    .slice(0, 6)
    .map((a) => ({
      title: a.title,
      excerpt: a.excerpt,
      image: a.image,
      category: a.category,
      categoryLabel: a.category,
      author: a.author,
      date: a.date,
      readTime: a.readTime,
      slug: a.slug,
    }));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Brand',
    name: brand.name,
    description: brand.description,
    image: brand.image,
    url: brand.website,
    foundingDate: brand.founded,
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: 'Marques Suisses', href: `/${locale}/marques-suisses` },
            { label: brand.name },
          ]}
        />

        {/* Hero */}
        <div className="relative aspect-[21/7] rounded-3xl overflow-hidden mb-10">
          <Image src={brand.image} alt={brand.name} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <span className="inline-block px-3 py-1 bg-or-luxe text-white text-xs uppercase tracking-wider rounded-full mb-3">
              {brand.tagline}
            </span>
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white">{brand.name}</h1>
          </div>
        </div>

        {/* Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          <div className="lg:col-span-2">
            <p className="text-lg text-noir-elegant/80 leading-relaxed">{brand.description}</p>
          </div>
          <div className="space-y-4 bg-rose-clair/50 rounded-2xl p-6">
            <div>
              <span className="text-xs uppercase tracking-wider text-gris-doux">Fondée en</span>
              <p className="font-bold text-noir-elegant">{brand.founded}</p>
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-gris-doux">Siège</span>
              <p className="font-bold text-noir-elegant">{brand.location}</p>
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-gris-doux">Spécialité</span>
              <p className="font-bold text-noir-elegant">{brand.specialty}</p>
            </div>
            <a
              href={brand.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-noir-elegant text-white rounded-full text-sm hover:bg-noir-elegant/90 transition-colors"
            >
              Site officiel
            </a>
          </div>
        </div>

        {/* Related articles */}
        {relatedArticles.length > 0 && (
          <section className="mb-16">
            <h2 className="font-playfair text-2xl font-bold text-noir-elegant mb-8">
              Articles sur {brand.name}
            </h2>
            <ArticleGrid articles={relatedArticles} locale={locale} columns={3} minReadLabel={t('min_read')} />
          </section>
        )}

        <NewsletterBanner />
      </div>
    </>
  );
}
