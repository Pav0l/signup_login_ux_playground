import React from 'react';
import styled from 'styled-components';

// Finish with the ERROR msg if inputProps.value.lenght is less than 3 or more than 15
// Add onChange handler

export default function Input({...inputProps}) {
  return (
    <InputWrapper>
      <StyledInput {...inputProps} />
      <StyledIconImg src="https://image.flaticon.com/icons/svg/148/148766.svg" alt="close-icon"/>
      {/* <StyledErrorMsg>
        Your {inputProps.name} must be between 3 and 15 characters
      </StyledErrorMsg> */}

    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  position: relative;
  max-width: 200px;

`;

const StyledInput = styled.input`
  padding: 0.5rem 1.3rem;
  width: 100%;
  border: 1px solid #eff0f1;
  border-radius: 4px;

  &:focus {
    border: 1px solid lightblue;
  }
`;

const StyledIconImg = styled.img`
  max-width: 15px;
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translate(0px, -50%);
`;

// const StyledErrorMsg = styled.div`
//   top: 50%;
//   transform: translate(100%, -50%);
// `;
