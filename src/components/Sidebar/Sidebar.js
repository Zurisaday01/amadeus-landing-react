import React from 'react';
import { Link } from 'react-scroll';
import styles from './Sidebar.module.scss';
import { RiCloseFill } from 'react-icons/ri';
import CustomBtn from '../CustomBtn/CustomBtn';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ isOpen, toggle }) => {
	const navigate = useNavigate();
	return (
		<div className={`${styles.sidebar} ${isOpen ? styles.open : styles.close}`}>
			<button className={styles['sidebar__close']} onClick={() => toggle()}>
				<RiCloseFill />
			</button>
			<div className={styles['sidebar__options']}>
				<Link
					className={styles['sidebar__option']}
					to='activities'
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
					onClick={() => toggle()}>
					Activities
				</Link>
				<Link
					className={styles['sidebar__option']}
					to='meet-us'
					spy={true}
					smooth={true}
					duration={500}
					onClick={() => toggle()}>
					Meet us
				</Link>
				<Link
					className={styles['sidebar__option']}
					to='places'
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
					onClick={() => toggle()}>
					Places
				</Link>
				<Link
					className={styles['sidebar__option']}
					to='testimonials'
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
					onClick={() => toggle()}>
					Testimonials
				</Link>
				<Link
					className={`${styles['sidebar__option']}`}
					to='faq'
					spy={true}
					smooth={true}
					duration={500}
					onClick={() => toggle()}>
					FAQs
				</Link>
				<CustomBtn navigate={navigate} sidebar toggle={toggle}>
					Book
				</CustomBtn>
			</div>
		</div>
	);
};

export default Sidebar;
