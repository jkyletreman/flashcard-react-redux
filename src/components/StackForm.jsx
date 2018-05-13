import React, { Component } from "react";
import { Link } from 'react-router-dom';

class StackForm extends Component {
  render() {
    return (
      <div>
        <Link to='/' className='link-home'><h3>Home</h3></Link>
        <h3>Create a New Stack</h3>
      </div>
    );
  }
}

export default StackForm;
