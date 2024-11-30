import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { Trans } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';

const FaqsCons = (props) => {
    return (
        <section id="support" className={props.className}>
            <Container>
                <Row className="justify-content-center">
                    <Col className="col-12 col-md-10 col-lg-6">
                        <div className="section-title text-center">
                            <h3><Trans>Preguntas Frecuentes</Trans></h3>
                            <p><Trans>faq_black_friday_intro</Trans></p>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col className="col-12 col-lg-10 offset-lg-1">
                        <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header as="h5">
                                    <Trans>¿Qué nos diferencia de tu actual proveedor de ventanas?</Trans>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        <Trans>Nuestra ventana está pensada para ofrecer el mejor rendimiento térmico y acústico, con una durabilidad asegurada.<br/>Utilizamos perfiles alemanes de primera calidad que nos garantizan un resultado impecable.</Trans>
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header as="h5">
                                    <Trans>Asesormiento Experto</Trans>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        <Trans>Tenemos amplia experiencia en proyectos de alta eficiencia energética, casas bioclimáticas y certificadas Passivhaus.<br/> Queremos poner a disposición de tus clientes toda esa experiencia para ayudarles a elegir la mejor solución. </Trans>
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header as="h5">
                                    <Trans>¿Qué gana tu empresa?</Trans>
                                </Accordion.Header>
                                <Accordion.Body>
                                <p>
                                        <Trans>Tendrás tu porcentaje, como con tu proveedor actual, pero si tu cliente opta por una ventana de mejores prestaciones y un precio más elevado, incrementarás tu porcentaje de beneficios.</Trans>
                                    </p>
                                   <p>
                                        <Trans>Por nuestra experiencia, sabemos que si asesoras bien a un cliente y le ofreces un producto de mayor calidad por un pequeño incremento de precio, la mayoría de los clientes opta por una mejor calidad pagando algo más.<br/>No se trata de vender por precio, sino por calidad.</Trans>
                                    </p>
                                    <p>
                                        <Trans>Mejora la imagen de tu empresa mostrándote como un Experto involucrado en el ahorro energético y la sostenibilidad, que aporta las mejores soluciones y colaboradores.</Trans>
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="3">
                                <Accordion.Header as="h5">
                                    <Trans>Nuevo perfil de cliente</Trans>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        <Trans>Ofrecer soluciones sostenibles puede ayudarte a captar un perfil de cliente de "high ticket" que valora la calidad y está dispuesto a asumir un sobrecoste.<br/>Abre tu mercado a este perfil de cliente y especialízate en soluciones energéticas. </Trans>
                                    </p>
                                    
                                   
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="4">
                                <Accordion.Header as="h5">
                                    <Trans>Nuestro compromiso contigo</Trans>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        <Trans>Nos comprometemos a cumplir con las expectativas y asumir las responsabilidades. Dejamos claros todos los detalles del proyecto para evitar sorpresas y quejas, y hacemos un seguimiento de todo el proceso para evitar sobrecostos.</Trans>
                                    </p>
                                   
                                    
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>

                <div className="empty-30"></div>

                <Row>
                    <Col className="col-12">
                        <p className="text-center mb-0">
                            <Trans>faq_black_friday_contact</Trans>
                            <a href="#contact"><strong><Trans>faq_black_friday_contact_link</Trans></strong></a>.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default FaqsCons;

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
