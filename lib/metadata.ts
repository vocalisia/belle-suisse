import type { Metadata } from 'next';
import { getArticleBySlug } from './articles';
import { getBrandBySlug } from './brands';

const baseUrl = 'https://belle-suisse.vercel.app';

export function generateArticleMetadata(slug: string, locale: string, category: string): Metadata {
  const article = getArticleBySlug(slug);
  if (!article) return { title: 'Article introuvable' };

  const url = `${baseUrl}/${locale}/${category}/${slug}`;

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: url,
      languages: { fr: `${baseUrl}/fr/${category}/${slug}`, de: `${baseUrl}/de/${category}/${slug}`, en: `${baseUrl}/en/${category}/${slug}`, it: `${baseUrl}/it/${category}/${slug}`, ru: `${baseUrl}/ru/${category}/${slug}` },
    },
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.description,
      url,
      images: [{ url: article.image, width: 1200, height: 600, alt: article.title }],
      publishedTime: article.date,
      authors: [article.author],
      section: category,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      images: [article.image],
    },
  };
}

export function generateBrandMetadata(slug: string, locale: string): Metadata {
  const brand = getBrandBySlug(slug);
  if (!brand) return { title: 'Marque introuvable' };

  const url = `${baseUrl}/${locale}/marques-suisses/${slug}`;

  return {
    title: `${brand.name} — ${brand.tagline}`,
    description: brand.description.substring(0, 160),
    alternates: {
      canonical: url,
      languages: { fr: `${baseUrl}/fr/marques-suisses/${slug}`, de: `${baseUrl}/de/marques-suisses/${slug}`, en: `${baseUrl}/en/marques-suisses/${slug}`, it: `${baseUrl}/it/marques-suisses/${slug}`, ru: `${baseUrl}/ru/marques-suisses/${slug}` },
    },
    openGraph: {
      type: 'article',
      title: brand.name,
      description: brand.description.substring(0, 160),
      url,
      images: [{ url: brand.image, width: 1200, height: 600, alt: brand.name }],
    },
  };
}
