import React from 'react';
import { useTranslation } from 'react-i18next';
import { formatNombre } from '../../utils/mathUtils';

export default function AutresIndicateurs({ resultats }) {
  const { t } = useTranslation();

  if (!resultats) return null;

  if (resultats.typeCalcul === 'betail') {
    return (
      <>
        <h3 className="text-md font-semibold text-slate-700 mb-2 pt-2 border-t">{t('indicators')}</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between py-1 border-b border-slate-100">
            <span className="text-slate-600">{t('head_count')} :</span>
            <span className="font-bold text-slate-900">{resultats.nombreSaisi} {t('res_heads')}</span>
          </div>
          <div className="flex justify-between py-1">
            <span className="text-slate-600">{t('res_nisab_heads')}</span>
            <span className="font-bold text-slate-900">{resultats.nisab} {t('res_heads')}</span>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <h3 className="text-md font-semibold text-slate-700 mb-2 pt-2 border-t">{t('indicators')}</h3>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between py-1 border-b border-slate-100">
          <span className="text-slate-600">{t('ind_brut')} :</span>
          <span className="font-bold text-slate-900">{formatNombre(resultats.poidsBrutNet)} kg</span>
        </div>
        <div className="flex justify-between py-1 border-b border-slate-100">
          <span className="text-slate-600">{t('ind_net')} :</span>
          <span className="font-bold text-slate-900">{formatNombre(resultats.poidsNet)} kg</span>
        </div>
        <div className="flex justify-between py-1">
          <span className="text-slate-600">{t('ind_ca')} :</span>
          <span className="font-bold text-emerald-700">{formatNombre(resultats.chiffreAffaires)} MAD</span>
        </div>
      </div>
    </>
  );
}