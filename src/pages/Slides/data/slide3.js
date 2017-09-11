export default {
  steps: [
    {
      key: 'slide3_renderText',
      data: {
        center: true,
        animation: 'opacity',
        type: 'text',
        data: 'And style our <Button /> Component',
      },
    },
    {
      key: 'slide3_renderCode',
      data: {
        animation: 'opacity',
        type: 'code',
        prismLang: 'css',
        data: `
.bt {
    background-color: #494949;
    color: #fff;
    border-radius: 5px;
    font-size: 16px;
    padding: 10px 20px;
    border: 0;
}

.bt-primary {
    background-color: #009688;
}

.bt-danger {
    background-color: #F44336;
}

.bt-warning {
    background-color: #FDD835;
}

    `,
      },
    },
  ],
};
