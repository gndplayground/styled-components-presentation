export default {
  steps: [
    {
      key: 'slide35_renderText',
      data: {
        animation: 'opacity',
        type: 'text',
        center: true,
        data: 'In other libraries, we often define our style in Javascript Object',
      },
    },
    {
      key: 'slide35_renderCode',
      data: {
        animation: 'opacity',
        type: 'code',
        prismLang: 'jsx',
        data: `
  import { css } from 'glamor'
  
  let rule = css({
  fontWeight: 'bold',
  color: 'red',
  ':hover': {
    color: 'pink'
  },
  '@media(min-width: 300px)': {
    color: 'green',
    ':hover': {
      color: 'yellow'
    }
  }
})

  <div className={\`\${rule} \${another}\`}>
    zomg
  </div>
        `,
      },
    },
  ],
};
