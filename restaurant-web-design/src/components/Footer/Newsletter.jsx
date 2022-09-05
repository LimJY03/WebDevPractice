import React from 'react';

import { SubHeading } from '../../components';

import './Newsletter.css';

const Newsletter = () => {
	return (
		<div className='app__newsletter'>
			<div className='app__newsletter-heading'>
				<SubHeading title='Newslettter' />
				<h1 className='headtext__cormorant'>Subscribe To Our Newsletter</h1>
				<p className='p__opensans'>And never miss latest Updates!</p>
			</div>
			<div className='app__newsletter-input flex__center'>
				<input type='email' placeholder='Enter your mail address' />
				<button className='custom__button'>Subscribe</button>
			</div>
		</div>
	);
}

export default Newsletter;
