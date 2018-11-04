import React, {Component} from 'react'
import { Card, Header } from 'semantic-ui-react';

class ScoreBoard extends Component {

  render() {
    return (
      <Card fluid>
        <Card.Header><Header textAlign="center" as='h2'>Score</Header></Card.Header>
        <Card.Content>
          <p>
            Correct: {this.props.correct}         
          </p>
          <p>
            Incorrect: {this.props.incorrect}
          </p>
        </Card.Content>
      </Card>
    )
  }


}

export default ScoreBoard