import React from 'react';
import DATA from '../../app/app.data';
import CardPreview from '../CardPreview/CardPreview';
import styles from './PlacesPreview.module.scss';

const PlacesPreview = () => {
	return (
		<div className={styles.container}>
			{DATA.places.map(({ id, ...otherProps }) => (
				<CardPreview key={id} {...otherProps} />
			))}
		</div>
	);
};

export default PlacesPreview;
