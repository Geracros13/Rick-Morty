import React from "react";
import { createGlobalStyle } from "styled-components";
import Bar from "./components/Bar";
import Hero from "./components/Hero";
import Card from "./components/Card";
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
	return (
		<>
			<GlobalStyle />
			<Bar />
			<Hero />
			<Card />
			<Footer />
			<Copyright />
		</>
	);
}

export default App;
