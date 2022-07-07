import React from 'react';
import meesho from 'assets/images/m-loader.png';
import { Image } from 'components/atoms';
import * as Styled from './styles';

export default function Header() {
	return (
		<div>
			<Styled.Header>
				<Image width={36} height={36} src={meesho} />
				<Styled.Search placeholder="Search" />
				<Styled.Links>
					<Styled.Link to="/">
						<Image width={24} height={24} src={meesho} />
						<Styled.LinkText>Home</Styled.LinkText>
					</Styled.Link>
				</Styled.Links>
			</Styled.Header>
		</div>
	);
}
