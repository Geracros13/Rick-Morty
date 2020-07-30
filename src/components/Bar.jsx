import React from "react";
import styled from "styled-components";

const ContainerBar = styled.div`
	width: 100%;
	height: 75px;
	background-color: #212121;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const H2 = styled.h2`
	color: #f4f6ff;
	font-size: 3em;
	margin: 0 5px 0 5px;
	letter-spacing: 0.8px;
	font-weight: 500;
	padding: 30px;
	text-align: center;
	@media only screen and (min-width: 320px) and (max-width: 720px) {
		font-size: 2em;
	}
`;

const Bar = () => {
	return (
		<ContainerBar>
			<H2>The Rick & Morty</H2>
		</ContainerBar>
	);
};

export default Bar;
