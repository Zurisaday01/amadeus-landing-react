import React from 'react';
import styles from './Footer.module.scss';
import LogoHotel from '../LogoHotel/LogoHotel';
import { Link } from 'react-scroll';

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles['footer__logo']}>
				<LogoHotel />
			</div>
			<div className={styles['footer__options']}>
				<Link
					className={styles['footer__option']}
					to='activities'
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}>
					Activities
				</Link>
				<Link
					className={styles['footer__option']}
					to='meet-us'
					spy={true}
					smooth={true}
					duration={500}>
					Meet us
				</Link>
				<Link
					className={styles['footer__option']}
					to='places'
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}>
					Places
				</Link>
				<Link
					className={styles['footer__option']}
					to='testimonials'
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}>
					Testimonials
				</Link>
				<Link
					className={`${styles['footer__option']} ${styles.lowercase}`}
					to='faq'
					spy={true}
					smooth={true}
					duration={500}>
					FAQs
				</Link>
			</div>
		</div>
	);
};

export default Footer;
