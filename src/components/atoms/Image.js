import styled, { css } from 'styled-components';

const Image = styled.img.attrs((props) => ({
	src: props.src,
}))`
	height: auto;
	${({ width }) =>
		width &&
		css`
			width: ${width};
		`}
	${({ circle }) =>
		circle &&
		css`
			border-radius: 50%;
		`}
`;

export default Image;
