React + Redux Cycle (Synchronous)

1. React (user clicks something)
2. Action Creator (produces an action)
3. Action (flows into middleware)
4. Middleware (passes action into reducers)
5. Reducers (produces state)
6. State (flows into react)

Action Creator -> returns an Action -> Dispatch (makes sure action gets sent to all reducers) -> Reducers

React + Redux Cycle (Async) -> Redux Thunk

```js
import axios from 'axios';

export function fetchUsers() {
  const request = axios.get('http://jsonplaceholder.typicode.com/users');

  return dispatch => {
    request.then(({ data }) => {
      dispatch({ type: 'FETCH_PROFILES', payload: data });
    });
  };
}
```

Component calls fetchUser -> Request to API made -> fetchUsers returns function -> RT calls function w/ dispatch

Time passes... -> Request resolves -> Call dispatch with action
