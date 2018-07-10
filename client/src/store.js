import { createStore } from 'redux';

const initialState = {
  token: null,
  currentUser: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    default:
      return state;
  }
}

const store = createStore(reducer, initialState);

export default store;

