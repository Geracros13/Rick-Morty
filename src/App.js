import React from "react";
import { createGlobalStyle } from "styled-components";
import Loader from "./components/Loader";
import Bar from "./components/Bar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
import useGetData from "./components/useGetData";

const GlobalStyle = createGlobalStyle`
body{
	font-family: 'Roboto', sans-serif;
	margin: 0;
	padding: 0;
	width:100%;
}
`;

function App() {
	const data = useGetData();
	console.log(data);
	return data.length === 0 ? (
		<Loader />
	) : (
		<>
			<GlobalStyle />
			<Bar />
			<Hero />
			<Card data={data.results} />
			<Footer />
			<Copyright />
		</>
	);
}

export default App;
