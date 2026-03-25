import { unstable_setRequestLocale } from 'next-intl/server';
import Breadcrumb from '@/components/layout/Breadcrumb';
import NewsletterBanner from '@/components/newsletter/NewsletterBanner';
import JsonLd from '@/components/seo/JsonLd';

export const metadata = { title: 'FAQ' };

const faqs = [
  {
    q: 'Qu\'est-ce que BELLE SUISSE ?',
    a: 'BELLE SUISSE est le premier magazine digital dédié à la beauté suisse. Nous testons des produits, explorons les tendances et partageons les secrets beauté des marques suisses les plus prestigieuses.',
  },
  {
    q: 'Les recommandations sont-elles indépendantes ?',
    a: 'Oui, absolument. Chaque produit est testé par notre rédaction. Certains liens sont des liens affiliés (nous recevons une commission si vous achetez), mais cela n\'influence jamais notre évaluation.',
  },
  {
    q: 'Où puis-je acheter les produits recommandés ?',
    a: 'La plupart des produits sont disponibles chez Manor, Globus, Marionnaud, Import Parfumerie, en pharmacie ou sur les sites officiels des marques. Nous indiquons toujours les points de vente.',
  },
  {
    q: 'La newsletter est-elle gratuite ?',
    a: 'Oui, 100% gratuite. Vous recevez chaque semaine nos meilleurs conseils beauté, nos tests produits et nos bons plans. Désabonnement possible à tout moment.',
  },
  {
    q: 'Qu\'est-ce que la Box Beauté Suisse ?',
    a: 'C\'est notre future box mensuelle contenant 5 produits beauté de marques suisses, livrée chez vous pour 49 CHF/mois (valeur 150+ CHF). Inscrivez-vous à la liste d\'attente pour être notifié(e) du lancement.',
  },
  {
    q: 'Le site est-il disponible en d\'autres langues ?',
    a: 'Oui ! BELLE SUISSE est disponible en 5 langues : français, allemand, anglais, italien et russe. Utilisez le sélecteur de langue dans le header pour changer.',
  },
  {
    q: 'Comment contacter la rédaction ?',
    a: 'Utilisez notre formulaire de contact ou envoyez-nous un email. Nous répondons généralement sous 48 heures.',
  },
  {
    q: 'Les prix affichés sont-ils en francs suisses ?',
    a: 'Oui, tous les prix sont en CHF (francs suisses) et correspondent aux prix pratiqués en Suisse.',
  },
];

export default function FAQPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <JsonLd data={faqJsonLd} />
      <Breadcrumb items={[{ label: 'FAQ' }]} />

      <h1 className="font-playfair text-4xl md:text-5xl font-bold text-noir-elegant mb-4">
        Questions fréquentes
      </h1>
      <p className="text-gris-doux text-lg mb-10">
        Tout ce que vous devez savoir sur BELLE SUISSE
      </p>

      <div className="space-y-6 mb-16">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="font-bold text-noir-elegant text-lg mb-2">{faq.q}</h2>
            <p className="text-noir-elegant/70 leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>

      <NewsletterBanner />
    </div>
  );
}
