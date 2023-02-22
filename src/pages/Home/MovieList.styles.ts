import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(3,1fr);
  grid-gap: 1em;
  margin: 1.5em;
  height: 100%;
  background: transparent;
  text-align: center;
`

export const Div = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 92vh;
      background-color: transparent;
`
