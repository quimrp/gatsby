const React = require('react');
const { I18nextProvider } = require('react-i18next');
const i18next = require('i18next');

// Asegúrate de que i18next esté configurado correctamente
i18next.init({
  // Tu configuración de i18next aquí
});

exports.wrapRootElement = ({ element }) => {
  return React.createElement(
    I18nextProvider,
    { i18n: i18next },
    element
  );
};

