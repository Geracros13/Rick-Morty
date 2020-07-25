import React from "react";
import styled from "styled-components";

const Container = styled.div`
	display: row;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	background-color: #f4f6ff;
	margin: 0;
	padding-top: 40px;
	@media only screen and (min-width: 300px) and (max-width: 800px) {
		align-items: center;
		display: flex;
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
	background-color: #212121;
	color: white;
	display: inline-block;
	margin: 10px;

	&:hover {
		box-shadow: 0 25px 25px 0 rgba(33, 33, 33);
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

const H4 = styled.h4`
	margin: 0 0 10px 5px;
	font-weight: 900;
	font-size: 18px;
	letter-spacing: 0.7px;
	color: #fff;
	text-align: left;
	cursor: pointer;
	&:hover {
		color: #42b883;
	}
`;

const SPAN = styled.span`
	color: white;
	font-weight: 900;
	letter-spacing: 0.5px;
	text-transform: capitalize;
	margin-left: 5px;
`;

const Status = styled.span`
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
		background: "#f3c623",
	},
};

const Card = (props) => {
	return (
		<Container>
			<Cards>
				{props.results.map((character) => (
					<CardAll key={character.id}>
						<IMG src={character.image} alt={character.name} />
						<CardContainer>
							<H4>{character.name}</H4>
							<P>
								Status: <Status color={Colors[character.status]} />
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
