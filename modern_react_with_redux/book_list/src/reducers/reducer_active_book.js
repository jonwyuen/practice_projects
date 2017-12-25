// state argument not app state, only the state this reducer is responsible for
export default function(state = null, action) {
  switch (action.type) {
    case 'SELECT_BOOK':
      return action.payload;
  }
  return state;
}
