import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-scroll';
import CustomBtn from '../CustomBtn/CustomBtn';
import { useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import LogoHotel from '../LogoHotel/LogoHotel';

const Header = ({ toggle, headerRef, isVisible }) => {
	const navigate = useNavigate();

	return (
		<div
			className={`${styles.header} ${!isVisible ? styles['sticky'] : ''}`}
			id='header'
			ref={headerRef}>
			<LogoHotel />
			<div className={styles.left}>
				<div className={styles['header__options']}>
					<Link
						className={styles['header__option']}
						to='activities'
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}>
						Activities
					</Link>
					<Link
						className={styles['header__option']}
						to='meet-us'
						spy={true}
						smooth={true}
						duration={500}>
						Meet us
					</Link>
					<Link
						className={styles['header__option']}
						to='places'
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}>
						Places
					</Link>
					<Link
						className={styles['header__option']}
						to='testimonials'
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}>
						Testimonials
					</Link>
					<Link
						className={`${styles['header__option']} ${styles.lowercase}`}
						to='faq'
						spy={true}
						smooth={true}
						duration={500}>
						FAQs
					</Link>
				</div>
				<CustomBtn navigate={navigate}>BOOK</CustomBtn>
			</div>
			<button className={styles['header__btn']} onClick={() => toggle()}>
				<GiHamburgerMenu />
			</button>
		</div>
	);
};

export default Header;
