import { useState, useEffect } from "react";

// const api = "https://rickandmortyapi.com/api/character/?page=3";

// 	const [data, setData] = useState([]);

// 	useEffect(() => {
// 		fetch(api)
// 			.then((response) => response.json())
// 			.then((data) => setData(data));
// 	}, []);

const useGetData = () => {
	const api = "https://rickandmortyapi.com/api/character/?page=3";

	const [data, setData] = useState([]);

	useEffect(() => {
		obtenerDatos();
	}, []);

	const obtenerDatos = async () => {
		const datos = await fetch(api);
		const personajes = await datos.json();

		setData(personajes);
	};

	return data;
};

export default useGetData;
