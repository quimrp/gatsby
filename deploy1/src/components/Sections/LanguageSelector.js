import React from 'react';
import { useTranslation } from 'react-i18next';
import { navigate } from 'gatsby';
import esFlag from '~images/flags/es.png'; // Ajusta la ruta según tu estructura de proyecto
import caFlag from '~images/flags/ca.png';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (lang) => {
    const currentPath = window.location.pathname;
    const basePath = currentPath.replace(/^\/(es|ca|en)/, '');
    navigate(`/${lang}${basePath}`);
    i18n.changeLanguage(lang);
  };

  const flagImages = {
    es: esFlag,
    ca: caFlag,
    
  };

  return (
    <div>
      {['es', 'ca',].filter(lang => lang !== i18n.language).map(lang => (
        <img
          key={lang}
          src={flagImages[lang]}
          alt={lang}
          onClick={() => handleChangeLanguage(lang)}
          style={{ cursor: 'pointer', marginLeft: '10px', width: '40px', height: '40px' }}
        />
      ))}
    </div>
  );
};

export default LanguageSelector;