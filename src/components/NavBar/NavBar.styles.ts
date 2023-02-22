import styled from 'styled-components'

export const NavBarContainer = styled.nav`
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
