import styled from 'styled-components'

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
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`

export const Container = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
`
