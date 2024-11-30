import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BackgroundSlider from 'react-background-slider';
import { Link, Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const SingleImageVentanasPvc = () => {
    const { t } = useTranslation();

    return (
        <section id="home" className="banner image-bg">
            {/* Background Slider */}
            <BackgroundSlider
                duration={10000}  // Ajustado para una demostración más realista
                transition={0.75}
                className="image-bg"
                images={[require('../../images/banner/single-image.jpg')]}
            />
            
            {/* Container */}
            <Container>
                <Row className="align-items-center">
                    {/* Content */}
                    <Col className="col-12 col-lg-6 res-margin">
                        {/* Banner text */}
                        <div className="banner-text">
                            <h1 className="wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0s">
                                <Trans>CAMBIA TUS VENTANAS AHORA</Trans>
                            </h1>
                            <p className="wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.3s">
                            <Trans>ALTA EFICIENCIA ENERGETICA A PRECIOS ULTRA COMPETITIVOS</Trans> </p>
                          
                            <p className="wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.3s"> 
                                 <Trans>AYUDAS EUROPEAS NEXTGEN</Trans>
                            </p>
                            <div className="button-store wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.6s">
                                <Link to="/#overview" className="custom-btn d-inline-flex align-items-center justify-content-center m-2 m-sm-0 me-sm-3">
                                    <i className="fa fa-piggy-bank"></i>
                                    <p className="mb-0 ms-2 text-center">+info<span>NextGen</span></p>
                                </Link>
                            </div>
                        </div>
                    </Col>
                    {/* Image */}
                    <Col className="col-12 col-lg-6">
                        <div className="banner-image wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.3s">
                            <StaticImage 
                                src="../../images/banner/single-welcome.png" 
                                alt="Welcome Image"
                                placeholder="blurred" 
                                layout="constrained"
                                className="image"
                              
                            //width={300}
                            quality={100}
                                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
            
            {/* Wave effect */}
            <div className="wave-effect wave-anim">
                <div className="waves-shape shape-one">
                    <div className="wave wave-one"></div>
                </div>
                <div className="waves-shape shape-two">
                    <div className="wave wave-two"></div>
                </div>
                <div className="waves-shape shape-three">
                    <div className="wave wave-three"></div>
                </div>
            </div>
        </section>
    );
}

export default SingleImageVentanasPvc;

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
