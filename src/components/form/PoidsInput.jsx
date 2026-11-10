import React from 'react';
import { useTranslation } from 'react-i18next';
import { formatNombre } from '../../utils/mathUtils';

export default function PoidsInput({ poidsBrutStr, setPoidsBrutStr, totalBrutSaisi }) {
  const { t } = useTranslation();

  return (
    <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
      <label className="block text-sm font-medium text-orange-800 mb-1">{t('brut_weight')} :</label>
      <textarea 
        rows="2"
        value={poidsBrutStr} 
        onChange={(e) => setPoidsBrutStr(e.target.value)}
        className="w-full p-2.5 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-lg font-bold text-orange-900 resize-y"
        placeholder="Ex: 1200 ou 500+600"
      />
      <p className="text-xs text-orange-600 mt-1">
        {t('ind_total_brut')} : <span className="font-bold text-orange-800">{formatNombre(totalBrutSaisi)} kg</span>
      </p>
    </div>
  );
}