import React, { useState } from 'react';
import styles from './AccordionItem.module.scss';

const AccordionItem = ({ question, answer }) => {
	const [isActive, setIsActive] = useState(false);

	const toggle = () => {
		setIsActive(!isActive);
	};
	return (
		<div className={styles['accordion-item']} onClick={toggle}>
			<div className={styles['accordion-item__question']}>
				<p className={styles['accordion-item__title']}>{question}</p>
				{!isActive ? (
					<span className={styles['accordion-item__icon']}> + </span>
				) : (
					<span className={styles['accordion-item__icon']}> - </span>
				)}
			</div>
			<div
				className={`${styles['accordion-item__answer']} ${
					isActive ? styles['active__answer'] : ''
				}`}>
				<p className='paragraph'>{answer}</p>
			</div>
		</div>
	);
};

export default AccordionItem;
