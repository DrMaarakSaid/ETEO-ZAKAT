import { useState, useEffect } from 'react';
import { PRODUITS } from '../data/produits';
import { evaluerCalcul } from '../utils/mathUtils';
import { calculerRecolte, calculerBetail, calculerZakatMal } from '../utils/calculZakat';

export function useCalculateur() {
  const [produitId, setProduitId] = useState('ble');
  const [madhhab, setMadhhab] = useState('majoritaire');
  
  // États Récoltes
  const [poidsBrutStr, setPoidsBrutStr] = useState('1200');
  const [poidsCaisse, setPoidsCaisse] = useState(3);
  const [nombreCaissesStr, setNombreCaissesStr] = useState('54');
  const [tauxPerte, setTauxPerte] = useState(2);
  const [prixKg, setPrixKg] = useState(2.5);
  const [tauxIrrigation, setTauxIrrigation] = useState(0.10);
  
  // États Bétail
  const [nombreTetes, setNombreTetes] = useState('0');

  // États Zakat Al Mal
  const [montantSaisi, setMontantSaisi] = useState('0');
  const [prixOrGramme, setPrixOrGramme] = useState('700'); // Prix approximatif en MAD
  const [prixArgentGramme, setPrixArgentGramme] = useState('8'); // Prix approximatif en MAD

  const [tauxSadaqa, setTauxSadaqa] = useState(0);
  const [resultats, setResultats] = useState(null);
  const [totalBrutSaisi, setTotalBrutSaisi] = useState(0);
  const [totalCaissesSaisi, setTotalCaissesSaisi] = useState(0);

  const produitActuel = PRODUITS.find(p => p.id === produitId);
  
  const estBetail = produitActuel?.categorie === 'betail';
  const estZakatMal = produitActuel?.categorie === 'zakat_mal';

  useEffect(() => {
    if (estZakatMal) {
      const res = calculerZakatMal({
        produitId: produitId,
        montantSaisi: montantSaisi,
        prixOrGramme: prixOrGramme,
        prixArgentGramme: prixArgentGramme
      });
      setResultats(res);
    } else if (estBetail) {
      const res = calculerBetail({
        typeAnimal: produitActuel.id,
        nombreTetes: nombreTetes
      });
      setResultats(res);
    } else {
      const brut = evaluerCalcul(poidsBrutStr);
      const caisses = evaluerCalcul(nombreCaissesStr);
      setTotalBrutSaisi(brut);
      setTotalCaissesSaisi(caisses);

      const res = calculerRecolte({
        poidsBrutTotal: brut,
        poidsCaisse: parseFloat(poidsCaisse) || 0,
        nombreCaissesTotal: caisses,
        tauxPerte: parseFloat(tauxPerte) || 0,
        prixKg: parseFloat(prixKg) || 0,
        categorieProduit: produitActuel.categorie,
        madhhab: madhhab,
        tauxIrrigation: parseFloat(tauxIrrigation)
      });
      setResultats(res);
    }
  }, [poidsBrutStr, poidsCaisse, nombreCaissesStr, tauxPerte, prixKg, produitId, madhhab, tauxIrrigation, nombreTetes, montantSaisi, prixOrGramme, prixArgentGramme, estBetail, estZakatMal]);

  return {
    state: { 
      produitId, madhhab, poidsBrutStr, poidsCaisse, nombreCaissesStr, tauxPerte, prixKg, tauxIrrigation, tauxSadaqa, nombreTetes, estBetail, estZakatMal,
      montantSaisi, prixOrGramme, prixArgentGramme
    },
    setters: { 
      setProduitId, setMadhhab, setPoidsBrutStr, setPoidsCaisse, setNombreCaissesStr, setTauxPerte, setPrixKg, setTauxIrrigation, setTauxSadaqa, setNombreTetes,
      setMontantSaisi, setPrixOrGramme, setPrixArgentGramme
    },
    calculs: { resultats, totalBrutSaisi, totalCaissesSaisi },
    produitActuel
  };
}