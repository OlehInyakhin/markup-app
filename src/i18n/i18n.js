import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import he from './locales/he';
import en from './locales/en';

const resources = {
  he: {
    ...he,
  },
  en: {
    ...en,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'he',
    defaultNS: 'common',
    ns: [
      'common',
      'header',
      'footer',
      'hero',
      'work',
      'ventures',
      'follow',
      'callToAction',
      'services',
      'showreel',
      'textAndLogo',
      'blog',
      'collaborations',
    ],

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: false,
    },
  });

// Update document direction and lang attribute when language changes
i18n.on('languageChanged', lng => {
  document.documentElement.lang = lng;
  document.documentElement.dir = lng === 'he' ? 'rtl' : 'ltr';
});

// Set initial direction
document.documentElement.dir = i18n.language === 'he' ? 'rtl' : 'ltr';

export default i18n;
