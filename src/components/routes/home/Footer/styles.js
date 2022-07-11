import styled from 'styled-components';
import { Link as A } from 'react-router-dom';

const FooterTitle = styled.div`
	color: ${(props) => props.theme.colors.primary};
	font-size: 20px;
	margin-top: 5px;
`;

const SectionTitle = styled.div`
	color: ${(props) => props.theme.colors.jet};
	font-weight: ${(props) => props.theme.fontWeight.semiBold};
	margin-top: 15px;
`;

const Link = styled(A)`
	color: ${(props) => props.theme.colors.primary};
	text-decoration: none;

	&::after {
		content: ' | ';
		padding: 0 5px;
		color: ${(props) => props.theme.colors.jet};
	}

	&:last-child {
		&::after {
			content: '';
		}
	}
`;

export { FooterTitle, SectionTitle, Link };
