import styled from 'styled-components';

const Container = styled.div`
	width: 80%;
	margin: 1.25rem auto 0;
	display: flex;
`;

const Products = styled.div`
	display: flex;
	background-color: ${(props) => props.theme.colors.white};
	border-radius: 8px;
	margin-top: 28px;
	padding: 9px 16px;
	color: ${(props) => props.theme.colors.GraniteGray};
	font-size: 20px;
	line-height: 28px;
	font-family: 'Mier A Book';
`;

const Title = styled.div`
	color: ${(props) => props.theme.colors.jet};
	font-size: 38px;
	line-height: 50px;
	font-weight: ${(props) => props.theme.fontWeight.semiBold};
`;

const Info = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	width: 611px;
	border-radius: 0px;
	background-color: ${(props) => props.theme.colors.Cultured2};
	padding: 40px 67px 40px 48px;
`;

const Download = styled.div`
	display: inline-flex;
	align-items: center;
	background-color: ${(props) => props.theme.colors.primary};
	color: ${(props) => props.theme.colors.white};
	padding: 10px 28px;
	border-radius: 4px;
	margin-top: 30px;
	cursor: pointer;
	font-size: 18px;
	font-family: 'Mier A Demi';
	font-weight: ${(props) => props.theme.fontWeight.semiBold};
	line-height: 24px;
`;

const Top = styled.div`
	font-size: 36px;
	margin: 4rem 0 3rem 0;
	text-align: center;
	font-family: 'Mier A';
	font-weight: ${(props) => props.theme.fontWeight.semiBold};
	line-height: 54px;
	letter-spacing: 0.7px;
	color: ${(props) => props.theme.colors.RaisinBlack};

	&::before,
	&::after {
		background-color: ${(props) => props.theme.colors.CarnationPink};
		content: '';
		display: inline-block;
		position: relative;
		height: 0.5px;
		vertical-align: middle;
		width: 15%;
	}

	&::before {
		right: 4rem;
	}
	&::after {
		left: 4rem;
	}
`;

export { Container, Info, Title, Download, Products, Top };
