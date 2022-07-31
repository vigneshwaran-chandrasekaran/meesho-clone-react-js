import React from 'react';
import styled from 'styled-components';
import { Flex, Image } from 'components/atoms';
import appstoreIcon from 'assets/images/appstore-icon-big.png';
import playstoreIcon from 'assets/images/playstore-icon-big.png';

export default function Footer() {
	return (
		<Container>
			<Section flexDirection="column">
				<Title>Shop Non-Stop on Meesho</Title>
				<SubTitle>
					Trusted by more than 1 Crore Indians Cash on Delivery | Free Delivery
				</SubTitle>
				<Flex mt="1.5rem">
					<Image width={205} height={53} src={playstoreIcon} />
					<Image width={205} height={53} src={appstoreIcon} ml="1rem" />
				</Flex>
			</Section>
			<Section></Section>
			<Section></Section>
			<Section></Section>
			<Section></Section>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	margin-top: 2rem;
`;

const Section = styled(Flex)``;

const Title = styled.h2`
	font-size: 32px;
	font-weight: 700;
	color: ${(props) => props.theme.colors.jet};
`;

const SubTitle = styled.h3`
	font-size: 18px;
	color: ${(props) => props.theme.colors.GraniteGray};
	max-width: 325px;
	margin-top: 1rem;
`;
