import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

const socials = [
  { name: 'Instagram', icon: 'I', href: 'https://instagram.com/bellesuisse.ch' },
  { name: 'TikTok', icon: 'T', href: 'https://tiktok.com/@bellesuisse.ch' },
  { name: 'Pinterest', icon: 'P', href: 'https://pinterest.com/bellesuissech' },
  { name: 'YouTube', icon: 'Y', href: 'https://youtube.com/@bellesuisse' },
];

export default function Footer() {
  const t = useTranslations('footer');
  const tn = useTranslations('nav');
  const locale = useLocale();

  const categories = [
    { label: tn('skincare'), href: `/${locale}/skincare` },
    { label: tn('maquillage'), href: `/${locale}/maquillage` },
    { label: tn('reviews'), href: `/${locale}/reviews` },
    { label: tn('wellness'), href: `/${locale}/wellness` },
    { label: tn('mode'), href: `/${locale}/mode` },
    { label: tn('cheveux'), href: `/${locale}/cheveux` },
  ];

  const brands = [
    { label: 'La Prairie', href: `/${locale}/marques-suisses/la-prairie` },
    { label: 'Valmont', href: `/${locale}/marques-suisses/valmont` },
    { label: 'Weleda', href: `/${locale}/marques-suisses/weleda` },
    { label: 'Declaré', href: `/${locale}/marques-suisses/declare` },
    { label: 'Mavala', href: `/${locale}/marques-suisses/mavala` },
  ];

  return (
    <footer className="bg-noir-elegant text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-3">
              BELLE <span className="text-rose-principal">SUISSE</span>
            </h3>
            <p className="text-white/60 font-cormorant text-lg italic">
              {t('slogan')}
            </p>
            <div className="flex gap-3 mt-6">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-rose-principal transition-colors"
                  aria-label={social.name}
                >
                  <span className="text-xs font-bold">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider mb-4 text-or-luxe">
              {t('categories')}
            </h4>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.href}>
                  <Link href={cat.href} className="text-white/60 hover:text-white text-sm transition-colors">
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider mb-4 text-or-luxe">
              {t('brands')}
            </h4>
            <ul className="space-y-2">
              {brands.map((brand) => (
                <li key={brand.href}>
                  <Link href={brand.href} className="text-white/60 hover:text-white text-sm transition-colors">
                    {brand.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About & Legal */}
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider mb-4 text-or-luxe">
              {t('about')}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/a-propos`} className="text-white/60 hover:text-white text-sm transition-colors">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="text-white/60 hover:text-white text-sm transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/faq`} className="text-white/60 hover:text-white text-sm transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/newsletter`} className="text-white/60 hover:text-white text-sm transition-colors">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/mentions-legales`} className="text-white/60 hover:text-white text-sm transition-colors">
                  {t('legal')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/cgv`} className="text-white/60 hover:text-white text-sm transition-colors">
                  CGV
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/confidentialite`} className="text-white/60 hover:text-white text-sm transition-colors">
                  {t('privacy')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Belle Suisse. {t('rights')}.
          </p>
          <p className="text-white/40 text-sm">
            {t('made_in')}
          </p>
        </div>
      </div>
    </footer>
  );
}
