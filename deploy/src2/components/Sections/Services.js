import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Services = (props) => {
    return (
        <section id="services" className={props.className}>
            
            {/* <!-- Container --> */}
            <Container>
                
                {/* <!-- Section title --> */}
                <Row className="justify-content-center">
                    <Col className="col-12 col-md-10 col-lg-6">
                        
                        <div className="section-title text-center">
                            <h3>El éxito de nuestra fórmula</h3>
                            <p>Perfil, vidrio e instalación de alta eficiencia.</p>
                        </div>
                        
                    </Col>
                </Row>
            
                <Row>
                    
                    {/* <!-- Service 1 --> */}
                    <Col className="col-12 col-lg-4 res-margin wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0">
                        <div className={props.serviceClassName}>
                            
                            <div className="icon icon-basic-server2"></div>
                            
                            <h5>Perfil de primera calidad</h5>
                            <p>Perfiles con las máximas garantías y certificados de calidad.</p>
                            
                        </div>
                    </Col>

                    {/* <!-- Service 2 --> */}
                    <Col className="col-12 col-lg-4 res-margin wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.3s">
                        <div className={props.serviceClassName}>
                            
                            <div className="icon icon-basic-headset"></div>
                            
                            <h5>Vidrio de altas prestaciones</h5>
                            <p>Vidrios técnicos con los tratamientos más avanzados para obtener los mejores resultados.</p>
                        
                        </div>
                    </Col>

                    {/* <!-- Service 3 --> */}
                    <Col className="col-12 col-lg-4 res-margin wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.6s">
                        <div className={props.serviceClassName}>
                            
                            <div className="icon icon-software-pen"></div>
                            
                            <h5>Instalación óptima</h5>
                            <p>Utilizamos los materiales más aislantes para conseguir las juntas más eficientes.</p>
                        
                        </div>
                    </Col>
                    
                </Row>
                
            </Container>
            
        </section>
    );
}

export default Services;
