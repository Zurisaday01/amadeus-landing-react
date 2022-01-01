import React, { useState } from 'react';
import styles from './Form.module.scss';
import CustomInput from '../CustomInput/CustomInput';
import CustomBtn from '../CustomBtn/CustomBtn';
import emailjs from '@emailjs/browser';
const Form = () => {
	const [userInput, setUserInput] = useState({
		name: '',
		email: '',
		phone: '',
	});

	const [message, setMessage] = useState(false);

	const changeHandler = e => {
		const name = e.target.name;
		//get data
		setUserInput(prevState => ({ ...prevState, [name]: e.target.value }));
	};

	const handleSubmit = e => {
		//prevent load of page
		e.preventDefault();
		//prevent
		if (!userInput.name && !userInput.email && !userInput.phone) return;

		//send mail
		emailjs
			.sendForm(
				'service_ajsbvjo',
				'template_nvjpau8',
				e.target,
				'user_9zSexA8I2kszbVt4tz3ey'
			)
			.then(
				result => {
					console.log(result.text);
				},
				error => {
					console.log(error.text);
				}
			);

		//show message
		setMessage(true);
		setTimeout(() => setMessage(false), 1500);

		//clean inputs
		setUserInput({
			name: '',
			email: '',
			phone: '',
		});
	};
	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			{message ? (
				<span className={styles.message}>Your information has been sent</span>
			) : null}
			<div className={styles['form__group']}>
				<CustomInput
					type='text'
					placeholder='Full name'
					name='name'
					value={userInput.name}
					onChange={changeHandler}
				/>
			</div>
			<div className={styles['form__group']}>
				<CustomInput
					type='email'
					placeholder='Email'
					name='email'
					value={userInput.email}
					onChange={changeHandler}
				/>
			</div>
			<div className={styles['form__group']}>
				<CustomInput
					type='tel'
					placeholder='Phone number'
					name='phone'
					value={userInput.phone}
					onChange={changeHandler}
				/>
			</div>
			<div className={styles['form__group']}>
				<CustomBtn type='submit'>Send</CustomBtn>
			</div>
		</form>
	);
};

export default Form;
