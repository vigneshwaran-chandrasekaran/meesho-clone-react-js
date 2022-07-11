import React from 'react';
import { footerLinks } from 'helpers/static-data';
import * as Styles from './styles';

export default function Footer() {
	return (
		<div>
			<Styles.FooterTitle>Online Shopping</Styles.FooterTitle>
			{footerLinks?.map((item) => (
				<div key={item?.id}>
					<Styles.SectionTitle>{item?.title}</Styles.SectionTitle>
					<div>
						{item?.links?.map((link) => (
							<Styles.Link key={link?.id} to={link?.to}>
								{link?.title}
							</Styles.Link>
						))}
					</div>
				</div>
			))}
		</div>
	);
}
