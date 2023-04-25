import React from 'react';
import styles from './ReviewsContainer.module.scss';
import DATA from '../../app/app.data';
import ReviewItem from '../ReviewItem/ReviewItem';

const ReviewsContainer = () => {
	return (
		<div className={styles.container}>
			{DATA.people.map(({ id, ...otherProperties }) => (
				<ReviewItem key={id} {...otherProperties} />
			))}
		</div>
	);
};

export default ReviewsContainer;
