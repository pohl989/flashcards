import React from 'react'
import FlashCard from './FlashCard'
import { Card, Container } from 'semantic-ui-react';


class CardList extends React.Component {

  render() {
    const {deleteSong, updateSong, cards} = this.props;

    return (
      <div className="row">
        <Container>
          <Card.Group>
            { cards.map( single => 
              <FlashCard
                key={single.id}
                {...single}
                updateSong={updateSong}
                deleteSong={deleteSong}
              />
            )}
          </Card.Group>
        </Container>
      </div>
    )  
  }
}

export default CardList;