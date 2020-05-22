import React from "react";
import styled from "styled-components";

const Container = styled.div`
	width: 100%;
	margin: 0;
	height: 50px;
	background-color: #232323;
`;

const Name = styled.div`
	color: #fff;
	margin: 0 100px 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 15px;
	@media only screen and (min-width: 300px) and (max-width: 800px) {
		margin: 0 5px 0;
	}
`;
const A = styled.a`
	text-decoration: none;
	color: #fff;
`;

const Copyright = () => {
	let anio = new Date();
	return (
		<Container>
			<Name>
				Manuel Flores ©{anio.getFullYear()} Copyright
				<A href="mailto:mgfq13@hotmail.com">E-mail</A>
			</Name>
		</Container>
	);
};

export default Copyright;
