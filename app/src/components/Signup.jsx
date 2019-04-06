import React from 'react';
import styled from 'styled-components';

import Form from './shared/Form';
import SocialHeader from './shared/SocialHeader';
import Terms from './shared/Terms';

export default class Signup extends React.Component {
  render() {
    return (
      <SignupContainer>
        <SocialHeader />
        <Form type='signup' />
        <Terms company='nifty market' termsLink='#' />
      </SignupContainer>
    );
  }
}

const SignupContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 200px;
`;
