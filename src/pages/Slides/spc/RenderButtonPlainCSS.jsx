import React from 'react';
import styled from 'styled-components';
import Button from '../componentDemo/buttonPlainCSS/Button';
import { FlexBox, Box } from '../../../components/Layout';

const DemoButton = styled(Button)`
  margin-left: 5px;
  margin-right: 5px;
`;

const Space = styled(Box)`
  background-color: #eee;
`;

const RenderButtonPlainCSS = () => (
  <Space mt={3} p={2}>
    <FlexBox justify="center">
      <DemoButton>Hello</DemoButton>
      <DemoButton primary>Hello</DemoButton>
      <DemoButton danger>Hello</DemoButton>
      <DemoButton warning>Hello</DemoButton>
    </FlexBox>
  </Space>
);

export default RenderButtonPlainCSS;
