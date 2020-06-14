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
	margin: 0 75px 0;
	padding: 0 0 25px;
`;

const CardAll = styled.div`
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	transition: 0.3s;
	width: 275px;
	background-color: #3c3e44;
	color: white;
	display: inline-block;
	margin: 10px;

	&:hover {
		box-shadow: 0 25px 25px 0 rgba(0, 0, 0, 0.2);
	}

	@media only screen and (min-width: 300px) and (max-width: 800px) {
		width: 275px;
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
	color: #fff;
	text-align: left;
	cursor: pointer;
	&:hover {
		color: #ff9800;
	}
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
	background: ${({ color }) => color.background};
	border-radius: 50%;
`;

const Colors = {
	Alive: {
		background: "#55CC44",
	},
	Dead: {
		background: "#D63D2E",
	},
	unknown: {
		background: "#23F1E8",
	},
};

const Card = (props) => {
	return (
		<Container>
			<H2>The Rick and Morty API</H2>
			<Cards>
				{props.results.map((character) => (
					<CardAll key={character.id}>
						<IMG src={character.image} alt={character.name} />
						<CardContainer>
							<H4>{character.name}</H4>
							<P>
								Status: <Color color={Colors[character.status]} />
								<SPAN>{character.status}</SPAN>
							</P>
							<P>
								Specie: <SPAN>{character.species}</SPAN>
							</P>
							<P>
								Gender: <SPAN>{character.gender}</SPAN>
							</P>
							<P>
								Origin: <SPAN>{character.origin.name}</SPAN>
							</P>
						</CardContainer>
					</CardAll>
				))}
			</Cards>
		</Container>
	);
};

export default Card;
