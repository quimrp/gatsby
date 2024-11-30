import React, { useEffect, useState } from 'react';
import CookieConsent from 'react-cookie-consent';

const CookieBanner = () => {
  const [isConsentGiven, setIsConsentGiven] = useState(false);

  const handleAccept = () => {
    setIsConsentGiven(true);
    loadGoogleTagManager(); // Cargar GTM solo cuando se acepta
    console.log("Cookies aceptadas!");
  };

  const handleDecline = () => {
    setIsConsentGiven(false);
    console.log("Cookies rechazadas");
  };

  const loadGoogleTagManager = () => {
    if (!window.gtmLoaded) {
      window.gtmLoaded = true;

      // Cargar Google Tag Manager (GTM)
      const gtmScript = document.createElement('script');
      gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=GTM-P69VNMXN`; // Reemplaza con tu ID de GTM
      gtmScript.async = true;
      document.head.appendChild(gtmScript);

      const gtmNoscript = document.createElement('noscript');
      gtmNoscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P69VNMXN" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
      document.body.appendChild(gtmNoscript);
    }
  };

  useEffect(() => {
    // Solo cargamos GTM si el usuario ha dado su consentimiento
    if (isConsentGiven) {
      loadGoogleTagManager();
    }
  }, [isConsentGiven]);

  return (
    <CookieConsent
      location="bottom"
      buttonText="Aceptar"
      declineButtonText="Rechazar"
      cookieName="gatsby-gdpr-google-analytics"
      style={{ background: "#2B373B" }}
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      expires={150}
      onAccept={handleAccept}
      onDecline={handleDecline}
    >
      Este sitio utiliza cookies para mejorar la experiencia del usuario.{" "}
      <a href="/politica-de-cookies" style={{ color: "#FFD700" }}>Leer más</a>
    </CookieConsent>
  );
};

export default CookieBanner;

