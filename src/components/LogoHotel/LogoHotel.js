import React from 'react';
import styles from './LogoHotel.module.scss';
import Logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';

const LogoHotel = () => {
	return (
		<Link className={styles['logo']} to='/'>
			<img className={styles['logo__img']} src={Logo} />
		</Link>
	);
};

export default LogoHotel;
