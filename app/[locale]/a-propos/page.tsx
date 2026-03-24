import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import Breadcrumb from '@/components/layout/Breadcrumb';
import NewsletterBanner from '@/components/newsletter/NewsletterBanner';

export default function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('footer');

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: t('about') }]} />

      <h1 className="font-playfair text-4xl md:text-5xl font-bold text-noir-elegant mb-8">
        BELLE <span className="text-rose-principal">SUISSE</span>
      </h1>

      <div className="prose prose-lg max-w-none mb-16">
        <p className="text-xl text-noir-elegant/80 leading-relaxed font-cormorant italic mb-8">
          {t('slogan')}
        </p>

        <p>
          BELLE SUISSE est le premier magazine digital dédié à la beauté suisse.
          Notre mission : vous faire découvrir les meilleurs soins, tendances et secrets beauté
          de Suisse, dans 5 langues.
        </p>

        <h2 className="font-playfair text-2xl font-bold text-noir-elegant mt-10 mb-4">
          Notre mission
        </h2>
        <p>
          La Suisse abrite certaines des marques de beauté les plus prestigieuses au monde —
          La Prairie, Valmont, Weleda, et bien d'autres. Pourtant, il n'existait aucun média
          dédié à cet univers fascinant. BELLE SUISSE comble ce vide.
        </p>

        <h2 className="font-playfair text-2xl font-bold text-noir-elegant mt-10 mb-4">
          Notre équipe
        </h2>
        <p>
          Notre rédaction est composée de passionnées de beauté basées en Suisse.
          Chaque produit est testé, chaque spa est visité, chaque conseil est vérifié.
          Nous croyons en une beauté accessible, inclusive et éclairée.
        </p>

        <h2 className="font-playfair text-2xl font-bold text-noir-elegant mt-10 mb-4">
          5 langues, 1 passion
        </h2>
        <p>
          La Suisse est multilingue, et BELLE SUISSE l'est aussi. Notre contenu est disponible
          en français, allemand, anglais, italien et russe — pour toucher toutes les femmes
          qui vivent en Suisse ou qui aiment la beauté suisse.
        </p>
      </div>

      <NewsletterBanner />
    </div>
  );
}
