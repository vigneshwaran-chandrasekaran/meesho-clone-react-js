import React from 'react';
import { Image } from 'components/atoms';
import * as S from './styles';
import kidsWear from 'assets/images/kids-wear.jpg';
import mensWear from 'assets/images/mens-wear.jpg';
import womensWear from 'assets/images/womens-wear.jpg';
import headPhone from 'assets/images/head-phone.jpg';
import bed from 'assets/images/bed.jpg';
import makeup from 'assets/images/makeup.jpg';

export default function Pictures() {
	return (
		<div>
			<S.FashionStore>
				<Image width={400} height={430} src={womensWear} />
				<Image width={290} height={312} src={mensWear} />
				<Image width={290} height={312} src={kidsWear} />
			</S.FashionStore>
			<S.Essentials>
				<Image width={212} height={348} src={makeup} />
				<Image width={212} height={348} src={bed} />
				<Image width={212} height={348} src={headPhone} />
			</S.Essentials>
			<S.Reseller />
			<S.Supplier />
		</div>
	);
}
