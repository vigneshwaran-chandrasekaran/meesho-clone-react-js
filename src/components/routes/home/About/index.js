import React from 'react';
import * as Styles from './styles';

const data = [
	{
		id: 1,
		title: 'Meesho: Online Shopping Made Affordable',
		descriptions: [
			{
				id: 1,
				content: `There are lots of reasons to shop online! It can be fun and convenient. And if you are looking for budget-friendly online shopping, then you are at the right place. Meesho offers top-quality products at rock bottom prices, allowing you to shop to your heart’s content without any budget restraints.`,
			},
		],
	},
	{
		id: 2,
		title: 'Explore a Wide Range of Products Across All Categories',
		descriptions: [
			{
				id: 1,
				content: `At Meesho, you have over 50 lakh items to choose from including a wide range of apparel, cosmetics, household items, and many more categories! We have 650+ product categories and thousands of handpicked products that are the latest on the market. Whether you're looking for a new outfit, a gift for a special someone, or just some household items for everyday use, you will find everything you need at the lowest prices on Meesho.`,
			},
		],
	},
	{
		id: 3,
		title: `The Best Of Women's Fashion at Your Fingertips Western Wear for Women`,
		descriptions: [
			{
				id: 1,
				content: `Shopping for Western wear for women at Meesho is always economical
                as we only bring you the latest styles at wholesale prices.
                Affordability without compromising on the style quotient
                is possible at Meesho where you will find a huge range of casual,
                formal, and partywear dresses,
                <a href="https://meesho.com/gowns-women/pl/qpgtc" target="_blank">gowns</a>,
                <a href="https://meesho.com/gowns-women/pl/qpgtc" target="_blank">jeans</a>, tops,
                <a href="https://meesho.com/gowns-women/pl/qpgtc" target="_blank">T-shirts</a>,
                skirts, and more.
                You can buy all the trending outfits you want along
                with funky jewellery and accessories at reasonable prices`,
			},
		],
	},
];

export default function About() {
	return (
		<Styles.Container>
			{data?.map((item) => (
				<Styles.Item key={item?.id}>
					<Styles.Title>{item?.title}</Styles.Title>
					{item?.descriptions?.map((des) => (
						<Styles.Description
							key={des?.id}
							dangerouslySetInnerHTML={{ __html: des?.content }}
						/>
					))}
				</Styles.Item>
			))}
		</Styles.Container>
	);
}
