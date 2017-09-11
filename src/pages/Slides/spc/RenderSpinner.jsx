import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FlexBox, Box } from '../../../components/Layout';

const animation = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  height: 50px;
  width: 50px;
  background-color: cyan;
  animation: ${animation} 1150ms linear infinite;
`;

const Space = styled(Box)`
  background-color: #eee;
`;

const RenderButtonPseudo = () => (
  <Space mt={3} p={2}>
    <FlexBox justify="center">
      <Spinner />
    </FlexBox>
  </Space>
);

export default RenderButtonPseudo;
