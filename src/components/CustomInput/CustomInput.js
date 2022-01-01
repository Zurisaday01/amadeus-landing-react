import React from 'react';
import styles from './CustomInput.module.scss';

const CustomInput = ({ placeholder, ...otherProperties }) => {
	return (
		<input
			className={styles.input}
			placeholder={placeholder}
			{...otherProperties}
			required
		/>
	);
};

export default CustomInput;
