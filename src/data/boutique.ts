export const boutique = {
  nom: 'Subtil Lingerie',
  adresse: {
    rue: '2 Rue Fernand Crémieux',
    cp: '30200',
    ville: 'Bagnols-sur-Cèze',
    pays: 'France',
  },
  telephone: '+33 4 66 89 96 74',
  telephoneAffiche: '04 66 89 96 74',
  telephoneTel: '+33466899674',
  horaires: [
    { jour: 'Lundi',    heures: '14h00 — 19h00' },
    { jour: 'Mardi',    heures: '09h30 — 12h30 · 14h00 — 19h00' },
    { jour: 'Mercredi', heures: '09h30 — 12h30 · 14h00 — 19h00' },
    { jour: 'Jeudi',    heures: '09h30 — 12h30 · 14h00 — 19h00' },
    { jour: 'Vendredi', heures: '09h30 — 12h30 · 14h00 — 19h00' },
    { jour: 'Samedi',   heures: '09h30 — 12h30 · 14h00 — 19h00' },
    { jour: 'Dimanche', heures: 'Fermé' },
  ],
  social: {
    instagram: 'https://www.instagram.com/subtil_lingerie/',
    facebook: 'https://www.facebook.com/SubtilLg/',
  },
  geo: {
    lat: 44.1614,
    lng: 4.6178,
    googleMapsUrl: 'https://www.google.com/maps/place/2+Rue+Fernand+Cr%C3%A9mieux,+30200+Bagnols-sur-C%C3%A8ze',
  },
} as const;

export const marques = [
  {
    slug: 'aubade',
    nom: 'Aubade',
    pitch: "Lingerie française d'exception, sensualité et savoir-faire couture.",
    description:
      "Maison historique de la lingerie française. Dentelles brodées, ajustements précis, et l'art de magnifier la silhouette. Notre boutique propose les lignes phares (Voodoo Kiss, L'Indomptable, After Midnight, Velvet, My Désire) ainsi que les nouveautés saisonnières.",
    accent: '#6B3E5E',
  },
  {
    slug: 'simone-perele',
    nom: 'Simone Pérèle',
    pitch: 'Élégance parisienne, confort et raffinement depuis 1948.',
    description:
      "Lingerie française du quotidien aux pièces de fête. Coupes féminines, matières douces, marque historique pour une silhouette féminine avec style.",
    accent: '#8B5A7E',
  },
  {
    slug: 'chantelle',
    nom: 'Chantelle',
    pitch: 'Le savoir-faire français au service de toutes les morphologies.',
    description:
      "Innovation et confort pour bonnets profonds comme petits bonnets. Lignes essentielles, sport, et nuit.",
    accent: '#A56B85',
  },
  {
    slug: 'wacoal',
    nom: 'Wacoal',
    pitch: 'L\'expertise japonaise du maintien et de la coupe.',
    description:
      "Marque de référence pour les bonnets profonds et les morphologies plus généreuses. Tenue parfaite, esthétique soignée.",
    accent: '#7E4E6A',
  },
  {
    slug: 'triumph',
    nom: 'Triumph',
    pitch: 'Confort et élégance accessible — la lingerie du quotidien.',
    description:
      "Les indispensables Amourette, Modern Finess, Romy, Body Make-Up. Coupes éprouvées, prix doux, qualité constante.",
    accent: '#9C6F88',
  },
  {
    slug: 'sloggi',
    nom: 'Sloggi',
    pitch: 'Le confort absolu, jour et nuit.',
    description:
      "Body Adapt, Zero Feel, Maxi, Midi, GO… Toute la gamme du confort moderne, sans-couture, seconde peau.",
    accent: '#B898AC',
  },
  {
    slug: 'freya',
    nom: 'Freya',
    pitch: 'Lingerie britannique colorée pour bonnets profonds.',
    description:
      "Imprimés joyeux, coupes maintenantes, sélection sport et bain. La marque favorite pour oser la couleur.",
    accent: '#C9A961',
  },
  {
    slug: 'tress',
    nom: 'Tress',
    pitch: 'Lingerie de nuit — la douceur du sommeil.',
    description:
      "Chemises de nuit, pyjamas, déshabillés. Fibres naturelles et coupes intemporelles, pour de belles nuits.",
    accent: '#D4B5C7',
  },
  {
    slug: 'sara',
    nom: 'Sara',
    pitch: 'Maille et tricots — l\'élégance décontractée.',
    description:
      "Pulls fins, hauts en maille, pièces de prêt-à-porter qui complètent la garde-robe lingerie.",
    accent: '#A8826E',
  },
  {
    slug: 'maillots',
    nom: 'Maillots de bain',
    pitch: 'Une sélection estivale renouvelée chaque saison.',
    description:
      "Maillots une-pièce et deux-pièces, lignes Malta Playa, Azuero, Seychelles, Écume des mers, Fever, Gemini, Kyoto, Pier. Pour la plage et la piscine, du 85B au 100E.",
    accent: '#5E8FA8',
  },
] as const;
