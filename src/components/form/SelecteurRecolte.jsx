import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CATEGORIES, PRODUITS } from '../../data/produits';

export default function SelecteurRecolte({ produitId, setProduitId }) {
  const { t } = useTranslation();
  const produitActuel = PRODUITS.find(p => p.id === produitId);
  const [categorieId, setCategorieId] = useState(produitActuel?.categorie || 'cereales_legumineuses');

  const produitsFiltres = PRODUITS.filter(p => p.categorie === categorieId);

  const handleCategorieChange = (e) => {
    const nouvelleCategorie = e.target.value;
    setCategorieId(nouvelleCategorie);
    const premierProduit = PRODUITS.find(p => p.categorie === nouvelleCategorie);
    if (premierProduit) {
      setProduitId(premierProduit.id);
    }
  };

  const getCategorieKey = (id) => {
    if (id === 'cereales_legumineuses') return 'cat_cereales';
    if (id === 'fruits_conservables') return 'cat_fruits_cons';
    if (id === 'fruits_frais_legumes') return 'cat_fruits_frais';
    if (id === 'produits_specifiques') return 'cat_produits_spec';
    if (id === 'betail') return 'cat_betail';
    if (id === 'zakat_mal') return 'cat_zakat_mal';
    return id;
  };

  return (
    <div className="space-y-3">
      <div className="bg-slate-100 p-3 rounded-lg border border-slate-300">
        <label className="block text-sm font-medium text-slate-800 mb-1">{t('main_category')} :</label>
        <select 
          value={categorieId} 
          onChange={handleCategorieChange}
          className="w-full p-2.5 border border-slate-400 rounded-lg font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500"
        >
          {CATEGORIES.map(c => (
            <option key={c.id} value={c.id}>{t(getCategorieKey(c.id)) || c.nom}</option>
          ))}
        </select>
      </div>

      <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-200">
        <label className="block text-sm font-medium text-emerald-800 mb-1">{t('exact_product')} :</label>
        <select 
          value={produitId} 
          onChange={(e) => setProduitId(e.target.value)}
          className="w-full p-2.5 border border-emerald-400 rounded-lg font-bold text-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          {produitsFiltres.map(p => (
            <option key={p.id} value={p.id}>{p.icone} {t(`prod_${p.id}`) || p.nom}</option>
          ))}
        </select>
      </div>
    </div>
  );
}