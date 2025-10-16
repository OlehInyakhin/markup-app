import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

export const LanguageSwitcher = ({ onLanguageChange, children }) => {
  const { i18n, t } = useTranslation('common');

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'he' ? 'en' : 'he';
    i18n.changeLanguage(newLanguage);
    if (onLanguageChange) {
      onLanguageChange();
    }
  };

  // If children are provided, render them; otherwise, render default text
  const renderContent = () => {
    if (children) {
      return children;
    }
    return i18n.language === 'he'
      ? t('language.english')
      : t('language.hebrew');
  };

  return (
    <button
      className="language-switcher"
      onClick={toggleLanguage}
      aria-label={`Switch to ${i18n.language === 'he' ? 'English' : 'Hebrew'}`}
    >
      {renderContent()}
    </button>
  );
};
