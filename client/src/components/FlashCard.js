import React from 'react'
import { Form, Button, Card, Icon } from 'semantic-ui-react';
import FakeLink from '../styledComponents/FakeLink';
import { correct } from '../reducers/correct'
import { incorrect } from '../reducers/incorrect'
import { connect } from 'react-redux'

class FlashCard extends React.Component {
  
  state = {
    isEditing: false,
    displayAnswer: false,
    question: this.props.question,
    answer: this.props.answer,
    status: ""
  }

  correctAnswer = () => {
    const {dispatch} = this.props
    dispatch({type: 'CORRECT_ANSWER'})
    this.setState({ status: "correct", displayAnswer: false });
  }

  incorrectAnswer = () => {
    const {dispatch} = this.props
    dispatch({type: 'INCORRECT_ANSWER'})
    this.setState({ status: "incorrect", displayAnswer: false });
  }


  handleQuestionChange = (e) => {
    this.setState({ question: e.target.value });
  }

  handleAnswerChange = (e) => {
    this.setState({ answer: e.target.value });
  }

  handleSubmit = (e) => {
    const { id } = this.props
    e.preventDefault();
    this.props.updateCard(id, this.state.question, this.state.answer);
    this.setState({ isEditing: false, displayAnswer: false })
  }

  handleExit = (e) => {
    e.preventDefault();
    this.setState({ question: this.props.question, answer: this.props.answer, isEditing: false, displayAnswer: false })
  }

  toggleIsEditing(){
    const { isEditing } = this.state;
    this.setState({
      isEditing:!isEditing
    })
  }

  toggleDisplayAnswer(){
    const { displayAnswer } = this.state;
    this.setState({
      displayAnswer: !displayAnswer
    })
  }

  editFlashCard(){
    this.setState({
      isEditing: true 
    })
  }

  showTheCorrectButton = () => {
    const {status} = this.state
    if(status==="correct") {
      return(
        <Button
          onClick={() => this.correctAnswer()}            
          color='green'
        >
          <Icon name='check' />
          Correct
        </Button>
      )
    } else {
      return(
        <Button
          onClick={() => this.correctAnswer()}            
          basic 
          color='green'
        >
          <Icon name='check' />
          Correct
        </Button>
      )
    }
  }

  showTheIncorrectButton = () => {
    const {status} = this.state
    if(status==="incorrect") {
      return(
        <Button 
          onClick={() => this.incorrectAnswer()}
          color='red'
        >
        <Icon name='ban' />
          Incorrect
        </Button>
      )
    } else {
      return(
        <Button 
        onClick={() => this.incorrectAnswer()}
        basic 
        color='red'
      >
        <Icon name='ban' />
        Incorrect
      </Button>
      )
    }
  }
  
  renderFlashCard = () =>  {
    const { question, id, answer, deleteCard } = this.props;
    const { status } = this.state
    return (
      <Card fluid>
      <Card.Content>
        <Button.Group floated="right" size="mini">
          <Button 
            icon='pencil' 
            onClick={() => this.toggleIsEditing()}
          />
          <Button 
            icon='trash' 
            onClick={() => deleteCard(id)}
          />
        </Button.Group >
        <Card.Header>{question}
        </Card.Header>
        <Card.Description>
          <FakeLink
            onClick={() => this.toggleDisplayAnswer()}
            >
              {this.state.displayAnswer ? "Hide" : "Display"} Answer
          </FakeLink>
            <h5>{this.state.displayAnswer ? answer : ""}</h5>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          {this.showTheCorrectButton()}
          {this.showTheIncorrectButton()}
        </div>
      </Card.Content>
    </Card>
    )
  }

  renderEdit = () =>  {
    return (
        <Card fluid>
          <Card.Content>
            <Form onSubmit={this.handleSubmit}>
              <Card.Description>
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
                </Card.Description>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button 
                    basic color='grey'
                    onClick={this.handleExit}
                    >
                    <Icon name='undo' />
                    Undo
                  </Button>
                  <Button 
                    basic 
                    color='blue'
                    type='submit'
                    >
                    <Icon name='save' />
                    Save
                  </Button>
                </div>
              </Card.Content>
            </Form>
          </Card.Content>
        </Card>
    )
  }



  render() {
    return( this.state.isEditing ? this.renderEdit() : this.renderFlashCard())
  }
}
export default connect()(FlashCard);