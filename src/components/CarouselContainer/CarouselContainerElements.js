import styled from 'styled-components';
import '../../app/globalStyles.scss';

export const Container = styled.div`
	height: 95vh;
	width: 100%;
	position: relative;
	font-family: 'Francois One', sans-serif;
	color: hsl(51, 33%, 96%);
	text-transform: uppercase;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	&:before {
		content: '';
		background-color: hsla(208, 96%, 28%, 0.6);
		width: 100%;
		height: 100%;
		position: absolute;
	}

	& .info {
		z-index: 10;
		margin-bottom: 5rem;
		width: 90vw;
		@media (max-width: 750px) {
			margin-bottom: 20rem;
		}
	}

	& .title {
		z-index: 10;
		font-size: clamp(6rem, 5vw, 8rem);
		letter-spacing: 1.1rem;
	}

	& .description {
		font-size: clamp(2rem, 5vw, 3rem);
		letter-spacing: 2px;
		z-index: 10;
	}
`;

export const Btn = styled.button`
	background-color: hsl(45, 96%, 43%);
	width: 5rem;
	height: 5rem;
	outline: none;
	border: none;
	position: absolute;
	font-size: 2rem;
	cursor: pointer;

	&.left {
		left: 0;
		transform: translateX(-30%);
		@media (max-width: 750px) {
			transform: translateX(0);
		}
	}

	&.right {
		right: 0;
		transform: translateX(30%);
		@media (max-width: 750px) {
			transform: translateX(0);
		}
	}
	&.bottom {
		bottom: 0;
		left: 50%;

		transform: translateX(-50%);
	}
`;

export const ContainItems = styled.div`
	overflow-x: hidden;
	height: 100%;
	width: 100%;
	position: absolute;
`;
