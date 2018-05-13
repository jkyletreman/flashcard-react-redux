import React from "react";
import { shallow } from "enzyme";
import { Stacklist } from "./Stacklist";
import "../setupTests";
import { stacks } from '../data/fixtures'

const props = { stacks };

describe("Stacklist", () => {
  const stacklist = shallow(<Stacklist { ...props } />);

  it("renders the correct number of links", () => {
    expect(stacklist.find('Link').length).toEqual(props.stacks.length);
  });

  
})
