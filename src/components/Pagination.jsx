import React from "react";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0;
	background-color: #202329;
`;

const Paginations = styled.div`
	display: inline-block;
	padding-bottom: 15px;
`;
const Btn = styled.button`
	background-color: #fd0054;
	border: 1px solid #a80038;
	color: #252525;
	font-size: 1.1em;
	margin: 10px 0 20px 10px;
	padding: 0.25em 1em;
	height: 40px;
	width: 150px;
	border-radius: 50px;
	transition: width 2s;
	cursor: pointer;

	&:hover {
		width: 100;
		background-color: #a80038;
		color: #212121;
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
