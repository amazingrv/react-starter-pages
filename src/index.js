import './global.scss';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/store';
import Routes from './Routes';

import './shared/iconLoader';

const mountNode = document.querySelector('#app');
const isProduction = process.env.NODE_ENV === 'production';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* add base URL for all locations as app is served from a sub-directory in production */}
      {isProduction ? (
        <Router basename="/react-starter-pages">
          <Routes />
        </Router>
      ) : (
        <Router>
          <Routes />
        </Router>
      )}
    </Provider>
  </React.StrictMode>,
  mountNode
);
