export const CATEGORIES = [
  { id: 'cereales_legumineuses', nom: '🌾 Céréales & Légumineuses' },
  { id: 'fruits_conservables', nom: '🌴 Fruits Conservables' },
  { id: 'fruits_frais_legumes', nom: '🍋 Fruits Frais & Légumes' },
  { id: 'produits_specifiques', nom: '🍯 Produits Spécifiques' },
  { id: 'betail', nom: '🐄 Bétail (Animaux)' },
  { id: 'zakat_mal', nom: '💰 Zakat Al Mal (Argent, Or)' }
];

export const PRODUITS = [
  // --- 1. CÉRÉALES & LÉGUMINEUSES ---
  { id: 'ble', nom: 'Blé', categorie: 'cereales_legumineuses', icone: '🌾', unite: 'kg' },
  { id: 'orge', nom: 'Orge', categorie: 'cereales_legumineuses', icone: '🌾', unite: 'kg' },
  { id: 'riz', nom: 'Riz', categorie: 'cereales_legumineuses', icone: '🍚', unite: 'kg' },
  { id: 'mais', nom: 'Maïs', categorie: 'cereales_legumineuses', icone: '🌽', unite: 'kg' },
  { id: 'millet', nom: 'Millet', categorie: 'cereales_legumineuses', icone: '🌾', unite: 'kg' },
  { id: 'epeautre', nom: 'Épeautre', categorie: 'cereales_legumineuses', icone: '🌾', unite: 'kg' },
  { id: 'feves', nom: 'Fèves', categorie: 'cereales_legumineuses', icone: '🫘', unite: 'kg' },
  { id: 'lentilles', nom: 'Lentilles', categorie: 'cereales_legumineuses', icone: '🫘', unite: 'kg' },
  { id: 'pois_chiches', nom: 'Pois chiches', categorie: 'cereales_legumineuses', icone: '🫘', unite: 'kg' },
  { id: 'haricots', nom: 'Haricots', categorie: 'cereales_legumineuses', icone: '🫘', unite: 'kg' },

  // --- 2. FRUITS CONSERVABLES ---
  { id: 'dattes', nom: 'Dattes', categorie: 'fruits_conservables', icone: '🌴', unite: 'kg' },
  { id: 'raisins_secs', nom: 'Raisins secs', categorie: 'fruits_conservables', icone: '🍇', unite: 'kg' },
  { id: 'figues_seches', nom: 'Figues sèches', categorie: 'fruits_conservables', icone: '🫒', unite: 'kg' },
  { id: 'amandes', nom: 'Amandes', categorie: 'fruits_conservables', icone: '🌰', unite: 'kg' },
  { id: 'noix', nom: 'Noix', categorie: 'fruits_conservables', icone: '🌰', unite: 'kg' },
  { id: 'noisettes', nom: 'Noisettes', categorie: 'fruits_conservables', icone: '🌰', unite: 'kg' },
  { id: 'pistaches', nom: 'Pistaches', categorie: 'fruits_conservables', icone: '🌰', unite: 'kg' },

  // --- 3. FRUITS FRAIS & LÉGUMES ---
  { id: 'citron', nom: 'Citrons', categorie: 'fruits_frais_legumes', icone: '🍋', unite: 'kg' },
  { id: 'oranges', nom: 'Oranges', categorie: 'fruits_frais_legumes', icone: '🍊', unite: 'kg' },
  { id: 'pommes', nom: 'Pommes', categorie: 'fruits_frais_legumes', icone: '🍎', unite: 'kg' },
  { id: 'poires', nom: 'Poires', categorie: 'fruits_frais_legumes', icone: '🍐', unite: 'kg' },
  { id: 'peches', nom: 'Pêches', categorie: 'fruits_frais_legumes', icone: '🍑', unite: 'kg' },
  { id: 'abricots', nom: 'Abricots', categorie: 'fruits_frais_legumes', icone: '🍑', unite: 'kg' },
  { id: 'tomates', nom: 'Tomates', categorie: 'fruits_frais_legumes', icone: '🍅', unite: 'kg' },
  { id: 'pommes_de_terre', nom: 'Pommes de terre', categorie: 'fruits_frais_legumes', icone: '🥔', unite: 'kg' },
  { id: 'oignons', nom: 'Oignons', categorie: 'fruits_frais_legumes', icone: '🧅', unite: 'kg' },
  { id: 'carottes', nom: 'Carottes', categorie: 'fruits_frais_legumes', icone: '🥕', unite: 'kg' },
  { id: 'concombres', nom: 'Concombres', categorie: 'fruits_frais_legumes', icone: '🥒', unite: 'kg' },
  { id: 'aubergines', nom: 'Aubergines', categorie: 'fruits_frais_legumes', icone: '🍆', unite: 'kg' },
  { id: 'courgettes', nom: 'Courgettes', categorie: 'fruits_frais_legumes', icone: '🥒', unite: 'kg' },

  // --- 4. PRODUITS SPÉCIFIQUES ---
  { id: 'miel', nom: 'Miel', categorie: 'produits_specifiques', icone: '🍯', unite: 'kg' },
  { id: 'olives', nom: 'Olives (pour huile)', categorie: 'produits_specifiques', icone: '🫒', unite: 'kg' },

  // --- 5. BÉTAIL ---
  { id: 'moutons', nom: 'Moutons', categorie: 'betail', icone: '🐑', unite: 'têtes' },
  { id: 'chevres', nom: 'Chèvres', categorie: 'betail', icone: '🐐', unite: 'têtes' },
  { id: 'vaches', nom: 'Vaches', categorie: 'betail', icone: '🐄', unite: 'têtes' },
  { id: 'chameaux', nom: 'Chameaux', categorie: 'betail', icone: '🐪', unite: 'têtes' },

  // --- 6. ZAKAT AL MAL (Séparé) ---
  { id: 'argent_cash', nom: 'Argent Liquide (Billets)', categorie: 'zakat_mal', icone: '💵', unite: 'MAD' },
  { id: 'or_bijoux', nom: 'Or (Bijoux, Lingots)', categorie: 'zakat_mal', icone: '💍', unite: 'g' },
  { id: 'argent_metal', nom: 'Argent Métal', categorie: 'zakat_mal', icone: '🥈', unite: 'g' },
  { id: 'actions', nom: 'Actions & Investissements', categorie: 'zakat_mal', icone: '📈', unite: 'MAD' },
  { id: 'marchandises', nom: 'Marchandises (Commerce)', categorie: 'zakat_mal', icone: '📦', unite: 'MAD' }
];