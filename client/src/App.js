import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Login from './Login';

export default class App extends Component {
  state = { token: null }

  setToken = (token) => {
    this.setState({ token });
  }

  render() {
    return (
      <div>
        <Route exact path="/">
          {() => <Redirect from="/" to="/login" />}
        </Route>
        <Route path="/login">
          {() => (
            <Login
              token={this.state.token}
              setToken={this.setToken}
            />
          )}
        </Route>
      </div>
    );
  }
}
