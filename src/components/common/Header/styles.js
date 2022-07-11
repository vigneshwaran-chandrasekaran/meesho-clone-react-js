import styled from 'styled-components';
import { Link as A } from 'react-router-dom';

const Container = styled.header`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	background-color: ${(props) => props.theme.colors.white};
	border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`;

const Header = styled.nav`
	display: flex;
	flex-direction: column;
	max-width: 1280px;
	margin: 0 auto;
`;

const Links = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
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
	padding: 1rem 0;
	color: ${(props) => props.theme.colors.jet};
	font-family: 'Mier B Book';
`;

export { Container, Header, LinkText, Link, Links };
