import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Login from './Login';

export default class App extends Component {
  state = { token: null }

  setToken = (token) => {
    this.setState({ token });
  }

  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => this.state.token
              ? <Home />
              : <Redirect to="/login" />}
        />
        <Route
          path="/login"
          render={(props) => (
            <Login
              {...props}
              token={this.state.token}
              setToken={this.setToken}
            />
          )}
        />
      </div>
    );
  }
}
