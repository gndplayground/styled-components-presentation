export default {
  center: true,
  steps: [
    {
      key: 'slide50_renderText',
      data: {
        animation: 'opacity',
        type: 'text',
        center: true,
        data: 'Styling any components',
      },
    },
    {
      key: 'slide50_renderCode',
      data: {
        animation: 'opacity',
        type: 'code',
        prismLang: 'jsx',
        data: `
  
  import Button from 'somewhere/ButtonPlainCSSAcceptPropClassName';

  const ButtonNew = styled(Button)\`
    background-color: cyan;
  \`;
  
  // In render method
  <Button>I am the old button</Button>
  <ButtonNew>I am the new button</ButtonNew>
        `,
      },
    },
    {
      key: 'slide50_renderSPC',
      data: {
        animation: 'opacity',
        type: 'spc',
        spcComponent: 'RenderAnyComponent',
      },
    },
    {
      key: 'slide50_img',
      data: {
        animation: 'opacity',
        type: 'img',
        data: {
          isInSrc: true,
          src: 'stylingAnyComponent.png',
        },
      },
    },
  ],
};
