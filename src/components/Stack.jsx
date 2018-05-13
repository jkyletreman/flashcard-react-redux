import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Card from "./Card";

class Stack extends Component {
  render() {
    const { title, cards } = this.props.stack;
    return (
      <div>
        <Link to="/" className="link-home">
          <h3>Home</h3>
        </Link>
        <h3>{title}</h3>
        <br />
        {cards.map(card => {
          return <Card key={card.id} card={card} />;
        })}
      </div>
    );
  }
}
// takes state as parameter
const mapStateToProps = state => {
  // want to return a object that we want to be the props
  return { stack: state.stack };
};

export default connect(mapStateToProps, null)(Stack);
