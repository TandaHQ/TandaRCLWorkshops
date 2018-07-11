import { createStore } from 'redux';

const initialState = {
  token: null,
  currentUser: null,
  posts: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        token: action.payload.token,
        currentUser: action.payload.currentUser,
      };
    case 'POSTS_LOADED':
      return {
        ...state,
        posts: [].concat(action.payload).concat(state.posts),
      };
    default:
      return state;
  }
}

const store = createStore(reducer, initialState);

export default store;

