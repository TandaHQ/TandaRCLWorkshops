import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Home';
import Login from './Login';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route
            exact
            path="/"
            render={() => this.props.token
                ? <Home />
                : <Redirect to="/login" />}
          />
          <Route
            path="/login"
            render={(props) => (
              this.props.token
              ? <Redirect to="/" />
              : <Login history={props.history} setToken={this.setToken} />
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect((state) => ({ token: state.token }))(App);
