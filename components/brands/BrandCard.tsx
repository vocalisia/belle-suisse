import Image from 'next/image';
import Link from 'next/link';

interface BrandCardProps {
  name: string;
  description: string;
  image: string;
  slug: string;
  locale: string;
}

export default function BrandCard({ name, description, image, slug, locale }: BrandCardProps) {
  return (
    <Link href={`/${locale}/marques-suisses/${slug}`} className="group block">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-or-luxe/10">
        <div className="relative aspect-[4/3] bg-blanc-creme">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-5 text-center">
          <h3 className="font-playfair text-xl font-bold text-noir-elegant mb-1">{name}</h3>
          <p className="text-sm text-gris-doux line-clamp-2">{description}</p>
        </div>
      </div>
    </Link>
  );
}
