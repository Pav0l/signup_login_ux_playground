import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { createNewUser, loginUser } from '../../requests/unprotected';

import Input from './Input';
import Button from './Button';

const emptyForm = {
  username: '',
  password: '',
  email: '',
};

export default function Form(props) {
  const [formInputs, setFormInputs] = useState(emptyForm);
  const [isError, setError] = useState(null);

  const onInputChange = event => {
    setFormInputs({
      ...formInputs,
      [event.target.name]: event.target.value,
    });
  };

  const clearInputValue = stateKey => {
    setFormInputs({
      ...formInputs,
      [stateKey]: '',
    });
  };

  const buttonClick = event => {
    event.preventDefault();
    // Add whatever you need to do with button click
    const { username, email, password } = formInputs;

    if (props.type === 'signup') {
      createNewUser(username, email, password, setError);
    } else if (props.type === 'login') {
      loginUser(username, password, props.setAuth, setError);
    }

    setFormInputs(emptyForm);
  };

  if (isError) {
    return <h3>Unfortunatelly, there was an error: {isError}</h3>;
  }

  return (
    <FormContainer autoComplete='off' onSubmit={buttonClick}>
      <Input
        name='username'
        placeholder='username'
        type='text'
        onChange={onInputChange}
        value={formInputs.username}
        clearInput={clearInputValue}
      />

      {props.type === 'signup' ? (
        <Input
          name='email'
          placeholder='email'
          type='email'
          onChange={onInputChange}
          value={formInputs.email}
          clearInput={clearInputValue}
        />
      ) : null}

      <Input
        name='password'
        placeholder='password'
        type='password'
        onChange={onInputChange}
        value={formInputs.password}
        clearInput={clearInputValue}
      />

      {props.type === 'signup' ? (
        <LoginText>
          Already have an account? <a href='/login'>Log in!</a>
        </LoginText>
      ) : (
        <LoginText>
          Don't have an account? <a href='/signup'>Sign up!</a>
        </LoginText>
      )}

      {props.type === 'signup' ? (
        <Button textValue='Sign up' type='submit' onClick={buttonClick} />
      ) : (
        <Button textValue='Log in' type='submit' onClick={buttonClick} />
      )}
    </FormContainer>
  );
}

const FormContainer = styled.form`
  max-width: 200px;
  margin: 0.5rem auto 0;
  padding: 1rem 0;
  border-top: 1px solid grey;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LoginText = styled.div`
  max-width: 200px;
  font-size: 12px;
  text-align: center;
  color: rgb(180, 180, 180);
  line-height: 14px;
  margin: 0.5rem 0;

  a {
    text-decoration: none;
    color: rgb(121, 152, 166);

    &:hover {
      border-bottom: 1px solid #4183c4;
    }
  }
`;
