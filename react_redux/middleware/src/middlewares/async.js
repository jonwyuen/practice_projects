export default function({ dispatch }) {
  return next => action => {
    // if action doesn't have payload or payload doesn't have .then prop,
    // we dont care, send it on
    if (!action.payload || !action.payload.then) {
      return next(action);
    }
    // make sure the action's promise resolves
    action.payload.then(response => {
      // create a new action w/ old type, but replace the promise w/ response data
      const newAction = { ...action, payload: response };
      // dispatch sends it to all reducers
      dispatch(newAction);
    });
  };
}
