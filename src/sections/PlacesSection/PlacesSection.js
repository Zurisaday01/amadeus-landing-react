import React from 'react';
import styles from './PlacesSection.module.scss';
import PlacesPreview from '../../components/PlacesPreview/PlacesPreview';

const PlacesSection = () => {
	return (
		<section className={styles.places} title='Section Places' id='places'>
			<h2 className='heading heading--secondary'>
				Choose the place that best fits you
			</h2>
			<PlacesPreview />
		</section>
	);
};

export default PlacesSection;
