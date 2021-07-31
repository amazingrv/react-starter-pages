import './global.scss';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/store';
import Routes from './Routes';

import './shared/iconLoader';

const mountNode = document.querySelector('#app');

ReactDOM.render(
  <Provider store={store}>
    {/* add base URL for all locations if your app is served from a sub-directory on your server */}
    <Router basename="/react-starter-pages">
      <Routes />
    </Router>
  </Provider>,
  mountNode
);
