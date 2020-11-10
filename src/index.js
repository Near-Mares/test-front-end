import React from 'react';
import ReactDOM from 'react-dom';
import './css/corev2.css'
import App from './App';
//Redux
import { createStore } from 'redux';
import allReducer from './redux/reducers/index';
import { Provider } from 'react-redux';

const store =  createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
