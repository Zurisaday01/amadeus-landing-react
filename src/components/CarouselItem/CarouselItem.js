import React from 'react';
import styles from './CarouselItem.module.scss';

const CarouselItem = ({ position, imageUrl }) => {
	return (
		<div
			className={styles.img}
			style={{
				backgroundImage: `url(${imageUrl})`,
				transform: `translateX(${100 * position}%)`,
			}}></div>
	);
};

export default CarouselItem;
