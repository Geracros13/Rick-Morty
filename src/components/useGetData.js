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

	// Paginacion
	const NextPage = () => {
		let limite = data.info.pages;
		if (count < limite) {
			setCount(count + 1);
		}
	};
	const PreviousPage = () => {
		if (count > 1) {
			setCount(count - 1);
		}
	};

	// Buscar
	const nombre = "";
	const [name, setName] = useState(nombre);
	const url = `https://rickandmortyapi.com/api/character/?name=${name}`;

	// Funcion que me obtendra el valor ingresado en el input
	const BuscarPersonaje = (e) => {
		setName(e.target.value);
		console.log(name);
	};

	return { data, NextPage, PreviousPage, BuscarPersonaje };
};

export default useGetData;
