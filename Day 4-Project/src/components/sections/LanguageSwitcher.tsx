'use client';

import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const changeLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ur' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={changeLanguage}
      className="bg-grey-500 text-white px-4 py-2 rounded"
    >
      {t('Switch Languages')}
    </button>
  );
}
