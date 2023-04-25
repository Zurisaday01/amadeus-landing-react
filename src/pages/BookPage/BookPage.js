import React from 'react';
import styles from './BookPage.module.scss';
import Form from '../../components/Form/Form';
import { useNavigate } from 'react-router-dom/dist';

const BookPage = () => {
	const navigate = useNavigate();

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<button className={styles['btn-back']} onClick={() => navigate('/')}>
					&larr; <span>Go back</span>
				</button>
				<h2 className='heading heading--secondary'>Book now!</h2>
				<Form />
			</div>
		</div>
	);
};

export default BookPage;
