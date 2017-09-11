export default {
  center: true,
  steps: [
    {
      key: 'slide48_renderText',
      data: {
        animation: 'opacity',
        type: 'text',
        center: true,
        data: 'Refer to other components',
      },
    },
    {
      key: 'slide48_renderCode',
      data: {
        animation: 'opacity',
        type: 'code',
        prismLang: 'jsx',
        data: `
  
  
  const Button = styled.button\`
    background-color: #ccc;
    color: #fff;
    &:hover {
     background-color: red;
    }
  \`;

  const Block = styled.div\`
        > \${Button} {
          color: #000;
          background-color: #fff;
        }
      }
  \`;
    
    // In render method
    <Button>I am out inside box</Button>
    <Block>
      <Button>I am inside box</Button>
    </Block>
        `,
      },
    },
    {
      key: 'slide48_renderSPC',
      data: {
        animation: 'opacity',
        type: 'spc',
        spcComponent: 'RenderRefer',
      },
    },
  ],
};
