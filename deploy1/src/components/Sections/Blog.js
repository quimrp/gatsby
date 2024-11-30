import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Images
import Post_1 from "~images/blog/post-1.jpg";
import Post_2 from "~images/blog/post-2.jpg";
import Post_3 from "~images/blog/post-3.jpg";

const Blog = (props) => {
    return (
        <section id="blog" className={props.className}>
			
			{/* <!-- Container --> */}
			<Container>
				
				{/* <!-- Section title --> */}
				<Row className="justify-content-center">
					<Col className="col-12 col-md-10 col-lg-6">
						
						<div className="section-title text-center">
							<h3>Latest Blog Posts</h3>
							<p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere ipsum dolor sit amet, consectetur elit.</p>
                        </div>
						
					</Col>
				</Row>

				<Row className="blog-home">
					
					{/* <!-- Post 1 --> */}
					<Col className="col-12 col-lg-4 res-margin">
                        
						<div className="blog-col">
                            
							<p>
								<a href="/blog-post">
									<img src={Post_1} className="blog-img" alt="" />
								</a>
								<span className="blog-category">Photography</span>
							</p>
                            
							<div className="blog-wrapper">								
								<div className="blog-text">
                                    
									<p className="blog-about">
                                        <span>Matthew Johns</span>
                                        <span>January 14, 2024</span>
                                    </p>
                                    
									<h4>
                                        <a href="/blog-post">Assorted Color Buildings and Sea in Riomaggiore</a>
                                    </h4>
                                    
                                    <p>
										Quisque dui at erat auctor pulvinar nisl felis, gravida et aliquam vitae, aliquet quis nibh.
										<a href="/blog-post" className="btn-read-more">Read More</a>
									</p>
                                    
								</div>
							</div>
                            
						</div>
                        
					</Col>
					
					{/* <!-- Post 2 --> */}
					<Col className="col-12 col-lg-4 res-margin">
                        
						<div className="blog-col">
                            
							<p>
								<a href="/blog-post">
									<img src={Post_2} className="blog-img" alt="" />
								</a>
								<span className="blog-category">Lifestyle</span>
							</p>
                            
							<div className="blog-wrapper">
								<div className="blog-text">
                                    
									<p className="blog-about">
                                        <span>Alex Wesly</span>
                                        <span>December 30, 2023</span>
                                    </p>
                                    
									<h4>
                                        <a href="/blog-post">Aerial Photography of Snowy Mountain Ranges</a>
                                    </h4>
                                    
                                    <p>
										Quisque dui at erat auctor pulvinar nisl felis, gravida et aliquam vitae, aliquet quis nibh.
										<a href="/blog-post" className="btn-read-more">Read More</a>
									</p>
                                    
								</div>
							</div>
                            
						</div>
                        
					</Col>	
					
					{/* <!-- Post 3 --> */}
					<Col className="col-12 col-lg-4">
                        
						<div className="blog-col">
                            
							<p>
								<a href="/blog-post">
									<img src={Post_3} className="blog-img" alt="" />
								</a>
								<span className="blog-category">Development</span>
							</p>
                            
							<div className="blog-wrapper">
								<div className="blog-text">
                                    
									<p className="blog-about">
                                        <span>Richard Jackson</span>
                                        <span>February 12, 2023</span>
                                    </p>
                                    
									<h4>
                                        <a href="/blog-post">Forest Highway With Green Leaves</a>
                                    </h4>
                                    
                                    <p>
										Quisque dui at erat auctor pulvinar nisl felis, gravida et aliquam vitae, aliquet quis nibh.
										<a href="/blog-post" className="btn-read-more">Read More</a>
									</p>
                                    
								</div>
							</div>
                            
						</div>
                        
					</Col>
					
				</Row>
				
			</Container>
			
		</section>
    );
}

export default Blog;