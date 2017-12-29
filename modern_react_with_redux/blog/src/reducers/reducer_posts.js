import { FETCH_POSTS } from '../actions/index';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      const posts = action.payload.data.reduce((acc, cur) => {
        acc[cur.id] = cur;
        return acc;
      }, {});
      return posts;
    default:
      return state;
  }
}
