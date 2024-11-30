import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BackgroundSlider from 'react-background-slider';

import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';
// Images
import BgImage from '~images/banner/single-image.jpg';
import SingleWelcome from '~images/banner/single-welcome.png';

const SingleImage = () => {
	const { t } = useTranslation();
    return (
        <section id="home" className="banner image-bg">
			
            <BackgroundSlider
                duration={100000}
                transition={0.75}
                className="image-bg"
                images={[BgImage]}
            />

			{/* <!-- Container --> */}
			<Container>
				
				<Row className="align-items-center">

					{/* <!-- Content --> */}
					<Col className="col-12 col-lg-6 res-margin">

						{/* <!-- Banner text --> */}
						<div className="banner-text">

							<h1 className="wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0s">
							<Trans>SUBVENCIONES PARA VENTANAS</Trans>
						
							</h1>
							
							<p className="wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.3s">
							
							<Trans
            i18nKey="windows_savings"
            components={{ br: <br /> }}
          />
							</p>

							<div className="button-store wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.6s">
    <Link to="/#overview" className="custom-btn d-inline-flex align-items-center justify-content-center m-2 m-sm-0 me-sm-3">
        <i className="fa fa-piggy-bank"></i>
        <p className="mb-0 ms-2 text-center">+info<span>NexGen</span></p>
    </Link>
</div>

							
							</div>

						
					
					</Col>
					
					{/* <!-- Image --> */}
					<Col className="col-12 col-lg-6">
				
						<div className="banner-image wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.3s">
							<img className="image" src={SingleWelcome} alt="" />
						</div>

					</Col>
					
				</Row>
				
			</Container>
			
			{/* <!-- Wave effect --> */}
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

export default SingleImage;
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