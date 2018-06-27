import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Login from './Login';

export default class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/">
          {() => <Redirect from="/" to="/login" />}
        </Route>
        <Route path="/login">
          {() => <Login />}
        </Route>
      </div>
    );
  }
}
