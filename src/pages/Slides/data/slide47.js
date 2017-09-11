export default {
  center: true,
  steps: [
    {
      key: 'slide47_renderText',
      data: {
        animation: 'opacity',
        type: 'text',
        center: true,
        data: 'Nesting',
      },
    },
    {
      key: 'slide47_renderCode',
      data: {
        animation: 'opacity',
        type: 'code',
        prismLang: 'jsx',
        data: `
  
  
  const Block = styled.div\`
      > ul {
        > li {
            color: cyan;
        }
      }
    }
    \`;
    
    // In render method
    <Block>
        <ul>
            <li>Hello</li>
            <li>Hello</li>
        </ul>
    </Block>
\`;
        `,
      },
    },
    {
      key: 'slide47_renderSPC',
      data: {
        animation: 'opacity',
        type: 'spc',
        spcComponent: 'RenderNesting',
      },
    },
  ],
};
