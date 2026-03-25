import { unstable_setRequestLocale } from 'next-intl/server';
import Breadcrumb from '@/components/layout/Breadcrumb';

export const metadata = { title: 'Conditions Générales de Vente' };

export default function CGVPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: 'Conditions Générales' }]} />

      <h1 className="font-playfair text-4xl font-bold text-noir-elegant mb-8">
        Conditions Générales de Vente
      </h1>

      <div className="prose prose-lg max-w-none text-noir-elegant/80">
        <h2 className="font-playfair text-2xl font-bold text-noir-elegant">1. Objet</h2>
        <p>
          Les présentes conditions générales régissent l'utilisation du site BELLE SUISSE
          et les services associés, notamment la newsletter et les recommandations de produits.
        </p>

        <h2 className="font-playfair text-2xl font-bold text-noir-elegant mt-8">2. Liens affiliés</h2>
        <p>
          BELLE SUISSE est un magazine digital indépendant. Certains liens vers des produits
          sont des liens affiliés. Lorsque vous achetez un produit via ces liens, nous recevons
          une commission de la part du revendeur (Manor, Globus, Marionnaud, etc.) sans surcoût
          pour vous.
        </p>
        <p>
          Nos recommandations restent indépendantes et basées sur nos tests et notre expertise.
          Le fait qu'un produit génère une commission n'influence pas notre évaluation.
        </p>

        <h2 className="font-playfair text-2xl font-bold text-noir-elegant mt-8">3. Newsletter</h2>
        <p>
          L'inscription à la newsletter est gratuite et volontaire. Vous pouvez vous
          désinscrire à tout moment via le lien présent dans chaque email.
          Vos données ne sont jamais partagées avec des tiers.
        </p>

        <h2 className="font-playfair text-2xl font-bold text-noir-elegant mt-8">4. Box Beauté Suisse</h2>
        <p>
          Le service Box Beauté Suisse est actuellement en phase de pré-lancement.
          Les conditions spécifiques seront communiquées lors du lancement officiel.
          L'inscription à la liste d'attente n'engage à aucun achat.
        </p>

        <h2 className="font-playfair text-2xl font-bold text-noir-elegant mt-8">5. Responsabilité</h2>
        <p>
          Les informations et conseils beauté publiés sur BELLE SUISSE sont fournis à titre
          informatif. Nous recommandons de toujours effectuer un test cutané avant d'utiliser
          un nouveau produit. BELLE SUISSE ne saurait être tenu responsable de réactions
          indésirables liées à l'utilisation de produits recommandés.
        </p>

        <h2 className="font-playfair text-2xl font-bold text-noir-elegant mt-8">6. Droit applicable</h2>
        <p>
          Les présentes conditions sont soumises au droit suisse.
          Le for juridique est à Genève, Suisse.
        </p>
      </div>
    </div>
  );
}
