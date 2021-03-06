import React from 'react'
import FlashCard from './FlashCard'
import { Card, Container } from 'semantic-ui-react';


class CardList extends React.Component {

  render() {
    const {deleteCard, updateCard, cards} = this.props;

    return (
      <div className="row">
        <Container>
          <Card.Group>
            { cards.map( single => 
              <FlashCard
                key={single.id}
                {...single}
                updateCard={updateCard}
                deleteCard={deleteCard}
              />
            )}
          </Card.Group>
        </Container>
      </div>
    )  
  }
}

export default CardList;