import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import { StaticImage } from 'gatsby-plugin-image';

const Header = (props) => {
    const [isMobileMenu, setIsMobileMenu] = useState(false);
    const [isSearch, setIsSearch] = useState(false);
    const { t, i18n } = useTranslation();

    const handleMobileMenu = (e) => {
        e.preventDefault();
        setIsMobileMenu(prevState => !prevState);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setIsSearch(prevState => !prevState);
    };

   // Function to get the correct link based on the current language
const getLocalizedLink = (path) => {
    const lang = i18n.language || 'es'; // Default to 'es' if language is not available
    const sanitizedPath = path.startsWith('/') ? path : `/${path}`; // Ensure path starts with a '/'

    // If the current language is Spanish ('es'), return the path without '/es'
    if (lang === 'es') {
        return sanitizedPath.replace(/^\/es/, ''); // Remove '/es' prefix if present
    }

    // For other languages, add the language prefix
    return sanitizedPath.startsWith(`/${lang}`) ? sanitizedPath : `/${lang}${sanitizedPath}`;
};
    // Scroll spy
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section[id]');
            const pos = window.scrollY;

            sections.forEach(el => {
                if (el.offsetTop - 150 <= pos && el.offsetTop + el.clientHeight >= pos) {
                    const getId = el.getAttribute('id');
                    document.querySelectorAll('.nav-item a[href^="/#"]').forEach(link => {
                        const activeLink = document.querySelector(`.nav-item a[href^="/#${getId}"]`);
                        if (activeLink) {
                            link.classList.remove('active');
                            activeLink.classList.add('active');
                        }
                    });
                }
            });

            if (pos === 0) {
                document.querySelectorAll('.nav-item a[href^="/#"]').forEach(link => {
                    link.classList.remove('active');
                });
                const topLink = document.querySelector('.nav-item a[href^="/#top-page"]');
                if (topLink) topLink.classList.add('active');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header id="top-page" className="header">
                <div id="mainNav" className={isMobileMenu ? 'main-menu-area animated mobile-menu-open' : 'main-menu-area animated'}>
                    <Container>
                        <Row className="align-items-center">
                            <Col className="col-12 col-lg-2 d-flex justify-content-between align-items-center">
                                {/* <!-- Logo --> */}
                                <div className="logo">
                                    
                                    <Link to="/" className="navbar-brand navbar-brand1">
                                    <StaticImage
                    src="../../images/logo-white.png" // Asegúrate de que la ruta sea correcta
                    srcSet="../../images/logo-white@2x.png 2x"
                    alt={t('Logo de Instal Tancaments en color blanco')}
                    placeholder="blurred"
                    quality={100}
                    layout="constrained" // Ajusta el valor según el diseño
                  />
                                
                                         
                                        
                                    </Link>
                                    <Link to="/" className="navbar-brand navbar-brand2">
                                    <StaticImage
                    src="../../images/logo-white.png" // Asegúrate de que la ruta sea correcta
                    srcSet="../../images/logo-white@2x.png 2x"
                    alt={t('Logo de Instal Tancaments en color blanco')}
                    placeholder="blurred"
                    quality={100}
                    layout="constrained" // Ajusta el valor según el diseño
                  />
                                
                                         
                                        
                                    </Link>
                                </div>

                                {/* <!-- Burger menu --> */}
                                <div className="menu-bar d-lg-none" role="button" tabIndex={0} onClick={handleMobileMenu}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </Col>

                            <div className="op-mobile-menu col-lg-10 p-0 d-lg-flex align-items-center justify-content-end" role="button" tabIndex={0} onClick={handleMobileMenu}>
                                {/* <!-- Mobile menu --> */}
                                <div className="m-menu-header d-flex justify-content-between align-items-center d-lg-none">
                                    {/* <!-- Logo --> */}
                                    <div>
                                    <StaticImage
                    src="../../images/logo-white.png" // Asegúrate de que la ruta sea correcta
                    srcSet="../../images/logo-white@2x.png 2x"
                    alt={t('Logo de Instal Tancaments en color blanco')}
                    placeholder="blurred"
                    quality={100}
                    layout="constrained" // Ajusta el valor según el diseño
                    width={600}
                  height={400}
                  />
                  </div>
                                    
                                    {/* <!-- Close button --> */}
                                    <span className="close-button" role="button" aria-label={t('Close')} tabIndex={0} onClick={handleMobileMenu}></span>
                                </div>

                                {/* <!-- Items --> */}
                                <ul className="nav-menu d-lg-flex flex-wrap list-unstyled justify-content-center">
                                    <li className="nav-item">
                                    <Link 
      to={`${window.location.pathname}#top-page`} 
      className={props.nav === "home" ? 'nav-link js-scroll-trigger active' : 'nav-link js-scroll-trigger'}
    >
      <span>{t('Inicio')}</span>
    </Link>
                                    </li>
                                    <li className="nav-item">
    <Link 
      to={`${window.location.pathname}#overview`} 
      className="nav-link js-scroll-trigger"
    >
      <span>{t('Subvención')}</span>
    </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={getLocalizedLink("/#features")} className="nav-link js-scroll-trigger">
                                            <span>{t('Características')}</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
    <Link 
      to={`${window.location.pathname}#features`} 
      className="nav-link js-scroll-trigger"
    >
      <span>{t('Características')}</span>
    </Link>
  </li>
  <li className="nav-item">
    <Link 
      to={`${window.location.pathname}#pricing`} 
      className="nav-link js-scroll-trigger"
    >
      <span>{t('Precios')}</span>
    </Link>
  </li>
  <li className="nav-item">
    <Link 
      to={`${window.location.pathname}#contact`} 
      className={props.nav === "contact" ? 'nav-link js-scroll-trigger active' : 'nav-link js-scroll-trigger'}
    >
      <span>{t('Contacto')}</span>
    </Link>
  </li>
  <li className="nav-item search-option">
    <a className="nav-link" href="/" onClick={handleSearch}>
      <i className="fas fa-search"></i>
    </a>
  </li>
                                    <li className="nav-item">
                                        <LanguageSelector />
                                    </li>
                                </ul>
                            </div>
                        </Row>
                    </Container>
                </div>
            </header>

            {/* <!-- Search wrapper --> */}
            <div className={!isSearch ? 'search-wrapper' : 'search-wrapper wrapper-active'}>
                {/* <!-- Search form --> */}
                <form role="search" method="get" className="search-form" action="#">
                    <input type="search" name="s" id="s" placeholder={t("Buscar palabras clave")} className="searchbox-input" autoComplete="off" required />
                    <span>{t("Introduce tus palabras clave y presiona Enter.")}</span>
                </form>
                {/* <!-- Close button --> */}
                <div className="search-wrapper-close">
                    <span className="search-close-btn" role="button" aria-label={t("Cerrar")} tabIndex={0} onClick={handleSearch}></span>
                </div>
            </div>
        </>
    );
};

export default Header;
