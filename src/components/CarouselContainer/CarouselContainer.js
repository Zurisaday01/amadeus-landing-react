import React, { useState } from 'react';
import { Container, Btn, ContainItems } from './CarouselContainerElements';
import {
	AiOutlineArrowLeft,
	AiOutlineArrowRight,
	AiOutlineArrowDown,
} from 'react-icons/ai';
import DATA from '../../app/app.data';
import CarouselItem from '../CarouselItem/CarouselItem';
import { Link } from 'react-scroll';

const CarouselContainer = ({ sectionRef }) => {
	// the current has transform translate 0
	const [current, setCurrent] = useState(0);
	const [guard, setGuard] = useState(false);

	const maxSlide = DATA.carousel.length;

	const nextSlide = () => {
		setGuard(true);
		if (current === maxSlide - 1) {
			setCurrent(0);
		} else {
			setCurrent(current + 1);
		}
	};

	const prevSlide = () => {
		setGuard(true);
		if (current === 0) {
			setCurrent(maxSlide - 1);
		} else {
			setCurrent(current - 1);
		}
	};

	return (
		<Container ref={sectionRef}>
			<div className='info'>
				<h1 className='title'>Amadeus</h1>
				<span className='description'>Have the best memories of your life</span>
			</div>
			<ContainItems>
				{DATA.carousel.map(({ id, ...otherProps }, idx) => (
					<CarouselItem
						key={id}
						{...otherProps}
						position={!guard ? idx : idx - current}
					/>
				))}
			</ContainItems>

			<Btn className='left' onClick={prevSlide}>
				{<AiOutlineArrowLeft />}
			</Btn>
			<Btn className='right' onClick={nextSlide}>
				{<AiOutlineArrowRight />}
			</Btn>

			<Link
				to='activities'
				spy={true}
				smooth={true}
				offset={-70}
				duration={500}>
				<Btn className='bottom'>{<AiOutlineArrowDown />}</Btn>
			</Link>
		</Container>
	);
};

export default CarouselContainer;
