export default {
  center: true,
  steps: [
    {
      key: 'slide51_renderText',
      data: {
        animation: 'opacity',
        type: 'text',
        center: true,
        data: 'Theming',
      },
    },
    {
      key: 'slide51_renderCode',
      data: {
        animation: 'opacity',
        type: 'code',
        prismLang: 'jsx',
        data: `
  
const Button = styled.button\`
  color: white;
  background-color: \${props => props.theme.buttonBg ? props.theme.buttonBg : 'tomato'};
\`;

const theme = {
  buttonBg: 'cyan',
};

// In render Method
<Button>No theme</Button>
<ThemeProvider theme={theme}>
  <Button>Themed</Button>
</ThemeProvider>

        `,
      },
    },
    {
      key: 'slide51_renderSPC',
      data: {
        animation: 'opacity',
        type: 'spc',
        spcComponent: 'RenderTheming',
      },
    },
  ],
};
