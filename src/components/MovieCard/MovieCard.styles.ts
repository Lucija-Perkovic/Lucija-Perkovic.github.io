import styled from 'styled-components'

export const Wrapper = styled.div`
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: start;
  transition: transform .2s;
  background: transparent;
  &:hover {
    opacity: 1;
    transform: scale(1.1);
    cursor: pointer;
  }
  font-size: large;
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  background: transparent;
  border-radius: 30px;
  margin: 0.75em;
`

export const Button = styled.button`
  min-width: 15em;
  min-height: 15em;
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  border: none;
  &:hover {
    cursor: pointer;
  }
  background: transparent;
  color: snow;
`
