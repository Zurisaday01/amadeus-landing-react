import React from 'react';
import styles from './TestimonialsSection.module.scss';
import ReviewsContainer from '../../components/ReviewsContainer/ReviewsContainer';

const TestimonialsSection = () => {
	return (
		<section
			className={styles['testimonials']}
			title='Section Testimonials'
			id='testimonials'>
			<h1 className='heading heading--secondary'>Testimonials</h1>
			<ReviewsContainer />
		</section>
	);
};

export default TestimonialsSection;
