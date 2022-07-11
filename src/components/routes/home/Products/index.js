import React from 'react';
import { Image } from 'components/atoms';
import * as Styles from './styles';
import tShirt from 'assets/images/boy-white-black-t-shirt.jpg';

const products = [
	{
		id: 1,
		image: tShirt,
		path: '/',
		title: 'Comfy Retro Men Tshirts',
		offerPrice: 234,
		originalPrice: 275,
		offer: 15,
		firstOrderOffer: 41,
		isFreeDelivery: true,
		totalReviews: 1234,
		rating: 3.6,
	},
];

export default function Products() {
	return (
		<>
			<Styles.Title>Products For You</Styles.Title>
			<Styles.Parent>
				<Styles.Left>Products For You</Styles.Left>
				<Styles.Right>
					{products.map((product) => (
						<Styles.Card key={product.id} to={product.path}>
							<Image width={227} height={232} src={product.image} />
							<Styles.Box>
								<Styles.ProductName>{product.title}</Styles.ProductName>
								<Styles.ProductOffer>{product.offer} % Off</Styles.ProductOffer>
								<Styles.FirstOrder>
									{product.firstOrderOffer} discount on 1st order
								</Styles.FirstOrder>
							</Styles.Box>
						</Styles.Card>
					))}
				</Styles.Right>
			</Styles.Parent>
		</>
	);
}
