import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { unstable_setRequestLocale } from 'next-intl/server';
import { useLocale } from 'next-intl';
import Breadcrumb from '@/components/layout/Breadcrumb';
import ArticleGrid from '@/components/articles/ArticleGrid';
import JsonLd from '@/components/seo/JsonLd';
import { getAuthorBySlug, getAllAuthors } from '@/lib/authors';
import { getAllArticles } from '@/lib/articles';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const author = getAuthorBySlug(params.slug);
  if (!author) return { title: 'Auteur introuvable' };
  return {
    title: `${author.name} — ${author.jobTitle}`,
    description: author.bio.substring(0, 160),
  };
}

export function generateStaticParams() {
  return getAllAuthors().map((a) => ({ slug: a.slug }));
}

export default function AuthorPage({ params }: { params: { locale: string; slug: string } }) {
  unstable_setRequestLocale(params.locale);
  const locale = params.locale;
  const author = getAuthorBySlug(params.slug);

  if (!author) notFound();

  const articles = getAllArticles()
    .filter((a) => a.author === author.name)
    .map((a) => ({
      title: a.title,
      excerpt: a.excerpt,
      image: a.image,
      category: a.category,
      categoryLabel: a.category,
      author: a.author,
      date: a.date,
      readTime: a.readTime,
      slug: a.slug,
    }));

  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: author.name,
    jobTitle: author.jobTitle,
    description: author.bio.substring(0, 200),
    image: author.image,
    url: `https://belle-suisse.vercel.app/${locale}/auteurs/${author.slug}`,
    worksFor: { '@type': 'Organization', name: 'BELLE SUISSE' },
    knowsAbout: author.expertise,
    sameAs: Object.values(author.social).filter(Boolean),
  };

  return (
    <>
      <JsonLd data={personJsonLd} />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: 'Auteurs' }, { label: author.name }]} />

        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="flex-shrink-0">
            <Image
              src={author.image}
              alt={author.name}
              width={200}
              height={200}
              className="rounded-2xl object-cover"
            />
          </div>
          <div>
            <h1 className="font-playfair text-3xl md:text-4xl font-bold text-noir-elegant mb-2">
              {author.name}
            </h1>
            <p className="text-rose-principal font-medium mb-4">{author.jobTitle}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {author.expertise.map((exp) => (
                <span key={exp} className="px-3 py-1 bg-rose-clair text-noir-elegant text-xs rounded-full">
                  {exp}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              {author.social.instagram && (
                <a href={author.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gris-doux hover:text-rose-principal transition-colors text-sm">
                  Instagram
                </a>
              )}
              {author.social.linkedin && (
                <a href={author.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gris-doux hover:text-rose-principal transition-colors text-sm">
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          {author.bio.split('\n\n').map((para, i) => (
            <p key={i} className="text-noir-elegant/80 leading-relaxed">{para}</p>
          ))}
        </div>

        {articles.length > 0 && (
          <section>
            <h2 className="font-playfair text-2xl font-bold text-noir-elegant mb-6">
              Articles de {author.name}
            </h2>
            <ArticleGrid articles={articles} locale={locale} columns={3} />
          </section>
        )}
      </div>
    </>
  );
}
