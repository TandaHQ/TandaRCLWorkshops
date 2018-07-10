import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Home extends Component {
  render() {
    return (
      <div>
        <p>Hello, {this.props.name}</p>
        <p>Your token: {this.props.token}</p>
      </div>
    );
  }
}

export default connect((state) => ({ token: state.token, name: state.user.name }))(Home);
