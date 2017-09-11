export default {
  center: true,
  steps: [
    {
      key: 'slide49_renderText',
      data: {
        animation: 'opacity',
        type: 'text',
        center: true,
        data: 'Extending Components',
      },
    },
    {
      key: 'slide49_renderCode',
      data: {
        animation: 'opacity',
        type: 'code',
        prismLang: 'jsx',
        data: `
  
  const Button = styled.button\`
  color: white;
  background-color: tomato;
\`;

  const CyanButton = Button.extend\`
    background-color: cyan;
  \`;
  
  const BlueVioletButton = styled(Button)\`
    background-color: blueviolet;
  \`;
  
  <Button>Base Button</Button>
  <CyanButton>Cyan Button</CyanButton>
  <BlueVioletButton>Blue Violet Button</BlueVioletButton>
        `,
      },
    },
    {
      key: 'slide49_renderSPC',
      data: {
        animation: 'opacity',
        type: 'spc',
        spcComponent: 'RenderExtending',
      },
    },
    {
      key: 'slide49_img',
      data: {
        animation: 'opacity',
        type: 'img',
        data: {
          isInSrc: true,
          src: 'extendingButton.png',
        },
      },
    },
  ],
};
