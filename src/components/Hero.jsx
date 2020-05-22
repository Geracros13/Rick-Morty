import React from "react";
import styled from "styled-components";
import rym from "../images/hero.png";

const ContainerAll = styled.div`
	width: 100%;
	height: 350px;
	background-color: #212121;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	@media only screen and (min-width: 320px) and (max-width: 720px) {
		height: 590px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const IMG = styled.img`
	width: auto;
	height: 350px;
	padding-left: 1em;
`;

const H2 = styled.h2`
	color: #ef4d52;
	font-size: 1.1em;
	margin: 0 5px 0 5px;
	letter-spacing: 0.8px;
	font-weight: 500;
	margin: 10px;
	padding: 2px;
	text-transform: uppercase;
	text-align: center;
`;

const Select = styled.select`
	width: 150px;
	height: 35px;
	background: #bbb9ba;
	color: #212121;
	padding-left: 5px;
	font-size: 1em;
	border: none;
	cursor: pointer;
	margin: 10px 0 0 10px;

	option {
		color: black;
		background: white;
		display: flex;
		min-height: 20px;
		padding: 0px 2px 1px;
	}
`;

const BtnConsultar = styled.button`
	background-color: #fd0054;
	border: 1px solid #a80038;
	color: #252525;
	font-size: 1.1em;
	margin: 10px 0 20px 10px;
	padding: 0.25em 1em;
	height: 40px;
	width: 150px;
	border-radius: 3px;
	transition: width 2s;
	cursor: pointer;

	&:hover {
		width: 100;
		background-color: #a80038;
		color: #212121;
	}
`;

const Hero = () => {
	return (
		<ContainerAll>
			<IMG src={rym} />
			<Container>
				<H2>Puedes consultar los personajes con los siguientes filtros</H2>
				<Select>
					<option value="" hidden>
						- Select Status -
					</option>
					<option value="Alive">Alive</option>
					<option value="Dead">Dead</option>
					<option value="unknown">Unknown</option>
				</Select>
				<Select>
					<option value="" hidden>
						- Select Gender -
					</option>
					<option value="Female">Female</option>
					<option value="Male">Male</option>
					<option value="Genderless">Genderless</option>
					<option value="unknown">Unknown</option>
				</Select>

				<BtnConsultar>Consultar</BtnConsultar>
			</Container>
		</ContainerAll>
	);
};

export default Hero;
