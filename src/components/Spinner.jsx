import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerWrap = styled.div`
  position:relative;
  height: ${({ size }) => size || 49}px;
`;

const SpinnerWhirlpool = styled.div`
  margin: ${({ size }) => size ? `-${size / 2}px 0 0 -${size / 2}px;` : '-24px 0 0 -24px;'}
  height: ${({ size }) => size || 49}px;
  width: ${({ size }) => size || 49}px;
  animation: ${animation} 1150ms linear infinite;
  
  position: absolute;
  top: 50%;
  left: 50%;
  border: 3px solid rgb(204,204,204);
  border-left-color: #424242;
  border-radius: 974px;
`;

const Spinner = ({ size }) => (
  <SpinnerWrap size={size}>
    <SpinnerWhirlpool size={size} />
  </SpinnerWrap>
);

Spinner.propTypes = {
  size: PropTypes.number,
};

export default Spinner;
