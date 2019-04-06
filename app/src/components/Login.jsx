import React from 'react';
import styled from 'styled-components';

import Form from './shared/Form';
import SocialHeader from './shared/SocialHeader';
import Terms from './shared/Terms';

export default function Login({ setAuth }) {
  return (
    <LoginContainer>
      <SocialHeader />
      <Form type='login' setAuth={setAuth} />
      <Terms company='nifty market' termsLink='#' />
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 200px;
`;
