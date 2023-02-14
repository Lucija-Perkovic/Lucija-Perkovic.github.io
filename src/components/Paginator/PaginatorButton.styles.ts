import styled from 'styled-components'

interface IButtonProps {
  isActive: boolean
}
export const Button = styled.button.attrs<IButtonProps>(({ isActive }) => ({
  style: {
    background: `${isActive ? 'black' : 'gray'}`
  }
}))<IButtonProps>`
  font-size: 1em;
  margin: 0.1em;
  padding: 0.25em 1em;
  color: snow;
`
