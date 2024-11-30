import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Images
import BgImg from "~images/parallax/subscribe.jpg";

// MailChimp
import MailchimpSubscribe from "react-mailchimp-subscribe";
const url = "https://athenadesignstudio.us15.list-manage.com/subscribe/post-json?u=36a92d1e6cd4f5708f3475592&id=9a4860c500";

// Custom subscription form
const SubscribeForm = ({ status, message, onValidated }) => {
    let email;

    // Submit
    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        email.value.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email.value
        });
    };

    return (
        <form id="#subscribe-form">
            
            {status !== "success" ? (               
                <>
                    <div className="input-group mb-3">
                        <input type="email" value={email} name="email"
                            className="form-control field-subscribe"
                            placeholder="Enter Your Email Address"
                            ref={node => (email = node)}
                         />
                    </div>
                    <button type="submit" className="btn w-100" onClick={handleSubmit}>
                        Subscribe
                    </button>
                </>
            ) : null}

            {status === "success" && (
                <h3 id="subscribe-result" className="text-center text-white">
                    Thanks for subscribing!
                </h3>
            )}

            {status === "sending" && (
                <p className="text-center mb-0 mt-3">Sending...</p>
            )}

            {status === "error" && (
                <p className="text-center mb-0 mt-3"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}

        </form>
    );
};

const Subscribe = () => {
    const parallax = useRef(null);

    useEffect(() => {
        if (parallax.current) {
            parallax.current.style.backgroundImage = `url(${parallax.current.getAttribute('data-image')})`;
        }
    }, [parallax]);    

    return (
        <section id="subscribe" className="parallax" data-image={BgImg} ref={parallax}>
			
			{/* <!-- Overlay --> */}
			<div className="overlay"></div>	
			
			{/* <!-- Container --> */}
			<Container>

                {/* <!-- Section title --> */}
				<Row className="justify-content-center">
					<Col className="col-12 col-md-10 col-lg-6">
						
						<div className="section-title text-center white">
							<h3 className="text-white">Subscribe To Newsletter</h3>
							<p>Vivamus ornare feugiat orci eu faucibus. Phasellus nulla arcu, pharetra nec laoreet in, scelerisque a lectus.</p>
                        </div>
						
					</Col>
				</Row>

                {/* <!-- Newsletter form --> */}
                <Row className="justify-content-center">
                    <Col className="col-12 col-md-10 col-lg-6">

                        <MailchimpSubscribe
                            url={url}
                            render={({ subscribe, status, message }) => (
                                <SubscribeForm
                                    status={status}
                                    message={message}
                                    onValidated={formData => subscribe(formData)}
                                />
                            )}
                        />
                        
                        <div className="empty-30"></div>
                        
                        <p className="text-center mb-0">                         
                            We don't share your personal information with anyone or company. 
                            Check out our <a href="/"><strong>Privacy Policy</strong></a> for more information.
                        </p>
                        
                    </Col>
                </Row>

            </Container>
				
		</section>
    );
}

export default Subscribe;