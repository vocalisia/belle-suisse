import Breadcrumb from '@/components/layout/Breadcrumb';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

export default function ConfidentialitePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('footer');

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: t('privacy') }]} />

      <h1 className="font-playfair text-4xl font-bold text-noir-elegant mb-8">
        {t('privacy')}
      </h1>

      <div className="prose prose-lg max-w-none text-noir-elegant/80">
        <h2 className="font-playfair text-2xl font-bold text-noir-elegant">Collecte de données</h2>
        <p>
          Nous collectons uniquement les données que vous nous fournissez volontairement :
          adresse email lors de l'inscription à la newsletter, nom et message lors de l'utilisation
          du formulaire de contact.
        </p>

        <h2 className="font-playfair text-2xl font-bold text-noir-elegant mt-8">Utilisation des données</h2>
        <p>
          Vos données sont utilisées exclusivement pour :
        </p>
        <ul>
          <li>L'envoi de notre newsletter (si vous y êtes inscrit(e))</li>
          <li>Répondre à vos messages via le formulaire de contact</li>
          <li>L'analyse statistique anonyme de la fréquentation du site</li>
        </ul>

        <h2 className="font-playfair text-2xl font-bold text-noir-elegant mt-8">Cookies</h2>
        <p>
          Ce site utilise des cookies techniques nécessaires au bon fonctionnement
          et des cookies d'analyse (Google Analytics) pour améliorer votre expérience.
          Vous pouvez les désactiver dans les paramètres de votre navigateur.
        </p>

        <h2 className="font-playfair text-2xl font-bold text-noir-elegant mt-8">Vos droits</h2>
        <p>
          Conformément à la loi suisse sur la protection des données (LPD) et au RGPD,
          vous disposez d'un droit d'accès, de rectification et de suppression de vos données.
          Contactez-nous pour exercer ces droits.
        </p>

        <h2 className="font-playfair text-2xl font-bold text-noir-elegant mt-8">Sécurité</h2>
        <p>
          Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données
          contre tout accès non autorisé, modification ou suppression.
        </p>
      </div>
    </div>
  );
}
