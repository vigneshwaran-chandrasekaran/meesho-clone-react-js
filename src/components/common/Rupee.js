import React from 'react';
import PropTypes from 'prop-types';

export function getCurrency(data = 0) {
	if (Number.isNaN(Number(data))) {
		data = 0;
	}

	return new Intl.NumberFormat('en-IN', {
		style: 'currency',
		currency: 'INR',
	}).format(data);
}

export default function Rupee({ children, style = {} }) {
	return <span style={style}>{getCurrency(children)}</span>;
}

Rupee.propTypes = {
	children: PropTypes.node,
	style: PropTypes.object,
};
