import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { formatNombre } from '../../utils/mathUtils';
import InfoModal from '../ui/InfoModal';

export default function AcharResult({ resultats, produitActuel, madhhab }) {
  const { t } = useTranslation();
  const [showInfo, setShowInfo] = useState(false);

  if (!resultats) return null;

  let contenuInfo = null;
  let titreInfo = t('achar_rules_title');

  // --- 1. CONTENU DE LA POPUP (InfoModal) ---
  if (resultats.typeCalcul === 'mal') {
    titreInfo = t('mal_rules_title');
    contenuInfo = (
      <>
        <p className="mb-2">{t('mal_rules_condition')}</p>
        <ul className="list-disc pl-5 space-y-1 font-medium text-xs">
          <li><strong>{t('mal_rules_condition1')}</strong></li>
          <li><strong>{t('mal_rules_condition2')}</strong></li>
        </ul>
        <div className="bg-slate-100 p-3 rounded border border-slate-300 mt-4 text-xs">
          <p className="font-bold">{t('mal_rules_rate')}</p>
        </div>
      </>
    );
  } else if (resultats.typeCalcul === 'betail') {
    titreInfo = t('betail_rules_title');
    contenuInfo = (
      <>
        <p>{t('betail_rules_desc')}</p>
        <ul className="list-disc pl-5 space-y-1 font-medium text-xs">
          <li><strong>{t('betail_rules_condition1')}</strong></li>
          <li><strong>{t('betail_rules_condition2')}</strong></li>
        </ul>
        <div className="bg-slate-100 p-3 rounded border border-slate-300 mt-4">
          <p className="font-bold mb-2">{t('betail_rules_table_title')} {t(`prod_${produitActuel.id}`)} :</p>
          <ul className="list-disc pl-5 space-y-1 text-xs">
            {produitActuel.id === 'moutons' || produitActuel.id === 'chevres' ? (
              <>
                <li>{t('betail_rules_moutons_1')}</li>
                <li>{t('betail_rules_moutons_2')}</li>
                <li>{t('betail_rules_moutons_3')}</li>
                <li>{t('betail_rules_moutons_4')}</li>
                <li>{t('betail_rules_moutons_5')}</li>
              </>
            ) : produitActuel.id === 'vaches' ? (
              <>
                <li>{t('betail_rules_vaches_1')}</li>
                <li>{t('betail_rules_vaches_2')}</li>
                <li>{t('betail_rules_vaches_3')}</li>
                <li>{t('betail_rules_vaches_4')}</li>
                <li>{t('betail_rules_vaches_5')}</li>
              </>
            ) : (
              <>
                <li>{t('betail_rules_chameaux_1')}</li>
                <li>{t('betail_rules_chameaux_2')}</li>
                <li>{t('betail_rules_chameaux_3')}</li>
                <li>{t('betail_rules_chameaux_4')}</li>
                <li>{t('betail_rules_chameaux_5')}</li>
                <li>{t('betail_rules_chameaux_6')}</li>
                <li>{t('betail_rules_chameaux_7')}</li>
                <li>{t('betail_rules_chameaux_8')}</li>
              </>
            )}
          </ul>
        </div>
      </>
    );
  } else {
    // Récoltes (Achar)
    titreInfo = t('achar_rules_title');
    contenuInfo = (
      <>
        <p>{t('achar_rules_desc')}</p>
        <div className="bg-slate-100 p-3 rounded border border-slate-300 mt-4">
          <p className="font-bold mb-2">{t('achar_selection')}</p>
          <ul className="list-disc pl-5 space-y-1 text-xs">
            <li><strong>{t('achar_product_label')}</strong> {t(`prod_${produitActuel.id}`)}</li>
            <li><strong>{t('achar_school_label')}</strong> {madhhab === 'majoritaire' ? t('school_maj') : t('school_hanafite')}</li>
            <li><strong>{t('achar_nisab_label')}</strong> {resultats.nisab} kg</li>
          </ul>
        </div>
        {produitActuel.categorie === 'fruits_frais_legumes' && (
          <div className="bg-amber-50 p-3 rounded border border-amber-300 mt-4">
            <p className="font-bold text-amber-800 mb-1">{t('achar_divergence_title')}</p>
            <p className="text-xs">{t('achar_divergence_desc')}</p>
          </div>
        )}
      </>
    );
  }

  // --- 2. AFFICHAGE DU BLOC DE RÉSULTAT ---

  if (resultats.typeCalcul === 'betail') {
    return (
      <>
        <div className={`p-4 rounded-xl border-2 text-sm mb-4 ${resultats.estObligatoire ? 'bg-emerald-50 border-emerald-500 text-emerald-900' : 'bg-amber-50 border-amber-400 text-amber-900'}`}>
          <div className="flex justify-between items-start mb-1">
            <div className="font-bold text-base">
              {resultats.estObligatoire ? t('res_betail_due') : t('res_no_betail')}
            </div>
            <button onClick={() => setShowInfo(true)} className="text-xs bg-white bg-opacity-50 px-2 py-1 rounded hover:bg-opacity-100 border border-current transition-all">
              {t('rules_btn')}
            </button>
          </div>
          <div className="text-xs mb-2">{t('res_nisab_heads')} {resultats.nisab} {t('res_heads')}.</div>
          <div className="bg-white p-3 rounded-lg border space-y-1">
            <div><strong>{t('res_herd')} :</strong> {resultats.nombreSaisi} {t('res_heads')}.</div>
            <div className="text-emerald-800 font-bold pt-2 border-t mt-2">
              {resultats.description}
            </div>
          </div>
        </div>
        <InfoModal isOpen={showInfo} onClose={() => setShowInfo(false)} titre={titreInfo}>
          {contenuInfo}
        </InfoModal>
      </>
    );
  }

  let resultBg = "bg-blue-50 border-blue-400 text-blue-900";
  if (resultats.estObligatoire) resultBg = "bg-emerald-50 border-emerald-500 text-emerald-900";
  else if (produitActuel.categorie === 'fruits_frais_legumes' && !resultats.estObligatoire && resultats.estAuDessusNisab) resultBg = "bg-blue-50 border-blue-400 text-blue-900";

  return (
    <>
      <div className={`p-4 rounded-xl border-2 text-sm mb-4 ${resultBg}`}>
        <div className="flex justify-between items-start mb-1">
          <div className="font-bold text-base">
            {resultats.estObligatoire ? t('res_achat_title') : (resultats.estAuDessusNisab ? t('res_not_req') : t('res_not_reached'))}
          </div>
          <button onClick={() => setShowInfo(true)} className="text-xs bg-white bg-opacity-50 px-2 py-1 rounded hover:bg-opacity-100 border border-current transition-all">
            {t('rules_btn')}
          </button>
        </div>
        
        {resultats.estObligatoire ? (
          <>
            <div className="text-xs mb-2">{t('res_net_weight')} ({formatNombre(resultats.poidsNet)} kg) {t('res_exceeds')} ({resultats.nisab} kg).</div>
            <div className="bg-white p-3 rounded-lg border space-y-1">
              <div><strong>{t('res_qty')} :</strong> <span className="font-bold">{formatNombre(resultats.acharKg)} kg</span> {t('res_of')} {t(`prod_${produitActuel.id}`).toLowerCase()}</div>
              <div><strong>{t('res_value')} :</strong> <span className="font-bold">{formatNombre(resultats.acharMad)} MAD</span> ({t('res_at')} {resultats.pourcentageApplique}%)</div>
            </div>
          </>
        ) : resultats.estAuDessusNisab ? (
          <>
            <div className="text-xs mb-2">{t('achar_not_subject')}</div>
            <div className="bg-white p-3 rounded-lg border text-xs">{t('achar_sadaqa_hint')}</div>
          </>
        ) : (
          <div className="text-xs">{t('res_net_weight')} ({formatNombre(resultats.poidsNet)} kg) {t('res_inferior')} ({resultats.nisab} kg).</div>
        )}
      </div>

      <InfoModal isOpen={showInfo} onClose={() => setShowInfo(false)} titre={titreInfo}>
        {contenuInfo}
      </InfoModal>
    </>
  );
}