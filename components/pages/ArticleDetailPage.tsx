import { notFound } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import ArticleHero from '@/components/articles/ArticleHero';
import ShareButtons from '@/components/articles/ShareButtons';
import ProductCard from '@/components/products/ProductCard';
import RelatedArticles from '@/components/articles/RelatedArticles';
import NewsletterBanner from '@/components/newsletter/NewsletterBanner';
import Breadcrumb from '@/components/layout/Breadcrumb';
import JsonLd from '@/components/seo/JsonLd';
import { getArticleBySlug, getArticlesByCategory } from '@/lib/articles';

const categoryLabels: Record<string, Record<string, string>> = {
  fr: { skincare: 'Skincare', maquillage: 'Maquillage', reviews: 'Reviews', wellness: 'Wellness & Spa', 'marques-suisses': 'Marques Suisses', mode: 'Mode', cheveux: 'Cheveux' },
  de: { skincare: 'Hautpflege', maquillage: 'Make-up', reviews: 'Bewertungen', wellness: 'Wellness & Spa', 'marques-suisses': 'Schweizer Marken', mode: 'Mode', cheveux: 'Haare' },
  en: { skincare: 'Skincare', maquillage: 'Makeup', reviews: 'Reviews', wellness: 'Wellness & Spa', 'marques-suisses': 'Swiss Brands', mode: 'Fashion', cheveux: 'Hair' },
  it: { skincare: 'Skincare', maquillage: 'Trucco', reviews: 'Recensioni', wellness: 'Wellness & Spa', 'marques-suisses': 'Marchi Svizzeri', mode: 'Moda', cheveux: 'Capelli' },
  ru: { skincare: 'Уход за кожей', maquillage: 'Макияж', reviews: 'Обзоры', wellness: 'Велнес и Спа', 'marques-suisses': 'Швейцарские бренды', mode: 'Мода', cheveux: 'Волосы' },
};

export default function ArticleDetailPage({ slug }: { slug: string }) {
  const t = useTranslations('article');
  const tp = useTranslations('product');
  const locale = useLocale();
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  const labels = categoryLabels[locale] || categoryLabels.fr;
  const categoryLabel = labels[article.category] || article.category;

  const related = getArticlesByCategory(article.category)
    .filter((a) => a.slug !== slug)
    .slice(0, 3)
    .map((a) => ({
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

  const baseUrl = 'https://belle-suisse.vercel.app';
  const articleUrl = `${baseUrl}/${locale}/${article.category}/${article.slug}`;

  const jsonLd = article.category === 'reviews' && article.products.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'Review',
        name: article.title,
        description: article.description,
        author: {
          '@type': 'Person',
          name: article.author,
          url: `${baseUrl}/${locale}/a-propos`,
          jobTitle: 'Rédactrice beauté',
          worksFor: { '@type': 'Organization', name: 'BELLE SUISSE' },
        },
        datePublished: article.date,
        dateModified: article.date,
        publisher: {
          '@type': 'Organization',
          name: 'BELLE SUISSE',
          url: baseUrl,
          logo: { '@type': 'ImageObject', url: `${baseUrl}/icon.svg` },
        },
        mainEntityOfPage: { '@type': 'WebPage', '@id': articleUrl },
        image: article.image,
        inLanguage: locale,
        reviewRating: {
          '@type': 'Rating',
          ratingValue: article.products[0].rating,
          bestRating: 5,
          worstRating: 1,
        },
        itemReviewed: {
          '@type': 'Product',
          name: article.products[0].name,
          brand: { '@type': 'Brand', name: article.products[0].brand },
          image: article.products[0].image,
          offers: {
            '@type': 'Offer',
            price: article.products[0].price,
            priceCurrency: 'CHF',
            availability: 'https://schema.org/InStock',
          },
        },
      }
    : {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.description,
        image: article.image,
        author: {
          '@type': 'Person',
          name: article.author,
          url: `${baseUrl}/${locale}/a-propos`,
          jobTitle: 'Rédactrice beauté',
          worksFor: { '@type': 'Organization', name: 'BELLE SUISSE' },
        },
        datePublished: article.date,
        dateModified: article.date,
        publisher: {
          '@type': 'Organization',
          name: 'BELLE SUISSE',
          url: baseUrl,
          logo: { '@type': 'ImageObject', url: `${baseUrl}/icon.svg` },
        },
        mainEntityOfPage: { '@type': 'WebPage', '@id': articleUrl },
        articleSection: categoryLabel,
        inLanguage: locale,
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['article h1', 'article p:first-of-type'],
        },
      };

  // Simple markdown-like rendering: split by ## for sections
  const contentSections = article.content.split('\n\n').map((para, i) => {
    if (para.startsWith('## ')) {
      return <h2 key={i} className="text-2xl font-playfair font-bold text-noir-elegant mt-8 mb-4">{para.replace('## ', '')}</h2>;
    }
    return <p key={i} className="text-noir-elegant/80 leading-relaxed mb-4">{para}</p>;
  });

  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: categoryLabel, href: `/${locale}/${article.category}` },
            { label: article.title },
          ]}
        />

        <ArticleHero
          title={article.title}
          image={article.image}
          category={article.category}
          categoryLabel={categoryLabel}
          author={article.author}
          date={article.date}
          readTime={article.readTime}
          publishedLabel={t('published')}
          byLabel={t('by')}
          minReadLabel={t('min_read')}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
          {/* Main content */}
          <article className="lg:col-span-2">
            <ShareButtons
              url={`https://bellesuisse.ch/${locale}/${article.category}/${article.slug}`}
              title={article.title}
              label={t('share')}
            />

            <div className="mt-8 prose prose-lg max-w-none">
              {contentSections}
            </div>

            {/* Affiliate disclaimer */}
            <p className="mt-8 text-sm text-gris-doux italic border-t pt-4">
              Cet article contient des liens affiliés. En achetant via nos liens, vous soutenez BELLE SUISSE sans surcoût pour vous.
            </p>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            {article.products.length > 0 && (
              <div>
                <h3 className="font-playfair text-xl font-bold text-noir-elegant mb-4">
                  {t('products_mentioned')}
                </h3>
                <div className="space-y-4">
                  {article.products.map((product, i) => (
                    <ProductCard
                      key={i}
                      {...product}
                      buyLabel={tp('buy_at') + ' ' + product.availableAt}
                    />
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>

        <RelatedArticles articles={related} locale={locale} title={t('related')} />

        <div className="mt-16">
          <NewsletterBanner />
        </div>
      </div>
    </>
  );
}
