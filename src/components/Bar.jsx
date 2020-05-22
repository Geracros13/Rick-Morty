import React from "react";
import styled from "styled-components";

const ContainerBar = styled.div`
	width: 100%;
	height: 50px;
	background-color: #ef4d52;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const H1 = styled.h1`
	color: #252525;
	font-size: 1.3em;
	margin: 0;
	letter-spacing: 0.8px;
	font-weight: 500;
`;

const Bar = () => {
	return (
		<ContainerBar>
			<H1>Rick & Morty</H1>
		</ContainerBar>
	);
};

export default Bar;
