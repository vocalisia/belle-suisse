export interface Product {
  name: string;
  brand: string;
  price: number;
  rating: number;
  image: string;
  affiliateUrl: string;
  availableAt: string;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  tags: string[];
  author: string;
  date: string;
  image: string;
  featured: boolean;
  readTime: number;
  products: Product[];
  content: string;
}

const articles: Article[] = [
  {
    slug: 'meilleures-cremes-anti-age-suisses-2025',
    title: 'Les 10 meilleures crèmes anti-âge suisses en 2025',
    description: 'Découvrez notre sélection des crèmes anti-âge les plus efficaces made in Switzerland.',
    excerpt: 'De La Prairie à Weleda, trouvez la crème anti-âge suisse qui correspond à votre peau et votre budget.',
    category: 'skincare',
    tags: ['anti-âge', 'crème', 'suisse', 'La Prairie', 'Valmont'],
    author: 'Sophie Müller',
    date: '2025-01-15',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1200&h=600&fit=crop',
    featured: true,
    readTime: 8,
    products: [
      { name: 'Skin Caviar Luxe Cream', brand: 'La Prairie', price: 485, rating: 4.8, image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop', affiliateUrl: '#', availableAt: 'Manor' },
      { name: 'Prime Renewing Pack', brand: 'Valmont', price: 195, rating: 4.7, image: 'https://images.unsplash.com/photo-1570194065650-d99fb4a38691?w=400&h=400&fit=crop', affiliateUrl: '#', availableAt: 'Globus' },
      { name: 'Grenade Crème de Nuit', brand: 'Weleda', price: 32, rating: 4.5, image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop', affiliateUrl: '#', availableAt: 'Manor' },
    ],
    content: `La Suisse n'est pas seulement le pays des montres et du chocolat. C'est aussi un paradis de la cosmétique de luxe. Des laboratoires de Genève aux ateliers de Zurich, les marques suisses repoussent les limites de l'innovation skincare.

Nous avons testé, comparé et analysé les meilleures crèmes anti-âge suisses disponibles en 2025. Que votre budget soit de 30 CHF ou de 500 CHF, vous trouverez votre bonheur.

## Notre méthodologie

Pour ce comparatif, nous avons évalué chaque crème selon l'efficacité, la texture, les ingrédients, le rapport qualité-prix et la disponibilité en Suisse.

## 1. La Prairie Skin Caviar Luxe Cream — Le graal absolu

C'est LA référence mondiale de la crème anti-âge. Formulée avec l'exclusif Caviar Premier, cette crème offre une fermeté et une luminosité incomparables. Made in Switzerland, c'est le luxe ultime.

Notre avis : Si votre budget le permet, c'est simplement la meilleure. La peau est transformée dès la première application.

## 2. Valmont Prime Renewing Pack — L'effet wow instantané

Ce masque-crème culte de Valmont offre un effet lifting immédiat. Utilisé par les plus grands spas suisses, c'est le secret des femmes qui veulent un résultat visible tout de suite.

## 3. Weleda Grenade Crème de Nuit — Le bio accessible

Preuve que l'anti-âge efficace n'a pas besoin d'être hors de prix. Cette crème à la grenade bio raffermit, nourrit et protège. Le meilleur rapport qualité-prix de notre sélection.

## Notre verdict final

La Suisse offre des solutions anti-âge pour tous les budgets. Notre coup de cœur rapport qualité-prix : la Weleda Grenade. Notre rêve absolu : la La Prairie Skin Caviar.`,
  },
  {
    slug: 'routine-skincare-matin-guide-complet',
    title: 'Routine skincare du matin : le guide complet pour peau éclatante',
    description: 'Apprenez à construire votre routine skincare matinale étape par étape pour un teint lumineux toute la journée.',
    excerpt: 'Nettoyant, sérum, crème, SPF : construisez la routine parfaite pour votre type de peau.',
    category: 'skincare',
    tags: ['routine', 'skincare', 'matin', 'guide'],
    author: 'Marie Laurent',
    date: '2025-01-20',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=1200&h=600&fit=crop',
    featured: false,
    readTime: 6,
    products: [
      { name: 'Gentle Cleanser', brand: 'Declare', price: 38, rating: 4.4, image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop', affiliateUrl: '#', availableAt: 'Pharmacie' },
    ],
    content: `Une belle peau commence dès le réveil. Votre routine skincare du matin est le fondement d'un teint éclatant toute la journée. Voici notre guide complet, étape par étape.

## Étape 1 : Le nettoyage doux

Commencez toujours par un nettoyage doux. Pas besoin de décaper votre peau le matin — un nettoyant léger suffit pour éliminer le sébum accumulé pendant la nuit.

## Étape 2 : La lotion tonique

La lotion tonique rééquilibre le pH de votre peau et la prépare à recevoir les soins suivants. Choisissez une formule sans alcool pour ne pas dessécher.

## Étape 3 : Le sérum

C'est l'étape qui fait la différence ! Le sérum est concentré en actifs et pénètre en profondeur. Vitamine C le matin pour l'éclat et la protection antioxydante.

## Étape 4 : La crème hydratante

Scellez l'hydratation avec une crème adaptée à votre type de peau. Légère en été, plus riche en hiver.

## Étape 5 : La protection solaire

NON NÉGOCIABLE ! Le SPF est le meilleur anti-âge qui existe. Minimum SPF 30, tous les jours, même en hiver en Suisse.`,
  },
  {
    slug: 'la-prairie-vs-valmont-duel-luxe-suisse',
    title: 'La Prairie vs Valmont : le duel des géants suisses du luxe',
    description: 'Comparatif détaillé entre La Prairie et Valmont, les deux marques de cosmétique de luxe suisses les plus prestigieuses.',
    excerpt: 'Deux marques suisses, deux philosophies du luxe. Laquelle choisir pour votre peau ?',
    category: 'skincare',
    tags: ['La Prairie', 'Valmont', 'luxe', 'comparatif'],
    author: 'Sophie Müller',
    date: '2025-02-01',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&h=600&fit=crop',
    featured: false,
    readTime: 10,
    products: [
      { name: 'Skin Caviar Luxe Cream', brand: 'La Prairie', price: 485, rating: 4.8, image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop', affiliateUrl: '#', availableAt: 'Manor' },
      { name: 'Prime Renewing Pack', brand: 'Valmont', price: 195, rating: 4.7, image: 'https://images.unsplash.com/photo-1570194065650-d99fb4a38691?w=400&h=400&fit=crop', affiliateUrl: '#', availableAt: 'Globus' },
    ],
    content: `Dans le monde de la cosmétique de luxe, deux noms suisses dominent : La Prairie et Valmont. Deux maisons genevoises, deux approches du soin ultime. Mais laquelle mérite vraiment votre investissement ?

## La Prairie : Le luxe absolu

Fondée en 1978, La Prairie est synonyme de luxe absolu. Son ingrédient star ? Le caviar. Avec la gamme Skin Caviar, la marque promet fermeté et éclat grâce à la technologie cellulaire exclusive.

## Valmont : La science de la beauté

Valmont, fondée en 1985, mise sur la cosmétique cellulaire. Née dans un spa au bord du lac Léman, la marque utilise l'ADN et l'ARN pour régénérer les cellules de la peau.

## Le verdict

Si budget illimité : La Prairie pour le prestige et les résultats sur le long terme. Pour un excellent rapport qualité-luxe : Valmont offre des résultats impressionnants à un prix plus accessible.`,
  },
  {
    slug: 'tendances-maquillage-printemps-ete-2025',
    title: 'Tendances maquillage printemps-été 2025 : les looks à adopter',
    description: 'Les tendances makeup incontournables de la saison printemps-été 2025.',
    excerpt: 'Clean girl, glazed skin, lèvres berry... Découvrez les looks qui vont dominer la saison.',
    category: 'maquillage',
    tags: ['tendances', 'maquillage', 'printemps', 'été', '2025'],
    author: 'Clara Dubois',
    date: '2025-02-10',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=1200&h=600&fit=crop',
    featured: false,
    readTime: 5,
    products: [],
    content: `Le printemps-été 2025 s'annonce lumineux et audacieux. Après des saisons de minimalisme, le maquillage reprend des couleurs tout en gardant cette base de peau parfaite qui est devenue notre obsession.

## 1. Le Glazed Skin

La peau vitrée, ultra-lumineuse, reste LA tendance numéro 1. L'objectif : un teint tellement hydraté et glowy qu'il semble éclairé de l'intérieur.

## 2. Les lèvres Berry

Bye bye les nude ! Place aux teintes berry, mûre et cerise. Intenses mais veloutées, ces lèvres apportent une touche de couleur dramatique.

## 3. Le liner graphique coloré

L'eyeliner sort des sentiers battus avec des tracés graphiques en couleur : bleu électrique, vert émeraude, bordeaux.

## 4. Les joues soleil

Le blush revient en force avec un placement haut sur les pommettes, donnant un air ensoleillé et frais. Corail, pêche et rose : le trio gagnant.`,
  },
  {
    slug: 'tuto-smoky-eye-parfait-5-minutes',
    title: 'Tuto : le smoky eye parfait en 5 minutes',
    description: 'Apprenez à réaliser un smoky eye chic et sophistiqué en seulement 5 minutes.',
    excerpt: 'Pas besoin d\'être maquilleur pro : suivez notre tuto étape par étape pour un regard intense.',
    category: 'maquillage',
    tags: ['tuto', 'smoky eye', 'maquillage', 'yeux'],
    author: 'Clara Dubois',
    date: '2025-02-15',
    image: 'https://images.unsplash.com/photo-1583241800698-e8ab01830a07?w=1200&h=600&fit=crop',
    featured: false,
    readTime: 4,
    products: [],
    content: `Le smoky eye est LE classique du maquillage. Sexy, sophistiqué, il convient à toutes les formes d'yeux et à toutes les occasions. Voici comment le réaliser en 5 minutes chrono.

## Ce dont vous avez besoin

- Un crayon khôl noir ou brun
- Une palette de fards à paupières (3 teintes : clair, moyen, foncé)
- Un pinceau estompeur
- Du mascara

## Étape 1 : La base (30 secondes)

Appliquez une base à paupières ou un correcteur sur toute la paupière mobile pour fixer le maquillage.

## Étape 2 : Le tracé (1 minute)

Tracez une ligne épaisse au crayon khôl le long des cils supérieurs et dans le creux de la paupière.

## Étape 3 : L'estompage (2 minutes)

C'est LA clé du smoky eye réussi. Avec votre pinceau estompeur, fondez le crayon vers le haut en mouvements circulaires.

## Étape 4 : Les fards (1 minute)

Appliquez le fard moyen sur la paupière mobile, le foncé dans le coin externe, et le clair sous l'arcade.

## Étape 5 : Le mascara (30 secondes)

Deux couches de mascara pour des cils volumineux qui complètent le regard. Et voilà !`,
  },
  {
    slug: 'meilleurs-fonds-de-teint-type-peau',
    title: 'Les meilleurs fonds de teint pour chaque type de peau',
    description: 'Guide complet pour choisir le fond de teint parfait selon votre type de peau : sèche, grasse, mixte ou sensible.',
    excerpt: 'Trouvez enfin LE fond de teint qui vous correspond grâce à notre guide par type de peau.',
    category: 'maquillage',
    tags: ['fond de teint', 'type de peau', 'guide'],
    author: 'Marie Laurent',
    date: '2025-02-20',
    image: 'https://images.unsplash.com/photo-1631730486784-5fba4ef751b7?w=1200&h=600&fit=crop',
    featured: false,
    readTime: 7,
    products: [],
    content: `Choisir le bon fond de teint, c'est comme trouver la paire de jeans parfaite : ça peut prendre du temps, mais une fois trouvé, c'est le game changer ultime.

## Peau sèche : les fonds de teint hydratants

Votre peau a besoin de confort et de luminosité. Oubliez les formules mates qui vont accentuer les zones de sécheresse.

## Peau grasse : les fonds de teint matifiants

L'objectif : contrôler le sébum sans étouffer la peau. Les nouvelles formules matifiantes sont bluffantes de naturel.

## Peau mixte : les fonds de teint équilibrants

Le défi : hydrater les zones sèches tout en matifiant la zone T. Les formules adaptatives sont vos meilleures amies.

## Peau sensible : les fonds de teint doux

Minimum d'ingrédients, maximum de tolérance. Privilégiez les formules hypoallergéniques et sans parfum.`,
  },
  {
    slug: 'test-creme-cellular-la-prairie-400-chf',
    title: 'Test : la nouvelle crème Cellular de La Prairie, ça vaut 400 CHF ?',
    description: 'Notre test complet de la nouvelle crème Cellular de La Prairie. 4 semaines d\'utilisation, résultats et verdict.',
    excerpt: 'Nous avons testé la crème Cellular de La Prairie pendant 4 semaines. Voici notre verdict honnête.',
    category: 'reviews',
    tags: ['test', 'La Prairie', 'crème', 'review'],
    author: 'Sophie Müller',
    date: '2025-03-01',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=1200&h=600&fit=crop',
    featured: false,
    readTime: 9,
    products: [
      { name: 'Cellular Cream Platinum Rare', brand: 'La Prairie', price: 400, rating: 4.6, image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop', affiliateUrl: '#', availableAt: 'Manor' },
    ],
    content: `400 CHF pour une crème visage. Le prix fait tourner la tête. Mais La Prairie promet des résultats à la hauteur de l'investissement avec sa nouvelle crème Cellular. Nous l'avons testée pendant 4 semaines.

## Le packaging

Sobre, élégant, avec ce bleu iconique de La Prairie. Le pot est lourd, la texture de la crème est divine. On se sent immédiatement dans le luxe.

## La texture

Riche sans être lourde, la crème fond littéralement dans la peau. L'absorption est rapide, le fini est satiné. Parfaite sous le maquillage.

## Les résultats après 4 semaines

Semaine 1 : Peau immédiatement plus douce et rebondie. Semaine 2 : Teint plus lumineux, pores resserrés. Semaine 3 : Ridules d'expression atténuées. Semaine 4 : La peau semble visiblement plus jeune et ferme.

## Le verdict

Oui, ça vaut le prix. Si vous pouvez vous le permettre, c'est un investissement beauté exceptionnel. Note : 4.6/5.`,
  },
  {
    slug: 'top-10-serums-vitamine-c-manor',
    title: 'Top 10 des sérums vitamine C disponibles chez Manor',
    description: 'Notre classement des meilleurs sérums à la vitamine C que vous pouvez acheter chez Manor en Suisse.',
    excerpt: 'Éclat, anti-taches, anti-âge : les meilleurs sérums vitamine C en vente chez Manor.',
    category: 'reviews',
    tags: ['sérum', 'vitamine C', 'Manor', 'top 10'],
    author: 'Marie Laurent',
    date: '2025-03-05',
    image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=1200&h=600&fit=crop',
    featured: false,
    readTime: 7,
    products: [
      { name: 'C.E. Ferulic', brand: 'SkinCeuticals', price: 155, rating: 4.9, image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=400&fit=crop', affiliateUrl: '#', availableAt: 'Manor' },
    ],
    content: `La vitamine C est l'actif star du skincare. Antioxydant puissant, elle booste l'éclat, atténue les taches et protège des radicaux libres. Voici notre top 10 des sérums vitamine C disponibles chez Manor.

## 1. SkinCeuticals C.E. Ferulic — Le gold standard

LE sérum vitamine C de référence mondiale. 15% de vitamine C pure, vitamine E et acide férulique pour une protection antioxydante inégalée. Cher mais incomparable.

## 2. La Roche-Posay Vitamin C10

Un excellent rapport qualité-prix. Texture légère, résultats visibles en 2 semaines. Idéal pour commencer avec la vitamine C.

## 3. Clinique Fresh Pressed

Format mono-dose qui garantit la fraîcheur de la vitamine C. Pratique et efficace. Parfait pour les voyages.

## 4. Estée Lauder Perfectionist Pro

Vitamine C + acide hyaluronique pour un combo éclat + hydratation. Texture sérum-crème très agréable.

## 5. Origins Mega-Bright

Formule naturelle à base de vitamine C et pivoine blanche. Efficace sur les taches pigmentaires.`,
  },
  {
    slug: 'comparatif-mascaras-waterproof',
    title: 'Comparatif : 5 mascaras waterproof testés à la piscine',
    description: 'Nous avons testé 5 mascaras waterproof dans une piscine suisse. Voici ceux qui ont survécu.',
    excerpt: 'Plongeon, nage, vapeur : seuls les vrais waterproof survivent. Voici les résultats de notre test.',
    category: 'reviews',
    tags: ['mascara', 'waterproof', 'test', 'comparatif'],
    author: 'Clara Dubois',
    date: '2025-03-10',
    image: 'https://images.unsplash.com/photo-1631214500115-598fc2cb8ada?w=1200&h=600&fit=crop',
    featured: false,
    readTime: 6,
    products: [],
    content: `Un mascara qui se dit waterproof doit VRAIMENT être waterproof. Pour notre test, on est allées plus loin qu'un simple spray d'eau : on a passé 2 heures à la piscine de Vernets à Genève.

## Le protocole

2 heures de natation, 20 minutes de hammam, puis évaluation : tenue, bavures, facilité de démaquillage.

## Les résultats

1. Lancôme Lash Idôle Waterproof — PARFAIT, zéro bavure même après le hammam. Le champion incontesté.

2. Maybelline Lash Sensational Waterproof — Excellent rapport qualité-prix. Légères bavures après le hammam mais tenue parfaite à la piscine.

3. Dior Diorshow Waterproof — Beau volume mais quelques bavures après 1h30 de natation. Presque parfait.

4. MAC Extended Play Gigablack — Bon maintien des cils, mais tendance à s'effriter plutôt que couler.

5. L'Oréal Voluminous Lash Paradise WP — Bonne tenue à la piscine mais ne résiste pas au hammam.

## Verdict : Lancôme gagne haut la main !`,
  },
  {
    slug: 'plus-beaux-spas-suisse-weekend',
    title: 'Les 15 plus beaux spas de Suisse pour un weekend détente',
    description: 'Notre sélection des spas les plus luxueux de Suisse pour un weekend de détente absolue.',
    excerpt: 'Du Bürgenstock à Lavaux, voici les spas suisses qui valent le détour.',
    category: 'wellness',
    tags: ['spa', 'wellness', 'suisse', 'weekend', 'détente'],
    author: 'Sophie Müller',
    date: '2025-03-15',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbec6d?w=1200&h=600&fit=crop',
    featured: true,
    readTime: 10,
    products: [],
    content: `La Suisse est un paradis du wellness. Entre lacs, montagnes et air pur, nos spas sont parmi les meilleurs au monde. Voici notre sélection des 15 plus beaux.

## 1. Bürgenstock Alpine Spa — Lucerne

Le plus spectaculaire de Suisse. Perché à 500m au-dessus du lac des Quatre-Cantons, ce spa de 10'000 m² offre une piscine extérieure infinity avec vue à couper le souffle.

## 2. Victoria-Jungfrau Grand Hotel & Spa — Interlaken

Un classique du wellness suisse. Le spa ESPA offre des soins d'exception dans un cadre Belle Époque face aux Alpes bernoises.

## 3. The Dolder Grand — Zurich

4'000 m² de pur luxe au-dessus de Zurich. Piscine extérieure chauffée, vue panoramique sur le lac et les Alpes.

## 4. Thermalbad & Spa Zurich

Un spa urbain unique, installé dans une ancienne brasserie. L'architecture mêle histoire industrielle et design contemporain.

## 5. Lavey-les-Bains — Vaud

Les eaux les plus chaudes de Suisse (69°C à la source). Un bain thermal authentique face aux montagnes.`,
  },
  {
    slug: 'alimentation-peau-superaliments-teint',
    title: 'Alimentation et peau : les superaliments pour un teint parfait',
    description: 'Découvrez quels aliments favorisent un teint éclatant et une peau en pleine santé.',
    excerpt: 'La beauté vient aussi de l\'intérieur : voici les superaliments pour une peau rayonnante.',
    category: 'wellness',
    tags: ['alimentation', 'peau', 'superaliments', 'nutrition'],
    author: 'Marie Laurent',
    date: '2025-03-18',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&h=600&fit=crop',
    featured: false,
    readTime: 6,
    products: [],
    content: `On dépense des fortunes en crèmes et sérums, mais la vraie beauté commence dans notre assiette. Les dermatologues sont unanimes : une peau éclatante passe par une alimentation riche en nutriments ciblés.

## Les antioxydants : bouclier anti-âge

Myrtilles, grenades, thé vert, chocolat noir — ces aliments riches en antioxydants combattent les radicaux libres responsables du vieillissement cutané.

## Les oméga-3 : hydratation profonde

Saumon, noix, graines de lin, avocat — les acides gras oméga-3 renforcent la barrière cutanée et maintiennent l'hydratation naturelle de la peau.

## La vitamine C : éclat garanti

Kiwi, poivron rouge, agrumes, brocoli — la vitamine C stimule la production de collagène et booste la luminosité du teint.

## Le zinc : anti-imperfections

Huîtres, graines de courge, lentilles — le zinc régule la production de sébum et aide à la cicatrisation. L'allié des peaux à imperfections.`,
  },
  {
    slug: 'weleda-marque-suisse-bio-monde',
    title: 'Weleda : comment cette marque suisse a conquis le monde du bio',
    description: 'L\'histoire fascinante de Weleda, pionnière suisse de la cosmétique bio depuis 1921.',
    excerpt: 'De la pharmacie anthroposophique au géant mondial du bio : l\'incroyable histoire de Weleda.',
    category: 'marques-suisses',
    tags: ['Weleda', 'bio', 'marque suisse', 'histoire'],
    author: 'Sophie Müller',
    date: '2025-03-20',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=1200&h=600&fit=crop',
    featured: false,
    readTime: 8,
    products: [
      { name: 'Skin Food', brand: 'Weleda', price: 12, rating: 4.7, image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop', affiliateUrl: '#', availableAt: 'Coop Vitality' },
    ],
    content: `Weleda, c'est l'histoire d'une petite entreprise suisse fondée en 1921 qui est devenue un géant mondial de la cosmétique bio. Retour sur un parcours fascinant.

## Les origines : 1921, Arlesheim

Tout commence en 1921 à Arlesheim, près de Bâle, quand Rudolf Steiner et Ita Wegman fondent les laboratoires Weleda. L'idée ? Créer des produits de santé et de beauté basés sur les principes de la médecine anthroposophique.

## La philosophie : en harmonie avec la nature

Weleda cultive ses propres plantes médicinales dans 8 jardins à travers le monde. Pas de pesticides, pas de produits de synthèse : tout est bio, biodynamique et récolté à la main.

## Le produit culte : Skin Food

Créé en 1926, le Skin Food est devenu un culte mondial. Cette crème ultra-nourrissante à base de plantes est adorée des maquilleurs, mannequins et beauty addicts du monde entier. Et elle ne coûte que 12 CHF !

## Weleda aujourd'hui

Présente dans plus de 50 pays, Weleda réalise un chiffre d'affaires de plus de 400 millions d'euros. Preuve que bio et business font bon ménage quand la qualité est au rendez-vous.`,
  },
];

export function getAllArticles(): Article[] {
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  return articles
    .filter((a) => a.category === category)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getFeaturedArticles(): Article[] {
  return articles.filter((a) => a.featured);
}

export function searchArticles(query: string): Article[] {
  const q = query.toLowerCase();
  return articles.filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.description.toLowerCase().includes(q) ||
      a.tags.some((t) => t.toLowerCase().includes(q))
  );
}
