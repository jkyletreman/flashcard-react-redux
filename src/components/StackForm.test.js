import React from "react";
import { shallow } from "enzyme";
import { StackForm } from "./StackForm";
import "../setupTests";
import { stacks } from '../data/fixtures'

describe("StackForm", () => {
  const stackForm = shallow(<StackForm />);

  it("renders the form title", () => {
    expect(stackForm.find('h3').at(1).text()).toEqual("Create a New Stack");
  });

  it("renders a link home", () => {
    expect(stackForm.find('h3').at(0).text()).toEqual("Home");
  });

  it("renders a Form component", () => {
    expect(stackForm.find('Form').exists()).toBe(true);
  });

  it("renders a button to add a new card", () => {
    expect(stackForm.find('Button').at(0).props().children).toEqual('Add Card');
  });

  it("renders a button to submit the form", () => {
    expect(stackForm.find('Button').at(1).props().children).toEqual("Save and Add the Stack")
  });

  describe('and updating the title', () => {
    beforeEach(() => {
      // need to simulate the target.value from our onChange in the form
      stackForm.find('FormControl').simulate('change', { target: { value: 'change title' }})
    })

    it("updates the title in the state", () => {
      expect(stackForm.state().title).toEqual('change title')
    })
  })
})
