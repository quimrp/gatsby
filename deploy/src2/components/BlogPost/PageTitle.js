import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Images
import BgImg from "~images/parallax/blog-post.jpg";

const PageTitle = () => {
    const parallax = useRef(null);

    useEffect(() => {
        if (parallax.current) {
            parallax.current.style.backgroundImage = `url(${parallax.current.getAttribute('data-image')})`;
        }
    }, [parallax]);

    return (
        <section className="page-title valign parallax" data-image={BgImg} ref={parallax}>
			
			{/* <!-- Overlay --> */}
			<div className="overlay"></div>	
			
			{/* <!-- Container --> */}
			<Container>	
				<Row>
					<Col className="col-12 text-center">
						
						{/* <!-- Category --> */}
						<div className="blog-category">
							<a href="/blog">Photography</a>
						</div>
						
						{/* <!-- Title --> */}
						<h1 className="blog-title">Assorted Color Buildings and Sea in Riomaggiore</h1>
						
						{/* <!-- Date --> */}
						<div className="blog-date">
						January 14, 2024
						</div>

					</Col>
				</Row>
			</Container>
			
		</section>
    );
};

export default PageTitle;
