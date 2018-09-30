import React from 'react'
import { Form, Button, Card, Icon } from 'semantic-ui-react';



class FlashCard extends React.Component {
  
  state = {
    isEditing: false,
    displayAnswer: false,
    question: this.props.question,
    answer: this.props.answer,
  }

  handleQuestionChange = (e) => {
    this.setState({ question: e.target.value });
  }

  handleAnswerChange = (e) => {
    this.setState({ answer: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateCard(this.props.id, this.state.question, this.state.answer);
    this.setState({ isEditing: false, displayAnswer: false })
  }

  handleExit = (e) => {
    e.preventDefault();
    this.setState({ question: this.props.question, answer: this.props.answer, isEditing: false })
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
      displayAnswer:!displayAnswer
    })
  }

  editFlashCard(){
    this.setState({
      isEditing: true 
    })
  }



  updateTodo = (id) => {

  }
  
  renderFlashCard = () =>  {
    const { question, id, answer, deleteCard } = this.props;
    return (
      <Card>
      <Card.Content>
        <Card.Header>{question}
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
        </Card.Header>
        <Card.Description>
          <span>Reveal Answer</span>
          <span>{answer}</span>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Correct
          </Button>
          <Button basic color='red'>
            Incorrect
          </Button>
        </div>
      </Card.Content>
    </Card>
    )
  }

  renderEdit = () =>  {
    const { } = this.props;
    return (
        <Card>
          <Card.Content>
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
            </Form>
          </Card.Content>
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
        </Card>
    )
  }



  render() {
    return( this.state.isEditing ? this.renderEdit() : this.renderFlashCard())
  }
}
export default FlashCard;