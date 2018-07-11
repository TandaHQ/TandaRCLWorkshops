import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Post from './Post';

export class Home extends Component {
  componentDidMount() {
    axios.get('/posts', { headers: { Authorization: `bearer ${this.props.token}` } })
      .then(res => this.props.dispatch({
        type: 'POSTS_LOADED',
        payload: res.data.items,
      }));
  }

  render() {
    return (
      <div>
        <p>Hello, {this.props.name}</p>
        <p>Your token: {this.props.token}</p>
        {console.log(this.props.posts)}
        {this.props.posts ? this.props.posts.map((post, index) => <Post key={index} {...post} />) : <p>Loading Posts...</p>}
      </div>
    );
  }
}

export default connect((state) => ({ token: state.token, name: state.currentUser.name, posts: state.posts }))(Home);
