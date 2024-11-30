import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useForm } from '@formspree/react';
import Email from "~images/email.png";
import { Trans, useTranslation } from 'react-i18next';
import { graphql } from 'gatsby';

const Contact = (props) => {
    const { t } = useTranslation();
    const [state, handleSubmit] = useForm("xovajvbr");
    const frm = useRef(null);
    const result = useRef(null);

    if (state.succeeded) {
        frm.current.style.display = "none";
        result.current.style.display = "block";
    }


    return (
        <section id="contact" className={props.className}>
		
			{/* <!-- Container --> */}
			<Container>
				
				{/* <!-- Section title --> */}
				<Row className="justify-content-center">
					<div className="col-12 col-md-10 col-lg-6">
                
						<div className="section-title text-center">
							<h3><Trans>Contacta con nosotros</Trans></h3>
							<p><Trans
                            components={{ br: <br /> }}
                            >
                            solicitar_presupuesto</Trans></p>
                        </div>
						
					</div>
				</Row>

				<Row>
					
					{/* <!-- Contact info --> */}
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
                        
                        <h5>
                            <span className="icon icon-basic-mail"></span> 
                            <Trans>Email</Trans>
                        </h5>
                        <p>
                        <img src={Email} alt="Email" />
                        </p>
                        
                        <h5>
                            <span className="icon icon-basic-clock"></span> 
                            <Trans>Horario</Trans>
                        </h5>
                        <p>
                            <Trans>09:00 AM a 18:00 PM</Trans>
                        </p>
                        
					</Col>
					
					{/* <!-- Contact form --> */}
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
                                <Col className="col-12 col-lg-12">
                                    <div className="form-group mt-2 mb-3">
                                        <input 
                                            type="text" 
                                            name="Telefono" 
                                            className="form-control field-telefono" 
                                            placeholder={t('Teléfono')} 
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
                                    <button 
                                        type="submit" 
                                        id="contact-submit" 
                                        name="send" 
                                        className="btn" 
                                        disabled={state.submitting}
                                    >
                                        <Trans>Enviar</Trans>
                                    </button>
                                </Col>
                            </Row>
                            
                        </form>
                        
                        {/* <!-- Submit Results --> */}
                        <div className="contact-form-result" ref={result}>
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