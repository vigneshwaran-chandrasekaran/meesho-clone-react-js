import React from 'react';
import { Image } from 'components/atoms';
import * as Styles from './styles';
import tShirt from 'assets/images/boy-white-black-t-shirt.jpg';

const products = [{ id: 1, image: tShirt, path: '/', title: 'Comfy Retro Men Tshirts' }];

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
						</Styles.Card>
					))}
				</Styles.Right>
			</Styles.Parent>
		</>
	);
}
