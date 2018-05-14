import rootReducer from './index';
import * as actions from '../actions';
import { stack, stacks } from '../data/fixtures';

describe("rootReducer", () => {
  it("returns the initial state", () => {
    expect(rootReducer({}, {})).toEqual({ stack: {}, stacks: [] })
  })
})
