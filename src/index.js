import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import App from'./components/App.jsx';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(reduxThunk)));

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.querySelector('#root')
);