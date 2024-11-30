import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'gatsby';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { StaticImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import Cta from './Cta';

const Pricing = (props) => {
  const { t, i18n } = useTranslation();

  // Función para construir el enlace localizado
  const getLocalizedLink = (path) => {
    const lang = i18n.language || 'en'; // Usa el idioma actual, por defecto 'en'
    return `/${lang}${path}`;
  };

  return (
    <section id="pricing" className={props.className}>
      <Container>
        <Row className="justify-content-center">
          <Col className="col-12 col-md-10 col-lg-6">
            <div className="section-title text-center">
              <h3><Trans>Planes de precios</Trans></h3>
              <p>
                <Trans>Solicita tu presupuesto personalizado</Trans><br />
                <Trans>Recibirás una oferta con las tres opciones siguientes</Trans>
              </p>
            </div>
          </Col>
        </Row>

        <Row className="row align-items-center pricing-plans">
          {/* Plan 1 */}
          <Col className="col-12 col-lg-4 res-margin">
            <div className="price-table">
              <h2 className="plan-type"><Trans>Ecoplus 700</Trans></h2>
              <p>
                <Trans>PVC de alta calidad sin extras</Trans><br />
                <Trans>el mejor precio</Trans>
              </p>
              <StaticImage
                src="../../images/banner/single-welcome.png" // Ajusta la ruta según tu estructura de proyecto
                alt=""
                className="price-image"
                
                width={600}
                height={400}
              />
              <p className="section"><Trans>Perfilería</Trans></p>
              <ul className="list-unstyled plan-list">
                <li><Trans>Perfil de 70 mm</Trans></li>
                <li><Trans>Doble junta</Trans></li>
                <li><Trans>5 cámaras</Trans></li>
                <li><Trans>Tapa de persiana de 24 mm</Trans></li>
              </ul>
              <div className="section2">
                <p className="section"><Trans>Vidrio</Trans></p>
                <StaticImage
                  src="../../images/price-table/vidrio-camara.jpeg" // Ajusta la ruta según tu estructura de proyecto
                  alt=""
                  className="price-image"
                  layout="constrained"
                  width={600}
                  height={400}
                />
                <ul className="list-unstyled plan-list">
                  <li><Trans>Vidrio de 24 mm</Trans></li>
                </ul>
              </div>
              <div className="section2">
                <p className="section"><Trans>Persiana</Trans></p>
                <StaticImage
                  src="../../images/price-table/caja-persiana.jpeg" // Ajusta la ruta según tu estructura de proyecto
                  alt=""
                  className="price-image"
                  layout="constrained"
                  width={600}
                  height={400}
                />
                <ul className="list-unstyled plan-list">
                  <li><Trans>Marco de la tapa de 70 mm</Trans></li>
                  <li><Trans>Tapa de persiana de 24 mm</Trans></li>
                  <li><Trans>Soportes cojinete</Trans></li>
                  <li><Trans>Sistema anti caída eje</Trans></li>
                  <li><Trans>*Motor Came opcional</Trans></li>
                </ul>
              </div>
              <a href="#contact" className="btn btn-outline-primary btn-sm mt-4">
              {t('¡Solicita tu presupuesto ahora!')}
              </a>
            </div>
          </Col>

          {/* Plan 2 */}
          <Col className="col-12 col-lg-4 res-margin">
            <div className="price-table plan-popular mb-4 mb-sm-5 mb-lg-0">
              <h2 className="plan-type"><Trans>Ecoplus 760</Trans></h2>
              <p>
                <Trans>Perfil más aislante de 76 mm con triple junta</Trans><br />
                <Trans>vidrio de 30 mm + tratamiento térmico</Trans>
              </p>
              <StaticImage
                src="../../images/banner/single-welcome.png" // Ajusta la ruta según tu estructura de proyecto
                alt=""
                className="price-image"
                layout="constrained"
                width={600}
                height={400}
              />
              <p className="section"><Trans>Perfilería</Trans></p>
              <ul className="list-unstyled plan-list">
                <li><Trans>Perfil de 76 mm</Trans></li>
                <li><Trans>Triple junta</Trans></li>
                <li><Trans>7 cámaras</Trans></li>
                <li><Trans>Tapa de persiana de 30 mm</Trans></li>
              </ul>
              <div className="section2">
                <p className="section"><Trans>Vidrio</Trans></p>
                <StaticImage
                  src="../../images/price-table/vidrio-camara.jpeg" // Ajusta la ruta según tu estructura de proyecto
                  alt=""
                  className="price-image"
                  layout="constrained"
                  width={600}
                  height={400}
                />
                <ul className="list-unstyled plan-list">
                  <li><Trans>Vidrio de 30 mm</Trans></li>
                  <li><Trans>Tratamiento térmico</Trans></li>
                </ul>
              </div>
              <div className="section2">
                <p className="section"><Trans>Persiana</Trans></p>
                <StaticImage
                  src="../../images/price-table/caja-persiana.jpeg" // Ajusta la ruta según tu estructura de proyecto
                  alt=""
                  className="price-image"
                  layout="constrained"
                  width={600}
                  height={400}
                />
                <ul className="list-unstyled plan-list">
                  <li><Trans>Marco de la tapa de 76 mm</Trans></li>
                  <li><Trans>Tapa de persiana de 30 mm</Trans></li>
                  <li><Trans>Soportes cojinete</Trans></li>
                  <li><Trans>Sistema anti caída eje</Trans></li>
                  <li><Trans>*Motor Came opcional</Trans></li>
                </ul>
              </div>
              <a href="#contact" className="btn btn-outline-primary btn-sm mt-4">
              {t('¡Solicita tu presupuesto ahora!')}
              </a>
              <div className="card-ribbon">
                <span><Trans>Más Vendido</Trans></span>
              </div>
            </div>
          </Col>

          {/* Plan 3 */}
          <Col className="col-12 col-lg-4">
            <div className="price-table">
              <h2 className="plan-type"><Trans>Exclusive 820</Trans></h2>
              <p>
                <Trans>Perfil de 82 mm con triple vidrio de 50 mm</Trans><br />
                <Trans>tratamiento térmico, solar y gas Argón</Trans>
              </p>
              <StaticImage
                src="../../images/banner/single-welcome.png" // Ajusta la ruta según tu estructura de proyecto
                alt="82"
                className="price-image"
                layout="constrained"
                width={600}
                  height={400}
              />
              <p className="section"><Trans>Perfilería</Trans></p>
              <ul className="list-unstyled plan-list">
                <li><Trans>Perfil de 82 mm</Trans></li>
                <li><Trans>Triple junta</Trans></li>
                <li><Trans>7 cámaras</Trans></li>
                <li><Trans>Tapa de persiana de 48 mm</Trans></li>
              </ul>
              <div className="section2">
                <p className="section"><Trans>Vidrio</Trans></p>
                <StaticImage
                  src="../../images/price-table/vidrio-camara.jpeg" // Ajusta la ruta según tu estructura de proyecto
                  alt=""
                  className="price-image"
                  //layout="constrained"
                  width={600}
                  height={400}
                />
                <ul className="list-unstyled plan-list">
                  <li><Trans>Triple vidrio</Trans></li>
                  <li><Trans>Vidrio de 50 mm</Trans></li>
                  <li><Trans>Tratamiento térmico</Trans></li>
                  <li><Trans>Tratamiento solar</Trans></li>
                  <li><Trans>Gas Argón</Trans></li>
                </ul>
              </div>
              <div className="section2">
                <p className="section"><Trans>Persiana</Trans></p>
                <StaticImage
                  src="../../images/price-table/caja-persiana.jpeg" // Ajusta la ruta según tu estructura de proyecto
                  alt=""
                  className="price-image"
                  layout="constrained"
                  width={600}
                  height={400}
                />
                <ul className="list-unstyled plan-list">
                  <li><Trans>Marco de la tapa de 82 mm</Trans></li>
                  <li><Trans>Tapa de persiana de 48 mm</Trans></li>
                  <li><Trans>Soportes cojinete</Trans></li>
                  <li><Trans>Sistema anti caída eje</Trans></li>
                  <li><Trans>*Motor Came opcional</Trans></li>
                </ul>
              </div>
              <a href="#contact" className="btn btn-outline-primary btn-sm mt-4">
          {t('¡Solicita tu presupuesto ahora!')}
        </a>
            </div>
          </Col>
        </Row>
      </Container>
      <Cta />
    </section>
  );
}

export default Pricing;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
