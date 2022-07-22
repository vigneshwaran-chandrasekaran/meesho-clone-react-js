import React from 'react';
import { Image, Flex } from 'components/atoms';
import { Rupee } from 'components/common';
import * as Styles from './styles';
import downArrow from 'assets/svg/down-arrow.svg';
import { productTypes, products } from 'helpers/static-data';

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
