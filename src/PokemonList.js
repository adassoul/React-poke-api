import React from 'react';
import styled from 'styled-components'

// const ContainsContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   background: black;
//   max-height: 10px;
// `

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-bottom: 20px;
  max-width: 300px;
`

const Card = styled.div`
  display: flex;
  justify-content: center;
  color: red;
  padding-left: 8px;
  box-sizing: border-box;
  padding: 10px;
  width: 40%;
  border: solid;
  border-color: red;
  border-radius: 50%;
`

export default function PokemonList({pokemon}) {
  return (
  // <ContainsContainer>
    <StyledContainer>
        {pokemon.map(p=>(
          <Card key={p}>{p}</Card>
        ))}
    </StyledContainer>
  //</ContainsContainer>
  )
}
