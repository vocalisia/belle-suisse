export interface Brand {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  founded: string;
  location: string;
  specialty: string;
  website: string;
}

const brands: Brand[] = [
  {
    slug: 'la-prairie',
    name: 'La Prairie',
    tagline: 'Luxe ultime',
    description: 'Fondée en 1978, La Prairie est la référence absolue de la cosmétique de luxe suisse. Inspirée par la clinique éponyme au bord du lac Léman, la marque utilise des ingrédients exclusifs comme le caviar et la technologie cellulaire pour créer des soins anti-âge d\'exception. Chaque produit est le fruit de décennies de recherche scientifique suisse.',
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=1200&h=600&fit=crop',
    founded: '1978',
    location: 'Zurich',
    specialty: 'Cosmétique cellulaire de luxe',
    website: 'https://www.laprairie.com',
  },
  {
    slug: 'valmont',
    name: 'Valmont',
    tagline: 'Cosmétique cellulaire',
    description: 'Née en 1985 sur les rives du lac Léman, Valmont est pionnière de la cosmétique cellulaire. La marque utilise l\'ADN et l\'ARN natifs pour régénérer les cellules de la peau. Présente dans les plus beaux spas du monde, Valmont incarne le savoir-faire suisse au service de la beauté.',
    image: 'https://images.unsplash.com/photo-1570194065650-d99fb4a38691?w=1200&h=600&fit=crop',
    founded: '1985',
    location: 'Genève',
    specialty: 'Cosmétique cellulaire & spa',
    website: 'https://www.lamaisonvalmont.com',
  },
  {
    slug: 'weleda',
    name: 'Weleda',
    tagline: 'Bio & naturel',
    description: 'Pionnière de la cosmétique bio depuis 1921, Weleda est une fierté suisse. Fondée à Arlesheim près de Bâle, la marque cultive ses propres plantes médicinales en biodynamie. Du célèbre Skin Food à l\'huile de rose musquée, Weleda prouve que naturalité et efficacité sont compatibles.',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=1200&h=600&fit=crop',
    founded: '1921',
    location: 'Arlesheim',
    specialty: 'Cosmétique bio & naturelle',
    website: 'https://www.weleda.ch',
  },
  {
    slug: 'declare',
    name: 'Declaré',
    tagline: 'Skincare suisse',
    description: 'Declaré est le secret bien gardé de la cosmétique suisse. Basée à Zurich, la marque se spécialise dans les soins pour peaux sensibles. Leur gamme Caviar Perfection rivalise avec les grandes marques de luxe pour une fraction du prix. Un rapport qualité-prix exceptionnel.',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&h=600&fit=crop',
    founded: '1994',
    location: 'Zurich',
    specialty: 'Skincare peaux sensibles',
    website: 'https://www.declare.ch',
  },
  {
    slug: 'mavala',
    name: 'Mavala',
    tagline: 'Ongles & beauté',
    description: 'Mavala, c\'est l\'histoire d\'une success story genevoise. Fondée en 1958, la marque est devenue la référence mondiale du soin des ongles. Du vernis au soin fortifiant, Mavala propose des solutions pour des ongles beaux et sains. Présente dans plus de 100 pays.',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&h=600&fit=crop',
    founded: '1958',
    location: 'Genève',
    specialty: 'Soins des ongles & beauté',
    website: 'https://www.mavala.com',
  },
];

export function getAllBrands(): Brand[] {
  return brands;
}

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}
