import React, { useRef, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useForm } from '@formspree/react';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { StaticImage } from 'gatsby-plugin-image';

const Contact = () => {
    const { t } = useTranslation();
    const [state, handleSubmit] = useForm("xovajvbr");
    const frm = useRef(null);
    const result = useRef(null);
    return (
        <section id="contact" className="contact-section">
            <Container>
                <Row className="justify-content-center">
                    <div className="col-12 col-md-10 col-lg-6">
                        <div className="section-title text-center">
                            <h3><Trans>Contacta con nosotros</Trans></h3>
                            <p>
                                <Trans
                                    components={{ br: <br /> }}
                                >
                                    solicitar_presupuesto
                                </Trans>
                            </p>
                        </div>
                    </div>
                </Row>

                <Row>
                    {/* Información de contacto */}
                    <Col className="contact-info col-12 col-lg-4 res-margin">
                        <h5>
                            <span className="icon icon-basic-geolocalize-05"></span>
                            <Trans>Taller</Trans>
                        </h5>
                        <p>
                            C/Roures 13 Nau 1<br/>
                            17111 Vulpellac <br/>
                            Girona<br/>
                            <Trans>Para visitar el showroom, solicita cita previa.</Trans>
                        </p>
                        <h5>
                            <span className="icon icon-basic-smartphone"></span>
                            <Trans>Teléfono</Trans>
                        </h5>
                        <p><a href="tel:+34661878157">661 878 157</a></p>
                        <p>
                        <h5>
                            <span className="icon icon-basic-mail"></span>
                            <Trans>Email</Trans>
                        </h5>
                        </p>
                            <StaticImage 
                                src="../../images/email.png" 
                                alt="Email" 
                                placeholder="blurred" 
                                quality={100}
                            />
                        
                        <h5>
                            <span className="icon icon-basic-clock"></span>
                            <Trans>Horario</Trans>
                        </h5>
                        <p>
                            <Trans>09:00 AM a 18:00 PM</Trans>
                        </p>
                    </Col>

                    {/* Formulario de contacto */}
                    <Col className="col-12 col-lg-8">
                        <form id="contact-form" onSubmit={handleSubmit} ref={frm}>
                            <Row>
                                <Col className="col-12 col-lg-6">
                                    <div className="form-group mt-2 mb-3">
                                        <input 
                                            type="text" 
                                            name="name" 
                                            className="form-control field-name" 
                                            placeholder={t('Nombre')}
                                        />
                                    </div>
                                </Col>
                                <Col className="col-12 col-lg-6">
                                    <div className="form-group mt-2 mb-3">
                                        <input 
                                            type="email" 
                                            name="email" 
                                            className="form-control field-email" 
                                            placeholder={t('Email')}
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="col-12 col-lg-6">
                                    <div className="form-group mt-2 mb-3">
                                        <input 
                                            type="text" 
                                            name="Telefono" 
                                            className="form-control field-telefono" 
                                            placeholder={t('Teléfono')} 
                                        />
                                    </div>
                                </Col>
                           
                                <Col className="col-12 col-lg-6">
                                    <div className="form-group mt-2 mb-3">
                                        <input 
                                            type="text" 
                                            name="poblacion" 
                                            className="form-control field-telefono" 
                                            placeholder={t('Población')} 
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="col-12 col-lg-12">
                                    <div className="form-group mt-2 mb-3">
                                        <textarea 
                                            name="message" 
                                            rows="4" 
                                            className="form-control field-message" 
                                            placeholder={t('Mensaje')} 
                                        ></textarea>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="col-12 col-lg-12 mt-2">
                                    <Button 
                                        type="submit" 
                                        id="contact-submit" 
                                        name="send" 
                                        className="btn" 
                                        disabled={state.submitting}
                                    >
                                        <Trans>Enviar</Trans>
                                    </Button>
                                </Col>
                            </Row>
                        </form>
                        {/* Resultado del envío */}
                        <div className="contact-form-result" ref={result} style={{ display: 'none' }}>
                            <h4><Trans>Gracias por tu consulta</Trans></h4>
                            <p><Trans>Hemos recibido tu mensaje correctamente, recibirás respuesta lo antes posible</Trans></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;
