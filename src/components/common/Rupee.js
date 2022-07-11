import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Amount = styled.span`
	${({ space }) =>
		space &&
		css`
			padding-left: 10px;
		`}
	${({ strike }) =>
		strike &&
		css`
			text-decoration: line-through;
		`}
`;

export function getCurrency(data = 0) {
	if (Number.isNaN(Number(data))) {
		data = 0;
	}

	return new Intl.NumberFormat('en-IN', {
		style: 'currency',
		currency: 'INR',
	}).format(data);
}

export default function Rupee({ children, style = {}, ...props }) {
	return (
		<Amount style={style} {...props}>
			{getCurrency(children)}
		</Amount>
	);
}

Rupee.propTypes = {
	children: PropTypes.node,
	style: PropTypes.object,
};
