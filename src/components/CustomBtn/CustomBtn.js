import React from 'react';
import styles from './CustomBtn.module.scss';

const CustomBtn = ({
	navigate,
	children,
	sidebar,
	toggle,
	className,
	...otherProps
}) => {
	const actions = () => {
		if (navigate) navigate('/book');

		if (toggle) toggle();
	};
	return (
		<button
			className={`${styles.btn} ${sidebar ? styles.sidebar : ''} ${
				className ? className : ''
			}`}
			{...otherProps}
			onClick={actions}>
			{children}
		</button>
	);
};

export default CustomBtn;
