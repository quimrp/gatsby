import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';

// Images
import Logo from "~images/logo.png";
import Logo2X from "~images/logo@2x.png";
import LogoWhite from "~images/logo-white.png";
import LogoWhite2X from "~images/logo-white@2x.png";

const Header = (props) => {
    const [isMobileMenu, setIsMobileMenu] = useState(false);
    const [isSearch, setIsSearch] = useState(false);
    const { t } = useTranslation();

    const handleMobileMenu = (e) => {
        e.preventDefault();
        setIsMobileMenu(prevState => !prevState);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setIsSearch(prevState => !prevState);
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
                                        <img src={LogoWhite} srcSet={`${LogoWhite2X} 2x`} alt={t('Instal Tancaments logo in white')} />
                                    </Link>
                                    <Link to="/" className="navbar-brand navbar-brand2">
                                        <img src={Logo} srcSet={`${Logo2X} 2x`} alt={t('Instal Tancaments logo')} />
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
                                    <a href="/" className="logo">
                                        <img src={Logo} srcSet={`${Logo2X} 2x`} alt={t('Instal Tancaments logo')} />
                                    </a>
                                    {/* <!-- Close button --> */}
                                    <span className="close-button" role="button" aria-label={t('Close')} tabIndex={0} onClick={handleMobileMenu}></span>
                                </div>

                                {/* <!-- Items --> */}
                                <ul className="nav-menu d-lg-flex flex-wrap list-unstyled justify-content-center">
                                    <li className="nav-item">
                                        <Link to="/#top-page" className={props.nav === "home" ? 'nav-link js-scroll-trigger active' : 'nav-link js-scroll-trigger'}>
                                            <span>{t('Inicio')}</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/#overview" className="nav-link js-scroll-trigger">
                                            <span>{t('Subvención')}</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/#features" className="nav-link js-scroll-trigger">
                                            <span>{t('Características')}</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/#pricing" className="nav-link js-scroll-trigger">
                                            <span>{t('Precios')}</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/#contact" className={props.nav === "contact" ? 'nav-link js-scroll-trigger active' : 'nav-link js-scroll-trigger'}>
                                            <span>{t('Contacto')}</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item search-option">
                                        <a className="nav-link" href="/" onClick={handleSearch}>
                                            <i className="fas fa-search"></i>
                                        </a>
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
}

export default Header;
