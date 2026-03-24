import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import NewsletterForm from '@/components/newsletter/NewsletterForm';
import Breadcrumb from '@/components/layout/Breadcrumb';

export default function NewsletterPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('newsletter');

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: 'Newsletter' }]} />

      <div className="text-center mb-12">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-noir-elegant mb-4">
          {t('title')}
        </h1>
        <p className="text-gris-doux text-lg">
          {t('subtitle')}
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12 mb-12">
        <NewsletterForm />
      </div>

      <div className="text-center">
        <h2 className="font-playfair text-2xl font-bold text-noir-elegant mb-6">
          Ce que vous recevrez
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: '💄', title: 'Tendances', desc: 'Les dernières tendances beauté et skincare' },
            { icon: '⭐', title: 'Reviews exclusives', desc: 'Nos tests produits en avant-première' },
            { icon: '🎁', title: 'Bons plans', desc: 'Offres et promotions chez Manor, Globus...' },
          ].map((item) => (
            <div key={item.title} className="bg-rose-clair/30 rounded-2xl p-6">
              <span className="text-3xl mb-3 block">{item.icon}</span>
              <h3 className="font-bold text-noir-elegant mb-1">{item.title}</h3>
              <p className="text-sm text-gris-doux">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
