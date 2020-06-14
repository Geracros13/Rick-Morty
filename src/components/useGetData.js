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
	}, [api]); //Para que cada vez que cambie (api) se reenderize de nuevo con los nuevos personajes

	if (count > 1) {
		var PreviousPage = () => setCount(count - 1);
	}

	if (count <= 30) {
		var NextPage = () => setCount(count + 1);
	}
	return { data, NextPage, PreviousPage };
};

export default useGetData;
