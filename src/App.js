import React from "react";
import { createGlobalStyle } from "styled-components";
import useGetData from "./components/useGetData";
import Loader from "./components/Loader";
import Bar from "./components/Bar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";

const GlobalStyle = createGlobalStyle`
body{
	font-family: 'Roboto', sans-serif;
	margin: 0;
	padding: 0;
	width:100%;
}
`;

function App() {
	const { data, NextPage, PreviousPage } = useGetData();

	return data.length === 0 ? (
		<Loader />
	) : (
		<>
			<GlobalStyle />
			<Bar />
			<Hero />
			<Card results={data.results} />
			<Pagination next={NextPage} prev={PreviousPage} />
			<Footer />
			<Copyright />
		</>
	);
}

export default App;
