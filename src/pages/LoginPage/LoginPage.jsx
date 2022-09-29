import React, { useState } from "react";
import "./LoginPage.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";
import { Button, Form, Grid, Header, Image, Segment, Message } from 'semantic-ui-react';
import { useNavigate, Link } from "react-router-dom";



export default function LoginPage(props) {
  const [error, setError] = useState('');
  const [state, setState] = useState({
    email: '',
    password: '',
  })

  const navigate = useNavigate();

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }


  async function handleSubmit(e){
    e.preventDefault();

    try {
      await userService.login(state);
      props.handleSignUpOrLogin();
      navigate('/');
    }catch (err) {
      setError(err.message);
    }
  }

  return (
  <div className="loginBody">
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='purple' textAlign='center'>
          <Image src='/animal.png' /> Welcome Back! 
        </Header>
        <Form onSubmit={handleSubmit} size='large' autoComplete='on'>
          <Segment stacked>
            <Form.Input
              name='email'
              type='email'
              value={state.email}
              iconPosition='left'
              placeholder='email'
              fluid icon='mail'
              onChange={handleChange}
              required
            />
            <Form.Input
              name='password'
              type='password'
              value={state.password}
              iconPosition='left'
              placeholder='Password'
              fluid icon='lock'
              onChange={handleChange}
              required

            />
            <Button color= 'purple' fluid size='large'>
              Log In
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <Link to ='/signup'>Sign Up</Link>
        </Message>
        {error ? <ErrorMessage error={error} /> : null}
      </Grid.Column>
    </Grid>
  </div>
  );
}
