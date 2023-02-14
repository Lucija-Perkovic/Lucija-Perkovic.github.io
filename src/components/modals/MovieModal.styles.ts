import styled from 'styled-components'
import { RiCloseCircleLine } from 'react-icons/ri'

export interface IModalProps {
  show: boolean
}
export const Modal = styled.div.attrs<IModalProps>(({ show }) => ({
  style: {
    display: `${show ? 'block' : 'none'}`
  }
}))<IModalProps>`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  background: transparent;
`
export const Container = styled.div`
  margin: auto;
  border: 1px solid #888;
  width: 50%;
  border-radius: 20px;
  padding: 3em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Header = styled.header`
  font-size: 46px;
  font-weight: bold;
`

export const Div = styled.div`
  font-size: 24px;
  background: transparent;
`

export const StyledCloseButton = styled(RiCloseCircleLine)`
  &:hover {
    cursor: pointer;
  }
  font-size: 3em;
`
