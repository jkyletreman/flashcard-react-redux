import React from "react";
import { shallow } from "enzyme";
import { Stack } from "./Stack";
import "../setupTests";
import { stack } from '../data/fixtures'

const props = { stack };

describe("Stack", () => {
  const stack = shallow(<Stack { ...props }/>);

  it("renders the link home", ()=> {
    expect(stack.find("Link h3").text()).toEqual("Home")
  });

  it("renders the title", () => {
    expect(stack.find("h3").at(1).text()).toEqual(props.stack.title)
  });

  it("renders the correct numbers of cards", () => {
    expect(stack.find('Card').length).toEqual(props.stack.cards.length)
  });
})
