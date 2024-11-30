import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { Trans } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';

const Support = (props) => {
    return (
        <section id="support" className={props.className}>
            {/* <!-- Container --> */}
            <Container>
                {/* <!-- Section title --> */}
                <Row className="justify-content-center">
                    <Col className="col-12 col-md-10 col-lg-6">
                        <div className="section-title text-center">
                            <h3><Trans>NextGen Preguntas Frecuentes</Trans></h3>
                            <p><Trans>Las siguientes preguntas son las dudas que más frecuentemente tienen nuestros clientes.</Trans></p>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col className="col-12 col-lg-10 offset-lg-1">
                        {/* <!-- FAQ accordion --> */}
                        <Accordion defaultActiveKey="0" flush>
                            {/* <!-- Question 1 --> */}
                            <Accordion.Item eventKey="0">
                                <Accordion.Header as="h5">
                                    <Trans>¿Necesito estar empadronado en la vivienda para obtener la subvención?</Trans>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        <Trans>Sí, es requisito indispensable estar empadronado para obtener la subvención.</Trans>
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>

                            {/* <!-- Question 2 --> */}
                            <Accordion.Item eventKey="1">
                                <Accordion.Header as="h5">
                                    <Trans>¿Los inquilinos pueden acceder a las ayudas?</Trans>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        <Trans>
                                            Sí, para poder acceder a las ayudas, los inquilinos deberán presentar un certificado de empadronamiento y acreditar haber llegado a un acuerdo con el propietario por el cual el inquilino asume los costes de la rehabilitación.
                                        </Trans>
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>

                            {/* <!-- Question 3 --> */}
                            <Accordion.Item eventKey="2">
                                <Accordion.Header as="h5">
                                    <Trans>¿El IVA se puede computar como gasto subvencionable?</Trans>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        <Trans>
                                            Sí, por norma general y para particulares, el IVA se computa como gasto subvencionable. Para calcular las ayudas, se utiliza el total de la factura con el IVA incluido, a excepción de empresas o particulares que puedan recuperarlo o compensarlo total o parcialmente, en cuyo caso el importe subvencionable será la base imponible sin IVA.
                                        </Trans>
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>

                            {/* <!-- Question 4 --> */}
                            <Accordion.Item eventKey="3">
                                <Accordion.Header as="h5">
                                    <Trans>¿Qué plazo tengo para realizar las obras?</Trans>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        <Trans>
                                            El plazo para la ejecución de las obras de rehabilitación será de 12 meses desde la fecha de concesión de las ayudas. El plazo para la solicitud de las ayudas termina el 31/12/2024. Esto quiere decir que debes presentar la solicitud de las ayudas antes de finales de 2024, pero tendrás los 12 meses posteriores a la concesión de las ayudas para ejecutar las obras.
                                        </Trans>
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>

                            {/* <!-- Question 5 --> */}
                            <Accordion.Item eventKey="4">
                                <Accordion.Header as="h5">
                                    <Trans>¿Qué es exactamente la deducción fiscal NextGen?</Trans>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div className="section-title">
                                        <h4><Trans>¿Qué es la deducción fiscal NextGen?</Trans></h4>
                                        <p><Trans>La deducción fiscal NextGen es una reducción en el monto de impuestos que debes pagar en tu declaración de la renta por realizar obras de rehabilitación de ventanas con nuestra empresa. A continuación, te explicamos cómo funciona y cómo puedes beneficiarte de ella.</Trans></p>
                                    </div>
                                    <h5><Trans>¿Cómo se aplica la deducción fiscal NextGen?</Trans></h5>
                                    <p><Trans>En tu declaración de la renta, después de calcular cuánto debes pagar en impuestos, puedes aplicar ciertas deducciones permitidas por la ley para reducir esa cantidad. La deducción fiscal NexGen es una de estas deducciones.</Trans></p>
                                    <h6><Trans>Ejemplo práctico:</Trans></h6>
                                    <ul>
                                        <li><strong><Trans>Sin deducción:</Trans></strong> <Trans>Supongamos que después de todos los cálculos, tu declaración de la renta indica que debes pagar 1,000 euros en impuestos.</Trans></li>
                                        <li><strong><Trans>Con deducción NexGen:</Trans></strong> <Trans>Si tienes derecho a una deducción fiscal de 300 euros por las obras de rehabilitación de ventanas realizadas por nuestra empresa, restarías esos 300 euros de los 1,000 euros que debes pagar. Como resultado, solo tendrías que pagar 700 euros.</Trans></li>
                                    </ul>
                                    <h5><Trans>Diferencias entre deducción fiscal NextGen y subvención NextGen:</Trans></h5>
                                    <ul>
                                        <li><strong><Trans>Deducción fiscal NextGen:</Trans></strong>
                                            <ul>
                                                <li><Trans>Reduces la cantidad de impuestos que debes pagar.</Trans></li>
                                                <li><Trans>No recibes dinero directamente; simplemente pagas menos impuestos.</Trans></li>
                                                <li><Trans>Si tu declaración de la renta no tiene saldo a pagar, no recibirás la deducción como dinero en efectivo.</Trans></li>
                                            </ul>
                                        </li>
                                        <li><strong><Trans>Subvención NextGen:</Trans></strong>
                                            <ul>
                                                <li><Trans>Recibes una cantidad de dinero que se deposita directamente en tu cuenta bancaria.</Trans></li>
                                                <li><Trans>Es una ayuda económica que puedes utilizar para cubrir los gastos de las obras de rehabilitación de ventanas.</Trans></li>
                                                <li><Trans>No depende de tu declaración de la renta.</Trans></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <h5><Trans>Importancia de la deducción fiscal NextGen:</Trans></h5>
                                    <ul>
                                        <li><strong><Trans>Ahorro en impuestos:</Trans></strong> <Trans>La deducción fiscal NextGen es beneficiosa porque te permite reducir tu carga impositiva, lo cual puede ser significativo dependiendo del monto de la deducción.</Trans></li>
                                        <li><strong><Trans>Incentivo:</Trans></strong> <Trans>Es un incentivo adicional para realizar obras de rehabilitación de ventanas con nuestra empresa, ya que además de la subvención directa, también puedes beneficiarte de una reducción en tus impuestos.</Trans></li>
                                    </ul>
                                    <h5><Trans>Consideraciones:</Trans></h5>
                                    <ul>
                                        <li><strong><Trans>Documentación:</Trans></strong> <Trans>Es importante conservar toda la documentación y justificantes de los gastos realizados para poder aplicar correctamente la deducción fiscal NextGen.</Trans></li>
                                        <li><strong><Trans>Normativas:</Trans></strong> <Trans>Las normativas sobre deducciones fiscales pueden variar, por lo que es recomendable consultar con un asesor fiscal o revisar las leyes fiscales vigentes para asegurarte de que cumples con todos los requisitos.</Trans></li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>

                            {/* <!-- Question 6 --> */}
                            <Accordion.Item eventKey="5">
                                <Accordion.Header as="h5">
                                    <Trans>¿Se pueden deducir los gastos de tramitación y gestión?</Trans>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        <Trans>
                                            Sí, son subvencionables los costos de gestión inherentes a la ejecución de las obras y los gastos asociados, honorarios de profesionales, costes de redacción de proyectos, informes técnicos y certificados necesarios, y gastos derivados de la tramitación administrativa siempre que estén debidamente justificados y dentro del límite de las ayudas. No se consideran costes subvencionables los que corresponden a las licencias de obras, tasas, impuestos o tributos.
                                        </Trans>
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>

                <div className="empty-30"></div>

                <Row>
                    <Col className="col-12">
                        <p className="text-center mb-0"><Trans>Si tienes alguna otra duda, </Trans><a href="#contact"><strong><Trans>consúltanos aquí</Trans></strong></a>.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Support;

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