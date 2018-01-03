// Reselect selector
// Takes a list of posts and post Ids, and picks out
// the selected Posts
import _ from 'lodash';
import { createSelector } from 'reselect';
// Selector takes a piece of state or more and ships out derived/calculated piece of state

// Create select functions to pick off the pieces of state we care about
// for this calculation
const postsSelector = state => state.posts;
const selectedPostsSelector = state => state.selectedPostIds;

// Args are what comes out of above selectors
const getPosts = (posts, selectedPostIds) => {
  const selectedPosts = _.filter(posts, post =>
    _.contains(selectedPostIds, post.id)
  );

  return selectedPosts;
};

// Pass in some num of state selecting fns
// whenever global redux state changes, each of these selecting fns are executed
// whatever value they produce is going to be sent into the last fn/arg in createSeelector

export default createSelector(
  postsSelector, // pick off a piece of state
  selectedPostsSelector, // pick off a piece of state
  getPosts // last argument is the function that has our select logic
);
