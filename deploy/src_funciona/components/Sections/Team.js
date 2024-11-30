import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Trans } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const Team = () => {
    return (
        <section id="team">
            {/* <!-- Container --> */}
            <Container>
                {/* <!-- Section title --> */}
                <Row className="justify-content-center">
                    <Col className="col-12 col-md-10 col-lg-6">
                        <div className="section-title text-center">
                            <h3><Trans>La Eficiencia Energética. Una Prioridad para Nuestro Equipo.</Trans></h3>
                        </div>
                    </Col>
                </Row>

                <Row className="mision">
                    {/* <!-- Member 1 --> */}
                    <Col className="col-12 col-md-6 col-lg-4 margind-flex align-items-center">
                        <div className="team-member res-margin">
                            <div className="team-image">
                                <StaticImage
                                    src="../../images/team/member-1.jpg" // Ajusta la ruta según tu estructura de proyecto
                                    alt="Miembro del equipo"
                                    layout="fixed" // Ajusta la imagen al tamaño original
                                    width={400} // Ajusta el ancho según tu diseño, si es necesario
                                    height={500} // Ajusta la altura según tu diseño, si es necesario
                                />
                                <div className="team-social">
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="col-12 col-md-6 col-lg-8">
                        <div className="text-column">
                            <h4 className="title"><Trans>Nuestra Misión</Trans></h4>
                            <p><Trans>Compartir nuestra experiencia con aquellos que valoran la calidad y la sostenibilidad. Cada hogar que transformamos refleja nuestro compromiso con la última tecnología y los materiales de primera calidad.</Trans></p>
                            <p><Trans>Si buscas más que simples ventanas y deseas una transformación completa para tu hogar, te invitamos a unirte a nosotros en esta búsqueda de un futuro más eficiente y sostenible. Descubre cómo nuestras soluciones pueden mejorar tu vida en casa y ser parte de tu historia. Juntos, podemos asegurar que cada ventana cuente una historia de confort, eficiencia y sostenibilidad.</Trans></p>
                            <p><Trans>Estamos aquí no solo para mejorar la eficiencia energética de los hogares, sino también para transformar la manera en que se percibe y se disfruta el confort en el hogar.</Trans></p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {/* <!-- Member 2 --> */}
                    <Col className="col-12 col-md-6 col-lg-8">
                        <div className="text-column">
                            <h4 className="title"><Trans>Orgullosos de Nuestro Pasado, Emocionados por el Futuro</Trans></h4>
                            <p><Trans>Soy Quim Rodríguez.<br/>Te acompañaré en todo el proceso de tu renovación. Espero poder resolverte todas las dudas y aconsejarte las mejores soluciones.</Trans></p>
                            <p><Trans>Te ofrezco un servicio personalizado donde gestionaré personalmente todos los pasos de tu compra. Seré yo quien te gestionará la oferta, las condiciones, los plazos, la instalación, los acabados y las garantías.<br/>Podrás resolver cualquier incidencia directamente conmigo desde el principio hasta el fin de tu proyecto.</Trans></p>
                            <h4><Trans>Mi Experiencia Personal</Trans></h4>
                            <p><Trans>Principalmente me he formado trabajando en proyectos de alta eficiencia energética, casas bioclimáticas y certificadas Passivhaus.<br/>Estoy especializado en perfilería de PVC, he trabajado con los principales fabricantes y he podido probar sus productos más eficientes.<br/>He participado en proyectos de alta eficiencia energética con algunos de los arquitectos más innovadores del sector.<br/>Estoy especializado también en renovación de masías, casas rústicas de piedra y en ventanas curvas, en arco o punto redondo.</Trans></p>
                            <p><Trans>Aprovecha toda mi experiencia para conseguir los mejores resultados para tu proyecto.</Trans></p>
                        </div>
                    </Col>
                    <Col className="col-12 col-md-6 col-lg-4">
                        <div className="team-member res-margin">
                            <div className="team-image">
                                <StaticImage
                                    src="../../images/team/member-2.jpg" // Ajusta la ruta según tu estructura de proyecto
                                    alt="Miembro del equipo"
                                    layout="fixed" // Ajusta la imagen al tamaño original
                                    width={400} // Ajusta el ancho según tu diseño, si es necesario
                                    height={500} // Ajusta la altura según tu diseño, si es necesario
                                />
                                <div className="team-social">
                                    <div className="team-social-inner">
                                        <a href="/" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                                        <a href="/" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                                        <a href="/" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                                        <a href="/" aria-label="Dribbble"><i className="fab fa-dribbble"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Team;

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
