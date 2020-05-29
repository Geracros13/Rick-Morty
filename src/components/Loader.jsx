import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
0% { transform: rotate(0deg) }
100% { transform: rotate(360deg) }
`;

const LoaderContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 75px;
	margin: 200px;
`;

const LoaderMobile = styled.div`
	@media only screen and (max-width: 767px) {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

const LoaderSpinner = styled.div`
	border: 5px solid #101010;
	border-radius: 50%;
	border-top: 5px solid #ff1500;
	width: 50px;
	height: 50px;
	animation: ${spin} 2s linear infinite;
`;

const Loader = () => {
	return (
		<LoaderMobile>
			<LoaderContainer>
				<LoaderSpinner></LoaderSpinner>
			</LoaderContainer>
		</LoaderMobile>
	);
};

export default Loader;
