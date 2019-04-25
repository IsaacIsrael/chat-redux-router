// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

import store from './store';

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
