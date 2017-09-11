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
      > ul {
        > li {
            font-size: 2rem;
            color: cyan;
        }
      }
    }
`;

const Space = styled(Box)`
  background-color: #eee;
`;

const RenderNesting = () => (
  <Space mt={3} p={2}>
    <FlexBox justify="center">
      <Block>
        <ul>
          <li>Hello</li>
          <li>Hello</li>
        </ul>
      </Block>
    </FlexBox>
  </Space>
);

export default RenderNesting;
