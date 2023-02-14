import styled from 'styled-components'

interface IButtonProps {
  isActive: boolean
}
export const Button = styled.button.attrs<IButtonProps>(({ isActive }) => ({
  style: {
    background: `${isActive ? 'rgba(60, 179, 113)' : 'snow'}`,
    color: `${isActive ? 'snow' : 'black'}`
  }
}))<IButtonProps>`
  font-size: 1em;
  margin: 0.1em;
  padding: 0.25em 1em;
  color: snow;
  &:hover {
    cursor: pointer;
  }
  border: none
`
