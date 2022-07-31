import React from 'react';
import styled from 'styled-components';
import { Flex, Image } from 'components/atoms';
import appstoreIcon from 'assets/images/appstore-icon-big.png';
import playstoreIcon from 'assets/images/playstore-icon-big.png';
import twitter from 'assets/images/twitter.png';
import youtube from 'assets/images/youtube.png';
import instagram from 'assets/images/instagram.png';
import linkedin from 'assets/images/linkedin.png';
import facebook from 'assets/images/facebook.png';

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
			<Section ml="1rem">
				<Link href="/">Careers</Link>
				<Link href="/">Become a supplier</Link>
				<Link href="/">Our Influencer Program</Link>
				<Link href="/">Hall of Fame</Link>
			</Section>
			<Section>
				<Link href="/">Legal and Policies</Link>
				<Link href="/">Meesho Tech Blog</Link>
				<Link href="/">Notices and Returns</Link>
			</Section>
			<Section>
				<Reach>Reach out to us</Reach>
				<Flex mt=".75rem" justifyContent="space-between">
					<Image mr="0.95rem" width={24} height={24} src={facebook} />
					<Image mr="0.95rem" width={24} height={24} src={instagram} />
					<Image mr="0.95rem" width={24} height={24} src={youtube} />
					<Image mr="0.95rem" width={24} height={24} src={linkedin} />
					<Image width={24} height={24} src={twitter} />
				</Flex>
			</Section>
			<Section></Section>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	margin-top: 2rem;
`;

const Section = styled(Flex)`
	flex-direction: column;
`;

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

const Link = styled.a`
	font-size: 18px;
	color: ${(props) => props.theme.colors.GraniteGray};
	font-weight: 600;
	text-decoration: none;
	margin: 0 1.5rem 1rem 0;
`;

const Reach = styled.div`
	font-size: 20px;
	color: ${(props) => props.theme.colors.jet};
	font-weight: 700;
`;
