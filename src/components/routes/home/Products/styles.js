import styled from 'styled-components';
import { Link } from 'react-router-dom';
import percentageIcon from 'assets/svg/percentage.svg';

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
	max-width: 25%;
`;

const Box = styled.div`
	padding: 12px;
`;

const ProductName = styled.div`
	color: ${(props) => props.theme.colors.SpanishGray};
	font-family: 'Mier A Book';
`;

const ProductOffer = styled.div`
	color: ${(props) => props.theme.colors.SeaGreen};
	white-space: nowrap;
	text-overflow: ellipsis;
	font-weight: ${(props) => props.theme.colors.semiBold};
	font-size: 16px;
	line-height: 20px;
	font-family: 'Mier A Demi';
`;

const FirstOrder = styled.div`
	color: ${(props) => props.theme.colors.GraniteGray};
	font-weight: ${(props) => props.theme.colors.semiBold};
	font-size: 12px;
	line-height: 16px;
	font-family: 'Mier A Demi';
	position: relative;
	padding-left: 20px;

	&:before {
		position: absolute;
		left: 0;
		display: inline-block;
		content: ' ';
		width: 14px;
		height: 14px;
		background-image: url(${percentageIcon});
		background-size: contain;
	}
`;

export { Title, Container, Parent, Left, Right, Card, Box, ProductName, ProductOffer, FirstOrder };
