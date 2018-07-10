import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import registerServiceWorker from './registerServiceWorker';
import styles from './styles.module.css';
import App from './App';
import store from './store';

axios.defaults.baseURL = 'http://social.workshops.tanda.co';
ReactDOM.render(
  <div className={styles.app}>
    <Provider store={store}>
      <App />
    </Provider>
  </div>,
  document.getElementById('root')
);

registerServiceWorker();
