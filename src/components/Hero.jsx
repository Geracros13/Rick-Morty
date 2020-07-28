import React from "react";
import styled from "styled-components";

import useGetData from "./useGetData";

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	height: 200px;

	background-color: #212121;
	@media only screen and (min-width: 320px) and (max-width: 720px) {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin: 0;
	}
`;

const BtnConsultar = styled.button`
	background-color: #212121;
	border: 1px solid white;
	color: white;
	font-size: 1.1em;
	height: 40px;
	width: 15%;
	border-radius: 15px;
	transition: width 2s;
	cursor: pointer;
	margin-left: 15px;
	outline: none;

	&:hover {
		width: 15%;
		background-color: #404040;
		color: white;
	}
	&:active {
		transform: scale(0.9);
	}
	@media only screen and (min-width: 320px) and (max-width: 720px) {
		margin-top: 20px;
		width: 35%;
	}
`;

const Search = styled.input`
	border-radius: 25px;
	height: 40px;
	width: 60%;
	font-size: 20px;
	font-weight: 400;
	text-align: left;
	padding-left: 25px;
	border: none;
	outline: none;
	@media only screen and (min-width: 320px) and (max-width: 720px) {
		width: 80%;
	}
`;

const Hero = () => {
	const { BuscarPersonaje } = useGetData();
	return (
		<Container>
			<Search
				type="text"
				name="personaje"
				placeholder="Buscar..."
				onChange={BuscarPersonaje}
			/>

			<BtnConsultar type="button">Consultar</BtnConsultar>
		</Container>
	);
};

export default Hero;
