Redux + Firebase

React -> Redux -> Firebase

Firebase Ref -> Action -> Reducers (produces state) -> State

```js
const Posts = new Firebase('https://fbredux.firebaseio.com/');

export function fetchPosts() {
  return dispatch => {
    Posts.on('value', snapshot => {
      dispatch({
        type: FETCH_POSTS,
        payload: snapshot.val()
      });
    });
  };
}

export function createPost(post) {
  return dispatch => Posts.push(post);
}

export function deletePost(key) {
  return dispatch => Posts.child(key).remove();
}
```

When remove a post, going to get a value event, which contains new list of posts w/o the deleted post

Push to firebase db

Throwing new list of posts onto the pile, then value event is triggered by firebase reference that calls dispatch method and passes a new action w/ new list of posts into redux reducers

Firebase (event based flow of data)
Redux (cause and effect; call action creater to make change on app and expect to see a predictable result)
Use Redux Thunk to combine Firebase and Redux -> Everytime we get value event from firebase ref we set a new action off to reducers that contain new list of posts
