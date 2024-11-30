import React from 'react';
import { useTranslation } from 'react-i18next';
import { navigate } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image'; // Usa StaticImage para una mejor gestión de imágenes

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  // Función para manejar el cambio de idioma
  const handleChangeLanguage = (lang) => {
    const currentPath = window.location.pathname;
    const currentHash = window.location.hash; // Obtener cualquier hash (#sección)
  
    // Si el idioma seleccionado es español ('es'), eliminamos el prefijo de idioma
    if (lang === 'es') {
      // Eliminar cualquier prefijo de idioma (ca, en, fr, ru, de, etc.)
      const newPath = currentPath.replace(/^\/(ca|fr|en|ru|de)/, ''); 
      navigate(newPath + currentHash); // Navegar sin el prefijo de idioma, manteniendo el hash
    } else {
      // Para otros idiomas, mantenemos el prefijo de idioma en la URL
      const basePath = currentPath.replace(/^\/(es|ca|en|fr|ru|de)/, ''); // Eliminar el idioma actual
      navigate(`/${lang}${basePath}${currentHash}`); // Navegar a la nueva URL con el idioma seleccionado
    }
  
    i18n.changeLanguage(lang); // Cambiar el idioma en i18next
  };

  return (
    <div>
      {['es', 'ca', 'en', 'fr', 'ru', 'de'  ].filter(lang => lang !== i18n.language).map(lang => (
        <span
          key={lang}
          onClick={() => handleChangeLanguage(lang)}
          style={{ cursor: 'pointer', marginLeft: '10px' }}
        >
          {lang === 'es' && (
           <StaticImage
           src="../../images/flags/es.png" // Ajusta la ruta según tu estructura de proyecto
           alt="Español"
           width={40}
           height={40}
           placeholder="blurred"
          
         />
       )}
       {lang === 'ca' && (
         <StaticImage
           src="../../images/flags/ca.png" // Ajusta la ruta según tu estructura de proyecto
           alt="Català"
           width={40}
           height={40}
           placeholder="blurred"
           
         />
          )}
          {lang === 'en' && (
         <StaticImage
           src="../../images/flags/gb.png" // Ajusta la ruta según tu estructura de proyecto
           alt="English"
           width={40}
           height={40}
           placeholder="blurred"
           
         />
          )}
          {lang === 'fr' && (
         <StaticImage
           src="../../images/flags/fr.png" // Ajusta la ruta según tu estructura de proyecto
           alt="frances"
           width={40}
           height={40}
           placeholder="blurred"
           
         />
          )}
          {lang === 'ru' && (
         <StaticImage
           src="../../images/flags/ru.png" // Ajusta la ruta según tu estructura de proyecto
           alt="ruso"
           width={40}
           height={40}
           placeholder="blurred"
           
         />
          )}
          {lang === 'de' && (
         <StaticImage
           src="../../images/flags/de.png" // Ajusta la ruta según tu estructura de proyecto
           alt="Deutsch"
           width={40}
           height={40}
           placeholder="blurred"
           
         />
          )}
        </span>
      ))}
    </div>
  );
};

export default LanguageSelector;

