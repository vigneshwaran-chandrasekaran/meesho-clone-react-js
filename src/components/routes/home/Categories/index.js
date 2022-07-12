import React from 'react';
import { Image } from 'components/atoms';
import * as S from './styles';
import lowestPrices from 'assets/images/lowest-prices.jpg';
import playstore from 'assets/images/playstore-small-icon.png';

export default function Categories() {
	return (
		<S.Container>
			<S.Info>
				<S.Title>Lowest Prices</S.Title>
				<S.Title>Best Quality Shopping</S.Title>
				<S.Products>1 Crore+ Products | 650+ Categories</S.Products>
				<S.Download>
					<Image pr="1rem" width={24} height={28} src={playstore} /> Download the Meesho
					App
				</S.Download>
			</S.Info>
			<Image width={500} height={336} src={lowestPrices} />
		</S.Container>
	);
}
