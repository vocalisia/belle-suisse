export interface Author {
  slug: string;
  name: string;
  jobTitle: string;
  bio: string;
  expertise: string[];
  image: string;
  social: {
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
}

const authors: Author[] = [
  {
    slug: 'sophie-muller',
    name: 'Sophie Müller',
    jobTitle: 'Rédactrice en chef beauté',
    bio: `Sophie Müller est rédactrice en chef beauté chez BELLE SUISSE. Diplômée en journalisme à l'Université de Zurich et titulaire d'un certificat en cosmétologie de la Swiss Beauty Academy, elle couvre l'industrie cosmétique suisse depuis plus de 8 ans.

Passionnée par les marques suisses de luxe, Sophie a visité les laboratoires de La Prairie à Zurich, les ateliers Valmont à Genève et les jardins biodynamiques de Weleda à Arlesheim. Elle teste personnellement chaque produit pendant minimum 4 semaines avant de publier ses reviews.

Ancienne beauty editor chez Femina et contributrice pour Le Temps, Sophie apporte un regard expert et indépendant sur la cosmétique suisse. Elle est particulièrement spécialisée dans les soins anti-âge, la cosmétique cellulaire et les actifs d'origine alpine.`,
    expertise: ['Anti-âge', 'Cosmétique de luxe', 'Marques suisses', 'Soins cellulaires', 'Ingrédients actifs'],
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
    social: {
      instagram: 'https://instagram.com/sophiemuller.beaute',
      linkedin: 'https://linkedin.com/in/sophie-muller-beaute',
    },
  },
  {
    slug: 'marie-laurent',
    name: 'Marie Laurent',
    jobTitle: 'Experte skincare & wellness',
    bio: `Marie Laurent est experte skincare et wellness chez BELLE SUISSE. Esthéticienne diplômée et formatrice en cosmétique naturelle, elle a travaillé 5 ans dans les spas les plus prestigieux de Suisse romande avant de rejoindre notre rédaction.

Marie est spécialiste des routines skincare adaptées au climat suisse. Elle a développé une expertise unique sur l'impact de l'altitude, de l'eau calcaire et du froid alpin sur la peau. Ses guides pratiques sont basés sur des protocoles testés avec des panels de lectrices suisses.

Contributrice pour Bilan Luxe et ambassadrice Weleda Suisse, Marie partage sa vision d'une beauté accessible, naturelle et efficace. Elle est certifiée en aromathérapie et en nutricosmétique.`,
    expertise: ['Skincare', 'Routines beauté', 'Cosmétique naturelle', 'Wellness & Spa', 'Nutricosmétique'],
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    social: {
      instagram: 'https://instagram.com/marielaurent.skin',
      linkedin: 'https://linkedin.com/in/marie-laurent-skincare',
    },
  },
  {
    slug: 'clara-dubois',
    name: 'Clara Dubois',
    jobTitle: 'Journaliste maquillage & tendances',
    bio: `Clara Dubois est journaliste maquillage et tendances chez BELLE SUISSE. Diplômée de la HEAD (Haute école d'art et de design) de Genève en communication visuelle, elle s'est spécialisée dans la beauté et la mode suisses.

Clara suit les Fashion Weeks de Paris et Milan pour décrypter les tendances maquillage qui arrivent en Suisse. Elle collabore régulièrement avec des maquilleurs professionnels genevois et zurichois pour créer des tutoriels adaptés à toutes les morphologies.

Ancienne chroniqueuse beauté pour la RTS et Le Matin Dimanche, Clara apporte un regard frais et tendance sur le maquillage. Elle est connue pour ses tests terrain sans concession — comme son fameux test de mascaras waterproof à la piscine des Vernets à Genève.`,
    expertise: ['Maquillage', 'Tendances', 'Mode suisse', 'Tutos beauté', 'Tests produits'],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face',
    social: {
      instagram: 'https://instagram.com/claradubois.beauty',
      linkedin: 'https://linkedin.com/in/clara-dubois-beaute',
    },
  },
];

export function getAllAuthors(): Author[] {
  return authors;
}

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}

export function getAuthorByName(name: string): Author | undefined {
  return authors.find((a) => a.name === name);
}
