/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react';
import { Image, Flex } from 'components/atoms';
import { Rupee } from 'components/common';
import * as Styles from './styles';
import tShirt from 'assets/images/boy-white-black-t-shirt.jpg';
import baby from 'assets/images/baby.jpg';
import downArrow from 'assets/svg/down-arrow.svg';

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

const productTypes = [
	{ id: 1, name: 'Category' },
	{ id: 2, name: 'Gender' },
	{ id: 3, name: 'Fabric' },
	{ id: 4, name: 'Color' },
	{ id: 5, name: 'Price' },
	{ id: 6, name: 'Discount' },
	{ id: 7, name: 'Rating' },
	{ id: 8, name: 'Size' },
	{ id: 9, name: 'Combo' },
	{ id: 10, name: 'Material' },
	{ id: 11, name: 'Bottom Length' },
	{ id: 12, name: 'Print Or Pattern Type' },
	{ id: 13, name: 'Bottom Style' },
	{ id: 14, name: 'Bottomwear Fabric' },
	{ id: 15, name: 'Ornamentation' },
	{ id: 16, name: 'Bottom Pattern Type' },
	{ id: 17, name: 'Border' },
	{ id: 18, name: 'Surface Styling' },
	{ id: 19, name: 'Back Type' },
	{ id: 20, name: 'Top Pattern' },
	{ id: 21, name: 'Fit/ Shape' },
	{ id: 22, name: 'Top Type' },
	{ id: 23, name: 'Brand' },
	{ id: 24, name: 'Compatible Models' },
	{ id: 25, name: 'Warranty Period' },
	{ id: 26, name: 'Bottom Type' },
	{ id: 27, name: 'Heel Type' },
	{ id: 28, name: 'Dial Design' },
	{ id: 29, name: 'Type' },
	{ id: 30, name: 'Type of Skin' },
	{ id: 31, name: 'Shade' },
	{ id: 32, name: 'Type of Hair' },
	{ id: 33, name: 'Language' },
	{ id: 34, name: 'Book Format' },
	{ id: 35, name: 'Board' },
	{ id: 36, name: 'Container Type' },
	{ id: 37, name: 'Brush Head Type' },
	{ id: 38, name: 'Refilling Type' },
	{ id: 39, name: 'Weight' },
	{ id: 40, name: 'Flavour' },
	{ id: 41, name: 'Region' },
];

export default function Products() {
	return (
		<>
			<Styles.Title>Products For You</Styles.Title>
			<Styles.Parent>
				<Styles.Left>
					<Styles.Products>
						{productTypes?.map((product) => (
							<Styles.Product key={product?.id}>
								<Styles.ProductTitle>{product?.name}</Styles.ProductTitle>
								<Image src={downArrow} />
							</Styles.Product>
						))}
					</Styles.Products>
				</Styles.Left>
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
