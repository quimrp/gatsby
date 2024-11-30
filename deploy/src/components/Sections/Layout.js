import React from 'react';
import Helmet from "react-helmet";
import SimpleReactLightbox from '@hueyyeng/simple-react-lightbox';

import CookieBanner from '../CookieConsent';

//
// Favicon
import Favicon from "~images/favicon.ico";

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Font awesome
import '~assets/library/fontawesome/css/all.min.css';

// Linea icons
import '~assets/library/linea/arrows/styles.css';
import '~assets/library/linea/basic/styles.css';
import '~assets/library/linea/ecommerce/styles.css';
import '~assets/library/linea/software/styles.css';
import '~assets/library/linea/weather/styles.css';
import'~assets/instal-icon/css/instal.css';
// Animate
import '~assets/library/animate/animate.css';

// Modal video
import 'react-modal-video/css/modal-video.min.css';

// Stylesheet
import '~assets/css/style.css';
import '~assets/css/media.css';

// Add dynamic CSS
const addStyleSheet = (path) => {
	if (typeof window === 'object') {
		var head = document.head;
		var link = document.createElement("link");

		link.type = "text/css";
		link.rel = "stylesheet";
		link.href = path;

		head.appendChild(link);
	}
}

// Layout
const Layout = (props) => {

	// Google web font
	addStyleSheet("https://fonts.googleapis.com/css?family=Roboto:200,300,400,500,700");

	// Color schema
	addStyleSheet(props.colorSchema);

	return (
		<div>
			
			<Helmet>

				{/* Meta */}
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				{/* Title */}
				<title>{props.pageTitle}</title>

				{/* Favicon */}
				<link rel="icon" href={Favicon} type="image/x-icon" />

			</Helmet>

			<SimpleReactLightbox>
				{props.children}
			</SimpleReactLightbox>	
             <CookieBanner />

		</div>
		 
	);
}

export default Layout;