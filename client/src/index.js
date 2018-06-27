import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import registerServiceWorker from './registerServiceWorker';
import styles from './styles.module.css';
import App from './App';

axios.defaults.baseURL = 'http://social.workshops.tanda.co';
ReactDOM.render(
  <div className={styles.app}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>,
  document.getElementById('root')
);

registerServiceWorker();
