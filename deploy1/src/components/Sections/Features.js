import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import AwesomeFeatures from "~images/features/awesome-features.png";
import { graphql } from 'gatsby';
const Features = (props) => {
  const { t } = useTranslation();

  return (
    <section id="features" className={props.className}>
      <Container>
        <Row className="justify-content-center">
          <Col className="col-12 col-md-10 col-lg-6">
            <div className="section-title text-center">
              <h3><Trans>Nuestra Ventana</Trans></h3>
              <h4><Trans>Características técnicas</Trans></h4>
              <p><Trans>Aislamiento térmico, acústico, protección solar y hermeticidad.</Trans></p>
            </div>
          </Col>
        </Row>

        <Row className="d-flex align-items-center">
          <Col className="col-12 col-md-6 col-lg-4">
            <ul className="features-item">
              <li>
                <div className={"feature-box d-flex" + (props.boxLeft ? " box-left" : "")}>
                  <div className="box-icon style">
                    <div className="icon-weather-sun" style={{ fontSize: '4rem', width: 'auto', height: 'auto' }}></div>
                  </div>
                  <div className="box-text align-self-center align-self-md-start">
                    <h4><Trans>Transmitancia térmica del perfil 1,0 UWK M2</Trans></h4>
                    <p><Trans>Su baja transmitancia térmica la convierte en una de las ventanas más aislantes del mercado actual.</Trans></p>
                  </div>
                </div>
              </li>
              <li>
                <div className={"feature-box d-flex" + (props.boxLeft ? " box-left" : "")}>
                  <div className="box-icon">
                    <div className="icon-weather-sun" style={{ fontSize: '4rem', width: 'auto', height: 'auto' }}></div>
                  </div>
                  <div className="box-text align-self-center align-self-md-start">
                    <h4><Trans>Hermeticidad</Trans></h4>
                    <p><Trans>Las triple junta y el herraje perimetral le dan una hermeticidad increíble, superando sin problemas la prueba BlowerDoor obligatoria para el certificado Passivhaus.</Trans></p>
                  </div>
                </div>
              </li>
              <li>
                <div className={"feature-box d-flex" + (props.boxLeft ? " box-left" : "")}>
                  <div className="box-icon">
                    <div className="icon-weather-sun" style={{ fontSize: '4rem', width: 'auto', height: 'auto' }}></div>
                  </div>
                  <div className="box-text align-self-center align-self-md-start">
                    <h4><Trans>Protección solar</Trans></h4>
                    <p><Trans>El vidrio con control solar filtra el 50% de la radiación solar responsable del efecto invernadero.</Trans></p>
                  </div>
                </div>
              </li>
            </ul>
          </Col>

          <Col className="col-12 col-lg-4 d-none d-lg-block">
            <div className="features-thumb text-center">
              <img src={AwesomeFeatures} alt="" />
            </div>
          </Col>

          <Col className="col-12 col-md-6 col-lg-4">
            <ul className="features-item">
              <li>
                <div className="feature-box d-flex">
                  <div className="box-icon">
                    <div className="icon-weather-sun" style={{ fontSize: '4rem', width: 'auto', height: 'auto' }}></div>
                  </div>
                  <div className="box-text align-self-center align-self-md-start">
                    <h4><Trans>Garantía</Trans></h4>
                    <p><Trans>Nuestro PVC está formulado especialmente para climas cálidos con mucho sol, a diferencia de los perfiles de países menos cálidos que no incorporan la protección solar del perfil.</Trans></p>
                  </div>
                </div>
              </li>
              <li>
                <div className="feature-box d-flex">
                  <div className="box-icon">
                    <div className="icon-weather-sun" style={{ fontSize: '4rem', width: 'auto', height: 'auto' }}></div>
                  </div>
                  <div className="box-text align-self-center align-self-md-start">
                    <h4><Trans>Instalación</Trans></h4>
                    <p><Trans>Utilizamos espuma de alta densidad certificada y silicona de calidad para garantizar una junta de alta hermeticidad.</Trans></p>
                  </div>
                </div>
              </li>
              <li>
                <div className="feature-box d-flex">
                  <div className="box-icon">
                    <div className="icon-weather-sun" style={{ fontSize: '4rem', width: 'auto', height: 'auto' }}></div>
                  </div>
                  <div className="box-text align-self-center align-self-md-start">
                    <h4><Trans>Servicio post-venta</Trans></h4>
                    <p><Trans>Nuestro compromiso contigo incluye un servicio post-venta rápido y eficaz.</Trans></p>
                  </div>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Features;
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
`;
