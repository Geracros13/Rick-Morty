import React from "react";
import styled from "styled-components";

const Container = styled.div`
	display: row;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	background-color: #202329;
	margin: 0;
	padding: 0;
	@media only screen and (min-width: 300px) and (max-width: 800px) {
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
`;

const Cards = styled.div`
	margin: 0 100px 0;
	padding: 0 0 25px;
`;

const CardAll = styled.div`
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	transition: 0.3s;
	width: 250px;
	background-color: #3c3e44;
	color: white;
	display: inline-block;
	margin: 10px;

	&:hover {
		box-shadow: 0 25px 25px 0 rgba(0, 0, 0, 0.2);
	}

	@media only screen and (min-width: 300px) and (max-width: 800px) {
		width: 250px;
		margin: 7px;
	}
`;

const CardContainer = styled.div`
	padding: 5px;
	width: inherit;
	@media only screen and (min-width: 320px) and (max-width: 720px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	}
`;

const IMG = styled.img`
	width: 100%;
	height: 220px;
	object-fit: cover;
	@media only screen and (min-width: 320px) and (max-width: 720px) {
		width: 100%;
	}
`;

const P = styled.p`
	font-size: 14px;
	font-weight: 400;
	margin: 5px;
	display: flex;
	align-items: center;

	color: #9e9e9e;
`;

const H2 = styled.h2`
	color: #ff9800;
	font-size: 3em;
	margin: 0 5px 0 5px;

	letter-spacing: 0.8px;
	font-weight: 500;
	padding: 30px;
	text-align: center;
`;

const H4 = styled.h4`
	margin: 0 0 10px 5px;
	font-weight: 900;
	font-size: 18px;
	letter-spacing: 0.7px;
	color: #ff9800;
	text-align: center;
`;

const SPAN = styled.span`
	color: white;
	font-weight: 900;
	letter-spacing: 0.5px;
	text-transform: capitalize;
	margin-left: 5px;
`;

const Color = styled.span`
	display: inline-block;
	height: 0.5em;
	width: 0.5em;
	margin-left: 0.3em;
	background: ${({ color }) => color.base};
	border-radius: 50%;
`;

const Colors = {
	Alive: {
		base: "#55CC44",
	},
	Dead: {
		base: "#D63D2E",
	},
	unknown: {
		base: "#23F1E8",
	},
};

const Card = (props) => {
	return (
		<Container>
			<H2>The Rick and Morty API</H2>
			<Cards>
				{props.data.map((resul, id) => (
					<CardAll key={`Unique-${id}`}>
						<IMG src={resul.image} alt={resul.name} />
						<CardContainer>
							<H4>{resul.name}</H4>
							<P>
								Status: <Color color={Colors[resul.status]} />
								<SPAN>{resul.status}</SPAN>
							</P>
							<P>
								Specie: <SPAN>{resul.species}</SPAN>
							</P>
							<P>
								Gender: <SPAN>{resul.gender}</SPAN>
							</P>
							<P>
								Origin: <SPAN>{resul.origin.name}</SPAN>
							</P>
							{id.id}
						</CardContainer>
					</CardAll>
				))}
			</Cards>
		</Container>
	);
};

export default Card;
