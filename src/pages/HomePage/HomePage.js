import React, { useState } from 'react';
import CarouselContainer from '../../components/CarouselContainer/CarouselContainer';
import ActivitiesSection from '../../sections/ActivitiesSection/ActivitiesSection';
import MeetUsSection from '../../sections/MeetUsSection/MeetUsSection';
import PlacesSection from '../../sections/PlacesSection/PlacesSection';
import TestimonialsSection from '../../sections/TestimonialsSection/TestimonialsSection';
import FAQSection from '../../sections/FAQSection/FAQSection';
import Footer from '../../components/Footer/Footer';

const HomePage = ({ sectionRef }) => {
	return (
		<div>
			<CarouselContainer sectionRef={sectionRef} />
			<ActivitiesSection />
			<MeetUsSection />
			<PlacesSection />
			<TestimonialsSection />
			<FAQSection />
			<Footer />
		</div>
	);
};

export default HomePage;
