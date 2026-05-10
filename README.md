# Subtil Lingerie

Site web vitrine de la boutique [Subtil Lingerie](https://www.instagram.com/subtil_lingerie/) à Bagnols-sur-Cèze.

## Stack

- [Astro 5](https://astro.build/) (static site, SSG)
- CSS custom — pas de framework
- Newsletter [Brevo](https://www.brevo.com/) (à configurer, voir `src/components/Newsletter.astro`)
- Hébergement [Netlify](https://www.netlify.com/) (config dans `netlify.toml`)

## Développement local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # build prod -> dist/
npm run preview  # serveur local du build prod
```

## Structure

```
public/
├── images/        # logo, photos boutique, visuels nano-banana
└── video/         # boutique-tour.mp4 (visite virtuelle)
src/
├── components/    # Header, Footer, Newsletter
├── data/          # boutique.ts (adresse, marques, horaires)
├── layouts/       # Base.astro
├── pages/         # index, boutique, marques, contact, mentions-legales
└── styles/        # global.css (palette, typographies)
```

## Boutique

- **Adresse** : 2 Rue Fernand Crémieux, 30200 Bagnols-sur-Cèze
- **Téléphone** : 04 66 89 96 74
- **Insta** : [@subtil_lingerie](https://www.instagram.com/subtil_lingerie/)
- **FB** : [Subtil Lg](https://www.facebook.com/SubtilLg/)

## Marques distribuées

Aubade · Triumph · Simone Pérèle · Chantelle · Wacoal · Sloggi · Freya · Tress · Sara · Maillots de bain

## TODO

- [ ] Configurer endpoint Brevo réel dans `Newsletter.astro` (remplacer `MUIFAJUR_PLACEHOLDER`)
- [ ] Compléter mentions légales (SIRET, RCS, capital, directeur de publication)
- [ ] Vérifier les horaires d'ouverture dans `src/data/boutique.ts`
- [ ] Brancher le domaine `subtillingerie.fr` une fois acheté
