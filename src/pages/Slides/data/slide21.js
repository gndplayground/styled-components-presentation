export default {
  center: true,
  steps: [
    {
      key: 'slide21_renderText',
      data: {
        animation: 'opacity',
        type: 'text',
        center: true,
        data: 'With the setup css-loader for development in our webpack file',
      },
    },
    {
      key: 'slide21_renderCode',
      data: {
        animation: 'opacity',
        type: 'code',
        prismLang: 'javascript',
        data: `
{
  test: /(\\.css)$/,
  use: ['style-loader', 'css-loader?sourceMap&modules=true&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:8]', 'postcss-loader'],
},

    `,
      },
    },
    {
      key: 'slide21_img',
      data: {
        animation: 'opacity',
        type: 'img',
        data: {
          isInSrc: true,
          src: 'cssModuleDev.png',
        },
      },
    },
  ],
};
