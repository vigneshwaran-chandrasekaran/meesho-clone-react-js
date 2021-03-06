import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	font-family: ${(props) => props.theme.fontFamily.demi};
	background-color: ${(props) => props.theme.colors.white};
	color: ${(props) => props.theme.colors.jet};
	border: 1px solid ${(props) => props.theme.colors.Gainsboro};
	padding: 18px 24px;
	border-radius: 8px;
	margin: 3rem 0 5rem;
`;

const Item = styled.div`
	margin-bottom: 20px;
`;

const Title = styled.h2`
	font-weight: ${(props) => props.theme.fontWeight.black};
	font-size: ${(props) => props.theme.fontSize.md};
	margin-top: 5px;
	max-width: 600px;
`;

const Description = styled.div`
	color: ${(props) => props.theme.colors.GraniteGray};
	margin-top: 5px;
	font-size: 15px;

	a {
		color: ${(props) => props.theme.colors.primary};
		text-decoration: none;
	}
`;

export { Container, Item, Title, Description };
