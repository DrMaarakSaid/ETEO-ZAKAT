import { NISAB_KG } from '../data/reglesZakat';

// --- LOGIQUE POUR LES RÉCOLTES ---
export const calculerRecolte = ({
  poidsBrutTotal, poidsCaisse, nombreCaissesTotal, tauxPerte, prixKg, categorieProduit, madhhab, tauxIrrigation
}) => {
  const poidsTotalCaisses = poidsCaisse * nombreCaissesTotal;
  const poidsBrutNet = Math.max(0, poidsBrutTotal - poidsTotalCaisses);
  const coefficientPerte = 1 - (tauxPerte / 100);
  const poidsNet = poidsBrutNet * coefficientPerte;
  const chiffreAffaires = poidsNet * prixKg;

  const nisab = NISAB_KG[categorieProduit] || 612;
  const estAuDessusNisab = poidsNet >= nisab;

  let acharKg = 0;
  let acharMad = 0;
  let estObligatoire = false;
  let messageSpecial = "";

  if (categorieProduit === 'produits_specifiques') {
    estObligatoire = estAuDessusNisab;
    acharKg = poidsNet * 0.10; 
    messageSpecial = "Produit spécifique soumis à 10%.";
  } else if (madhhab === 'hanafite') {
    estObligatoire = estAuDessusNisab;
    acharKg = poidsNet * tauxIrrigation;
  } else if (madhhab === 'majoritaire') {
    if (categorieProduit === 'fruits_frais_legumes') {
      estObligatoire = false;
      messageSpecial = "Les fruits frais et légumes ne sont pas soumis à l'Achar selon l'avis majoritaire.";
    } else {
      estObligatoire = estAuDessusNisab;
      acharKg = poidsNet * tauxIrrigation;
    }
  }

  if (estObligatoire) acharMad = acharKg * prixKg;
  else { acharKg = 0; acharMad = 0; }

  return {
    typeCalcul: 'recolte',
    poidsBrutNet, poidsNet, chiffreAffaires, nisab, estAuDessusNisab, acharKg, acharMad, estObligatoire, messageSpecial,
    pourcentageApplique: categorieProduit === 'produits_specifiques' ? 10 : tauxIrrigation * 100
  };
};

// --- LOGIQUE POUR LE BÉTAIL ---
export const calculerBetail = ({ typeAnimal, nombreTetes }) => {
  const nombre = parseInt(nombreTetes) || 0;
  let estObligatoire = false;
  let quantite = 0;
  let description = "";
  let nisab = 0;
  
  let nomAnimal = "mouton";
  if (typeAnimal === 'chevres') nomAnimal = "chèvre";
  if (typeAnimal === 'vaches') nomAnimal = "vache";

  if (typeAnimal === 'moutons' || typeAnimal === 'chevres') {
    nisab = 40;
    if (nombre < 40) { description = `Moins de 40 têtes : Pas de Zakat.`; }
    else if (nombre <= 120) { estObligatoire = true; quantite = 1; description = `1 ${nomAnimal} (âgé d'au moins 1 an).`; }
    else if (nombre <= 200) { estObligatoire = true; quantite = 2; description = `2 ${nomAnimal}s.`; }
    else if (nombre <= 300) { estObligatoire = true; quantite = 3; description = `3 ${nomAnimal}s.`; }
    else { estObligatoire = true; quantite = Math.floor(nombre / 100); description = `${quantite} ${nomAnimal}s (1 par tranche de 100 têtes au-delà de 300).`; }
  } 
  else if (typeAnimal === 'vaches') {
    nisab = 30;
    if (nombre < 30) { description = "Moins de 30 têtes : Pas de Zakat."; }
    else if (nombre <= 39) { estObligatoire = true; quantite = 1; description = "1 veau (Tabî', âgé d'un an)."; }
    else if (nombre <= 59) { estObligatoire = true; quantite = 1; description = "1 vache (Musinnah, âgée de 2 ans)."; }
    else if (nombre <= 69) { estObligatoire = true; quantite = 2; description = "2 veaux (Tabî', âgés d'un an)."; }
    else if (nombre <= 79) { estObligatoire = true; quantite = 1; description = "1 vache (Musinnah) + 1 veau (Tabî')."; }
    else { estObligatoire = true; quantite = 0; description = "Troupeau de plus de 80 têtes : consultez un savant pour le calcul exact."; }
  } 
  else if (typeAnimal === 'chameaux') {
    nisab = 5;
    if (nombre < 5) { description = "Moins de 5 têtes : Pas de Zakat."; }
    else if (nombre <= 9) { estObligatoire = true; quantite = 1; description = "1 mouton/chèvre (5 à 9 chameaux)."; }
    else if (nombre <= 14) { estObligatoire = true; quantite = 2; description = "2 moutons/chèvres (10 à 14 chameaux)."; }
    else if (nombre <= 19) { estObligatoire = true; quantite = 3; description = "3 moutons/chèvres (15 à 19 chameaux)."; }
    else if (nombre <= 24) { estObligatoire = true; quantite = 4; description = "4 moutons/chèvres (20 à 24 chameaux)."; }
    else if (nombre <= 35) { estObligatoire = true; quantite = 1; description = "1 chamelle (Bint Makhad, 1 an entrant dans sa 2ème année)."; }
    else if (nombre <= 45) { estObligatoire = true; quantite = 1; description = "1 chamelle (Bint Labun, 2 ans entrant dans sa 3ème année)."; }
    else if (nombre <= 60) { estObligatoire = true; quantite = 1; description = "1 chamelle (Hiqqah, 3 ans entrant dans sa 4ème année)."; }
    else if (nombre <= 75) { estObligatoire = true; quantite = 1; description = "1 chamelle (Jadha'ah, 4 ans entrant dans sa 5ème année)."; }
    else if (nombre <= 90) { estObligatoire = true; quantite = 2; description = "2 chamelles (Bint Labun)."; }
    else if (nombre <= 120) { estObligatoire = true; quantite = 2; description = "2 chamelles (Hiqqah)."; }
    else { estObligatoire = true; quantite = 0; description = "Troupeau de plus de 120 chameaux : calcul complexe, veuillez consulter un savant."; }
  }

  return { typeCalcul: 'betail', estObligatoire, quantite, description, nisab, nombreSaisi: nombre };
};

// --- LOGIQUE POUR ZAKAT AL MAL (Mise à jour) ---
export const calculerZakatMal = ({ produitId, montantSaisi, prixOrGramme, prixArgentGramme }) => {
  const saisie = parseFloat(montantSaisi) || 0;
  
  let valeurEnMAD = saisie;
  let unite = "MAD";

  // Si c'est de l'or ou de l'argent métal, on convertit en MAD
  if (produitId === 'or_bijoux') {
    valeurEnMAD = saisie * (parseFloat(prixOrGramme) || 0);
    unite = "g";
  } else if (produitId === 'argent_metal') {
    valeurEnMAD = saisie * (parseFloat(prixArgentGramme) || 0);
    unite = "g";
  }

  // Le Nisab de base est de 85g d'or. On le convertit en valeur monétaire.
  // (Ou 595g d'argent, on prend le plus bas des deux pour être inclusif)
  const nisabOrValeur = 85 * (parseFloat(prixOrGramme) || 0);
  const nisabArgentValeur = 595 * (parseFloat(prixArgentGramme) || 0);
  const nisabUtilise = nisabArgentValeur > 0 ? nisabArgentValeur : nisabOrValeur;
  
  const estObligatoire = valeurEnMAD >= nisabUtilise;
  const zakatDue = estObligatoire ? valeurEnMAD * 0.025 : 0;

  return {
    typeCalcul: 'mal',
    valeurTotale: valeurEnMAD,
    nisabUtilise,
    estObligatoire,
    zakatDue,
    saisieOriginale: saisie,
    uniteOriginale: unite
  };
};