import React from 'react';
import styles from './CardPreview.module.scss';
import CustomBtn from '../CustomBtn/CustomBtn';

const CardPreview = ({ imageUrl }) => {
	return (
		<div className={styles['card-preview']}>
			<div
				className={styles['card-preview__image']}
				style={{ backgroundImage: `url(${imageUrl})` }}
			/>
			<CustomBtn className={styles['card-preview__btn']}>See more</CustomBtn>
		</div>
	);
};

export default CardPreview;
