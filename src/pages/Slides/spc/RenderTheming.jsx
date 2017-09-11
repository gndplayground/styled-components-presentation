import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { FlexBox, Box } from '../../../components/Layout';

const Button = styled.button`
  color: white;
  background-color: ${props => props.theme.buttonBg ? props.theme.buttonBg : 'tomato'};
`;

const Space = styled(Box)`
  background-color: #eee;
`;

const theme = {
  buttonBg: 'cyan',
};

const RenderButtonPlainCSS = () => (
  <Space mt={3} p={2}>
    <FlexBox justify="center">
      <Button>No theme</Button>
      <ThemeProvider theme={theme}>
        <Button>Themed</Button>
      </ThemeProvider>
    </FlexBox>
  </Space>
);

export default RenderButtonPlainCSS;
