import React from 'react'
import { Button, Card } from 'semantic-ui-react';



class FlashCard extends React.Component {
  
  state = {isEditing: false}

  toggleState(){
    const { isEditing } = this.state;
    this.setState({
      isEditing:!isEditing
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
        <Card.Header>{question}</Card.Header>
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
    const { title, id, artist, position_number, updateCard, } = this.props;
    return (
        <Card>
          <Card.Content>
            <Card.Header>Steve Sanders</Card.Header>
            <Card.Description>
              <span>Reveal Answer</span>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>
                Save
              </Button>
              <Button basic color='red'>
                Exit
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