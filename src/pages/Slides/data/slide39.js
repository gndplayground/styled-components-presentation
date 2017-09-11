export default {
  center: true,
  steps: [
    {
      key: 'slide39_renderText',
      data: {
        animation: 'opacity',
        type: 'text',
        center: true,
        data: 'Our component can change the style dynamically base on props',
      },
    },
    {
      key: 'slide39_renderCode',
      data: {
        animation: 'opacity',
        type: 'code',
        prismLang: 'jsx',
        data: `
  const Heading = styled.h1\`
    font-size: 4em;
    background: \${props => props.primary ? 'cyan' : 'white'};
    color: \${props => props.primary ? 'white' : '#ddd'};
\`;
        `,
      },
    },
  ],
};
