import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// {
//   let createClass = React.createClass;
//   Object.defineProperty(React, 'createClass', {
//     set: (nextCreateClass) => {
//       createClass = nextCreateClass;
//     },
//   });
// }
// const { whyDidYouUpdate } = require('why-did-you-update');
//
// whyDidYouUpdate(React);

const rootEl = document.getElementById('root');
const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEl,
  );

render(App);
if (module.hot) module.hot.accept('./App', () => render(App));
