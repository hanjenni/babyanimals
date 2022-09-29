import React from 'react';
import Header from '../../components/Header/Header';
import { Grid } from 'semantic-ui-react';

export default function About({ handleLogout}) {
    return (
        <Grid.Row>
          <Grid.Column>
            <Header handleLogout={handleLogout}  />
          </Grid.Column>
        </Grid.Row>
    )
}