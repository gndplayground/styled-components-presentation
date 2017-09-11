import React from 'react';
import styled from 'styled-components';
import { FlexBox, Box } from '../../../components/Layout';

const Space = styled(Box)`
  background-color: #eee;
`;

const Button = styled.button`
  color: white;
  background-color: tomato;
`;

const CyanButton = Button.extend`
  background-color: cyan;
`;

const BlueVioletButton = styled(Button)`
  background-color: blueviolet;
`;


const RenderButtonPlainCSS = () => (
  <Space mt={3} p={2}>
    <FlexBox justify="center">
      <Button>Base Button</Button>
      <CyanButton>Cyan Button</CyanButton>
      <BlueVioletButton>Blue Violet Button</BlueVioletButton>
    </FlexBox>
  </Space>
);

export default RenderButtonPlainCSS;
