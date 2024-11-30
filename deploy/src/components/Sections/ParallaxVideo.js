import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import loadable from '@loadable/component';
import { Trans } from 'gatsby-plugin-react-i18next';
import { StaticImage } from 'gatsby-plugin-image';

// Carga dinámica del componente ModalVideo
const ModalVideo = loadable(() => import('react-modal-video'));

const ParallaxVideo = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <ModalVideo
                channel='youtube'
                videoId="GNhmdoRFZ_0"
                autoplay
                isOpen={isOpen}
                onClose={() => setOpen(false)}
            />

            <section id="parallax-video" className="parallax">
                {/* <!-- Overlay --> */}
                <div className="overlay-video" />

                {/* <!-- Container --> */}
                <Container>
                    <Row>
                        <div className="video-btn wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0s">
                            {/* <!-- Play button --> */}
                            <a
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpen(true);
                                }}
                                href="#"
                                className="play-btn"
                            >
                                <i className="fas fa-play"></i>
                            </a>
                            <span className="video-text"><Trans>Ventanas de alta gama</Trans></span>
                        </div>
                    </Row>
                </Container>

                {/* <!-- Parallax Background Image --> */}
                <StaticImage
                    src="../../images/parallax/video.jpg" // Ajusta la ruta según tu estructura de proyecto
                    alt="Parallax Background"
                    layout="fullWidth"
                    quality={90}
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </section>
        </>
    );
};

export default ParallaxVideo;

