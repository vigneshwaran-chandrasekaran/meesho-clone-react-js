import styled from 'styled-components';
import { Link } from 'react-router-dom';
import percentageIcon from 'assets/svg/percentage.svg';
import ratingStar from 'assets/svg/rating-star.svg';

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
	display: flex;
`;

const Card = styled(Link)`
	background-color: ${(props) => props.theme.colors.white};
	border: 1px solid ${(props) => props.theme.colors.Cultured};
	text-decoration: none;
	max-width: 25%;
	margin: 0px 20px 20px 0px;
`;

const Box = styled.div`
	padding: 12px;
`;

const ProductName = styled.div`
	color: ${(props) => props.theme.colors.SpanishGray};
	font-family: 'Mier A Book';
	padding-bottom: 1rem;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
`;

const ProductOffer = styled.div`
	color: ${(props) => props.theme.colors.SeaGreen};
	white-space: nowrap;
	text-overflow: ellipsis;
	font-weight: ${(props) => props.theme.fontWeight.semiBold};
	font-size: 16px;
	line-height: 20px;
	font-family: 'Mier A Demi';
`;

const Price = styled.h5`
	color: ${(props) => props.theme.colors.jet};
	font-weight: ${(props) => props.theme.fontWeight.bold};
	font-size: 24px;
	line-height: 32px;
	font-family: 'Mier B';
`;

const OldPrice = styled.h5`
	color: ${(props) => props.theme.colors.SpanishGray};
	line-height: 20px;
	font-family: 'Mier B Book';
	text-decoration: line-through;
	margin: 0 0.5rem;
`;

const FirstOrder = styled.div`
	color: ${(props) => props.theme.colors.GraniteGray};
	font-weight: ${(props) => props.theme.fontWeight.semiBold};
	font-size: 12px;
	line-height: 16px;
	font-family: 'Mier A Demi';
	position: relative;
	padding-left: 20px;
	margin: 0.75rem 0;

	&:before {
		position: absolute;
		left: 0;
		top: -2px;
		display: inline-block;
		content: ' ';
		width: 16px;
		height: 16px;
		background-image: url(${percentageIcon});
		background-size: contain;
	}
`;

const Rating = styled.span`
	background-color: ${(props) => props.theme.colors.MediumSeaGreen};
	color: ${(props) => props.theme.colors.white};
	padding: 5px 22px 3px 8px;
	font-weight: ${(props) => props.theme.fontWeight.semiBold};
	font-size: 16px;
	line-height: 20px;
	font-family: 'Mier A Demi';
	position: relative;
	border-radius: 1rem;
	display: inline-flex;
	justify-content: center;
	align-items: center;

	&:after {
		position: absolute;
		top: 9px;
		right: 6px;
		display: inline-block;
		content: ' ';
		width: 10px;
		height: 10px;
		background-image: url(${ratingStar});
		background-size: contain;
	}
`;

const Reviews = styled.div`
	color: ${(props) => props.theme.colors.SpanishGray};
	font-weight: ${(props) => props.theme.fontWeight.semiBold};
	font-size: 12px;
	line-height: 16px;
	font-family: 'Mier A Demi';
	padding-left: 5px;
`;

const IsFreeDelivery = styled.span`
	display: inline-block;
	color: ${(props) => props.theme.colors.GraniteGray};
	background-color: ${(props) => props.theme.colors.Cultured2};
	padding: 4px 8px;
	margin: 0 0 0.75rem 0;
	border-radius: 48px;
	font-weight: ${(props) => props.theme.fontWeight.semiBold};
	font-size: 12px;
	line-height: 16px;
	font-family: 'Mier A Demi';
`;

export {
	Title,
	Container,
	Parent,
	Left,
	Right,
	Card,
	Box,
	ProductName,
	ProductOffer,
	Price,
	OldPrice,
	FirstOrder,
	Rating,
	Reviews,
	IsFreeDelivery,
};
