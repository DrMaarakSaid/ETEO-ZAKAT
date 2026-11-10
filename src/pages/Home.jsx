import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ECOLES } from '../data/reglesZakat';
import { formatNombre } from '../utils/mathUtils';
import { useCalculateur } from '../hooks/useCalculateur';
import Card from '../components/ui/Card';
import InfoModal from '../components/ui/InfoModal';
import SelecteurRecolte from '../components/form/SelecteurRecolte';
import PoidsInput from '../components/form/PoidsInput';
import CaisseInput from '../components/form/CaisseInput';
import AcharResult from '../components/results/AcharResult';
import AutresIndicateurs from '../components/results/AutresIndicateurs';

export default function Home() {
  const { t, i18n } = useTranslation();
  const { state, setters, calculs, produitActuel } = useCalculateur();
  const { resultats } = calculs;
  const [showGuide, setShowGuide] = useState(false);
  const [showMalInfo, setShowMalInfo] = useState(false);

  if (!resultats || !produitActuel) return null;

  const changerLangue = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const estOrOuArgent = produitActuel.id === 'or_bijoux' || produitActuel.id === 'argent_metal';
  const uniteSaisie = estOrOuArgent ? 'grammes' : 'MAD';

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 font-sans text-slate-800">
      
      {/* EN-TÊTE */}
      <header className="max-w-5xl mx-auto mb-6 bg-emerald-800 text-white p-4 rounded-xl shadow-md flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <span>🍋</span> {t('title')}
        </h1>
        <div className="flex items-center gap-3">
          <select 
            value={i18n.language} 
            onChange={changerLangue}
            className="bg-emerald-700 text-white text-sm font-medium px-3 py-1.5 rounded-lg border border-emerald-500 focus:outline-none cursor-pointer max-w-[150px]"
          >
            <option value="fr">🇫🇷 Français</option>
            <option value="ar">🇲🇦 العربية</option>
            <option value="en">🇬🇧 English</option>
            <option value="es">🇪🇸 Español</option>
            <option value="de">🇩🇪 Deutsch</option>
            <option value="ru">🇷🇺 Русский</option>
            <option value="zh">🇨🇳 中文</option>
            <option value="pt">🇵🇹 Português</option>
          </select>
          <button 
            onClick={() => setShowGuide(true)}
            className="text-xs bg-emerald-700 hover:bg-emerald-600 px-3 py-1.5 rounded-full font-medium transition-colors border border-emerald-500"
          >
            {t('guide_btn')}
          </button>
        </div>
      </header>

      {/* CONTENU PRINCIPAL */}
      <main className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* COLONNE GAUCHE */}
        <Card borderColor="border-blue-400" className="border-t-8 border-t-blue-500">
          <h2 className="text-lg font-semibold text-blue-900 mb-4 border-b pb-2">
            {state.estZakatMal ? "💰 Zakat Al Mal" : (state.estBetail ? t('herd_data') : t('harvest_data'))}
          </h2>
          <div className="space-y-4">
            
            <SelecteurRecolte produitId={state.produitId} setProduitId={setters.setProduitId} />

            {!state.estZakatMal && (
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <label className="block text-sm font-medium text-slate-700 mb-1">{t('school')} :</label>
                <select 
                  value={state.madhhab} 
                  onChange={(e) => setters.setMadhhab(e.target.value)}
                  className="w-full p-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 font-medium"
                >
                  <option value="majoritaire">🔵 {t('school_maj')}</option>
                  <option value="hanafite">🟢 {t('school_hanafite')}</option>
                </select>
              </div>
            )}

            {state.estZakatMal ? (
              <div className="space-y-4 bg-emerald-50 p-3 rounded-lg border border-emerald-200">
                <div>
                  <label className="block text-sm font-medium text-emerald-800 mb-1">
                    {t('mal_amount_label')} ({uniteSaisie}) :
                  </label>
                  <input 
                    type="number" 
                    value={state.montantSaisi} 
                    onChange={(e) => setters.setMontantSaisi(e.target.value)} 
                    className="w-full p-2.5 border border-emerald-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-lg font-bold" 
                  />
                </div>

                {estOrOuArgent && (
                  <div>
                    <label className="block text-sm font-medium text-emerald-800 mb-1">
                      {produitActuel.id === 'or_bijoux' ? t('mal_gold_price') : t('mal_silver_price')}
                    </label>
                    <input 
                      type="number" 
                      value={produitActuel.id === 'or_bijoux' ? state.prixOrGramme : state.prixArgentGramme} 
                      onChange={(e) => produitActuel.id === 'or_bijoux' ? setters.setPrixOrGramme(e.target.value) : setters.setPrixArgentGramme(e.target.value)} 
                      className="w-full p-2.5 border border-emerald-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" 
                    />
                  </div>
                )}

                <div className="mt-4 pt-4 border-t border-emerald-200 text-sm">
                  <div className="flex justify-between font-bold text-emerald-900">
                    <span>{t('mal_total_value')}</span>
                    <span>{formatNombre(resultats.valeurTotale)} MAD</span>
                  </div>
                  <div className="flex justify-between text-xs text-emerald-700 mt-1">
                    <span>{t('mal_nisab_value')}</span>
                    <span>{formatNombre(resultats.nisabUtilise)} MAD</span>
                  </div>
                </div>
              </div>
            ) : state.estBetail ? (
              <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
                <label className="block text-sm font-medium text-orange-800 mb-1">{t('head_count')} :</label>
                <input 
                  type="number" value={state.nombreTetes} onChange={(e) => setters.setNombreTetes(e.target.value)}
                  className="w-full p-2.5 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-lg font-bold text-orange-900"
                  min="0"
                />
              </div>
            ) : (
              <>
                <PoidsInput poidsBrutStr={state.poidsBrutStr} setPoidsBrutStr={setters.setPoidsBrutStr} totalBrutSaisi={calculs.totalBrutSaisi} />
                <CaisseInput poidsCaisse={state.poidsCaisse} setPoidsCaisse={setters.setPoidsCaisse} nombreCaissesStr={state.nombreCaissesStr} setNombreCaissesStr={setters.setNombreCaissesStr} totalCaissesSaisi={calculs.totalCaissesSaisi} />
                
                <div className="bg-purple-50 p-3 rounded-lg border border-purple-200 grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-purple-800 mb-1">{t('loss')} :</label>
                    <input type="number" value={state.tauxPerte} onChange={(e) => setters.setTauxPerte(e.target.value)} className="w-full p-2.5 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-purple-800 mb-1">{t('price')} :</label>
                    <input type="number" value={state.prixKg} onChange={(e) => setters.setPrixKg(e.target.value)} step="0.5" className="w-full p-2.5 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
                  </div>
                </div>

                <div className={`bg-cyan-50 p-3 rounded-lg border border-cyan-200 ${produitActuel.categorie === 'produits_specifiques' ? 'opacity-50 pointer-events-none' : ''}`}>
                  <label className="block text-sm font-medium text-cyan-800 mb-1">{t('irrigation')} :</label>
                  <select value={state.tauxIrrigation} onChange={(e) => setters.setTauxIrrigation(e.target.value)} className="w-full p-2.5 border border-cyan-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 font-medium">
                    <option value={0.10}>{t('rain')}</option>
                    <option value={0.05}>{t('pump')}</option>
                  </select>
                </div>
              </>
            )}
          </div>
        </Card>

        {/* COLONNE DROITE */}
        <Card borderColor="border-emerald-500" className="border-t-8 border-t-emerald-600 flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-semibold text-emerald-900 mb-4 border-b pb-2 flex items-center gap-2">
              <span>⚖️</span> {state.estZakatMal ? t('calc_mal') : (state.estBetail ? t('calc_betail') : t('calc_achar'))}
            </h2>
            
            {state.estZakatMal ? (
              <div className={`p-4 rounded-xl border-2 text-sm mb-4 ${resultats.estObligatoire ? 'bg-emerald-50 border-emerald-500 text-emerald-900' : 'bg-blue-50 border-blue-400 text-blue-900'}`}>
                <div className="flex justify-between items-start mb-1">
                  <div className="font-bold text-base">
                    {resultats.estObligatoire ? t('res_mal_due') : t('res_mal_not_reached')}
                  </div>
                  <button onClick={() => setShowMalInfo(true)} className="text-xs bg-white bg-opacity-50 px-2 py-1 rounded hover:bg-opacity-100 border border-current transition-all">
                    {t('rules_btn')}
                  </button>
                </div>
                <div className="text-xs mb-2">
                  {t('res_mal_patrimoine')} ({formatNombre(resultats.valeurTotale)} MAD) {resultats.estObligatoire ? t('res_mal_exceeds') : t('res_mal_inferior')} Nisab ({formatNombre(resultats.nisabUtilise)} MAD).
                </div>
                {resultats.estObligatoire && (
                  <div className="bg-white p-3 rounded-lg border space-y-1 mt-2">
                    <div><strong>{t('res_mal_zakat_due')}</strong> <span className="font-bold text-emerald-700 text-lg">{formatNombre(resultats.zakatDue)} MAD</span></div>
                  </div>
                )}
              </div>
            ) : (
              <>
                <AcharResult resultats={resultats} produitActuel={produitActuel} madhhab={state.madhhab} />
                <AutresIndicateurs resultats={resultats} />
              </>
            )}

            {!state.estBetail && !state.estZakatMal && (
              <div className="mt-6 pt-4 border-t border-slate-200 bg-rose-50 p-3 rounded-lg border border-rose-200">
                <label className="block text-sm font-medium text-rose-900 mb-2">{t('sadaqa')} :</label>
                <div className="flex items-center gap-2">
                  <input type="number" value={state.tauxSadaqa} onChange={(e) => setters.setTauxSadaqa(e.target.value)} min="0" max="100" step="0.5" className="w-20 p-2 border border-rose-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-rose-500" />
                  <span className="text-sm text-rose-700">{t('of_ca')}</span>
                  <span className="ml-auto font-bold text-rose-800 text-lg">
                    {formatNombre(resultats.chiffreAffaires * (state.tauxSadaqa / 100))} MAD
                  </span>
                </div>
              </div>
            )}
          </div>
          
          {/* POPUP GUIDE COMPLET AVEC RÉFÉRENCES */}
          <InfoModal isOpen={showGuide} onClose={() => setShowGuide(false)} titre={t('guide_title')}>
            <div className="space-y-6 text-sm">
              <p>{t('guide_intro')}</p>
              
              <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-200">
                <h4 className="font-bold text-emerald-900 mb-2">{t('guide_mal_title')}</h4>
                <p className="mb-1"><strong>{t('guide_mal_quran')}</strong> {t('guide_mal_quran_text')}</p>
                <p className="mb-1"><strong>{t('guide_mal_hadith')}</strong> {t('guide_mal_hadith_text')}</p>
                <p className="text-xs text-emerald-700 mt-2">{t('guide_mal_nisab')}</p>
              </div>

              <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
                <h4 className="font-bold text-orange-900 mb-2">{t('guide_achar_title')}</h4>
                <p className="mb-1"><strong>{t('guide_achar_quran')}</strong> {t('guide_achar_quran_text')}</p>
                <p className="mb-1"><strong>{t('guide_achar_hadith')}</strong> {t('guide_achar_hadith_text')}</p>
              </div>

              <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
                <h4 className="font-bold text-purple-900 mb-2">{t('guide_betail_title')}</h4>
                <p className="mb-1"><strong>{t('guide_betail_quran')}</strong> {t('guide_betail_quran_text')}</p>
                <p className="mb-1"><strong>{t('guide_betail_hadith')}</strong> {t('guide_betail_hadith_text')}</p>
              </div>

              <div className="bg-slate-100 p-3 rounded-lg border border-slate-300">
                <h4 className="font-bold text-slate-900 mb-2">{t('guide_hawl_title')}</h4>
                <p className="text-xs">{t('guide_hawl_text')}</p>
              </div>
            </div>
          </InfoModal>

          {/* POPUP RÈGLES ZAKAT AL MAL */}
          <InfoModal isOpen={showMalInfo} onClose={() => setShowMalInfo(false)} titre={t('mal_rules_title')}>
            <p className="mb-2">{t('mal_rules_condition')}</p>
            <ul className="list-disc pl-5 space-y-1 font-medium text-xs">
              <li><strong>{t('mal_rules_condition1')}</strong></li>
              <li><strong>{t('mal_rules_condition2')}</strong></li>
            </ul>
            <div className="bg-slate-100 p-3 rounded border border-slate-300 mt-4 text-xs">
              <p className="font-bold">{t('mal_rules_rate')}</p>
            </div>
          </InfoModal>
        </Card>
      </main>
    </div>
  );
}