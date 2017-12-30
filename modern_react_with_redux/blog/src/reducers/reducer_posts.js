import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload.data.reduce((acc, cur) => {
        acc[cur.id] = cur;
        return acc;
      }, {});
    // return _.mapKeys(action.payload.data, 'id');
    case FETCH_POST:
      return { ...state, [action.payload.data.id]: action.payload.data };
    case DELETE_POST:
      const newState = { ...state };
      delete newState[action.payload];
      return newState;
    // return _.omit(state, action.payload);
    default:
      return state;
  }
}
