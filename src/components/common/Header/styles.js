import styled from 'styled-components';
import { Link as A } from 'react-router-dom';
import { Box } from 'components/atoms';
import searchIcon from 'assets/svg/search.svg';

const Container = styled.header`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	z-index: 1000;
	background-color: ${(props) => props.theme.colors.white};
`;

const TopHeader = styled.nav`
	border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`;

const TopLinks = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: 1280px;
	margin: 0 auto;
	padding: 0.5rem 0;
`;

const SearchBox = styled.nav`
	position: relative;

	&:before {
		position: absolute;
		left: 30px;
		top: 18px;
		display: inline-block;
		content: ' ';
		width: 20px;
		height: 20px;
		background-image: url(${searchIcon});
		background-size: contain;
	}
`;

const Search = styled.input.attrs((props) => ({
	placeholder: props.placeholder,
}))`
	font-family: 'Mier B Book';
	font-size: 1rem;
	font-style: normal;
	letter-spacing: 0.0025em;
	box-sizing: border-box;
	width: 400px;
	border: 1px solid ${(props) => props.theme.colors.SpanishGray};
	padding: 18px 36px 14px 44px;
	border-radius: 4px;
	caret-color: ${(props) => props.theme.colors.primary};
	color: ${(props) => props.theme.colors.jet};
	outline: none;
	margin-left: 1rem;
`;

const Text = styled(Box)`
	display: inline-block;
	font-family: 'Mier B Book';
	color: ${(props) => props.theme.colors.jet};
	font-size: 16px;
	line-height: 20px;
	padding: 0 1rem;
`;

const Menu = styled.div`
	/* display: none; */
	width: 100%;
	padding: 0 24px;
	position: absolute;
	left: 0;
	right: 0;
	top: 53px;
	box-shadow: rgb(0 0 0 / 5%) 2px 2px 4px 0px;
	animation: 200ms ease-in 0s 1 normal none running fadeIn;
	border-style: solid;
	border-color: rgb(215, 215, 224);
	border-width: 0px 0.5px 0.5px;
	z-index: 100;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	background-color: white;
	padding: 1rem;

	&:hover {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
	}
`;

const SubMenus = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
`;

const MenuTitle = styled.div`
	color: ${(props) => props.theme.colors.primary};
	font-weight: 600;
	font-size: 16px;
	line-height: 20px;
	margin-bottom: 1rem;
`;

const MenuLink = styled.div`
	color: ${(props) => props.theme.colors.jet};
	font-weight: 400;
	font-size: 16px;
	line-height: 20px;
	padding: 0.35rem 0;
`;

const Header = styled.nav`
	display: flex;
	flex-direction: column;
	max-width: 1280px;
	margin: 0 auto;
	position: relative;
	cursor: pointer;

	&:hover ${Menu} {
		display: flex;
	}
`;

const Links = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 24px;
`;

const Link = styled(A)`
	display: flex;
	text-decoration: none;
	border-bottom: 3px solid ${(props) => props.theme.colors.white};

	&:hover {
		border-bottom: 3px solid ${(props) => props.theme.colors.primary};
	}
`;

const LinkText = styled.span`
	padding: 0.8rem 0;
	color: ${(props) => props.theme.colors.jet};
	font-family: 'Mier B Book';

	&:hover {
		color: ${(props) => props.theme.colors.primary};
	}
`;

export {
	Container,
	TopHeader,
	SearchBox,
	Search,
	Text,
	TopLinks,
	Header,
	LinkText,
	Link,
	Links,
	Menu,
	SubMenus,
	MenuTitle,
	MenuLink,
};
