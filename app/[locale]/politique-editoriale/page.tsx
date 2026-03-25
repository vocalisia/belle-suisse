import { unstable_setRequestLocale } from 'next-intl/server';
import Breadcrumb from '@/components/layout/Breadcrumb';

export const metadata = { title: 'Politique éditoriale' };

export default function PolitiqueEditorialePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: 'Politique éditoriale' }]} />

      <h1 className="font-playfair text-4xl font-bold text-noir-elegant mb-8">
        Politique éditoriale
      </h1>

      <div className="prose prose-lg max-w-none text-noir-elegant/80">
        <p className="text-lg font-medium text-noir-elegant">
          BELLE SUISSE s'engage à fournir des informations beauté fiables, indépendantes et de qualité.
          Voici nos principes éditoriaux.
        </p>

        <h2 className="font-playfair text-2xl font-bold text-noir-elegant mt-10">Notre mission</h2>
        <p>
          BELLE SUISSE est le premier magazine digital dédié à la beauté suisse. Notre mission est de
          fournir des reviews honnêtes, des guides pratiques et des analyses approfondies sur les produits
          de beauté disponibles en Suisse, avec un accent particulier sur les marques suisses.
        </p>

        <h2 className="font-playfair text-2xl font-bold text-noir-elegant mt-10">Indépendance éditoriale</h2>
        <p>
          Nos recommandations sont basées uniquement sur nos tests et notre expertise.
          Le fait qu'un produit génère une commission d'affiliation n'influence jamais notre évaluation.
          Nous donnons la même note à un produit qu'il soit affilié ou non.
        </p>

        <h2 className="font-playfair text-2xl font-bold text-noir-elegant mt-10">Protocole de test</h2>
        <p>Chaque produit testé par BELLE SUISSE suit un protocole rigoureux :</p>
        <ul>
          <li><strong>Durée minimum :</strong> 4 semaines d'utilisation quotidienne (matin et/ou soir selon le produit)</li>
          <li><strong>Panel :</strong> Testé par la rédactrice spécialisée et, quand possible, par un panel de 3 à 5 lectrices volontaires</li>
          <li><strong>Critères d'évaluation :</strong> Efficacité visible (hydratation, éclat, fermeté), texture et confort d'application, composition INCI, rapport qualité-prix, disponibilité en Suisse</li>
          <li><strong>Notation :</strong> Score sur 5 étoiles, pondéré par les critères ci-dessus</li>
          <li><strong>Documentation :</strong> Photos de texture, notes quotidiennes, observations semaine par semaine</li>
        </ul>

        <h2 className="font-playfair text-2xl font-bold text-noir-elegant mt-10">Système de notation</h2>
        <ul>
          <li><strong>5/5 :</strong> Exceptionnel — résultats remarquables, rapport qualité-prix imbattable</li>
          <li><strong>4-4.5/5 :</strong> Excellent — très efficace, recommandé avec confiance</li>
          <li><strong>3-3.5/5 :</strong> Bon — efficace mais avec des réserves (prix, texture, disponibilité)</li>
          <li><strong>2-2.5/5 :</strong> Moyen — résultats décevants par rapport aux promesses</li>
          <li><strong>1-1.5/5 :</strong> Déconseillé — inefficace ou problèmes de formulation</li>
        </ul>

        <h2 className="font-playfair text-2xl font-bold text-noir-elegant mt-10">Transparence des liens affiliés</h2>
        <p>
          Certains liens vers des produits sont des liens affiliés. Cela signifie que si vous achetez
          un produit via nos liens, nous recevrons une commission de la part du revendeur
          (Manor, Globus, Marionnaud, etc.) sans aucun surcoût pour vous.
        </p>
        <p>
          Cette commission nous aide à financer notre rédaction et à maintenir notre indépendance.
          Nous identifions clairement tous les articles contenant des liens affiliés par une mention
          en fin d'article.
        </p>

        <h2 className="font-playfair text-2xl font-bold text-noir-elegant mt-10">Politique de correction</h2>
        <p>
          Si une erreur factuelle est identifiée dans un article (prix incorrect, ingrédient erroné,
          disponibilité changée), nous corrigeons l'article dans les 48 heures et ajoutons une note
          de mise à jour visible. Les corrections significatives sont signalées par la mention
          "Article mis à jour le [date]".
        </p>

        <h2 className="font-playfair text-2xl font-bold text-noir-elegant mt-10">Notre équipe</h2>
        <p>
          Notre rédaction est composée de professionnelles de la beauté basées en Suisse :
        </p>
        <ul>
          <li><strong>Sophie Müller</strong> — Rédactrice en chef beauté, 8+ ans d'expérience, spécialiste anti-âge et cosmétique de luxe</li>
          <li><strong>Marie Laurent</strong> — Experte skincare et wellness, esthéticienne diplômée, formatrice en cosmétique naturelle</li>
          <li><strong>Clara Dubois</strong> — Journaliste maquillage et tendances, diplômée HEAD Genève, ancienne chroniqueuse RTS</li>
        </ul>

        <h2 className="font-playfair text-2xl font-bold text-noir-elegant mt-10">Contact</h2>
        <p>
          Pour toute question concernant notre politique éditoriale, un partenariat ou une correction,
          contactez-nous via notre page de contact ou par email à redaction@bellesuisse.ch.
        </p>
      </div>
    </div>
  );
}
