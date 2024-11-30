import React, { useRef, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


// Images
import Client_1 from "~images/testimonials/client-1.jpg";
import Client_2 from "~images/testimonials/client-2.jpg";
import Client_3 from "~images/testimonials/client-3.jpg";
import Client_4 from "~images/testimonials/client-4.jpg";
import Client_5 from "~images/testimonials/client-5.jpg";
import Client_6 from "~images/testimonials/client-6.jpg";
import Client_7 from "~images/testimonials/client-7.jpg";
import Client_8 from "~images/testimonials/client-8.jpg";
import Client_9 from "~images/testimonials/client-9.jpg";
import PoweredGoogle from "~images/powered-google.png";
const testimonialSlider = {
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	arrows: false,
  	fade: true,
  	rtl: false,
};

const testimonialNav = {
  	slidesToShow: 6,
  	slidesToScroll: 1,
  	arrows: false,
  	centerMode: true,
  	focusOnSelect: true,
  	variableWidth: false,
  	rtl: false,
  	responsive: [
		{
      		breakpoint: 991,
      		settings: {
        		slidesToShow: 3,
        		arrows: false,
      		},
    	},
    	{
      		breakpoint: 480,
      			settings: {
        		slidesToShow: 1,
        		arrows: false,
      		},
    	}
	]
};

const Testimonial = (props) => {
    const testimonialNavRef = useRef(null);
    const testimonialSliderRef = useRef(null);

    const [state, setState] = useState({
        nav1: testimonialNavRef.current,
        nav2: testimonialSliderRef.current,
    });

    const { nav1, nav2 } = state;

    useEffect(() => {
        let unmounted = false;

        if (!unmounted) {
            setState({
                nav1: testimonialNavRef.current,
                nav2: testimonialSliderRef.current,
            });
        }

        return () => (unmounted = true);
        }, [testimonialSliderRef, testimonialNavRef]
    );

    return (
        <section id="testimonials" className={props.className}>
			
			{/* <!-- Container --> */}
			<Container>
				
				{/* <!-- Section title --> */}
				<Row className="row justify-content-center">
					<Col className="col-12 col-md-10 col-lg-6">
						
						<div className="section-title text-center">
							<h3><Trans>La opinión de nuestros clientes</Trans></h3>
							<div className="rating-container">
    <span className="rating-text">4,9</span>
    <span className="star-container" aria-label="4,9 estrellas">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
    </span>
    <span className="review-count" aria-label="39 reseñas"> (39)</span>
</div>


							<p><Trans>Reseñas de Google de nuestros amigos y clientes</Trans></p>
							
						</div>
						
					</Col>
				</Row>
				
				<Row className="row">
					<Col className="col-12 testimonial-carousel">
						
						{/* <!-- Text --> */}
						<div className="block-text row">

                            <Slider
                                ref={testimonialSliderRef}
                                className="carousel-text testimonial-slider col-12 col-lg-8 offset-lg-2"
                                asNavFor={nav1}
                                {...testimonialSlider}
                            >	

								<div>
									<div className="single-box">
									<div className="fas fa-star fa-star star"></div>
										<div className="fas fa-star fa-star star"></div>
										<div className="fas fa-star fa-star star"></div>
										<div className="fas fa-star fa-star star"></div>
										<div className="fas fa-star fa-star star"></div>
										<p><i className="fas fa-quote-left gold"></i> Encargué el cambio de todas las ventanas, balcón y galería de mi casa a Quim y no puedo estar más satisfecha: resolvió todas mis dudas, cumplió con las fechas previstas, el trabajo se realizó rápido y de forma excelente... Quim responde a cualquier consulta o duda que se genere durante el proceso. Lo recomiendo al 100 por 100! <i className="fas fa-quote-right gold"></i></p>
										
										</div>
									
								</div>
								
                                <div>
									<div className="single-box">
									<div className="fas fa-star fa-star star"></div>
										<div className="fas fa-star fa-star star"></div>
										<div className="fas fa-star fa-star star"></div>
										<div className="fas fa-star fa-star star"></div>
										<div className="fas fa-star fa-star star"></div><p><i className="fas fa-quote-left gold"></i> Encargué ventanas para toda nuestra casa a Quim, todo se entregó correctamente y encajó a la perfección. Estamos muy satisfechos y definitivamente recomendamos trabajar con Quim.. <i className="fas fa-quote-right"></i></p>
										
										</div>
								</div>
								
								<div>
									<div className="single-box">
									<div className="fas fa-star fa-star star"></div>
										<div className="fas fa-star fa-star star"></div>
										<div className="fas fa-star fa-star star"></div>
										<div className="fas fa-star fa-star star"></div>
										<div className="fas fa-star fa-star star"></div>
										<p><i className="fas fa-quote-left"></i> Profesionalidad, amabilidad, calidad del trabajo y de los materiales ; muy satisfechos y sin duda lo recomendamos a todo aquel que quiera un resultado a regola d'arte sin precios desorbitados. <i className="fas fa-quote-right"></i></p>
									
										</div>
								</div>
								
								<div>
									<div className="single-box">
									<div className="fas fa-star fa-star star"></div>
										<div className="fas fa-star fa-star star"></div>
										<div className="fas fa-star fa-star star"></div>
										<div className="fas fa-star fa-star star"></div>
										<div className="fas fa-star fa-star star"></div>
										<p><i className="fas fa-quote-left"></i> Trabajé 2 veces con Quim y siempre muy buen trabajo, productos de calidad al mejor precio. Lo recomiendo 100% <i className="fas fa-quote-right"></i></p>
										
										</div>
								</div>
								
								<div>
									<div className="single-box">
										
									<div className="fas fa-star fa-star star"></div>
										<div className="fas fa-star fa-star star"></div>
										<div className="fas fa-star fa-star star"></div>
										<div className="fas fa-star fa-star star"></div>
										<div className="fas fa-star fa-star star"></div>
										<p><i className="fas fa-quote-left"></i> Excelente profesional, profundo conocedor de su ámbito donde encuentra siempre la mejor solución al proyecto solicitado, ya un precio ajustado <i className="fas fa-quote-right"></i></p>
									</div>
								</div>	
								
								<div>
									<div className="single-box">
									<div className="fas fa-star fa-star star"></div>
										<div className="fas fa-star fa-star star"></div>
										<div className="fas fa-star fa-star star"></div>
										<div className="fas fa-star fa-star star"></div>
										<div className="fas fa-star fa-star star"></div>
										<p><i className="fas fa-quote-left"></i> Fantástica la experiencia de haber contratado INSTAL CERRAMIENTOS y mención especial para Quim, ya que se trata de unos profesionales que aparte de ofrecer unos servicios de la máxima calidad, actúan con mucha seriedad y rigurosidad, teniendo especial cuidado de todos los detalles. Estas cualidades no abundan entre los profesionales de hoy en día por lo que estuvimos muy satisfechos de sus servicios los recomiendo sin lugar a dudas y considero que son unos de los industriales de referencia en el ámbito de instalación de ventanas de PVC. <i className="fas fa-quote-right"></i></p>
									</div>
								</div>
								
								<div>
									<div className="single-box">
									<div className="fas fa-star fa-star star"></div>
										<div className="fas fa-star fa-star star"></div>
										<div className="fas fa-star fa-star star"></div>
										<div className="fas fa-star fa-star star"></div>
										<div className="fas fa-star fa-star star"></div>
										<p><i className="fas fa-quote-left"></i> La experiencia con la empresa y con Quim, ha sido buenísima y de confianza. Un trabajo muy bien hecho, (instalación de todas las ventanas y vidrieras con PVC, y Mallorquinas de aluminio), el mejor presupuesto.
										La vivienda ha quedado totalmente insonorizada y con cierres de primera. Los recomiendo totalmente. Un 10.<i className="fas fa-quote-right"></i></p>
									</div>
								</div>
                                
								<div>
									<div className="single-box">
									<div className="fas fa-star fa-star star"></div>
										<div className="fas fa-star fa-star star"></div>
										<div className="fas fa-star fa-star star"></div>
										<div className="fas fa-star fa-star star"></div>
										<div className="fas fa-star fa-star star"></div>
										<p><i className="fas fa-quote-left"></i> Muy buen asesoramiento y atención al cliente desde el primer momento. Además de calidad en todo el proceso, sin duda volveré a trabajar con ellos. <i className="fas fa-quote-right"></i></p>
									</div>
								</div>
								
								<div>
									<div className="single-box">
									<div className="fas fa-star fa-star star"></div>
										<div className="fas fa-star fa-star star"></div>
										<div className="fas fa-star fa-star star"></div>
										<div className="fas fa-star fa-star star"></div>
										<div className="fas fa-star fa-star star"></div>
										<p><i className="fas fa-quote-left"></i>Empresa fiable 100 % trabajo muy bien realizado y de excelente calidad, un trato muy cordial y profesional. Estamos encantados tanto con los servicios como por los productos. Los recomiendo. <i className="fas fa-quote-right"></i></p>
									</div>
									
								</div>
								
                            </Slider>
							
						</div>
						<div className="powered-google"><img src={PoweredGoogle} alt=""/></div>

						{/* <!-- Media --> */}
						<div className="block-media row">

                            <Slider
                                ref={testimonialNavRef}
                                className="carousel-images testimonial-nav col-12 col-lg-8 offset-lg-2"
                                asNavFor={nav2}
                                {...testimonialNav}
                            >
							
                            	<div>
									<img src={Client_1} alt="" className="img-fluid rounded-circle" />
									<div className="client-info">
										<h3>Maribel</h3>
										<span>Palafrugell</span>
										<span><Trans>Reseña de Google Maps</Trans></span>
									</div>
								</div>
								
								<div>
									<img src={Client_2} alt="" className="img-fluid rounded-circle" />
									<div className="client-info">
										<h3>Frank Delanghe</h3>
										<span>Pals</span>
										
										<span><Trans>Reseña de Google Maps</Trans></span>
									</div>
								</div>
								
								<div>
									<img src={Client_3} alt="" className="img-fluid rounded-circle" />
									<div className="client-info">
										<h3>giuseppe perrella</h3>
										<span>Aigua Blava/Begur</span>
										<span><Trans>Reseña de Google Maps</Trans></span>
									</div>
								</div>
								
								<div>
									<img src={Client_4} alt="" className="img-fluid rounded-circle" />
									<div className="client-info">
										<h3>Tom Van Biesen</h3>
										<span>Palamos</span>
										<span><Trans>Reseña de Google Maps</Trans></span>
									</div>
								</div>
								
								<div>
									<img src={Client_5} alt="" className="img-fluid rounded-circle" />
									<div className="client-info">
										<h3>Antoni Espona</h3>
										<span>Pals/Girona</span>
										<span><Trans>Reseña de Google Maps</Trans></span>
									</div>
								</div>	
								
								<div>
									<img src={Client_6} alt="" className="img-fluid rounded-circle" />
									<div className="client-info">
										<h3>Marti Albi</h3>
										<span>LLinars del Valles/Barcelona</span>
										<span><Trans>Reseña de Google Maps</Trans></span>
									</div>
								</div>
								
								<div>
									<img src={Client_7} alt="" className="img-fluid rounded-circle" />
									<div className="client-info">
										<h3>annabel bea</h3>
										<span>Rosas/Girona</span>
										<span><Trans>Reseña de Google Maps</Trans></span>
									</div>
								</div>

								<div>
									<img src={Client_8} alt="" className="img-fluid rounded-circle" />
									<div className="client-info">
										<h3>Guillem Pla Escriva</h3>
										<span>Girona</span>
										<span><Trans>Reseña de Google Maps</Trans></span>
									</div>
								</div>
								
								<div>
									<img src={Client_9} alt="3" className="img-fluid rounded-circle" />
									<div className="client-info">
										<h3>Carmelo</h3>
										<span>Pals/Girona</span>
										<span><Trans>Reseña de Instal Tancaments</Trans></span>
									</div>
								</div>
								
							</Slider>

						</div>

					</Col>
				</Row>
				
			</Container>
		
		</section>
    );
};

export default Testimonial;
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