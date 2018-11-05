import React, {Component} from 'react'
import { Form, Button, Card } from 'semantic-ui-react';


class CardForm extends Component {
  state = { 
    question: '',
    answer: ''
 }

  handleQuestionChange = (e) => {
    this.setState({ question: e.target.value });
  }

  handleAnswerChange = (e) => {
    this.setState({ answer: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addCard(this.state.question, this.state.answer);
    this.setState({ question: '', answer: '' })
    document.getElementById("bestInputEver").focus();
  }

  render() {
    return (
      <div id="fancy-form">
      <Card fluid><Card.Content>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Question</label>
            <input 
              id="bestInputEver"
              placeholder='Question' 
              required
              autoFocus
              value={this.state.question}
              onChange={this.handleQuestionChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Answer</label>
            <input 
              required
              placeholder='Answer' 
              value={this.state.answer}
              onChange={this.handleAnswerChange}
            />
          </Form.Field>
          <Button type='submit' color="pink" >Submit</Button>
        </Form>

      </Card.Content>
      </Card>
      </div>
    )
  }
}



export default CardForm;