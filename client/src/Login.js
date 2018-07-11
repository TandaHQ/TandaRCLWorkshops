import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import styles from './styles.module.css';

export class Login extends Component {
  state = { signup: false, email: '', password: '', name: '' };

  toggleSignup = () => {
    this.setState(state => ({ signup: !state.signup }));
  }

  onNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  }

  onEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  }

  onPasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  }

  signUp() {
    const { name, email, password } = this.state;
    return axios.post(
      '/users',
      { name, email, password }
    ).then(() => this.login());
  }

  login() {
    const { email, password } = this.state;
    return axios.post(
      '/login',
      { email, password }
    ).then(res => {
      const { token, ...currentUser } = res.data;
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          token,
          currentUser,
        },
      });
    }).catch(err => {
      alert(`Something went wrong: ${err.message}`);
      this.setState({ password: '' });
    });
  }

  onSubmit = () => {
    if (this.state.signup) {
      this.signUp();
    } else {
      this.login();
    }
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <h1>Tanda Social Network</h1>

        {this.state.signup && (
          <input
            className={styles.input}
            onChange={this.onNameChange}
            placeholder="Name"
            type="text"
            value={this.state.name}
          />
        )}
        <input
          className={styles.input}
          onChange={this.onEmailChange}
          placeholder="Email"
          type="email"
          value={this.state.email}
        />
        <input
          className={styles.input}
          onChange={this.onPasswordChange}
          placeholder="Password"
          type="password"
          value={this.state.password}
        />
        <button
          onClick={this.onSubmit}
          className={styles.button}
        >
          Submit
        </button>
        <button
          className={styles.button}
          onClick={this.toggleSignup}
        >
          {this.state.signup ? 'I already have an account' : 'I need to sign up'}
        </button>
      </div>
    );
  }
}

export default connect()(Login);
