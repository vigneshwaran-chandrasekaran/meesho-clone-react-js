import React from 'react';
import styled from 'styled-components';
import { About, Products } from 'components/routes/home';

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export default function Home() {
	return (
		<Container>
			<Products />
			<About />
		</Container>
	);
}
