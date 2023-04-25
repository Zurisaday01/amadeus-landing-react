import React from 'react';
import styles from './CollectionContainer.module.scss';
import CollectionImg from '../CollectionImg/CollectionImg';

function CollectionImages({ images }) {
	return (
		<div className={styles['collection-container']}>
			<div>
				{images.map((url, idx) => (
					<CollectionImg key={idx} url={url} id={idx} />
				))}
			</div>
		</div>
	);
}

export default CollectionImages;
