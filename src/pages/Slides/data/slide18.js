export default {
  center: true,
  steps: [
    {
      key: 'slide18_renderLink',
      data: {
        animation: 'opacity',
        type: 'link',
        center: true,
        data: {
          url: 'https://github.com/css-modules/css-modules',
          text: 'CSS Modules',
        },
      },
    },
    {
      key: 'slide18_renderImg',
      data: {
        animation: 'opacity',
        type: 'img',
        data: {
          isInSrc: true,
          src: 'CSSModules.png',
        },
      },
    },
  ],
};
