import styled from 'styled-components';
import { space, width, fontSize, color } from 'styled-system';

// Thank https://gist.github.com/jorilallo/a9e60b3ce3f7373e3c65a50d65e8e1e8
const FlexBox = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  display: flex;
  ${({ auto }) => (auto ? 'flex: 1 1 auto;' : '')}
  ${({ justify }) => (justify ? `justify-content: ${justify};` : '')}
  ${({ align }) => (align ? `align-items: ${align};` : '')}
  ${({ wrap }) => (wrap ? `flex-wrap: ${wrap};` : '')}
  flex-direction: ${({ column, reverse }) => {
    const postFix = reverse ? '-reverse' : '';
    return column ? `column${postFix}` : `row${postFix}`;
  }};
`;

export default FlexBox;
