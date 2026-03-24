import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import HeroSection from '@/components/home/HeroSection';
import CategorySection from '@/components/home/CategorySection';
import NewsletterBanner from '@/components/newsletter/NewsletterBanner';
import ProductCarousel from '@/components/products/ProductCarousel';
import BrandCard from '@/components/brands/BrandCard';
import { getAllArticles, getArticlesByCategory, getFeaturedArticles } from '@/lib/articles';
import { getAllBrands } from '@/lib/brands';
import JsonLd from '@/components/seo/JsonLd';

const categoryLabels: Record<string, Record<string, string>> = {
  fr: { skincare: 'Skincare', maquillage: 'Maquillage', reviews: 'Reviews', wellness: 'Wellness & Spa', 'marques-suisses': 'Marques Suisses' },
  de: { skincare: 'Hautpflege', maquillage: 'Make-up', reviews: 'Bewertungen', wellness: 'Wellness & Spa', 'marques-suisses': 'Schweizer Marken' },
  en: { skincare: 'Skincare', maquillage: 'Makeup', reviews: 'Reviews', wellness: 'Wellness & Spa', 'marques-suisses': 'Swiss Brands' },
  it: { skincare: 'Skincare', maquillage: 'Trucco', reviews: 'Recensioni', wellness: 'Wellness & Spa', 'marques-suisses': 'Marchi Svizzeri' },
  ru: { skincare: 'Уход за кожей', maquillage: 'Макияж', reviews: 'Обзоры', wellness: 'Велнес и Спа', 'marques-suisses': 'Швейцарские бренды' },
};

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('home');
  const tp = useTranslations('product');

  const featured = getFeaturedArticles();
  const heroArticle = featured[0] || getAllArticles()[0];
  const skincare = getArticlesByCategory('skincare').slice(0, 3);
  const maquillage = getArticlesByCategory('maquillage').slice(0, 3);
  const reviews = getArticlesByCategory('reviews').slice(0, 3);
  const wellness = getArticlesByCategory('wellness').slice(0, 3);
  const brands = getAllBrands();

  const labels = categoryLabels[locale] || categoryLabels.fr;

  const allProducts = getAllArticles()
    .flatMap((a) => a.products)
    .slice(0, 8);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'BELLE SUISSE',
    url: `https://bellesuisse.ch/${locale}`,
    description: t('hero_subtitle'),
    inLanguage: locale,
    publisher: {
      '@type': 'Organization',
      name: 'BELLE SUISSE',
      logo: { '@type': 'ImageObject', url: 'https://bellesuisse.ch/images/logo.svg' },
    },
  };

  const mapArticles = (articles: ReturnType<typeof getAllArticles>) =>
    articles.map((a) => ({
      title: a.title,
      excerpt: a.excerpt,
      image: a.image,
      category: a.category,
      categoryLabel: labels[a.category] || a.category,
      author: a.author,
      date: a.date,
      readTime: a.readTime,
      slug: a.slug,
    }));

  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero */}
        <HeroSection
          heroTitle={t('hero_title')}
          heroSubtitle={t('hero_subtitle')}
          article={{
            title: heroArticle.title,
            excerpt: heroArticle.excerpt,
            image: heroArticle.image,
            category: heroArticle.category,
            categoryLabel: labels[heroArticle.category] || heroArticle.category,
            slug: heroArticle.slug,
            author: heroArticle.author,
            date: heroArticle.date,
          }}
          locale={locale}
          readMoreLabel={t('read_more')}
        />

        {/* Skincare */}
        {skincare.length > 0 && (
          <CategorySection
            title={labels.skincare}
            viewAllLabel={t('view_all')}
            viewAllHref={`/${locale}/skincare`}
            articles={mapArticles(skincare)}
            locale={locale}
          />
        )}

        {/* Maquillage */}
        {maquillage.length > 0 && (
          <CategorySection
            title={labels.maquillage}
            viewAllLabel={t('view_all')}
            viewAllHref={`/${locale}/maquillage`}
            articles={mapArticles(maquillage)}
            locale={locale}
          />
        )}

        {/* Product carousel */}
        {allProducts.length > 0 && (
          <section className="mb-16">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-noir-elegant mb-8">
              {t('popular_reviews')}
            </h2>
            <ProductCarousel products={allProducts} buyLabel={tp('buy_at')} />
          </section>
        )}

        {/* Reviews */}
        {reviews.length > 0 && (
          <CategorySection
            title="Reviews"
            viewAllLabel={t('view_all')}
            viewAllHref={`/${locale}/reviews`}
            articles={mapArticles(reviews)}
            locale={locale}
          />
        )}

        {/* Newsletter */}
        <div className="mb-16">
          <NewsletterBanner />
        </div>

        {/* Wellness */}
        {wellness.length > 0 && (
          <CategorySection
            title={labels.wellness}
            viewAllLabel={t('view_all')}
            viewAllHref={`/${locale}/wellness`}
            articles={mapArticles(wellness)}
            locale={locale}
          />
        )}

        {/* Swiss Brands */}
        <section className="mb-16">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-noir-elegant mb-8">
            {t('discover_brands')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {brands.map((brand) => (
              <BrandCard
                key={brand.slug}
                name={brand.name}
                description={brand.tagline}
                image={brand.image}
                slug={brand.slug}
                locale={locale}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
