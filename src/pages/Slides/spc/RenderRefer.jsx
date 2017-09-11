import React from 'react';
import styled from 'styled-components';
import { FlexBox, Box } from '../../../components/Layout';

const Button = styled.button`
    background-color: #ccc;
    color: #fff;
    &:hover {
     background-color: red;
    }
  `;

const Block = styled.div`
      > ${Button} {
        color: #000;
        background-color: #fff;
      }
    }
`;

const Space = styled(Box)`
  background-color: #eee;
`;

const RenderRefer = () => (
  <Space mt={3} p={2}>
    <FlexBox justify="center">
      <Button>I am out inside box</Button>
      <Block>
        <Button>I am inside box</Button>
      </Block>
    </FlexBox>
  </Space>
);

export default RenderRefer;
