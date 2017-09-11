export default {
  center: true,
  steps: [
    {
      key: 'slide43_renderText',
      data: {
        animation: 'opacity',
        type: 'text',
        center: true,
        data: 'Media queries',
      },
    },
    {
      key: 'slide43_renderCode',
      data: {
        animation: 'opacity',
        type: 'code',
        prismLang: 'jsx',
        data: `
  const media = {
    tablet: '768px',
    large: '1024px',
  }
  const Heading = styled.h1\`
    font-size: 2.5em;
    
    @media (min-width: \${media.tablet}) {
      font-size: 3em;
    }
    
    @media (min-width: \${media.large}) {
      font-size: 4em;
    }
\`;
        `,
      },
    },
  ],
};
