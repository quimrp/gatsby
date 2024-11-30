import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import YouTube from 'react-youtube';

// Images
import GooglePlay from '~images/banner/google-play.png';
import AppStore from '~images/banner/app-store.png';
import VideoWelcome from '~images/banner/video-welcome.png';

class VideoBG extends React.Component {
	render() {
		const opts = {
			height: '100%',
			width: '100%',
			playerVars: {
				autoplay: 1,
				mute: 1,
				loop: 1,
				controls: 0,
				showinfo: 0,
				start: 2	// Video start second  
			},
		};

		return <YouTube 
					videoId='mqEeWiRwv0k' 
					className="video-bg" 
					containerClassName="video-bg-wrapper" 
					opts = {opts} 
				/>
	}

	_onReady(event) {
		event.target.playVideo();
	}
}

const VideoBackground = () => {
    return (
        <section id="home" className="banner video-bg bottom-oval">

			<VideoBG />

			{/* <!-- Container --> */}
			<Container>

				<Row className="align-items-center">

					{/* <!-- Content --> */}
					<Col className="col-12 col-lg-6 offset-lg-3">

						{/* <!-- Banner text --> */}
						<div className="banner-text text-center">

							<h1 className="wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0s">
								Made for better
							</h1>
							
							<p className="wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.3s">
								Best landing for your App showcase. Follow other investors, discover companies to believe in.
							</p>

							<div className="button-store wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.6s">
								
								<a href="/" className="d-inline-flex align-items-center m-2 m-sm-0 me-sm-3">
									<img src={GooglePlay} alt="" />
								</a>
								
								<a href="/" className="d-inline-flex align-items-center m-2 m-sm-0">
									<img src={AppStore} alt="" />
								</a>
							
							</div>

						</div>
						
						<div className="empty-30"></div>
						
					</Col>  
					
				</Row>
				
			</Container>
			
			{/* <!-- Image --> */}
			<div className="banner-image-center w-100 wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.3s">
				<img src={VideoWelcome} alt="" />
			</div>
			
		</section>
    );
}

export default VideoBackground;