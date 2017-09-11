export default {
  center: true,
  steps: [
    {
      key: 'slide57_renderText',
      data: {
        center: true,
        animation: 'opacity',
        type: 'text',
        data: 'If you miss SASS functions like lighten, darken, rgba, hsl... Be sure to check Polished.js',
      },
    },
    {
      key: 'slide56_img',
      data: {
        animation: 'opacity',
        type: 'img',
        data: {
          isInSrc: true,
          width: '250px',
          src: 'polished.png',
        },
      },
    },
    {
      key: 'slide57_renderCode',
      data: {
        animation: 'opacity',
        type: 'code',
        prismLang: 'jsx',
        data: `
import { darken } from 'polished';
import styled from 'styled-components';

const styles = {
  background: darken(0.2, '#FFCD64'),
  background: darken(0.2, 'rgba(255,205,100,0.7)'),
}

// styled-components usage
const div = styled.div\`
  background: \${darken(0.2, '#FFCD64')};
  background: \${darken(0.2, 'rgba(255,205,100,0.7)')};
\`

// CSS in JS Output

element {
  background: "#ffbd31";
  background: "rgba(255,189,49,0.7)";
}
        `,
      },
    },
  ],
};
