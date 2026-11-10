import React from 'react';
import { useTranslation } from 'react-i18next';

export default function InfoModal({ isOpen, onClose, titre, children }) {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900 bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* En-tête de la modale */}
        <div className="bg-emerald-800 text-white p-4 flex justify-between items-center">
          <h3 className="text-lg font-bold">{titre}</h3>
          <button onClick={onClose} className="text-white hover:text-rose-300 font-bold text-xl">
            ✕
          </button>
        </div>

        {/* Contenu défilable */}
        <div className="p-5 overflow-y-auto text-sm text-slate-700 space-y-4">
          {children}
        </div>

        {/* Pied de la modale */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 text-right">
          <button 
            onClick={onClose} 
            className="bg-slate-200 text-slate-800 px-4 py-2 rounded-lg font-medium hover:bg-slate-300 transition-colors"
          >
            {t('understand')}
          </button>
        </div>
      </div>
    </div>
  );
}