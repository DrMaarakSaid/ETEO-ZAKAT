# 📘 PASSEPORT DE PROJET : ETEO - ZAKAT & RÉCOLTES

## 1. Présentation du Projet
**Nom de l'application :** ETEO - Zakat & Récoltes
**Objectif :** Application universelle, multilingue et modulaire pour le calcul de la Zakat (Achar, Bétail, Zakat Al Mal) au Maroc et dans le monde.
**Public cible :** Agriculteurs, éleveurs, grand public.
**Format actuel :** Application Web (React + Vite + Tailwind CSS), configurée en PWA (Progressive Web App) et prête pour Capacitor (Android/iOS).

## 2. Stack Technique
*   **Framework :** React 18 (avec Vite)
*   **Styling :** Tailwind CSS (Design responsive, cartes colorées, mode sombre non implémenté)
*   **Traduction :** `i18next` et `react-i18next` (8 langues : FR, AR, EN, ES, DE, RU, ZH, PT)
*   **Gestion du sens de lecture :** RTL automatique pour l'arabe via `document.documentElement.dir`
*   **Mobile :** Capacitor configuré (`com.eteo.zakat`) prêt pour la compilation Android (Android Studio).

## 3. Architecture des Dossiers (Modulaire)
L'architecture est stricte. Merci de respecter cette structure :
*   `src/data/` : Base de données statique (produits, règles juridiques).
*   `src/utils/` : Logique métier pure (calculs mathématiques, conversions, formatage).
*   `src/hooks/` : Logique React (états du formulaire et déclenchement des calculs).
*   `src/components/` : Composants UI réutilisables (formulaires, résultats, modales).
*   `src/pages/` : Assemblage des pages (Home.jsx).
*   `src/locales/` : Fichiers JSON de traduction.

## 4. Règles Métier & Logique Islamique (CRUCIAL)
*   **Terminologie :** Les termes islamiques (Achar, Nisab, Sadaqa, Hawl, Madhhab) doivent **rester en arabe translittéré** dans toutes les traductions.
*   **Achar (Récoltes) :**
    *   Seuil (Nisab) : 612 kg.
    *   Taux : 10% (pluie) ou 5% (irrigation artificielle).
    *   *Écoles :* Majoritaire (Malikite/Chaféite/Hanbalite) = Pas de Zakat sur les fruits frais/légumes. Hanafite = Zakat sur tout.
*   **Zakat du Bétail :**
    *   Calcul par nombre de têtes (Nisab variable selon l'animal).
    *   Moutons/Chèvres : 40 têtes (1 mouton de 40 à 120).
    *   Vaches : 30 têtes (1 veau de 30 à 39).
    *   Chameaux : 5 têtes (1 mouton de 5 à 9, 1 chamelle à partir de 25).
*   **Zakat Al Mal (Argent/Or) :**
    *   Nisab : 85g d'or OU 595g d'argent (converti en MAD).
    *   Taux : 2,5% (1/40).
    *   Condition : Hawl (possession pendant 1 an lunaire).
    *   Produits intégrés : Argent liquide, Or, Argent métal, Actions, Marchandises.

## 5. Fonctionnalités Implémentées
*   [x] Sélection à deux niveaux (Catégorie -> Produit précis).
*   [x] Calculatrice intégrée (addition `500+200`) gérée via une fonction `eval()` sécurisée.
*   [x] Soustraction du poids des caisses vides.
*   [x] Calcul de la freinte (perte en %).
*   [x] Conversion des grammes d'Or/Argent en valeur MAD.
*   [x] Popups "Voir la règle" (`InfoModal`) expliquant les règles juridiques pour chaque catégorie.
*   [x] Multilingue complet (8 langues) avec interface de sélection (Menu déroulant en haut à droite).
*   [x] Adaptation dynamique des formulaires (ex: affichage des champs Or si on choisit Or).
*   [x] Configuration PWA (manifest, icônes, mode standalone).

## 6. État Actuel & Bugs Connus
*   **L'application fonctionne actuellement** avec succès sur navigateur (localhost:5173).
*   **Traductions :** Les fichiers JSON sont remplis pour les 8 langues (FR, EN, AR, ES, DE, RU, ZH, PT).
*   **Bug connu :** Aucun bug bloquant signalé. (Le bug précédent de page blanche a été résolu en sécurisant la fonction `formatNombre` et les états du hook `useCalculateur`).

## 7. Prochaines Étapes (Roadmap)
1.  **Finalisation des Traductions :** S'assurer que les textes en dur dans les composants UI (comme les modales de règles) utilisent bien 100% des clés de traduction `t('...')`.
2.  **Tests Mobiles :** Compiler avec `npx cap sync` et `npx cap open android` pour tester sur téléphone physique.
3.  **Amélioration UI/UX :** Peut-être ajouter un bouton "Partager le résultat" (via l'API Web Share) ou un historique des calculs (via localStorage).
4.  **Publication :** Créer les comptes développeurs sur Google Play Console et Apple App Store. Générer les captures d'écran dans les 8 langues.
5.  **Fonctionnalités Futures :** Intégration d'une API pour récupérer le prix de l'or en temps réel (actuellement saisi manuellement avec une valeur par défaut).

## 8. Instructions pour la prochaine IA
*   **Règle d'Or :** Toujours fournir les fichiers **COMPLETS** (pas de morceaux de code). L'utilisateur est un dentiste autodidacte, il ne doit pas avoir à chercher où insérer un bout de code.
*   **Règle d'Or :** Ne jamais toucher aux termes islamiques dans les fichiers de traduction (les laisser en arabe phonétique).
*   **Règle d'Or :** Toujours vérifier que les 8 fichiers de langue sont mis à jour simultanément lorsqu'on ajoute une fonctionnalité.
*   **Règle d'Or :** Toujours utiliser Tailwind CSS pour le design (pas de CSS pur dans les composants).
*   **Maintenance :** Si l'utilisateur signale une erreur, demander la capture de la console (`F12`) et fournir les fichiers de correction immédiatement.

# 📘 PASSEPORT DE PROJET COMPLET : ETEO - ZAKAT & RÉCOLTES (V2.0)

## ⚠️ RÈGLES D'OR POUR L'IA SUIVANTE (À LIRE EN PREMIER)
1. **Zéro code partiel :** L'utilisateur est un professionnel de santé (dentiste) autodidacte. Vous devez TOUJOURS fournir les fichiers **COMPLETS** (du début à la fin), prêts à être copiés-collés.
2. **Terminologie Islamique :** Les mots comme *Achar, Nisab, Sadaqa, Hawl, Madhhab, Bint Makhad* doivent rester en **arabe translittéré** dans TOUTES les langues. Ne les traduisez jamais par "Seuil" ou "Taxe".
3. **Multilingue strict :** L'application supporte 8 langues (FR, AR, EN, ES, DE, RU, ZH, PT). Si vous ajoutez un texte en dur dans un composant, vous DEVEZ ajouter sa clé dans les 8 fichiers JSON (`src/locales/`).
4. **RTL (Right-To-Left) :** L'arabe s'affiche de droite à gauche. Le fichier `i18n.js` gère cela automatiquement via `document.documentElement.dir`.
5. **Pas de CSS pur :** Tout le design utilise **Tailwind CSS**. Les couleurs des cartes sont gérées par des bordures (`border-t-8`, `border-blue-400`, etc.).

---

## 1. Stack Technique
*   **Framework :** React 18 (Vite)
*   **Style :** Tailwind CSS
*   **Traduction :** i18next, react-i18next, i18next-browser-languagedetector
*   **Mobile :** Capacitor (configuré pour `com.eteo.zakat`)
*   **PWA :** vite-plugin-pwa (déjà configuré dans `vite.config.js`)

---

## 2. Architecture des Fichiers
```text
src/
├── components/
│   ├── form/ (CaisseInput, PoidsInput, SelecteurRecolte)
│   ├── results/ (AcharResult, AutresIndicateurs)
│   └── ui/ (Card, Button, InfoModal)
├── data/ (produits.js, reglesZakat.js)
├── hooks/ (useCalculateur.js)
├── locales/ (fr.json, en.json, ar.json, es.json, de.json, ru.json, zh.json, pt.json)
├── pages/ (Home.jsx)
├── utils/ (calculZakat.js, mathUtils.js)
├── App.jsx
├── i18n.js
├── index.css
└── main.jsx

3. Base de Données & Règles (Détails)
A. Catégories et Produits (src/data/produits.js)
Céréales & Légumineuses (Blé, Orge, Riz, Fèves...)

Fruits Conservables (Dattes, Raisins secs...)

Fruits Frais & Légumes (Citrons, Tomates...)

Produits Spécifiques (Miel, Olives)

Bétail (Moutons, Chèvres, Vaches, Chameaux)

Zakat Al Mal (Argent liquide, Or, Argent métal, Actions, Marchandises)

B. Nisab et Taux (src/data/reglesZakat.js)
Achar standard : Nisab = 612 kg.

Miel : Nisab = 160 kg, Taux fixe = 10%.

Zakat Al Mal : Nisab = 85g Or ou 595g Argent (converti en MAD). Taux = 2,5%.

C. Logique Islamique (src/utils/calculZakat.js)
Achar (Majoritaire) : Les fruits frais/légumes ne sont pas soumis.

Achar (Hanafite) : Tout est soumis (10% ou 5%).

Bétail (Moutons/Chèvres) : 40 têtes = 1 bête. 121 têtes = 2 bêtes.

Bétail (Vaches) : 30 têtes = 1 veau (Tabî').

Bétail (Chameaux) : 5 têtes = 1 mouton. 25 têtes = 1 chamelle (Bint Makhad).

4. Code des Fichiers Critiques (Pour restauration rapide)
Fichier src/utils/mathUtils.js
javascript
export const evaluerCalcul = (valeurTexte) => {
  if (!valeurTexte) return 0;
  try {
    let expression = valeurTexte.toString().replace(/,/g, '.').replace(/\s/g, '');
    while (expression.endsWith('+') || expression.endsWith('-') || expression.endsWith('*') || expression.endsWith('/')) {
      expression = expression.slice(0, -1);
    }
    if (expression !== "") return eval(expression) || 0;
    return 0;
  } catch (e) { return 0; }
};

export const formatNombre = (nombre) => {
  if (nombre === undefined || nombre === null || isNaN(nombre)) return "0,00";
  return Number(nombre).toLocaleString('fr-MA', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};
Fichier src/i18n.js
javascript
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import fr from './locales/fr.json';
import en from './locales/en.json';
import ar from './locales/ar.json';
import es from './locales/es.json';
import de from './locales/de.json';
import ru from './locales/ru.json';
import zh from './locales/zh.json';
import pt from './locales/pt.json';

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources: { fr: { translation: fr }, en: { translation: en }, ar: { translation: ar }, es: { translation: es }, de: { translation: de }, ru: { translation: ru }, zh: { translation: zh }, pt: { translation: pt } },
  fallbackLng: 'fr',
  interpolation: { escapeValue: false }
});

i18n.on('languageChanged', (lng) => {
  document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lng;
});
export default i18n;
Fichier src/hooks/useCalculateur.js
javascript
import { useState, useEffect } from 'react';
import { PRODUITS } from '../data/produits';
import { evaluerCalcul } from '../utils/mathUtils';
import { calculerRecolte, calculerBetail, calculerZakatMal } from '../utils/calculZakat';

export function useCalculateur() {
  const [produitId, setProduitId] = useState('ble');
  const [madhhab, setMadhhab] = useState('majoritaire');
  const [poidsBrutStr, setPoidsBrutStr] = useState('1200');
  const [poidsCaisse, setPoidsCaisse] = useState(3);
  const [nombreCaissesStr, setNombreCaissesStr] = useState('54');
  const [tauxPerte, setTauxPerte] = useState(2);
  const [prixKg, setPrixKg] = useState(2.5);
  const [tauxIrrigation, setTauxIrrigation] = useState(0.10);
  const [nombreTetes, setNombreTetes] = useState('0');
  const [montantSaisi, setMontantSaisi] = useState('0');
  const [prixOrGramme, setPrixOrGramme] = useState('700');
  const [prixArgentGramme, setPrixArgentGramme] = useState('8');
  const [tauxSadaqa, setTauxSadaqa] = useState(0);
  
  const [resultats, setResultats] = useState(null);
  const [totalBrutSaisi, setTotalBrutSaisi] = useState(0);
  const [totalCaissesSaisi, setTotalCaissesSaisi] = useState(0);

  const produitActuel = PRODUITS.find(p => p.id === produitId);
  const estBetail = produitActuel?.categorie === 'betail';
  const estZakatMal = produitActuel?.categorie === 'zakat_mal';

  useEffect(() => {
    if (estZakatMal) {
      setResultats(calculerZakatMal({ produitId, montantSaisi, prixOrGramme, prixArgentGramme }));
    } else if (estBetail) {
      setResultats(calculerBetail({ typeAnimal: produitActuel.id, nombreTetes }));
    } else {
      const brut = evaluerCalcul(poidsBrutStr);
      const caisses = evaluerCalcul(nombreCaissesStr);
      setTotalBrutSaisi(brut);
      setTotalCaissesSaisi(caisses);
      setResultats(calculerRecolte({ poidsBrutTotal: brut, poidsCaisse: parseFloat(poidsCaisse) || 0, nombreCaissesTotal: caisses, tauxPerte: parseFloat(tauxPerte) || 0, prixKg: parseFloat(prixKg) || 0, categorieProduit: produitActuel.categorie, madhhab, tauxIrrigation: parseFloat(tauxIrrigation) }));
    }
  }, [poidsBrutStr, poidsCaisse, nombreCaissesStr, tauxPerte, prixKg, produitId, madhhab, tauxIrrigation, nombreTetes, montantSaisi, prixOrGramme, prixArgentGramme]);

  return {
    state: { produitId, madhhab, poidsBrutStr, poidsCaisse, nombreCaissesStr, tauxPerte, prixKg, tauxIrrigation, tauxSadaqa, nombreTetes, estBetail, estZakatMal, montantSaisi, prixOrGramme, prixArgentGramme },
    setters: { setProduitId, setMadhhab, setPoidsBrutStr, setPoidsCaisse, setNombreCaissesStr, setTauxPerte, setPrixKg, setTauxIrrigation, setTauxSadaqa, setNombreTetes, setMontantSaisi, setPrixOrGramme, setPrixArgentGramme },
    calculs: { resultats, totalBrutSaisi, totalCaissesSaisi },
    produitActuel
  };
}
5. État d'Avancement du Développement
Phase 1 (Terminée) : Calculs de l'Achar (Récoltes) avec caisses et pertes.

Phase 2 (Terminée) : Calculs de la Zakat du Bétail (Barème complet).

Phase 3 (Terminée) : Calculs de la Zakat Al Mal (Or, Argent, Dette).

Phase 4 (Terminée) : Intégration multilingue (8 langues) avec détection RTL.

Phase 5 (En cours) : Finalisation des popups d'information (InfoModal) traduites pour la Zakat Al Mal. Correction des derniers textes en dur dans les composants.

Phase 6 (À faire) : Build final pour Android (npx cap sync), tests sur téléphone, et soumission sur les stores.

6. Instructions pour la publication Mobile
Vérifier que l'application fonctionne bien en local (npm run dev).

Lancer le build de production (npm run build).

Synchroniser avec Capacitor (npx cap sync android).

Ouvrir Android Studio (npx cap open android).

Générer le fichier .aab signé pour le Play Store.

7. Prochaines Actions Immédiates (À faire par l'IA)
Traduire les textes restants dans la popup AcharResult.jsx (lignes sur la divergence d'écoles).

S'assurer que le texte du composant Home.jsx pour la partie "Zakat Al Mal" utilise bien les clés de traduction (t('...')).

Vérifier que la fonction formatNombre ne plante pas si une valeur est indéfinie (déjà corrigé, mais à surveiller).


