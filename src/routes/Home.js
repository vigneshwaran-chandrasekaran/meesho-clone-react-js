import React from 'react';
import styled from 'styled-components';
import { About, Products, Categories, Pictures } from 'components/routes/home';
import { FooterSection } from 'components/common';

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

const Footer = styled.footer`
	display: flex;
	flex-direction: column;
	background-color: ${(props) => props.theme.colors.Cultured2};
	width: 100%;
`;

export default function Home() {
	return (
		<Container>
			<Categories />
			<Pictures />
			<Products />
			<Footer>
				<FooterSection />
				<About />
			</Footer>
		</Container>
	);
}
