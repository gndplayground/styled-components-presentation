export default {
  center: true,
  steps: [
    {
      key: 'slide33_renderText',
      data: {
        animation: 'opacity',
        type: 'text',
        center: true,
        data: 'My favorite is Styled Components by Max Stoiber',
      },
    },
    {
      key: 'slide33_img',
      data: {
        animation: 'opacity',
        type: 'img',
        data: {
          isInSrc: true,
          src: 'styledLogo.png',
          width: '180px',
        },
      },
    },
  ],
};
