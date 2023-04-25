import React from 'react';
import styles from './ReviewItem.module.scss';
import { ImQuotesLeft } from 'react-icons/im';

const ReviewItem = ({ imageUrl, comment, modify }) => {
	return (
		<div className={`${styles['review']} ${modify ? styles['top'] : ''}`}>
			<div className={styles['image']}>
				<img alt='person' src={imageUrl} className={styles['image__photo']} />
			</div>

			<p className={styles['review__paragraph']}>{comment}</p>
			<ImQuotesLeft className={styles['review__quote']} />
		</div>
	);
};

export default ReviewItem;
