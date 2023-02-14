import styled from 'styled-components'
import { BiChevronLeft, BiChevronRight, BiChevronsLeft, BiChevronsRight } from 'react-icons/bi'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: transparent;
  height: 4vh;
  padding: 2em;
`
export const StyledBiChevronsLeft = styled(BiChevronsLeft)`
  &:hover {
    cursor: pointer;
  }
  font-size: 2em;
  color: snow
`
export const StyledBiChevronsRight = styled(BiChevronsRight)`
  &:hover {
    cursor: pointer;
  }
  font-size: 2em;
  color: snow
`

export const StyledBiChevronLeft = styled(BiChevronLeft)`
  &:hover {
    cursor: pointer;
  }
  font-size: 2em;
  color: snow
`

export const StyledBiChevronRight = styled(BiChevronRight)`
  &:hover {
    cursor: pointer;
  }
  font-size: 2em;
  color: snow
`
