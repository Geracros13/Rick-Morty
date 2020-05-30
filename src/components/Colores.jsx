import React from "react";
import styled from "styled-components";

const Color = styled.span`
	display: inline-block;
	height: 0.5em;
	width: 0.5em;
	margin-left: 0.3em;
	background: red;
	border-radius: 50%;
`;

const Colores = () => {
	const Col = (character) => {
		const background = "";

		if (character === "Alive") {
			return (background = "#55CC44");
		}
		if (character === "Dead") {
			return (background = "#D63D2E");
		}
		if (character === "unknown") {
			return (background = "#23F1E8");
		}
	};

	return <Color></Color>;
};

export default Colores;
