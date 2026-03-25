import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import BrandCard from '@/components/brands/BrandCard';
import Breadcrumb from '@/components/layout/Breadcrumb';
import NewsletterBanner from '@/components/newsletter/NewsletterBanner';
import { getAllBrands } from '@/lib/brands';

export const metadata = { title: 'Marques Suisses' };

export default function MarquesSuissesPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('home');
  const brands = getAllBrands();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: 'Marques Suisses' }]} />
      <h1 className="font-playfair text-4xl md:text-5xl font-bold text-noir-elegant mb-4">
        {t('discover_brands')}
      </h1>
      <p className="text-gris-doux text-lg mb-10 max-w-2xl">
        La Suisse abrite certaines des marques de beauté les plus prestigieuses au monde.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {brands.map((brand) => (
          <BrandCard
            key={brand.slug}
            name={brand.name}
            description={brand.description.substring(0, 120) + '...'}
            image={brand.image}
            slug={brand.slug}
            locale={locale}
          />
        ))}
      </div>
      <NewsletterBanner />
    </div>
  );
}
