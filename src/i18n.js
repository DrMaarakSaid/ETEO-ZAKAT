import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// On importe TOUS les fichiers de langue
import fr from './locales/fr.json';
import en from './locales/en.json';
import ar from './locales/ar.json';
import es from './locales/es.json';
import de from './locales/de.json';
import ru from './locales/ru.json';
import zh from './locales/zh.json';
import pt from './locales/pt.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: fr },
      en: { translation: en },
      ar: { translation: ar },
      es: { translation: es },
      de: { translation: de },
      ru: { translation: ru },
      zh: { translation: zh },
      pt: { translation: pt }
    },
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  });

// Gestion de l'arabe (RTL)
i18n.on('languageChanged', (lng) => {
  document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lng;
});

export default i18n;