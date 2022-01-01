import React from 'react';
import styles from './CollectionImg.module.scss';

const CollectionImg = ({ url, id }) => {
	return (
		<div
			className={`${styles[`collection-img__box--${id + 1}`]} ${
				styles['collection-img__box']
			}`}
			key={`${id}-box`}>
			<img
				className={`${styles[`collection-img__photo--${id + 1}`]} ${
					styles['collection-img__photo']
				}`}
				src={url}
				alt='imagen-adventures'
			/>
		</div>
	);
};

export default CollectionImg;
