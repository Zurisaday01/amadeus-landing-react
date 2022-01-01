import React from 'react';
import styles from './BookPage.module.scss';
import Form from '../../components/Form/Form';

const BookPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h2 className='heading heading--secondary'>Book know!</h2>
				<Form />
			</div>
		</div>
	);
};

export default BookPage;
