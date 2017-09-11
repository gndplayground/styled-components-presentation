export default {
  center: true,
  steps: [
    {
      key: 'slide40_renderText',
      data: {
        animation: 'opacity',
        type: 'text',
        center: true,
        data: 'Because Template literals ES6 can have interpolations',
      },
    },
    {
      key: 'slide40_renderCode',
      data: {
        animation: 'opacity',
        type: 'code',
        prismLang: 'jsx',
        data: `
  const messages = 2;
  const strES5 = 'Hello,\\nYou have ' + messages + 'messages';
  const strES6 = \`
  Hello,
  You have \${messages} messages\`;
        `,
      },
    },
  ],
};
