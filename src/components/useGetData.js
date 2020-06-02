import { useState, useEffect } from "react";

const api = "https://rickandmortyapi.com/api/character/?page=3";

const useGetData = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch(api)
			.then((response) => response.json())
			.then((data) => setData(data));
	}, []);

	return data;
};

export default useGetData;
