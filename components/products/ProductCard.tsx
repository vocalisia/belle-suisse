import Image from 'next/image';
import StarRating from './StarRating';
import Badge from '@/components/ui/Badge';

interface ProductCardProps {
  name: string;
  brand: string;
  price: number;
  rating: number;
  image: string;
  affiliateUrl: string;
  availableAt: string;
  buyLabel?: string;
}

export default function ProductCard({
  name, brand, price, rating, image, affiliateUrl, availableAt, buyLabel = 'Découvrir'
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-or-luxe/20 overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="relative aspect-square bg-blanc-creme">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <Badge variant="gold" className="absolute top-3 left-3">
          {availableAt}
        </Badge>
      </div>
      <div className="p-4">
        <p className="text-xs text-gris-doux uppercase tracking-wider mb-1">{brand}</p>
        <h3 className="font-medium text-noir-elegant text-sm mb-2 line-clamp-2">{name}</h3>
        <StarRating rating={rating} size="sm" />
        <div className="flex items-center justify-between mt-3">
          <span className="font-bold text-noir-elegant">{price} CHF</span>
          <a
            href={affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 bg-noir-elegant text-white text-xs rounded-full hover:bg-noir-elegant/90 transition-colors"
          >
            {buyLabel}
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
