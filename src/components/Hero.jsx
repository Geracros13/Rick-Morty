import React, { useState } from "react";
import styled from "styled-components";
import rym from "../images/hero.png";

const ContainerHero = styled.div`
	width: 100%;
	height: 350px;
	background-color: #212121;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	@media only screen and (min-width: 320px) and (max-width: 720px) {
		height: 590px;
		width: 100%;
	}
`;

const All = styled.div`
	margin: 0 100px 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media only screen and (min-width: 320px) and (max-width: 720px) {
		margin: 0 15px 0;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-left: 100px;
	@media only screen and (min-width: 320px) and (max-width: 720px) {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin: 0;
	}
`;

const ContainerIMG = styled.div`
	@media only screen and (min-width: 320px) and (max-width: 720px) {
		margin: 0 15px 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

const IMG = styled.img`
	width: auto;
	height: 350px;
	padding-left: 1em;
	@media only screen and (min-width: 320px) and (max-width: 720px) {
		width: 100%;
		object-fit: cover;
	}
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

const BtnConsultar = styled.button`
	background-color: #fd0054;
	border: 1px solid #a80038;
	color: #252525;
	font-size: 1.1em;
	margin: 10px 0 20px 10px;
	padding: 0.25em 1em;
	height: 40px;
	width: 150px;
	border-radius: 50px;
	transition: width 2s;
	cursor: pointer;

	&:hover {
		width: 100;
		background-color: #a80038;
		color: #212121;
	}
	&:active {
		transform: scale(0.9);
	}
`;
const ContainerButton = styled.div`
	display: flex;
`;

const Search = styled.input`
	border-radius: 25px;
	height: 25px;
	font-size: 14px;
	font-weight: 400;
	padding-left: 5px;
	text-align: center;
	border: none;
	cursor: pointer;
	margin: 10px 0 0 10px;
`;

const Hero = () => {
	const nombre = "";

	const [name, setName] = useState(nombre);

	const url = `https://rickandmortyapi.com/api/character/?name=${name}`;

	const [data, setData] = useState([]);
	const getcharacter = () => {
		// console.log(url);

		const obtenerDatos = async () => {
			const datos = await fetch(url);
			const personajes = await datos.json();

			setData(personajes);
		};
		obtenerDatos();
		return data;
	};
	console.log(data);

	return (
		<ContainerHero>
			<All>
				<ContainerIMG>
					<IMG src={rym} />
				</ContainerIMG>
				<Container>
					<H2>
						Puedes consultar los personajes por busqueda o verlos todos
					</H2>

					<Search
						// type="text"
						name="personaje"
						placeholder="Ej. Rick"
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>
					<ContainerButton>
						<BtnConsultar type="button" onClick={getcharacter}>
							Consultar
						</BtnConsultar>
						<BtnConsultar disabled={true}>Ver Todos</BtnConsultar>
					</ContainerButton>
				</Container>
			</All>
		</ContainerHero>
	);
};

export default Hero;
