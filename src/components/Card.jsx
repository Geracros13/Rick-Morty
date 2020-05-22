import React from "react";
import styled from "styled-components";
import avatar from "../images/alien.jpeg";

const ContainerCards = styled.div`
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
	font-weight: 500;
	margin: 5px;
	text-transform: uppercase;
`;

const H2 = styled.h2`
	color: #ff9800;
	font-size: 3em;
	margin: 0 5px 0 5px;
	letter-spacing: 0.8px;
	font-weight: 500;
	padding: 2px;
	text-transform: uppercase;
	text-align: center;
`;

const H4 = styled.h4`
	margin: 0 0 10px 0;
	font-weight: 900;
	letter-spacing: 0.7px;
	color: #ff9800;
	text-transform: uppercase;
`;

const Card = () => {
	return (
		<ContainerCards>
			<H2>The Rick and Morty API</H2>
			<CardAll>
				<IMG src={avatar} alt="hello" />
				<CardContainer>
					<H4>Nombre personaje</H4>
					<P>Status:</P>
					<P>Specie:</P>
					<P>Origin:</P>
				</CardContainer>
			</CardAll>
			<CardAll>
				<IMG src={avatar} alt="hello" />
				<CardContainer>
					<H4>Nombre personaje</H4>
					<P>Status:</P>
					<P>Specie:</P>
					<P>Origin:</P>
				</CardContainer>
			</CardAll>
			<CardAll>
				<IMG src={avatar} alt="hello" />
				<CardContainer>
					<H4>Nombre personaje</H4>
					<P>Status:</P>
					<P>Specie:</P>
					<P>Origin:</P>
				</CardContainer>
			</CardAll>
			<CardAll>
				<IMG src={avatar} alt="hello" />
				<CardContainer>
					<H4>Nombre personaje</H4>
					<P>Status:</P>
					<P>Specie:</P>
					<P>Origin:</P>
				</CardContainer>
			</CardAll>
			<CardAll>
				<IMG src={avatar} alt="hello" />
				<CardContainer>
					<H4>Nombre personaje</H4>
					<P>Status:</P>
					<P>Specie:</P>
					<P>Origin:</P>
				</CardContainer>
			</CardAll>
			<CardAll>
				<IMG src={avatar} alt="hello" />
				<CardContainer>
					<H4>Nombre personaje</H4>
					<P>Status:</P>
					<P>Specie:</P>
					<P>Origin:</P>
				</CardContainer>
			</CardAll>
			<CardAll>
				<IMG src={avatar} alt="hello" />
				<CardContainer>
					<H4>Nombre personaje</H4>
					<P>Status:</P>
					<P>Specie:</P>
					<P>Origin:</P>
				</CardContainer>
			</CardAll>
		</ContainerCards>
	);
};

export default Card;
