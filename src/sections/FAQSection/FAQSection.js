import React from 'react';
import styles from './FAQSection.module.scss';
import AccordionContainer from '../../components/AccordionContainer/AccordionContainer';

const FAQSection = () => {
	return (
		<section
			className={styles['frecuent-questions']}
			title='Section FAQ'
			id='faq'>
			<h2 className='heading heading--secondary'>Frequently asked questions</h2>
			<AccordionContainer />
			<div className={styles['frecuent-questions__background']}></div>
		</section>
	);
};

export default FAQSection;
