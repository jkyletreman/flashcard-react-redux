import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class StackForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      cards: []
    }
  }

  addCard = () => {
    const { cards } = this.state;

    cards.push({ id: cards.length, prompt: '', answer: '' });

    this.setState({ cards });
  }
  render() {
    return (
      <div>
        <Link to='/' className='link-home'><h3>Home</h3></Link>
        <h3>Create a New Stack</h3>
        <br />
        <Form inline>
          <FormGroup>
            <ControlLabel>Title:</ControlLabel>
            {' '}
            <FormControl onChange={e => { this.setState({ title: e.target.value })}}/>
          </FormGroup>
          {
            this.state.cards.map((card, index) => {
              return (
              <div key={card.id}>
                <br />
                <FormGroup>
                  <ControlLabel>Prompt:</ControlLabel>
                  {' '}
                  <FormControl
                    onChange={e => {
                      const { cards } = this.state;

                      cards[index].promt = e.target.value;

                      this.setState({ cards });
                    }}
                  />
                  {' '}
                  <ControlLabel>Answer:</ControlLabel>
                  {' '}
                  <FormControl />
                </FormGroup>
              </div>
            )
            })
          }
        </Form>
        <br />
        <Button onClick={() => this.addCard()}>Add Card</Button>
      </div>
    );
  }
}

export default StackForm;
