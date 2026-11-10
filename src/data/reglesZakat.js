export const NISAB_KG = {
  cereales_legumineuses: 612, // 5 Wasq
  fruits_conservables: 612,   // 5 Wasq
  fruits_frais_legumes: 612,  // 5 Wasq (pour les Hanafites)
  produits_specifiques: 160,  // Seuil spécifique pour le miel
  betail: 0                   // Le bétail ne se calcule pas en kg
};

export const ECOLES = {
  majoritaire: {
    nom: 'Avis majoritaire (Malikite / Chaféite / Hanbalite)',
    appliqueZakatFruitsFrais: false, // Pas de Zakat sur les fruits frais et légumes
    appliqueZakatFruitsConservables: true,
    appliqueZakatCereales: true,
  },
  hanafite: {
    nom: 'Hanafite',
    appliqueZakatFruitsFrais: true, // Zakat sur tout ce qui pousse
    appliqueZakatFruitsConservables: true,
    appliqueZakatCereales: true,
  }
};