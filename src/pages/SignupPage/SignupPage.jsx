import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { Button, Form, Grid, Header, Image, Segment, Message } from 'semantic-ui-react';

import userService from "../../utils/userService";
import { useNavigate, Link } from "react-router-dom";

import './SignupPage.css';

export default function SignUpPage(props) {
  const [error, setError] = useState({
    message: '',
    passwordError: false
  });


  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    passwordConf: '',

  });

  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState('')

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo', selectedFile);
    for (let key in state) {
      formData.append(key, state[key]);
    }
    console.log(formData, '<-formdata')
    // console.log(formData.forEach((item) => console.log(item)), '<-formData'
    // );

    try {
      await userService.signup(formData);
      props.handleSignUpOrLogin();
      navigate('/');
    } catch (err) {
      console.log(err);
      setError({ message: err.message, passwordError: false });
    }
  }

  function handleFileInput(e) {
    console.log(e.target.files, '<-this is e.target.files')
    setSelectedFile(e.target.files[0]);
  }

  return (
  <>
  <div className="Body">
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='yellow' textAlign='center'>
          <Image src='/animal.png' /> Sign Up
        </Header>
        <Form onSubmit={handleSubmit} size='large' autoComplete='on' className="SignUpForm">
          <Segment stacked>
            <Form.Input
              name='username'
              value={state.username}
              iconPosition='left'
              placeholder='username'
              fluid icon='user'
              onChange={handleChange}
              required
            />
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
            <Form.Input
              name='passwordConf'
              type='password'
              iconPosition='left'
              placeholder='Confirm Password'
              fluid icon='lock'
              value={state.passwordConf}
              onChange={handleChange}
              required

            />
            <Form.Field>
              <Form.Input
                type="file"
                name="photo"
                placeholder="upload image"
                onChange={handleFileInput}
              />
            </Form.Field>
            <Button color='yellow' fluid size='large'>
              Sign Up
            </Button>
          </Segment>
          {error.message ? <ErrorMessage error={error.message} /> : null}
        </Form>
        <Message>
          Already a member? <Link to='/login'>Login</Link>
        </Message>
      </Grid.Column>
    </Grid>
    </div>
    </>
 
  );
}
