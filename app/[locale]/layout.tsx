import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { locales, type Locale } from '@/i18n/config';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieBanner from '@/components/layout/CookieBanner';

const baseUrl = 'https://belle-suisse.vercel.app';

const titles: Record<string, string> = {
  fr: 'BELLE SUISSE — Magazine Beauté Premium Suisse',
  de: 'BELLE SUISSE — Premium Beauty-Magazin Schweiz',
  en: 'BELLE SUISSE — Premium Swiss Beauty Magazine',
  it: 'BELLE SUISSE — Magazine Bellezza Premium Svizzera',
  ru: 'BELLE SUISSE — Премиальный Швейцарский Журнал Красоты',
};

const descriptions: Record<string, string> = {
  fr: 'Découvrez les meilleurs soins, tendances et secrets beauté de Suisse. Skincare, maquillage, wellness et marques suisses.',
  de: 'Entdecken Sie die besten Pflege, Trends und Beauty-Geheimnisse der Schweiz.',
  en: 'Discover the best care, trends and beauty secrets from Switzerland.',
  it: 'Scoprite le migliori cure, tendenze e segreti di bellezza della Svizzera.',
  ru: 'Откройте для себя лучшие средства, тренды и секреты красоты Швейцарии.',
};

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  return {
    title: {
      default: titles[locale] || titles.fr,
      template: '%s | BELLE SUISSE',
    },
    description: descriptions[locale] || descriptions.fr,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: { fr: '/fr', de: '/de', en: '/en', it: '/it', ru: '/ru' },
    },
    openGraph: {
      type: 'website',
      siteName: 'BELLE SUISSE',
      locale,
      title: titles[locale] || titles.fr,
      description: descriptions[locale] || descriptions.fr,
      url: `${baseUrl}/${locale}`,
      images: [{ url: `${baseUrl}/og-default.jpg`, width: 1200, height: 630, alt: 'BELLE SUISSE' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale] || titles.fr,
      description: descriptions[locale] || descriptions.fr,
      images: [`${baseUrl}/og-default.jpg`],
    },
    icons: {
      icon: '/favicon.ico',
      apple: '/apple-touch-icon.png',
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  unstable_setRequestLocale(locale);
  const messages = useMessages();

  return (
    <html lang={locale} dir="ltr">
      <body className="min-h-screen flex flex-col">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
