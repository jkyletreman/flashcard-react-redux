import React, { Component } from "react";
// import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import stacks from "../data/stacks.json";
import { Link } from "react-router-dom";
import { setStack, loadStacks } from "../actions";

export class Stacklist extends Component {
  componentDidMount() {
    // prevents this from firing every timet the component is rendered
    if (this.props.stacks.length === 0) this.props.loadStacks(stacks);
  }
  render() {
    return (
      <div>
        {this.props.stacks.map(stack => {
          return (
            <Link
              to="/stack"
              key={stack.id}
              // we can dispatch the stack to the store via props
              onClick={() => {
                this.props.setStack(stack)
              }}
            >
              <h4>{stack.title}</h4>
            </Link>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { stacks: state.stacks }
}
// redux will autonmatically recognize this function
// const mapDispatchToProps = dispatch => {
//   // add action creators you want to bind
//   return bindActionCreators({ setStack }, dispatch);
// };

// takes two parameters, both are functions
// first handles connecting the component ot the store and retreving data
// second allows components to use the action creators and use reducers to update store
// returns a function that connects component

// short cut syntax, redux can take the action directly instead of needing to bind the action creators
export default connect(mapStateToProps, { setStack, loadStacks })(Stacklist);
