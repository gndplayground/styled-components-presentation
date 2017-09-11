export default {
  center: true,
  steps: [
    {
      key: 'slide4_renderText',
      data: {
        animation: 'opacity',
        type: 'text',
        center: true,
        data: 'After that, we import and use our <Button /> component',
      },
    },
    {
      key: 'slide4_renderCode',
      data: {
        animation: 'opacity',
        type: 'code',
        prismLang: 'jsx',
        data: `
  import Button from 'somewhere/Button';
  
    
  // ...
  // In render method
  <Button>Hello</Button>
  <Button primary>Hello</Button>
  <Button danger>Hello</Button>
  <Button warning>Hello</Button>
        `,
      },
    },
    {
      key: 'slide4_renderSPC',
      data: {
        animation: 'opacity',
        type: 'spc',
        spcComponent: 'RenderButtonPlainCSS',
      },
    },
  ],
};
