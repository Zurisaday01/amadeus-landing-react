import React from 'react';
import styles from './AccordionContainer.module.scss';
import DATA from '../../app/app.data';
import AccordionItem from '../AccordionItem/AccordionItem';

const AccordionContainer = () => {
	return (
		<div className={styles['accordion-container']}>
			{DATA.frecuentQuestions.map(({ id, ...otherProperties }) => (
				<AccordionItem key={id} {...otherProperties} />
			))}
		</div>
	);
};

export default AccordionContainer;
