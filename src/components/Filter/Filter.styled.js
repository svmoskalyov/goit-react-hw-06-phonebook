import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.4em;
  padding-bottom: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Input = styled.input`
  padding: 0 ${p => p.theme.space[3]}px;
  width: 75%;
  font-size: ${p => p.theme.fontSizes.m};
`;
