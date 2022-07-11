import React from 'react';
import * as Styled from './styles';
import { Image, Flex } from 'components/atoms';
import meeshoLogo from 'assets/svg/meesho-logo.svg';
import cart from 'assets/svg/cart.svg';
import profile from 'assets/svg/profile.svg';
import download from 'assets/svg/download.svg';

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
			<Styled.TopHeader>
				<Styled.TopLinks>
					<Flex>
						<Image width={156} height={36} src={meeshoLogo} />
						<Styled.SearchBox>
							<Styled.Search placeholder="Try Saree, Kurti or Search by Product Code" />
						</Styled.SearchBox>
					</Flex>
					<Flex alignItems="center">
						<Flex justifyContent="center" alignItems="center">
							<Image width={12} height={20} src={download} />
							<Styled.Text>Download App</Styled.Text>
						</Flex>
						<Styled.Text>Become a Supplier</Styled.Text>
						<Flex flexDirection="column" alignItems="center">
							<Image width={20} height={20} src={profile} mb="3px" />
							<Styled.Text>Profile</Styled.Text>
						</Flex>
						<Flex flexDirection="column" alignItems="center">
							<Image width={20} height={20} src={cart} mb="3px" />
							<Styled.Text>Cart</Styled.Text>
						</Flex>
					</Flex>
				</Styled.TopLinks>
			</Styled.TopHeader>
			<Styled.TopHeader>
				<Styled.Header>
					<Styled.Links>
						{links.map((item) => (
							<Styled.Link key={item?.id} to={item?.to}>
								<Styled.LinkText>{item?.text}</Styled.LinkText>
							</Styled.Link>
						))}
					</Styled.Links>
				</Styled.Header>
			</Styled.TopHeader>
		</Styled.Container>
	);
}
