import React, { useEffect, useRef, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import loadable from '@loadable/component';
import { Link, Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';
// Images
import BgImg from "~images/parallax/video.jpg";

const ModalVideo = loadable(() => import('react-modal-video'));

const ParallaxVideo = () => {
    const parallax = useRef(null);
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        if (parallax.current) {
            parallax.current.style.backgroundImage = `url(${parallax.current.getAttribute('data-image')})`;
        }
    }, [parallax]);

    return (
        <>
            <ModalVideo channel='youtube' videoId="GNhmdoRFZ_0" autoplay isOpen={isOpen} onClose={() => setOpen(false)} />
            
            <section id="parallax-video" className="parallax" data-image={BgImg} ref={parallax}>
        
                {/* <!-- Overlay --> */}
                <div className="overlay-video" />

                {/* <!-- Container --> */}
                <Container>

                    <Row>
                        
                        <div className="video-btn wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0s">              
            
                            {/* <!-- Play button --> */}
                            <a onClick={(e)=> {
                                e.preventDefault();
                                return setOpen(true);
                            }} href="/" data-rel="lightcase" className="play-btn">
                                <i className="fas fa-play"></i>
                            </a>

                            <span className="video-text"><Trans>Ventanas de alta gama</Trans> </span>

                        </div>

                    </Row>
                </Container>

            </section>
         </>
    );
};

export default ParallaxVideo;
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
