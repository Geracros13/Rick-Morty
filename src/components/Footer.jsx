import React from "react";
import styled from "styled-components";

const Container = styled.div`
	width: 100%;
	height: 250px;
	background-color: #212121;
	color: #fff;
	margin: 0;
	@media only screen and (min-width: 300px) and (max-width: 800px) {
		height: 400px;
	}
`;

const Description = styled.div`
	display: inline-block;
	margin: 0 300px 0 100px;
	width: 430px;
	@media only screen and (min-width: 300px) and (max-width: 800px) {
		margin: 0 30px 0;
		width: 300px;
		display: flex;
		flex-direction: column;
	}
`;

const H3 = styled.h3`
	margin: 0;
	padding: 30px 0 10px;
	font-size: 1.6em;
	line-height: 100%;
	font-weight: 500;
	@media only screen and (min-width: 300px) and (max-width: 800px) {
		padding: 20px 0 5px;
	}
`;

const P = styled.p`
	margin: 1px;
	font-size: 15px;
	line-height: 1.5;
`;

const Social = styled.div`
	display: inline-block;
	margin-left: 100px;
	@media only screen and (min-width: 300px) and (max-width: 800px) {
		width: 300px;
		margin-left: 30px;
	}
`;
const Ul = styled.ul`
	padding: 0;
	@media only screen and (min-width: 300px) and (max-width: 800px) {
		margin: 10px 0 10px;
	}
`;

const Li = styled.li`
	list-style: none;
	line-height: 20px;
`;

const A = styled.a`
	text-decoration: none;
	color: #fff;
`;

const Footer = () => {
	return (
		<Container>
			<Description>
				<H3>Manuel Flores Front-End Developer & DevOps Jr</H3>
				<P>
					I've knowledge in the DevOps culture, with experience in CI / CD
					with Azure and Jenkins tools. Knowledge of how to evaluate the
					quality of the source code with the Sonarqube. Experience in
					Performance, Accessibility, Best Practices, Seo in personal
					projects that i've done as Front-end.
				</P>
			</Description>
			<Social>
				<H3>Contacto</H3>
				<Ul>
					<Li>
						<A
							href="https://www.facebook.com/gerardo.f.quinones"
							rel="noopener noreferrer"
							target="_blank"
						>
							Facebook
						</A>
					</Li>
					<Li>
						<A
							href="https://github.com/Geracros13"
							rel="noopener noreferrer"
							target="_blank"
						>
							Github
						</A>
					</Li>
					<Li>
						<A
							href="https://gt.linkedin.com/in/man-flores"
							rel="noopener noreferrer"
							target="_blank"
						>
							Linkedin
						</A>
					</Li>
					<Li>
						<A
							href="https://www.instagram.com/l_e_g_a_s_p_i/?hl=es-la"
							rel="noopener noreferrer"
							target="_blank"
						>
							Instagram
						</A>
					</Li>
				</Ul>
			</Social>
		</Container>
	);
};

export default Footer;
