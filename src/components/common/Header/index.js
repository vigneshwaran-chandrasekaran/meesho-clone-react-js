import React from 'react';
import * as Styled from './styles';

const links = [
	{ id: 1, text: 'Women Ethnic', to: '/' },
	{ id: 2, text: 'Women Western', to: '/' },
	{ id: 3, text: 'Jewellery & Accessories', to: '/' },
	{ id: 4, text: 'Men', to: '/' },
	{ id: 5, text: 'Beauty & Health', to: '/' },
	{ id: 6, text: 'Bags & Footwear', to: '/' },
	{ id: 7, text: 'Home & Kitchen', to: '/' },
	{ id: 8, text: 'Kids', to: '/' },
	{ id: 9, text: 'Electronics', to: '/' },
];

export default function Header() {
	return (
		<Styled.Container>
			<Styled.Header>
				<Styled.Links>
					{links.map((link) => (
						<Styled.Link key={link?.id} to={link?.to}>
							<Styled.LinkText>{link?.text}</Styled.LinkText>
						</Styled.Link>
					))}
				</Styled.Links>
			</Styled.Header>
		</Styled.Container>
	);
}
