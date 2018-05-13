import React from "react";
import { shallow } from "enzyme";
import Card from "./Card";
import "../setupTests";

const props = { card: { prompt: 'test prompt', answer: 'test answer'}}

describe("Card", () => {
  const card = shallow(<Card { ...props } />);

  it('sets `reveal` to be `false`', () => {
    expect(card.state().reveal).toBe(false);
  })

  it("renders the card prompt", () => {
    expect(card.find('.card-prompt h4').text()).toEqual(props.card.prompt)
  })
})
