import React, { useState } from 'react';
import * as Styled from './styles';
import { Image, Flex } from 'components/atoms';
import meeshoLogo from 'assets/svg/meesho-logo.svg';
import cart from 'assets/svg/cart.svg';
import profile from 'assets/svg/profile.svg';
import download from 'assets/svg/download.svg';
import { links } from 'helpers/static-data';

export default function Header() {
	const [menus, setSubMenus] = useState([]);

	function handleMenuHover(subMenus = []) {
		console.log('subMenus', subMenus);
		setSubMenus(subMenus);
	}

	return (
		<Styled.Container>
			<Styled.TopHeader>
				<Styled.TopLinks>
					<Flex alignItems="center">
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
							<Styled.Link
								key={item?.id}
								to={item?.to}
								onMouseEnter={() => handleMenuHover(item?.subMenus)}
							>
								<Styled.LinkText>{item?.text}</Styled.LinkText>
							</Styled.Link>
						))}
					</Styled.Links>
					{menus?.length > 0 && (
						<Styled.Menu>
							{menus?.map((item, i) => (
								<Styled.SubMenus key={item?.id} isOdd={Boolean(i % 2)}>
									<Styled.MenuTitle>{item?.menuTitle}</Styled.MenuTitle>
									<div>
										{item?.menus?.map((sub) => (
											<Styled.MenuLink key={sub?.id}>
												{sub?.text}
											</Styled.MenuLink>
										))}
									</div>
								</Styled.SubMenus>
							))}
						</Styled.Menu>
					)}
				</Styled.Header>
			</Styled.TopHeader>
		</Styled.Container>
	);
}
