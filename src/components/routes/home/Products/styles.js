import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Title = styled.h4`
	color: ${(props) => props.theme.colors.Jet};
	font-weight: ${(props) => props.theme.fontWeight.bold};
	font-size: 2rem;
	font-style: normal;
	font-family: 'Mier B';
	line-height: 40px;
	padding: 0px 0px 28px;
`;

const Container = styled.div`
	width: 100%;
	font-family: ${(props) => props.theme.fontFamily.demi};
	background-color: ${(props) => props.theme.colors.white};
	color: ${(props) => props.theme.colors.Jet};
	border: 1px solid ${(props) => props.theme.colors.Gainsboro};
	padding: 18px 24px;
	border-radius: 8px;
`;

const Parent = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Left = styled.div`
	width: 25%;
`;

const Right = styled.div`
	width: 75%;
`;

const Card = styled(Link)`
	background-color: ${(props) => props.theme.colors.white};
	border: 1px solid ${(props) => props.theme.colors.Cultured};
	text-decoration: none;
`;

const ProductName = styled.div`
	color: ${(props) => props.theme.colors.SpanishGray};
	font-family: 'Mier A Book';
`;

export { Title, Container, Parent, Left, Right, Card, ProductName };
