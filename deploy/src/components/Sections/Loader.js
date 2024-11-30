import React, { Component } from 'react';

export default class Loader extends Component {

	componentDidMount() {	
		// Page loader
		const loader = document.querySelector('.page-loader');

		setTimeout(() => {				
			loader.style.display = 'none';
		}, 300);
	}

	render() {
		return (
			<div className="page-loader">
                <div className="progress" />
            </div>
		);
	}
	
}