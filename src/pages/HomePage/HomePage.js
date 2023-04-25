import React, { useState } from 'react';
import CarouselContainer from '../../components/CarouselContainer/CarouselContainer';
import ActivitiesSection from '../../sections/ActivitiesSection/ActivitiesSection';
import MeetUsSection from '../../sections/MeetUsSection/MeetUsSection';
import PlacesSection from '../../sections/PlacesSection/PlacesSection';
import TestimonialsSection from '../../sections/TestimonialsSection/TestimonialsSection';
import FAQSection from '../../sections/FAQSection/FAQSection';
import Footer from '../../components/Footer/Footer';

import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';

import { useIntersectionObserver } from 'react-intersection-observer-hook';

const HomePage = () => {
	const [isOpen, setIsOpen] = useState(false);
	// Intersection Observer API sticky header <nav>
	const toggle = () => {
		// the opposite
		setIsOpen(!isOpen);
	};
	const [sectionRef, { entry }] = useIntersectionObserver();
	// const headerRef = useRef();
	let isVisible = entry && entry.isIntersecting;

	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Header toggle={toggle} isVisible={isVisible} />
			<main>
				<CarouselContainer sectionRef={sectionRef} />
				<ActivitiesSection />
				<MeetUsSection />
				<PlacesSection />
				<TestimonialsSection />
				<FAQSection />
				<Footer />
			</main>
		</>
	);
};

export default HomePage;
