import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import stacks from "../data/stacks.json";
import { Link } from "react-router-dom";
import { setStack } from '../actions';

class Stacklist extends Component {
  render() {
    return (
      <div>
        {stacks.map(stack => {
          return (
            <Link to="/stack" key={stack.id}>
              <h4>{stack.title}</h4>
            </Link>
          );
        })}
      </div>
    );
  }
}
// redux will autonmatically recognize this function
const mapDispatchToProps = (dispatch) => {
  // add action creators you want to bind
  return bindActionCreators({ setStack }, dispatch);
}

// takes two parameters, both are functions
// first handles connecting the component ot the store and retreving data
// second allows components to use the action creators and use reducers to update store
// returns a function that connects component
const connectComponent = connect(null, mapDispatchToProps);

export default connectComponent(Stacklist);
