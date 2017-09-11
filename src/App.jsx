import React from 'react';
import { ThemeProvider } from 'styled-components';
import './index.css';
import Routers from './Routers';

const theme = {
  breakpoints: [
    32, 48, 64,
  ],
  space: [
    0, 12, 18, 24, 30,
  ],
  fontSizes: [
    12, 16, 20, 24, 36, 48, 72,
  ],
};

const App = () => (
  <ThemeProvider theme={theme}>
    <Routers />
  </ThemeProvider>
);

export default App;
