import React from 'react';
import styled from 'styled-components';

const Button = styled.button`

`
const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`

export default function Pagination({ handleNextButton, handlePreviousButton }) {

  return (
    <StyledDiv>
      {handlePreviousButton && <button onClick={handlePreviousButton}>Previous</button>}
      <button onClick={handleNextButton}>Next</button>
    </StyledDiv>
  );
}
