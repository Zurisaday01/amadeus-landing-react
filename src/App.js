import React, { useState, useEffect, useRef } from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import BookPage from './pages/BookPage/BookPage';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { useIntersectionObserver } from 'react-intersection-observer-hook';
function App() {
	const [isOpen, setIsOpen] = useState(false);
	// Intersection Observer API sticky header <nav>
	const toggle = () => {
		// the opposite
		setIsOpen(!isOpen);
	};
	const [sectionRef, { entry }] = useIntersectionObserver();
	// const headerRef = useRef();
	let isVisible = entry && entry.isIntersecting;

	const change = function () {
		console.log(isVisible);
		isVisible = false;
	};

	return (
		<div>
			<BrowserRouter>
				<Sidebar isOpen={isOpen} toggle={toggle} />
				<Header toggle={toggle} isVisible={isVisible} />
				<Routes>
					<Route
						exact
						path='/'
						element={<HomePage sectionRef={sectionRef} />}
					/>
					<Route
						exact
						path='/book'
						element={<BookPage defaultValue={change} />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

// useEffect(() => {
// 	/*
// 	My code is dependent of stickyHeader becouse of stickyHeader function is changing my state
// 	so the code reflects the lates values ob stickyHeader
// 	*/
// 	const stickyHeader = function (entries) {
// 		const [entry] = entries;

// 		if (!entry.isIntersecting) setIsSticky(true);
// 		else setIsSticky(false);
// 	};

// 	const headerObserver = new IntersectionObserver(stickyHeader, {
// 		root: null,
// 		threshold: 0,
// 		rootMargin: '0px',
// 	});
// 	if (headerRef.current) headerObserver.observe(headerRef.current);
// 	console.log('re-render');

// 	return () => {
// 		console.log('cleanup');
// 		headerObserver.unobserve(headerRef.current);
// 	};
// });
