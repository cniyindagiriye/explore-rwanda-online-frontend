import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/index';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

export const ReactApp = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

export const rootElement = document.getElementById('root');

ReactDOM.render(ReactApp, rootElement);
