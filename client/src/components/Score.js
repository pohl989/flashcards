import React, {Component} from 'react'
import { Card, Header } from 'semantic-ui-react';

class Score extends Component {

  state = {
    correct: '',
    incorrect: ''
  }
  render() {
    return (
      <Card fluid>
        <Card.Header><Header textAlign="center" as='h2'>Score</Header></Card.Header>
        <Card.Content>

        </Card.Content>
      </Card>
    )
  }


}

export default Score