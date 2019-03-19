import React from 'react';
import styled from 'styled-components';

export default function SocialHeader({...inputProps}) {
  const { textValue } = inputProps;


  return (
    <SocialContainer>
      <a><SocImg src="https://repl.it/public/images/google.png" alt="ggl"></SocImg></a>
      <a><SocImg src="https://repl.it/public/images/github.png" alt="gh"></SocImg></a>
      <a><SocImg src="https://repl.it/public/images/facebook.png" alt="fb"></SocImg></a>
    </SocialContainer>
  );
}

const SocialContainer = styled.div`
  max-width: 200px;
  display: flex;
  justify-content: space-around;

  a {
    cursor: pointer;
    padding: 4px 7px;
    text-decoration: none;

    &:hover {
      background-color: rgb(217, 217, 217);
    }
  }
`;

const SocImg = styled.img`
  width: 24px;
  height: 24px;
`;
