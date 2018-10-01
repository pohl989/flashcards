import React, {Component} from 'react'
import { Card, Header } from 'semantic-ui-react';

class Score extends Component {

  state = {
    correct: '0',
    incorrect: '0'
  }
  render() {
    return (
      <Card fluid>
        <Card.Header><Header textAlign="center" as='h2'>Score</Header></Card.Header>
        <Card.Content>
          <p>
            Correct: {this.state.correct}         
          </p>
          <p>
            Incorrect: {this.state.incorrect}
          </p>
        </Card.Content>
      </Card>
    )
  }


}

export default Score