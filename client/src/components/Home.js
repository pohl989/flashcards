import React, {Component} from 'react';
import { Grid, Divider } from 'semantic-ui-react';
import HeaderText from '../styledComponents/HeaderText';
import CardForm from './CardForm';
import ScoreBoard from './ScoreBoard';
import CardList from './CardList'


class Home extends Component {

  state = { 
    cards: [
      {id: 1, question: "The best Song Ever", answer: "Cool Artist", is_correct: false, isEditing: false}, 
      {id: 2, question: "Another Great Song", answer: "Sum42", is_correct: false, isEditing: false}, 
      {id: 3, question: "Lemon Ginger", answer: "Mamachari", is_correct: false, isEditing: false},
    ],
    correct: 0,
    incorrect: 0,
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
        this.setState({ cards: [...cards, card] });
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
  
  render() {
    
    return(
      <div>

        <HeaderText bColor="green" fSize="large">Flash Cards
        </HeaderText>
        <HeaderText sub={true} fSize="small" >Now Lets get flashy</HeaderText>
    
        <Grid inverted>
          <Grid.Row>
            <Grid.Column width={2}/>
            <Grid.Column width={8}>
              <Grid.Row>
                <CardForm
                  addCard={this.addCard}
                />
              </Grid.Row>
            </Grid.Column>
            <Grid.Column width={4}>
            <ScoreBoard
              correct={this.state.correct}
              incorrect={this.state.incorrect}
            />
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
                  correctAnswer={this.correctAnswer}
                  incorrectAnswer={this.incorrectAnswer}
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