import Breadcrumb from '@/components/layout/Breadcrumb';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

export const metadata = { title: 'Mentions légales' };

export default function MentionsLegalesPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('footer');

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: t('legal') }]} />

      <h1 className="font-playfair text-4xl font-bold text-noir-elegant mb-8">
        {t('legal')}
      </h1>

      <div className="prose prose-lg max-w-none text-noir-elegant/80">
        <h2 className="font-playfair text-2xl font-bold text-noir-elegant">Éditeur</h2>
        <p>
          BELLE SUISSE<br />
          Magazine digital de beauté<br />
          [Raison sociale / Nom de l'entreprise]<br />
          CHE-XXX.XXX.XXX (numéro IDE à compléter)<br />
          [Adresse postale]<br />
          [Code postal] [Ville], Suisse<br />
          Email : contact@bellesuisse.ch
        </p>

        <h2 className="font-playfair text-2xl font-bold text-noir-elegant mt-8">Hébergement</h2>
        <p>
          Ce site est hébergé par Vercel Inc.<br />
          440 N Barranca Ave #4133, Covina, CA 91723, USA
        </p>

        <h2 className="font-playfair text-2xl font-bold text-noir-elegant mt-8">Liens affiliés</h2>
        <p>
          Certains liens présents sur ce site sont des liens affiliés. Cela signifie que si vous
          achetez un produit via ces liens, nous recevrons une commission sans surcoût pour vous.
          Cela nous aide à financer notre rédaction et à continuer à vous offrir du contenu de qualité.
        </p>

        <h2 className="font-playfair text-2xl font-bold text-noir-elegant mt-8">Propriété intellectuelle</h2>
        <p>
          L'ensemble du contenu de ce site (textes, images, vidéos, logos) est protégé par le droit
          d'auteur. Toute reproduction, même partielle, est interdite sans autorisation préalable.
        </p>

        <h2 className="font-playfair text-2xl font-bold text-noir-elegant mt-8">Contact</h2>
        <p>
          Pour toute question, veuillez nous contacter via notre page de contact.
        </p>
      </div>
    </div>
  );
}
