import { useState, useEffect } from "react";

const useGetData = () => {
	const [count, setCount] = useState(1); //Estado de la Paginacion

	const api = `https://rickandmortyapi.com/api/character/?page=${count}`;

	const [data, setData] = useState([]);

	const obtenerDatos = async () => {
		const datos = await fetch(api);
		const personajes = await datos.json();

		setData(personajes);
	};

	useEffect(() => {
		obtenerDatos();
	}, [api]);
	//eslint-disable-next-line

	//Paginacion Previous Page
	// if (count > 1) {
	// 	var PreviousPage = () => setCount(count - 1);
	// 	console.log(data.info.pages);
	// }

	//Paginacion Next Page el valor 30 es porque en la data hay 30 Pages para paginar
	// if (count <= 30) {
	// 	var NextPage = () => setCount(count + 1);
	// }

	const PreviousPage = async () => await setCount(count - 1);
	const NextPage = async () => await setCount(count + 1);
	// const da = data.info.pages;
	// if (data != 0) {
	// 	console.log(da);

	// 	console.log(data.info.next);
	// }

	return { data, NextPage, PreviousPage };
};

export default useGetData;
