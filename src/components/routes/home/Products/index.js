/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react';
import { Image, Flex } from 'components/atoms';
import { Rupee } from 'components/common';
import * as Styles from './styles';
import tShirt from 'assets/images/boy-white-black-t-shirt.jpg';
import baby from 'assets/images/baby.jpg';

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
	{
		id: 2,
		image: baby,
		path: '/',
		title: "Ethnic Fancy Silk Cotton Blend Kurta Kid's Boys Pyjama Set Vol 2",
		offerPrice: 192,
		originalPrice: 225,
		offer: 15,
		firstOrderOffer: 33,
		isFreeDelivery: false,
		totalReviews: 17089,
		rating: 4.1,
		offerDeliveryPrice: 63,
		actualDeliveryPrice: 70,
	},
	{
		id: 3,
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
	{
		id: 4,
		image: baby,
		path: '/',
		title: "Ethnic Fancy Silk Cotton Blend Kurta Kid's Boys Pyjama Set Vol 2",
		offerPrice: 192,
		originalPrice: 225,
		offer: 15,
		firstOrderOffer: 33,
		isFreeDelivery: false,
		totalReviews: 17089,
		rating: 4.1,
		offerDeliveryPrice: 63,
		actualDeliveryPrice: 70,
	},
	{
		id: 5,
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
	{
		id: 6,
		image: baby,
		path: '/',
		title: "Ethnic Fancy Silk Cotton Blend Kurta Kid's Boys Pyjama Set Vol 2",
		offerPrice: 192,
		originalPrice: 225,
		offer: 15,
		firstOrderOffer: 33,
		isFreeDelivery: false,
		totalReviews: 17089,
		rating: 4.1,
		offerDeliveryPrice: 63,
		actualDeliveryPrice: 70,
	},
	{
		id: 7,
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
	{
		id: 8,
		image: baby,
		path: '/',
		title: "Ethnic Fancy Silk Cotton Blend Kurta Kid's Boys Pyjama Set Vol 2",
		offerPrice: 192,
		originalPrice: 225,
		offer: 15,
		firstOrderOffer: 33,
		isFreeDelivery: false,
		totalReviews: 17089,
		rating: 4.1,
		offerDeliveryPrice: 63,
		actualDeliveryPrice: 70,
	},
	{
		id: 9,
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
	{
		id: 10,
		image: baby,
		path: '/',
		title: "Ethnic Fancy Silk Cotton Blend Kurta Kid's Boys Pyjama Set Vol 2",
		offerPrice: 192,
		originalPrice: 225,
		offer: 15,
		firstOrderOffer: 33,
		isFreeDelivery: false,
		totalReviews: 17089,
		rating: 4.1,
		offerDeliveryPrice: 63,
		actualDeliveryPrice: 70,
	},
	{
		id: 11,
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
	{
		id: 12,
		image: baby,
		path: '/',
		title: "Ethnic Fancy Silk Cotton Blend Kurta Kid's Boys Pyjama Set Vol 2",
		offerPrice: 192,
		originalPrice: 225,
		offer: 15,
		firstOrderOffer: 33,
		isFreeDelivery: false,
		totalReviews: 17089,
		rating: 4.1,
		offerDeliveryPrice: 63,
		actualDeliveryPrice: 70,
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
							<Image width={220} height={232} src={product.image} />
							<Styles.Box>
								<Styles.ProductName>{product.title}</Styles.ProductName>
								<Flex alignItems="center">
									<Styles.Price>
										<Rupee>{product.offer}</Rupee>
									</Styles.Price>
									<Styles.OldPrice>
										<Rupee>{product.offer}</Rupee>
									</Styles.OldPrice>
									<Styles.ProductOffer>{product.offer} % Off</Styles.ProductOffer>
								</Flex>
								<Styles.FirstOrder>
									<Rupee>{product.firstOrderOffer}</Rupee> discount on 1st order
								</Styles.FirstOrder>
								<Styles.IsFreeDelivery>
									{product?.isFreeDelivery ? (
										'Free Delivery'
									) : (
										<>
											Delivery <Rupee>{product?.offerDeliveryPrice}</Rupee>
											<Rupee space="0.5rem" strike>
												{product?.actualDeliveryPrice}
											</Rupee>
										</>
									)}
								</Styles.IsFreeDelivery>
								<Flex alignItems="center">
									<Styles.Rating>{product.rating}</Styles.Rating>
									<Styles.Reviews>{product.totalReviews} Reviews</Styles.Reviews>
								</Flex>
							</Styles.Box>
						</Styles.Card>
					))}
				</Styles.Right>
			</Styles.Parent>
		</>
	);
}
