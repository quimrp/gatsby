import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { SRLWrapper } from '@hueyyeng/simple-react-lightbox';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

// Images
import Screenshot_1 from "~images/screenshots/screenshot-1.jpg";
import Screenshot_2 from "~images/screenshots/screenshot-2.jpg";
import Screenshot_3 from "~images/screenshots/screenshot-3.jpg";
import Screenshot_4 from "~images/screenshots/screenshot-4.jpg";
import Screenshot_5 from "~images/screenshots/screenshot-5.jpg";
import Screenshot_6 from "~images/screenshots/screenshot-6.jpg";
import Screenshot_7 from "~images/screenshots/screenshot-7.jpg";
import Screenshot_8 from "~images/screenshots/screenshot-8.jpg";
const options = {
    buttons: {

      showDownloadButton: false,
    
    }
}
const Screenshots = (props) => {
    return (
        <section id="screenshots" className={props.className}>
            
            {/* <!-- Container --> */}
            <Container>

                {/* <!-- Section title --> */}
				<Row className="justify-content-center">
					<Col className="col-12 col-md-10 col-lg-6">
						
						<div className="section-title text-center">
							<h3>App Screenshots</h3>
							<p>Morbi velit leo, sodales in purus eu, pretium accumsan nunc. Praesent eu diam ut ante consequat euismod.</p>
						</div>
						
					</Col>
				</Row>         

                <Row>

                    <Col className="col-12">

                        {/* <!-- Carousel --> */}
                        <SRLWrapper options={options}>
                            <Swiper                                
                                className="screenshot-slider zoom-screenshot"
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false
                                }}
                                pagination={{ clickable: true }}
                                breakpoints={{
                                    320: {
                                        spaceBetween: 15,
                                        slidesPerView: 1
                                    },
                                    768: {
                                        spaceBetween: 20,
                                        slidesPerView: 2
                                    },
                                    1024: {
                                        spaceBetween: 30,
                                        slidesPerView: 4
                                    }
                                }}
                                modules={[Autoplay, Pagination]}
                            >

                                <SwiperSlide className="item">
                                    <a href={Screenshot_1}>
                                        <img src={Screenshot_1} alt="" />
                                    </a>
                                </SwiperSlide>

                                <SwiperSlide className="item">
                                    <a href={Screenshot_2}>
                                        <img src={Screenshot_2} alt="" />
                                    </a>
                                </SwiperSlide>

                                <SwiperSlide className="item">
                                    <a href={Screenshot_3}>
                                        <img src={Screenshot_3} alt="" />
                                    </a>
                                </SwiperSlide>

                                <SwiperSlide className="item">
                                    <a href={Screenshot_4}>
                                        <img src={Screenshot_4} alt="" />
                                    </a>
                                </SwiperSlide>

                                <SwiperSlide className="item">
                                    <a href={Screenshot_5}>
                                        <img src={Screenshot_5} alt="" />
                                    </a>
                                </SwiperSlide>

                                <SwiperSlide className="item">
                                    <a href={Screenshot_6}>
                                        <img src={Screenshot_6} alt="" />
                                    </a>
                                </SwiperSlide>

                                <SwiperSlide className="item">
                                    <a href={Screenshot_7}>
                                        <img src={Screenshot_7} alt="" />
                                    </a>
                                </SwiperSlide>

                                <SwiperSlide className="item">
                                    <a href={Screenshot_8}>
                                        <img src={Screenshot_8} alt="" />
                                    </a>
                                </SwiperSlide>

                            </Swiper>
                        </SRLWrapper>

                    </Col>

                </Row>
                    
            </Container>

        </section>
    );
}

export default Screenshots;