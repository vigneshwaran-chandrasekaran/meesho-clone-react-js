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

const Box = styled.div`
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
	${({ width }) =>
		width &&
		css`
			width: ${width};
		`}
	border-radius: 0.8rem;
	background-color: #fff;
	box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.08);
`;

export default Box;
