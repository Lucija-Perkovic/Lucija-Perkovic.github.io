import styled from 'styled-components'
import { RiCloseCircleLine } from 'react-icons/ri'
import { FaStar } from 'react-icons/fa'
import { AiOutlineFieldTime, AiOutlineLineChart } from 'react-icons/ai'
import { GrMoney } from 'react-icons/gr'

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
  padding: 10em; /* Location of the box */
  left: 0;
  top: 0;
  background: transparent;
  max-height: 60vh;
`
export const Container = styled.div`
  margin: auto;
  border: 1px solid #888;
  width: 70%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  text-align: start;
  padding: 3.5em;
`

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Header = styled.header`
  font-size: 40px;
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
export const OverviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const Img = styled.img`
  width: 12em;
  height: 18em;
  background: transparent;
  border-radius: 30px;
  margin: 0.75em;
`
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.5em;
  font-size: 18px;
`
export const Column = styled.div`
  display: flex;
  flex-direction: column;
`
export const DataName = styled.div`
  font-size: 18px;
  font-weight: bold;
  font-family: Arial,serif;
  margin-top: 1em;
  margin-right: 4em;
  text-align: center;
`
export const StyledStar = styled(FaStar)`
  font-size: 2em;
  color: rgba(255, 165, 0);
`
export const Data = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  align-self: center;
  margin-left: 0.2em;
`
export const StyledChart = styled(AiOutlineLineChart)`
  color: rgba(60, 179, 113);
  font-size: 2em;
`
export const StyledMoney = styled(GrMoney)`
  font-size: 2em;
`
export const StyledTime = styled(AiOutlineFieldTime)`
  font-size: 2em;
  color: lightskyblue;
`
