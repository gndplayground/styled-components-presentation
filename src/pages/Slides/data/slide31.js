export default {
  center: true,
  steps: [
    {
      key: 'slide31_renderText',
      data: {
        animation: 'opacity',
        type: 'text',
        center: true,
        data: 'Inline styles have problems',
      },
    },
    {
      key: 'slide31_renderList',
      data: {
        animation: 'opacity',
        type: 'list',
        center: true,
        key: 'slide27_renderList',
        data: [
          'Debugging is hard',
          'Can’t use pseudo classes',
          'Can\'t use pseudo elements',
          'Can\'t use media queries',
          'Animations',
          'Need "!important" to override CSS',
        ],
      },
    },
  ],
};
