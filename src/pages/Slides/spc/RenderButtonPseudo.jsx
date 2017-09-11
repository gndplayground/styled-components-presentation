import React from 'react';
import styled from 'styled-components';
import { FlexBox, Box } from '../../../components/Layout';

const Button = styled.button`
    background-color: cyan;
    &:hover {
     background-color: red;
    }
  `;

const Block = styled.div`
    ${Button}:first-child {
      background-color: blue;
    }
    
`;

const Space = styled(Box)`
  background-color: #eee;
`;

const RenderButtonPseudo = () => (
  <Space mt={3} p={2}>
    <FlexBox justify="center">
      <Block>
        <Button>Hello</Button>
        <Button>Hello</Button>
      </Block>
    </FlexBox>
  </Space>
);

export default RenderButtonPseudo;
