import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Trans } from 'gatsby-plugin-react-i18next';
import { StaticImage } from 'gatsby-plugin-image';

const Cta = () => {
    return (
        <Container className="text-center py-5">
            <Row>
                <Col>
                    <h2 className="mb-4"><Trans>Pide presupuesto por WhatsApp</Trans></h2>
                    <h2 className="mb-4"><Trans>Asistente virtual WhatsApp 24h/7 días</Trans></h2>
                    
                    <div className="cta-image">
                        <StaticImage
                            src="../../images/bot-whatsapp.png"
                            alt="Bot WhatsApp"
                            placeholder="blurred"
                            //layout="fixed"
                            //width={300}
                            quality={100}
                        />
                    </div>
                    <div>
                        <div className="single-box">
                            <p className="winbot-text">
                                <i className="fas fa-quote-left winbot"></i> 
                                <Trans
                                    i18nKey="Hola, soy WinBot, el asistente virtual de Instal Tancaments.<br />Lo sé todo sobre ventanas y las ayudas NextGeneration.<br />Puedes pedirme presupuesto directamente o consultarme cualquier duda.<br />Todo por WhatsApp, rápido, cómodo y sin compromiso."
                                    components={{ br: <br /> }}
                                />
                                <i className="fas fa-quote-right winbot"></i>
                            </p>
                        </div>
                    </div>

                    <a href="https://wa.me/34613464955?text=presupuesto" target="_blank" rel="noopener noreferrer"  id="btn-presupuesto-whatsapp">
                        <Button variant="primary" size="lg">
                            <Trans>Presupuesto WhatsApp</Trans>
                        </Button>
                    </a>
                    
                </Col>
            </Row>
        </Container>
    );
};

export default Cta;
