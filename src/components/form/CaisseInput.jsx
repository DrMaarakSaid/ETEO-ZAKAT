import React from 'react';
import { useTranslation } from 'react-i18next';

export default function CaisseInput({ 
  poidsCaisse, setPoidsCaisse, 
  nombreCaissesStr, setNombreCaissesStr, 
  totalCaissesSaisi 
}) {
  const { t } = useTranslation();

  return (
    <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-200 grid grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-emerald-800 mb-1">{t('crate_weight')} :</label>
        <input 
          type="number" 
          value={poidsCaisse} 
          onChange={(e) => setPoidsCaisse(e.target.value)}
          className="w-full p-2.5 border border-emerald-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-emerald-800 mb-1">{t('crate_count')} :</label>
        <textarea 
          rows="1"
          value={nombreCaissesStr} 
          onChange={(e) => setNombreCaissesStr(e.target.value)}
          className="w-full p-2.5 border border-emerald-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 font-bold resize-y"
          placeholder="Ex: 50+4"
        />
      </div>
      <div className="col-span-2 text-xs text-emerald-700 mt-1">
        {t('ind_total_caisses')} : <span className="font-bold text-emerald-800">{totalCaissesSaisi}</span>
      </div>
    </div>
  );
}