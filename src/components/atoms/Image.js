import styled, { css } from 'styled-components';
import {
	background,
	border,
	color,
	flexbox,
	grid,
	layout,
	position,
	shadow,
	space,
	typography,
} from 'styled-system';

const Image = styled.img.attrs((props) => ({
	src: props.src,
	'object-fit': props['object-fit'] ? props['object-fit'] : 'cover',
	height: props.height ? `${props.height}px` : 'auto',
	width: props.width ? `${props.width}px` : 'auto',
}))`
	${space}
	${color}
	${layout}
	${background}
	${position}
	${grid}
	${border}
	${flexbox}
	${shadow}
	${typography}
	${({ circle }) =>
		circle &&
		css`
			border-radius: 50%;
		`}
`;

export default Image;
