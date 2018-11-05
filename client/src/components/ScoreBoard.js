import React, {Component} from 'react'
import { connect } from 'react-redux';
import { Card, Header } from 'semantic-ui-react';

class ScoreBoard extends Component {

  percentage = () => {
    const { correct, incorrect} = this.props
    if (correct + incorrect == 0) {
      return("0.00%")
    } else {
      return(`${(correct/(correct + incorrect) * 100).toFixed(2)}%`)
    }
  }

  render() {
    const { correct, incorrect} = this.props
    return (
      <Card fluid>
        <Card.Header><Header textAlign="center" as='h2'>Score</Header></Card.Header>
        <Card.Content>
          <p>
            Correct: {correct}     
          </p>
          <p>
            Incorrect: {incorrect}
          </p>
          <p>
            Percentage: {this.percentage()}
          </p>
        </Card.Content>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  return { correct: state.correct, incorrect: state.incorrect };
};

export default connect(mapStateToProps)(ScoreBoard)