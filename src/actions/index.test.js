import * as actions from "./index";
import { stack, stacks } from '../data/fixtures';

describe("actions", () => {
  it('create a action to set the main stack', () => {
    const expectedAction = { type: actions.SET_STACK, stack }
    expect(actions.setStack(stack)).toEqual(expectedAction)
  });

  it('creates an action to add a stack', () => {
    const expectedAction = { type: actions.ADD_STACK, stacks }
    expect(actions.addStack(stacks)).toEqual(expectedAction)
  })

  it('creates an action to load stacks', () => {
    const expectedAction = { type: actions.LOAD_STACKS, stacks}
    expect(actions.loadStacks(stacks)).toEqual(expectedAction)
  })
})
