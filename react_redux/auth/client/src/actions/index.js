import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR } from "./types";

const ROOT_URL = "http://localhost:3090";


/* 

whenever signinUser action creator called, return fn that is auto called by redux thunk middleware

redux thunk middleware call that fn w/ dispatch method

*/

export function signinUser({ email, password }) {
  // redux-thunk allows us to return a fn from action creator
  // fn automatically be called with dispatch method(makes sure action gets sent to all reducers)
  // redux-thunk allows to dispatch multiple and async actions inside action creator

  return function(dispatch) {
    // submit email/pw to server
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        // if req good
        // update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });
        // save jwt token
        localStorage.setItem('token', response.data.token);
        // redirect to route /feature
        browserHistory.push('/feature');
      });
      .catch(() => {
        // if req bad
        // show error to user
        dispatch(authError('Bad Login Info'));
      });
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}