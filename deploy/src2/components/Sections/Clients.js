import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

// Images
import Company_1 from "~images/clients/company-1.png";
import Company_2 from "~images/clients/company-2.png";
import Company_3 from "~images/clients/company-3.png";
import Company_4 from "~images/clients/company-4.png";
import Company_5 from "~images/clients/company-5.png";
import Company_6 from "~images/clients/company-6.png";
import Company_7 from "~images/clients/company-7.png";
import Company_8 from "~images/clients/company-8.png";

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
                                <img src={Company_1} alt="Client 1" />
                            </a>
                        </SwiperSlide>

                        {/* <!-- Client 2 --> */}
                        <SwiperSlide className="client">
                            <a href="/">
                                <img src={Company_2} alt="Client 2" />
                            </a>
                        </SwiperSlide>

                        {/* <!-- Client 3 --> */}
                        <SwiperSlide className="client">
                            <a href="/">
                                <img src={Company_3} alt="Client 3" />
                            </a>
                        </SwiperSlide>

                        {/* <!-- Client 4 --> */}
                        <SwiperSlide className="client">
                            <a href="/">
                                <img src={Company_4} alt="Client 4" />
                            </a>
                        </SwiperSlide>

                        {/* <!-- Client 5 --> */}
                        <SwiperSlide className="client">
                            <a href="/">
                                <img src={Company_5} alt="Client 5" />
                            </a>
                        </SwiperSlide>

                        {/* <!-- Client 6 --> */}
                        <SwiperSlide className="client">
                            <a href="/">
                                <img src={Company_6} alt="Client 6" />
                            </a>
                        </SwiperSlide>

                        {/* <!-- Client 7 --> */}
                        <SwiperSlide className="client">
                            <a href="/">
                                <img src={Company_7} alt="Client 7" />
                            </a>
                        </SwiperSlide>

                        {/* <!-- Client 8 --> */}
                        <SwiperSlide className="client">
                            <a href="/">
                                <img src={Company_8} alt="Client 8" />
                            </a>
                        </SwiperSlide>

                    </Swiper>

                </Row>
                    
            </Container>

        </section>
    );
}

export default Clients;