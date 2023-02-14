import React from 'react'
import {
  StyledBiChevronLeft,
  StyledBiChevronRight,
  StyledBiChevronsLeft,
  StyledBiChevronsRight,
  Wrapper
} from './Paginator.styles'
import { useDispatch, useSelector } from 'react-redux'
import { type AppState } from '../../app/store/reducers'
import useButtonNumbers from '../../app/store/hooks/useButtonNumbers'
import PaginatorButton from './PaginatorButton'
import { requestSetSearchParams } from '../../app/store/actions/searchActions'

const Paginator = (): JSX.Element => {
  const dispatch = useDispatch()

  const searchWord = useSelector((state: AppState) => state.search.searchParams.searchWord)
  const currentPage = useSelector((state: AppState) => state.movies.currentPage)
  const totalNrOfPages = useSelector((state: AppState) => state.movies.totalNrOfPages)

  const buttonNumbers = useButtonNumbers(currentPage, totalNrOfPages)
  return <Wrapper>
    {currentPage !== 1 && <StyledBiChevronsLeft
        onClick={() => dispatch(requestSetSearchParams({ searchWord, pageNumber: 1 }))}/>}
    {currentPage >= 2 && <StyledBiChevronLeft
        onClick={() => dispatch(requestSetSearchParams({ searchWord, pageNumber: currentPage - 1 }))}/>}
    {
      buttonNumbers.map((button: number, index: number) => (
          <PaginatorButton key={index} buttonNumber={button} isActive={button === currentPage}/>
      ))
    }
    {currentPage < totalNrOfPages &&
        <StyledBiChevronRight onClick={() => dispatch(requestSetSearchParams({ searchWord, pageNumber: currentPage + 1 }))}/>}
    {currentPage !== totalNrOfPages &&
        <StyledBiChevronsRight onClick={() => dispatch(requestSetSearchParams({ searchWord, pageNumber: totalNrOfPages }))}/>}
  </Wrapper>
}

export default Paginator
