export default {
  steps: [
    {
      key: 'slide37_renderText',
      data: {
        animation: 'opacity',
        type: 'text',
        center: true,
        data: 'Then we use it just like any React component',
      },
    },
    {
      key: 'slide36_renderCode',
      data: {
        animation: 'opacity',
        type: 'code',
        prismLang: 'jsx',
        data: `
        <Button>Hello</Button>
        <Button primary>Hello</Button>
        <Button danger>Hello</Button>
        <Button warning>Hello</Button>
        `,
      },
    },
    {
      key: 'slide37_renderSPC',
      data: {
        animation: 'opacity',
        type: 'spc',
        spcComponent: 'RenderButtonStyled',
      },
    },
  ],
};
