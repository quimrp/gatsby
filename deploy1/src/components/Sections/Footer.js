import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';
// Images
import LogoWhite from "~images/logo-white.png";
import LogoWhite2X from "~images/logo-white@2x.png";

const Footer = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // To top
    const toTop = document.querySelector('.to-top');

    // Scroll
    const handleScroll = () => {
      const mainMenu = document.querySelector('.main-menu-area');
      const pos = window.scrollY;

      if (mainMenu) {
        if (pos >= 100) {
          mainMenu.classList.add('fixed-menu', 'animate', 'slideInDown');
        } else {
          mainMenu.classList.remove('fixed-menu', 'animate', 'slideInDown');
        }
      }

      // Scroll to top button
      if (pos >= 500) {
        toTop.classList.add('fixed-totop');
      } else {
        toTop.classList.remove('fixed-totop');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to get the correct link based on the current language
  const getLocalizedLink = (path) => {
    const lang = i18n.language || 'en'; // Default to 'en' if language is not available
    return `/${lang}${path}`;
  };

  return (
    <footer>
      {/* <!-- Widgets --> */}
      <div className="footer-widgets">
        <Container>
          <Row>
            {/* <!-- Footer logo --> */}
            <Col className="col-12 col-md-6 col-lg-3 res-margin">
              <div className="widget">
                <p className="footer-logo">
                  <img src={LogoWhite} srcSet={`${LogoWhite2X} 2x`} alt={t('Logo de Instal Tancaments en color blanco')} />
                </p>
                <p>{t('Ventanas de PVC de alta eficiencia energética, certificadas Passivhaus.')}</p>

                {/* <!-- Social links --> */}
                <div className="footer-social">
                  <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter fa-fw"></i></a>
                  <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f fa-fw"></i></a>
                  <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                  <a href="https://dribbble.com" aria-label="Dribbble" target="_blank" rel="noopener noreferrer"><i className="fab fa-dribbble"></i></a>
                  <a href="https://pinterest.com" aria-label="Pinterest" target="_blank" rel="noopener noreferrer"><i className="fab fa-pinterest fa-fw"></i></a>
                </div>
              </div>
            </Col>

            {/* <!-- Useful links --> */}
            <Col className="col-12 col-md-6 col-lg-2 offset-lg-1 res-margin">
              <div className="widget">
                <h6>{t('Nexgen')}</h6>
                <ul className="footer-menu">
                  <li>
                    <Link to={getLocalizedLink("/#home")}>
                      <span>{t('Inicio')}</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={getLocalizedLink("/#overview")}>
                      <span>{t('Subvención')}</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={getLocalizedLink("/#requirements")}>
                      <span>{t('Requisitos')}</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>

            {/* <!-- Product help --> */}
            <Col className="col-12 col-md-6 col-lg-3 res-margin">
              <div className="widget">
                <h6>{t('Info Técnica')}</h6>
                <ul className="footer-menu">
                  <li>
                    <Link to={getLocalizedLink("/#support")}>
                      <span>{t('FAQ')}</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={getLocalizedLink("/#testimonials")}>
                      <span>{t('Reseñas')}</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={getLocalizedLink("/#pricing")}>
                      <span>{t('Planes de Precios')}</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>

            {/* <!-- Download --> */}
            <Col className="col-12 col-md-6 col-lg-3">
              <div className="widget">
                <h6>{t('Pide Presupuesto')}</h6>
                <div className="button-store">
                  <a href="https://wa.me/34613464955?text=pressupost" target="_blank" rel="noopener noreferrer" className="custom-btn d-inline-flex align-items-center m-2 m-sm-0 mb-sm-3">
                    <i className="fab fa-whatsapp"></i>
                    <p>{t('Asistente virtual')}<span>{t('WhatsApp')}</span></p>
                  </a>
                  <Link to={getLocalizedLink("/#contact")} className="custom-btn d-inline-flex align-items-center m-2 m-sm-0">
                    <i className="icon-window"></i>
                    <p>{t('Formulario Web')}<span>{t('Instal Store')}</span></p>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* <!-- Copyright --> */}
      <div className="footer-copyright">
        <Container>
          <Row>
            <Col className="col-12">
              {/* <!-- Text --> */}
              <p className="copyright text-center">
                {t('Copyright © 2024 Instal Tancaments. Todos los derechos reservados.')}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
