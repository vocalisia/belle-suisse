import { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';
import { getAllArticles } from '@/lib/articles';
import { getAllBrands } from '@/lib/brands';

const baseUrl = 'https://belle-suisse.vercel.app';
const siteLastUpdated = new Date('2026-03-25');

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles();
  const brands = getAllBrands();
  const categories = ['skincare', 'maquillage', 'reviews', 'wellness', 'marques-suisses', 'mode', 'cheveux'];

  const entries: MetadataRoute.Sitemap = [];

  // Home pages
  for (const locale of locales) {
    entries.push({
      url: `${baseUrl}/${locale}`,
      lastModified: siteLastUpdated,
      changeFrequency: 'daily',
      priority: 1,
    });
  }

  // Category pages
  for (const locale of locales) {
    for (const cat of categories) {
      entries.push({
        url: `${baseUrl}/${locale}/${cat}`,
        lastModified: siteLastUpdated,
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    }
  }

  // Article pages
  for (const locale of locales) {
    for (const article of articles) {
      entries.push({
        url: `${baseUrl}/${locale}/${article.category}/${article.slug}`,
        lastModified: new Date(article.date),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }
  }

  // Brand pages
  for (const locale of locales) {
    for (const brand of brands) {
      entries.push({
        url: `${baseUrl}/${locale}/marques-suisses/${brand.slug}`,
        lastModified: siteLastUpdated,
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    }
  }

  // Static pages
  const staticPages = ['a-propos', 'contact', 'newsletter', 'mentions-legales', 'confidentialite', 'cgv', 'faq', 'livraison', 'box-beaute'];
  for (const locale of locales) {
    for (const page of staticPages) {
      entries.push({
        url: `${baseUrl}/${locale}/${page}`,
        lastModified: siteLastUpdated,
        changeFrequency: 'monthly',
        priority: 0.4,
      });
    }
  }

  return entries;
}
