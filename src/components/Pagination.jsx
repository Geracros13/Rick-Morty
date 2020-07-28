import React from "react";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0;
	padding: 15px;
	background-color: #f4f6ff;
`;

const Paginations = styled.div`
	display: inline-block;
	@media only screen and (min-width: 300px) and (max-width: 800px) {
		display: flex;
	}
`;
const Btn = styled.button`
	background-color: #212121;
	border: 1px solid #f4f6ff;
	color: white;
	font-size: 1.1em;
	margin: 10px;
	padding: 0.25em 1em;
	height: 40px;
	width: 150px;
	border-radius: 15px;
	transition: width 2s;
	outline: none;
	cursor: pointer;

	&:hover {
		width: 100;
		background-color: #404040;
		color: white;
	}
	&:active {
		transform: scale(0.9);
	}
`;

const Pagination = (props) => {
	const NextPage = props.next;
	const PreviousPage = props.prev;

	return (
		<Container>
			<Paginations>
				<Btn value="Anterior" onClick={PreviousPage}>
					Anterior
				</Btn>

				<Btn value="Siguiente" onClick={NextPage}>
					Siguiente
				</Btn>
			</Paginations>
		</Container>
	);
};

export default Pagination;
