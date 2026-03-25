import { unstable_setRequestLocale } from 'next-intl/server';
import Breadcrumb from '@/components/layout/Breadcrumb';

export const metadata = { title: 'Livraison & Achats' };

export default function LivraisonPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: 'Livraison & Achats' }]} />

      <h1 className="font-playfair text-4xl font-bold text-noir-elegant mb-8">
        Livraison & Achats
      </h1>

      <div className="prose prose-lg max-w-none text-noir-elegant/80">
        <div className="bg-rose-clair/30 rounded-2xl p-6 mb-8">
          <p className="text-noir-elegant font-medium">
            BELLE SUISSE est un magazine digital. Nous ne vendons pas directement de produits.
            Nos liens vous redirigent vers les revendeurs officiels en Suisse.
          </p>
        </div>

        <h2 className="font-playfair text-2xl font-bold text-noir-elegant">Comment acheter les produits recommandés ?</h2>
        <p>
          Chaque produit testé et recommandé sur BELLE SUISSE est accompagné d'un lien
          vers un revendeur officiel en Suisse. En cliquant sur le bouton "Acheter chez...",
          vous êtes redirigé(e) vers le site du revendeur.
        </p>

        <h2 className="font-playfair text-2xl font-bold text-noir-elegant mt-8">Nos revendeurs partenaires</h2>
        <ul>
          <li><strong>Manor</strong> — Le grand magasin suisse, 60+ points de vente, livraison en Suisse</li>
          <li><strong>Globus</strong> — Sélection premium et luxe, service personnalisé</li>
          <li><strong>Marionnaud</strong> — Spécialiste beauté, large gamme de marques</li>
          <li><strong>Import Parfumerie</strong> — Parfums et cosmétiques, présent dans toute la Suisse</li>
          <li><strong>Coop Vitality</strong> — Pharmacies Coop, produits bio et naturels</li>
        </ul>

        <h2 className="font-playfair text-2xl font-bold text-noir-elegant mt-8">Livraison</h2>
        <p>
          Les conditions de livraison dépendent du revendeur choisi.
          La plupart proposent la livraison gratuite en Suisse à partir de 75-100 CHF d'achat.
          Consultez les conditions sur le site du revendeur.
        </p>

        <h2 className="font-playfair text-2xl font-bold text-noir-elegant mt-8">Box Beauté Suisse</h2>
        <p>
          Notre future Box Beauté Suisse sera livrée mensuellement à votre domicile en Suisse.
          Livraison par la Poste Suisse. Les détails seront communiqués au lancement.
        </p>
      </div>
    </div>
  );
}
