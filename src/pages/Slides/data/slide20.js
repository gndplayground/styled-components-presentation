export default {
  steps: [
    {
      key: 'slide20_renderText',
      data: {
        center: true,
        animation: 'opacity',
        type: 'text',
        data: 'And re style our <Button /> Component',
      },
    },
    {
      key: 'slide20_renderCode',
      data: {
        animation: 'opacity',
        type: 'code',
        prismLang: 'css',
        data: `
.base {
    background-color: #494949;
    color: #fff;
    border-radius: 5px;
    font-size: 16px;
    padding: 10px 20px;
    border: 0;
}

.primary {
    background-color: #009688;
}

.danger {
    background-color: #F44336;
}

.warning {
    background-color: #FDD835;
}

    `,
      },
    },
  ],
};
