import styled from 'styled-components'

export const Input = styled.input`
  width: 15vw;
  height: 5vh;
  border: transparent;
  border-radius: 25px;
  padding: 1.5em;
  font-size: 18px;
  outline: 0;
;
`

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  height: 6vh;
`

export const Header = styled.header`
  font-size: 40px;
`

export const HeaderButton = styled.button`
  &:hover {
    cursor: pointer;
  }
  background-color: transparent;
  margin-left: 1em;
  border: none;
`

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

export const Body = styled.body`
  height: 100%;
  width: 100%;
`
