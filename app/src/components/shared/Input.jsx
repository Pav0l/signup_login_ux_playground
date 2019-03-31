import React from 'react';
import styled from 'styled-components';

export default function Input({...inputProps}) {
const { name, clearInput, /*value*/ } = inputProps;

  // const nameError = value && (value.length < 3 || value.length > 15) ? `Your ${name} must be between 3 and 15 characters` : null;
  // const passwordError = value && value.length < 6 ? `Your ${name} must be at least 5 characters long` : null;
  // const emailError = value && value.includes('@') ? `Please provide valid ${name}` : null;

  return (
    <InputWrapper>
      <StyledInput {...inputProps} />
      <StyledIconImg
        onClick={() => clearInput(name)}
        src="https://image.flaticon.com/icons/svg/148/148766.svg"
        alt="close-icon"
      />
      {/* <StyledErrorMsg>
        {
          name === 'username' ? nameError :
          name === 'password' ? passwordError : null
        }
      </StyledErrorMsg> */}

    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  position: relative;
  max-width: 200px;
  max-height: 40px;
  margin-bottom: 0.5rem;
`;

const StyledIconImg = styled.img`
  max-width: 15px;
  cursor: pointer;
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translate(0px, -50%);
`;

const StyledErrorMsg = styled.div`
  /* display: none; */
  padding-left: 0.5rem;
  top: 50%;
  transform: translate(105%, -100%);
  /* border: 1px solid rgb(226, 168, 167); */
  background-color: rgb(254, 241, 241);
  max-width: 300px;
  color: rgb(63, 64, 63);
  font-size: 14px;
`;

const StyledInput = styled.input`
  padding: 0.5rem 1.3rem;
  width: 100%;
  height: 40px;
  border: 1px solid #eff0f1;
  border-radius: 4px;

  &:focus {
    border: 1px solid lightblue;
  }
  /* This will display the component only if StyledInput is focused */
  /* &:focus ~ ${StyledErrorMsg} {
    display: block;
  } */
`;