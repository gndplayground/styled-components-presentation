export default {
  center: true,
  steps: [
    {
      key: 'slide52_renderText',
      data: {
        animation: 'opacity',
        type: 'text',
        center: true,
        data: 'Can we get the theme values without use Styled Components?',
      },
    },
    {
      key: 'slide52_renderCode',
      data: {
        animation: 'opacity',
        type: 'code',
        prismLang: 'jsx',
        data: `
 
import React from 'react';  
import { withTheme } from 'styled-components'

class SideBar extends React.Component {
  render() {
    const {theme} = this.props;
   // We get our theme values!
  }
}

export default withTheme(SideBar)

        `,
      },
    },
  ],
};
