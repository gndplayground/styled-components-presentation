export default {
  center: true,
  steps: [
    {
      key: 'slide44_renderText',
      data: {
        animation: 'opacity',
        type: 'text',
        center: true,
        data: 'Pseudo',
      },
    },
    {
      key: 'slide44_renderCode',
      data: {
        animation: 'opacity',
        type: 'code',
        prismLang: 'jsx',
        data: `
  const Button = styled.button\`
    background-color: cyan;
    &:hover {
     background-color: red;
    }
  \`;
  
  const Block = styled.div\`
    \${Button}:first-child {
      background-color: blue;
    }
    
    // In render method
    <Block>
        <Button>Hello</Button>
        <Button>Hello</Button>
    </Block>
\`;
        `,
      },
    },
    {
      key: 'slide44_renderSPC',
      data: {
        animation: 'opacity',
        type: 'spc',
        spcComponent: 'RenderButtonPseudo',
      },
    },
  ],
};
