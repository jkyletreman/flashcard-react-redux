const SET_STACK = 'SET_STACK'
const LOAD_STACKS = 'LOAD_STACKS'
const ADD_STACK = 'ADD_STACK'
// function is a action creator, which returns the action
const setStack = (stack) => {
  return {
    // all redux actions have type, use scream stack convention
    type: SET_STACK,
    // then the action has data, which is what the actions acts on
    // will come from any component that can set the stack (each component needs the ability to set the data)
    // wrapping it in a function, allows a paramater to be created for stack data
    stack: stack
  };
};

const loadStacks = (stacks) => {
  return {
    type: LOAD_STACKS,
    stacks
  }
}

const addStack = (stack) => {
  return {
    type: ADD_STACK,
    stack
  }
}

export { setStack, loadStacks, addStack, ADD_STACK, SET_STACK, LOAD_STACKS };
