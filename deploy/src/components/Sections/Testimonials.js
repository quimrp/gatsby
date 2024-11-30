import React, { useRef, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import { Link, Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Remove individual image imports

const testimonialSlider = {
  // ... (keep the existing configuration)
};

const testimonialNav = {
  // ... (keep the existing configuration)
};

const Testimonial = (props) => {
    // ... (keep the existing state and useEffect logic)

    return (
        <section id="testimonials" className={props.className}>
            <Container>
                {/* ... (keep the existing title section) */}
                
                <Row className="row">
                    <Col className="col-12 testimonial-carousel">
                        {/* ... (keep the existing testimonial text slider) */}
                        
                        <div className="powered-google">
                            <StaticImage src="../../images/powered-google.png" alt="Powered by Google" />
                        </div>

                        <div className="block-media row">
                            <Slider
                                ref={testimonialNavRef}
                                className="carousel-images testimonial-nav col-12 col-lg-8 offset-lg-2"
                                asNavFor={nav2}
                                {...testimonialNav}
                            >
                                {/* Replace img tags with StaticImage */}
                                <div>
                                    <StaticImage src="../../images/testimonials/client-1.jpg" alt="" className="img-fluid rounded-circle" />
                                    <div className="client-info">
                                        <h3>Maribel</h3>
                                        <span>Palafrugell</span>
                                        <span><Trans>Reseña de Google Maps</Trans></span>
                                    </div>
                                </div>
                                
                                {/* Repeat for other client images */}
                                <div>
                                    <StaticImage src="../../images/testimonials/client-2.jpg" alt="" className="img-fluid rounded-circle" />
                                    <div className="client-info">
                                        <h3>Frank Delanghe</h3>
                                        <span>Pals</span>
                                        <span><Trans>Reseña de Google Maps</Trans></span>
                                    </div>
                                </div>
                                
                                {/* ... (repeat for clients 3-9) */}
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

