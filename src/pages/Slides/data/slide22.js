export default {
  center: true,
  steps: [
    {
      key: 'slide22_renderText',
      data: {
        animation: 'opacity',
        type: 'text',
        center: true,
        data: 'With the setup css-loader for production in our webpack file',
      },
    },
    {
      key: 'slide22_renderCode',
      data: {
        animation: 'opacity',
        type: 'code',
        prismLang: 'javascript',
        data: `
{
  test: /(\\.css)$/,
  use: ['style-loader', 'css-loader?sourceMap&modules=true&importLoaders=1&localIdentName=[hash:base64:8]', 'postcss-loader'],
},

    `,
      },
    },
    {
      key: 'slide22_img',
      data: {
        animation: 'opacity',
        type: 'img',
        data: {
          isInSrc: true,
          src: 'cssModuleProduction.png',
        },
      },
    },
  ],
};
