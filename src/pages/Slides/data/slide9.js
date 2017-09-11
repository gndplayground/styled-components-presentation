export default {
  steps: [
    {
      key: 'slide9_renderLink',
      data: {
        animation: 'opacity',
        type: 'link',
        center: true,
        data: {
          url: 'https://speakerdeck.com/vjeux/react-css-in-js',
          text: 'React: CSS in JS - by Chirstoppher Chedeau',
        },
      },
    },
    {
      key: 'slide9_img',
      data: {
        animation: 'opacity',
        type: 'img',
        data: {
          isInSrc: true,
          src: 'problemCSS.png',
        },
      },
    },
  ],
};
