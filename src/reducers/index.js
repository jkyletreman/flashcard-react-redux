// reducer has 1 primary goal, compose a object to represent how the state should be updated
// state uses the object to represent the data in the reducer
// each reducer takes two paramaters the first is the redux state at a current time, the second is the action
const stack = (state = {}, action) => {
  switch (action.type) {
    case "SET_STACK":
      return action.stack;
    default:
      return state;
  }
}
