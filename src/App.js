import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import BookPage from './pages/BookPage/BookPage';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route exact path='/' element={<HomePage />} />
					<Route exact path='/book' element={<BookPage />} />
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
