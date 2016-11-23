import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'

import configureStore from './stores/configureStore';
import { Provider } from 'react-redux'

import rootReducer from './reducers/index'
// create store
export const store = configureStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container')
);
