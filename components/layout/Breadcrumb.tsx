import Link from 'next/link';
import { useLocale } from 'next-intl';
import JsonLd from '@/components/seo/JsonLd';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const locale = useLocale();

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'BELLE SUISSE',
        item: `https://belle-suisse.vercel.app/${locale}`,
      },
      ...items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: item.label,
        ...(item.href ? { item: `https://belle-suisse.vercel.app${item.href}` } : {}),
      })),
    ],
  };

  return (
    <>
    <JsonLd data={breadcrumbJsonLd} />
    <nav className="flex items-center gap-2 text-sm text-gris-doux mb-6" aria-label="Breadcrumb">
      <Link href={`/${locale}`} className="hover:text-noir-elegant transition-colors">
        BELLE SUISSE
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
          {item.href ? (
            <Link href={item.href} className="hover:text-noir-elegant transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-noir-elegant">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
    </>
  );
}
