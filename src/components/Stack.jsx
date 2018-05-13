import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Stack extends Component {
  render() {
    const { title, cards } = this.props.stack;
    return (
      <div>
        <Link to='/'>Home</Link>
          <h3>{title}</h3>
          <br />
          {
            cards.map(card => {
              return (
                <div key={card.id}>
                  {card.prompt}
                </div>
              )
            })
          }
      </div>
    )
  }
}
// takes state as parameter
const mapStateToProps = (state) => {
  // want to return a object that we want to be the props
  return { stack: state }
}

export default connect(mapStateToProps, null)(Stack);
