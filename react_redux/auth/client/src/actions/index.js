import axios from 'axios';
const ROOT_URL = "http://localhost:3090";

export function signinUser({ email, password }) {
  // redux-thunk allows us to return a fn from action creator
  // fn automatically be called with dispatch method(makes sure action gets sent to all reducers)
  // redux-thunk allows to dispatch multiple actions inside action creator

  return function(dispatch) {
    // submit email/pw to server
    axios.post(`${ROOT_URL}/signin`, { email, password });
  }

  // if req good
  // update state to indicate user is authenticated
  // save jwt token
  // redirect to route /feature

  // if req bad
  // show error to user
}