export default {
  steps: [
    {
      key: 'slide1_renderText',
      data: {
        center: true,
        animation: 'opacity',
        type: 'text',
        data: 'Let create a simple Button component for our App.',
      },
    },
    {
      key: 'slide4_renderCode',
      data: {
        animation: 'opacity',
        type: 'code',
        prismLang: 'jsx',
        data: `
  import Button from 'somewhere/Button';
  
    
  // ...
  // In render method
  <Button>Hello</Button>
  <Button primary>Hello</Button>
  <Button danger>Hello</Button>
  <Button warning>Hello</Button>
        `,
      },
    },
    {
      key: 'slide1_renderLink',
      data: {
        animation: 'opacity',
        type: 'link',
        center: true,
        data: {
          url: 'https://github.com/css-modules/css-modules',
          text: 'React: CSS in JS - by Chirstoppher Chedeau',
        },
      },
    },
    {
      key: 'slide1_img',
      data: {
        animation: 'opacity',
        type: 'img',
        data: {
          isInSrc: true,
          src: 'problemCSS.png',
        },
      },
    },
    {
      key: 'slide1_renderList',
      data: {
        animation: 'opacity',
        type: 'list',
        center: true,
        key: 'slide17_renderList',
        data: [
          'BEM - http://getbem.com/naming/',
          'SMACSS - https://smacss.com/',
          'ITCSS - https://goo.gl/4Dptnr',
        ],
      },
    },
    {
      key: 'slide1_renderSPC',
      data: {
        animation: 'opacity',
        type: 'spc',
        spcComponent: 'RenderButtonStyled',
      },
    },
  ],
};
