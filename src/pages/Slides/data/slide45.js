export default {
  center: true,
  steps: [
    {
      key: 'slide45_renderText',
      data: {
        animation: 'opacity',
        type: 'text',
        center: true,
        data: 'Animations',
      },
    },
    {
      key: 'slide45_renderCode',
      data: {
        animation: 'opacity',
        type: 'code',
        prismLang: 'jsx',
        data: `
import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const animation = keyframes\`
  100% {
    transform: rotate(360deg);
  }
\`;

const Spinner = styled.div\`
  height: 50px;
  width: 50px;
  background-color: cyan;
  animation: \${animation} 1150ms linear infinite;
\`;
        `,
      },
    },
    {
      key: 'slide45_renderSPC',
      data: {
        animation: 'opacity',
        type: 'spc',
        spcComponent: 'RenderSpinner',
      },
    },
  ],
};
