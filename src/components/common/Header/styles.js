import styled from 'styled-components';
import { Link as A } from 'react-router-dom';

const Header = styled.header`
	position: fixed;
	left: 0;
	top: 0;
	width: 100vw;
	background-color: ${(props) => props.theme.colors.white};
	border-bottom: 1px solid rgba(0, 0, 0, 0.08);
	padding: 0 ${(props) => props.theme.fontSize.xl};
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Search = styled.input`
	background-color: rgb(238, 243, 248);
	border: 0;
	height: 34px;
`;

const Links = styled.div`
	display: flex;
	align-items: center;
	border-radius: 5px;
	margin-left: 15rem;
`;

const Link = styled(A)`
	padding: 0.5rem 1rem 0 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-decoration: none;
	border-bottom: 2px solid black;
`;

const LinkText = styled.span`
	padding: 5px 0;
	font-size: 12px;
	color: rgba(0, 0, 0, 0.9);
`;

const Premium = styled(A)`
	color: ${(props) => props.theme.colors.brown};
	font-size: 12px;
	max-width: 85px;
	text-align: center;
	line-height: 15px;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;

export { Header, LinkText, Link, Links, Search, Premium };
