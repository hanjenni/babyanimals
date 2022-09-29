import React from 'react';
import Header from '../../components/Header/Header';
import { Grid } from 'semantic-ui-react';
import './About.css'

export default function About({ handleLogout}) {
    return (
    <body>
      <Grid centered>
        <Grid.Row>
          <Grid.Column>
            <Header handleLogout={handleLogout}  />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <h1 className='aboutBa'>About Baby Animals</h1>  
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <img className='winnie' src='https://i.imgur.com/jZo0JzSm.jpg'></img>  
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <h3 className='aboutInfo'>About Baby Animals</h3>  
          </Grid.Column>
        </Grid.Row>
       </Grid>
   </body>
    )
}