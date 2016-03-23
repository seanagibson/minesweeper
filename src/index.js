import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import {initGameBoard} from './actions/gameActions';
import App from './components/app.js';

let store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

store.dispatch(initGameBoard());

render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('app'));
