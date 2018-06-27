import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import registerServiceWorker from './registerServiceWorker';
import styles from './styles.module.css';
import Login from './Login';

axios.defaults.baseURL = 'http://social.workshops.tanda.co';
ReactDOM.render(
  <div className={styles.app}>
    <BrowserRouter>
      <div>
        <Route exact path="/">
          {() => <Redirect from="/" to="/login" />}
        </Route>
        <Route path="/login">
          {() => <Login />}
        </Route>
      </div>
    </BrowserRouter>
  </div>,
  document.getElementById('root')
);

registerServiceWorker();
