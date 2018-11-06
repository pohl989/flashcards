import React, {Component, Fragment} from 'react';
import { Grid, Divider, Button, Header } from 'semantic-ui-react';
import HeaderText from '../styledComponents/HeaderText';
import CardForm from './CardForm';
import ScoreBoard from './ScoreBoard';
import CardList from './CardList'
import { Link } from 'react-router-dom'

class Home extends Component {

  state = { 
    cards: [
      {id: 1, question: "The best Song Ever", answer: "Cool Artist", is_correct: false, isEditing: false}, 
      {id: 2, question: "Another Great Song", answer: "Sum42", is_correct: false, isEditing: false}, 
      {id: 3, question: "Lemon Ginger", answer: "Mamachari", is_correct: false, isEditing: false},
    ],
    showForm: false,
    showButtons: true,
  }

  correctAnswer = () => {
    const correct = this.state.correct
    this.setState({ correct: correct + 1})
  }

  incorrectAnswer = () => {
    const incorrect = this.state.incorrect
    this.setState({ incorrect: incorrect + 1})
  }

  componentDidMount() {
    fetch('/api/cards')
      .then( res => res.json() )
      .then( cards => this.setState({ cards }) )
  }

  addCard = (question, answer) => {
    let card = { question, answer };
    fetch('/api/cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(card)
    }).then( res => res.json() )
      .then( card => {
        const { cards } = this.state;
        this.setState({ cards: [card, ...cards] });
    })
  }
  
  updateCard = (id, question, answer) => {
    let card = { id, question, answer };
    fetch(`/api/cards/${id}`, { 
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(card) 
    }).then( res => res.json() )
      .then( card => {
        let cards = this.state.cards.map( t => {
          if (t.id === id)
          return card
          return t;
        });
        this.setState({ cards });
    })
  }
  
  deleteCard = (id) => {
    fetch(`/api/cards/${id}`, { method: 'DELETE' })
      .then( () => {
        const { cards } = this.state;
        this.setState({ cards: cards.filter( t => t.id !== id ) })
      })
    this.componentDidMount()
   }

  renderForm = () => {
    const { showForm } = this.state
    if(showForm) {
      return (
        <Grid.Row>
          <CardForm addCard={this.addCard} />
        </Grid.Row>
      )
    } else {
      return (
        <Grid.Row>
          <ScoreBoard
            correct={this.state.correct}
            incorrect={this.state.incorrect}
          />
        </Grid.Row>
      )
    }
  }

  renderButtons = () => {
    const { showButtons } = this.state
    if(showButtons) {
      return (
        <Fragment>
          <Header>Select a Category</Header>
          <Button.Group fluid inverted>
            <Button inverted color={"blue"}>Rails</Button>
            <Button inverted color={"blue"}>React</Button>
            <Button inverted color={"blue"}>ES6</Button>
          </Button.Group>
          <Header>How Many Cards</Header>
          <Button.Group fluid inverted>
            <Button inverted color={"blue"}>5</Button>
            <Button inverted color={"blue"}>10</Button>
            <Button inverted color={"blue"}>15</Button>
            <Button inverted color={"blue"}>all</Button>
          </Button.Group>
          <Divider />
          <Button fluid color={"pink"}>Let the games begin</Button>          
        </Fragment>
      )
    } else {
      return (
        <Grid.Row>
          <ScoreBoard
            correct={this.state.correct}
            incorrect={this.state.incorrect}
          />
        </Grid.Row>
      )
    }
  }

  
  render() {
    
    return(
      <div>
          <Link to='/'>
            <HeaderText bColor="green" fSize="large">
              Flash Cards
            </HeaderText>
          </Link>

        <HeaderText sub={true} fSize="small" >Now Lets get flashy</HeaderText>
    
        <Grid inverted>
          <Grid.Row>
            <Grid.Column width={2}/>
              <Grid.Column width={8}>
                {this.renderForm()}
                {this.renderButtons()}
              </Grid.Column>
            <Grid.Column width={4}>
   
            </Grid.Column>
          </Grid.Row>
          <Divider />
          <Grid.Row>
            <Grid.Column width={2}/>
            <Grid.Column width={12}>
              <Grid.Row>
                <CardList
                  cards={this.state.cards}
                  updateCard={this.updateCard} 
                  deleteCard={this.deleteCard}
                />
              </Grid.Row>
            </Grid.Column>
            <Grid.Column width={2}/>
          </Grid.Row>
        </Grid>
      </div>

    )
  }
}


export default Home;