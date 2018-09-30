import React from 'react';
import { Grid } from 'semantic-ui-react';
import HeaderText from '../styledComponents/HeaderText';
import CardForm from './CardForm';
import Score from './Score';


const Home = () => (
  <div>
    <HeaderText bColor="green" fSize="large">
      Flashcards
    </HeaderText>
    <HeaderText sub={true} fSize="small" >No Lets get flashy</HeaderText>

    <Grid inverted>
      <Grid.Row>
        <Grid.Column width={2}/>
        <Grid.Column width={8}>
          <Grid.Row inverted="true">
            <CardForm/>
          </Grid.Row>
        </Grid.Column>
        <Grid.Column width={4}>
        <Score/>

        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
)

export default Home;