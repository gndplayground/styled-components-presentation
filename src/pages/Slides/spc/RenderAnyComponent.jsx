import React from 'react';
import styled from 'styled-components';
import { FlexBox, Box } from '../../../components/Layout';
import Button from '../componentDemo/buttonPlainCSS/Button';

const ButtonNew = styled(Button)`
  background-color: cyan!important;
  margin-left: 10px;
`;

const Space = styled(Box)`
  background-color: #eee;
`;

const RenderAnyComponent = () => (
  <Space mt={3} p={2}>
    <FlexBox justify="center">
      <Button>I am the old button</Button>
      <ButtonNew>I am the new button</ButtonNew>
    </FlexBox>
  </Space>
);

export default RenderAnyComponent;
