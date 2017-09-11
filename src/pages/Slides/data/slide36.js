export default {
  steps: [
    {
      key: 'slide36_renderText',
      data: {
        animation: 'opacity',
        type: 'text',
        center: true,
        data: 'In Styled Components syntax very interesting',
      },
    },
    {
      key: 'slide36_renderCode',
      data: {
        animation: 'opacity',
        type: 'code',
        prismLang: 'jsx',
        data: `
import React from 'react';
import styled from 'styled-components';

const Button = styled.button\`
  background-color: #494949;
  color: #fff;
  border-radius: 5px;
  font-size: 16px;
  padding: 10px 20px;
  border: 0;
  
  background-color: \${({ primary, danger, warning }) => {
    if (primary) return '#009688';
    if (danger) return '#F44336';
    if (warning) return '#FDD835';
    return '#494949';
  }};
}
\`;

export default Button;

        `,
      },
    },
  ],
};
