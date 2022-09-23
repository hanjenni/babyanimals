import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { Button, Form, Grid, Header, Image, Segment, Message } from 'semantic-ui-react';

import userService from "../../utils/userService";
import { useNavigate } from "react-router-dom";

export default function SignUpPage(props) {
  const [error, setError] = useState('');
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    passwordConf:''

  })
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='yellow' textAlign='center'>
        <Image src='/logo.png' /> Log-in to your account
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input 
            name='username'
            value=''
            iconPosition='left' 
            placeholder='username' 
            fluid icon='user'
          />
          <Form.Input
            name='email'
            type='email'
            value=''
            iconPosition='left'
            placeholder='email'
            fluid icon='lock'
          />
          <Form.Input
            name='password'
            type='password'
            iconPosition='left'
            placeholder='Password'
            
          />
          <Form.Input
            name='passwordConf'
            type='password'
            iconPosition='left'
            placeholder='Confirm Password'
            
          />

          <Button color='yellow' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <a href='#'>Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
  );
}
