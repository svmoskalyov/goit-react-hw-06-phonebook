import styled from 'styled-components';

export const Title = styled.h2`
  padding-bottom: ${p => p.theme.space[3]}px;
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.body};
`;
