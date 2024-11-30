import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { StaticImage } from 'gatsby-plugin-image';

const Clients = (props) => {
    return (
        <section id="clients" className={props.className}>
            {/* <!-- Container --> */}
            <Container>
                <Row>
                    <Swiper
                        className="clients-slider"
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false
                        }}
                        breakpoints={{
                            320: {
                                spaceBetween: 20,
                                slidesPerView: 2
                            },
                            768: {
                                spaceBetween: 30,
                                slidesPerView: 3
                            },
                            1024: {
                                spaceBetween: 40,
                                slidesPerView: 5
                            }
                        }}
                        modules={[Autoplay]}
                    >
                        {/* <!-- Client 1 --> */}
                        <SwiperSlide className="client">
                            <a href="/">
                                <StaticImage 
                                    src="../../images/clients/company-1.png" 
                                    alt="Client 1" 
                                    placeholder="blurred"
                                    quality={100}
                                />
                            </a>
                        </SwiperSlide>

                        {/* <!-- Client 2 --> */}
                        <SwiperSlide className="client">
                            <a href="/">
                                <StaticImage 
                                    src="../../images/clients/company-2.png" 
                                    alt="Client 2" 
                                    placeholder="blurred"
                                    quality={100}
                                />
                            </a>
                        </SwiperSlide>

                        {/* <!-- Client 3 --> */}
                        <SwiperSlide className="client">
                            <a href="/">
                                <StaticImage 
                                    src="../../images/clients/company-3.png" 
                                    alt="Client 3" 
                                    placeholder="blurred"
                                    quality={100}
                                />
                            </a>
                        </SwiperSlide>

                        {/* <!-- Client 4 --> */}
                        <SwiperSlide className="client">
                            <a href="/">
                                <StaticImage 
                                    src="../../images/clients/company-4.png" 
                                    alt="Client 4" 
                                    placeholder="blurred"
                                    quality={100}
                                />
                            </a>
                        </SwiperSlide>

                        {/* <!-- Client 5 --> */}
                        <SwiperSlide className="client">
                            <a href="/">
                                <StaticImage 
                                    src="../../images/clients/company-5.png" 
                                    alt="Client 5" 
                                    placeholder="blurred"
                                    quality={100}
                                />
                            </a>
                        </SwiperSlide>

                        {/* <!-- Client 6 --> */}
                        <SwiperSlide className="client">
                            <a href="/">
                                <StaticImage 
                                    src="../../images/clients/company-6.png" 
                                    alt="Client 6" 
                                    placeholder="blurred"
                                    quality={100}
                                />
                            </a>
                        </SwiperSlide>

                        {/* <!-- Client 7 --> */}
                        <SwiperSlide className="client">
                            <a href="/">
                                <StaticImage 
                                    src="../../images/clients/company-7.png" 
                                    alt="Client 7" 
                                    placeholder="blurred"
                                    quality={100}
                                />
                            </a>
                        </SwiperSlide>

                        {/* <!-- Client 8 --> */}
                        <SwiperSlide className="client">
                            <a href="/">
                                <StaticImage 
                                    src="../../images/clients/company-8.png" 
                                    alt="Client 8" 
                                    placeholder="blurred"
                                    quality={100}
                                />
                            </a>
                        </SwiperSlide>
                    </Swiper>
                </Row>
            </Container>
        </section>
    );
}

export default Clients;
