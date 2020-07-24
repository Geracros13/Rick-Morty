import { useState, useEffect } from "react";

const useGetData = () => {
	const [count, setCount] = useState(1); //Estado de la Paginacion

	const API = `https://rickandmortyapi.com/api/character/?page=${count}`;

	const [data, setData] = useState([]);

	const obtenerDatos = async () => {
		const datos = await fetch(API);
		const personajes = await datos.json();

		setData(personajes);
	};

	useEffect(() => {
		obtenerDatos();
	}, [API]);
	// eslint-disable-next-line

	const NextPage = () => {
		const limite = data.info.pages;
		if (count < limite) {
			setCount(count + 1);
		}
	};
	const PreviousPage = () => {
		if (count > 1) {
			setCount(count - 1);
		}
	};

	return { data, NextPage, PreviousPage };
};

export default useGetData;
