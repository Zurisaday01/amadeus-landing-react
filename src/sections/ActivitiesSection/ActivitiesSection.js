import React from 'react';
import styles from './Activities.module.scss';
import CollectionContainer from '../../components/CollectionContainer/CollectionContainer';
import FirstCollection from '../../assets/img/adventures-1.jpeg';
import SecondCollection from '../../assets/img/adventures-2.jpg';
import ThirdCollection from '../../assets/img/adventures-3.jpg';

const ActivitiesSection = () => {
	return (
		<section
			className={styles.activities}
			id='activities'
			title='Section Activities'>
			<h2
				className={`${styles['activities__heading']} heading heading--secondary`}>
				We have prepared awesome adventures
			</h2>
			<div className={styles['activities__main']}>
				<CollectionContainer
					images={[FirstCollection, SecondCollection, ThirdCollection]}
				/>

				<div className={styles['activities__information']}>
					<h3 className='heading heading--third'>Enjoy</h3>
					<p className={`${styles['activities__paragraph']} paragraph`}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
						nisi officiis qui. Deleniti, consequuntur ea. Quod exercitationem
						tenetur, totam vel blanditiis alias quo sapiente officiis,
						dignissimos cupiditate earum molestias iure!t
					</p>
					<h3 className='heading heading--third'>Discover</h3>
					<p className={`${styles['activities__paragraph']} paragraph`}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
						nisi officiis qui. Deleniti, consequuntur ea. Quod exercitationem
						tenetur, totam vel blanditiis alias quo sapiente officiis,
						dignissimos cupiditate earum molestias iure!t
					</p>
					<p className={`${styles['activities__paragraph']} paragraph`}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
						nisi officiis qui. Deleniti, consequuntur ea. Quod exercitatione!t
					</p>
				</div>
			</div>
		</section>
	);
};

export default ActivitiesSection;
