export default {
  center: true,
  steps: [
    {
      key: 'slide24_renderText',
      data: {
        animation: 'opacity',
        type: 'text',
        center: true,
        data: 'So which library we should use?  We should check the list',
      },
    },
    {
      key: 'slide24_renderLink',
      data: {
        animation: 'opacity',
        type: 'link',
        center: true,
        data: {
          url: 'https://github.com/MicheleBertoli/css-in-js',
          text: 'CSS In JS libraries',
        },
      },
    },
  ],
};
