import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import * as Pages from 'routes';
import { Header } from 'components/common';

const Container = styled.div`
	padding-top: 80px;
	max-width: 1328px;
	margin: 0 auto;
`;

export default function Router() {
	return (
		<BrowserRouter>
			<Header />
			<Container>
				<Routes>
					<Route path="/">
						<Route index element={<Pages.Home />} />
					</Route>
					<Route path="*" element={<p>No Match</p>} />
				</Routes>
			</Container>
		</BrowserRouter>
	);
}
