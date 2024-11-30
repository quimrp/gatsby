import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';
import Bot from "~images/bot-whatsapp.png";

const Cta = () => {
    const { t } = useTranslation();

    return (
        <Container className="text-center py-5">
            <Row>
                <Col>
                    <h2 className="mb-4"><Trans>Pide presupuesto por WhatsApp</Trans></h2>
                    <h2 className="mb-4"><Trans>Asistente virtual WhatsApp 24h/7 días</Trans></h2>
                    
                    <div className="cta-image">
                        <img src={Bot} alt="bot" />
                    </div>
                    <div>
                        <div className="single-box">
                            <p className="winbot-text">
                                <i className="fas fa-quote-left winbot"></i> 
                                <Trans
                                    i18nKey="Hola, soy WinBot, el asistente virtual de Instal Tancaments.<br />Lo sé todo sobre ventanas y las ayudas NexGeneration.<br />Puedes pedirme presupuesto directamente o consultarme cualquier duda.<br />Todo por WhatsApp, rápido, cómodo y sin compromiso."
                                    components={{ br: <br /> }}
                                />
                                <i className="fas fa-quote-right winbot"></i>
                            </p>
                        </div>
                    </div>

                    <a href="https://wa.me/34613464955?text=presupuesto" target="_blank" rel="noopener noreferrer">
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
