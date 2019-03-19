import React from 'react';
import styled from 'styled-components';

export default function Terms({...inputProps}) {
  const { company, termsLink } = inputProps;

  return (
    <StyledPara>By continuing, you agree to {company}'s <a href={termsLink}>Terms of Service</a> and <a href={termsLink}>Privacy Policy</a>.</StyledPara>
  );
}

const StyledPara = styled.p`
  max-width: 200px;
  font-size: 12px;
  text-align: center;
  color: rgb(180, 180, 180);
  line-height: 14px;
  margin: 0;

  a {
    text-decoration: none;
    color: rgb(121, 152, 166);

    &:hover {
      border-bottom: 1px solid #4183c4;
    }
  }
`;
