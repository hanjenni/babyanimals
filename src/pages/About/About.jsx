import React from 'react';
import Header from '../../components/Header/Header';
import { Grid } from 'semantic-ui-react';
import './About.css'

export default function About({ handleLogout}) {
    return (
    <body className='aboutBody'>
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
            <h2 className='aboutInfo'>
              Need a healthy way to deal with stress? 
              <br></br>
              Come take a look at some baby animals
              
            </h2>  
          </Grid.Column>
        </Grid.Row>
       </Grid>
   </body>
    )
}