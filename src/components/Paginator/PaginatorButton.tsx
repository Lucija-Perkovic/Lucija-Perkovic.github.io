import React, { useEffect, useState } from 'react'
import { Button } from './PaginatorButton.styles'
import { type SearchParams } from '../../app/models/search'
import { useDispatch, useSelector } from 'react-redux'
import { requestSetSearchParams } from '../../app/store/actions/searchActions'
import { type AppState } from '../../app/store/reducers'

interface IPaginatorButtonProps {
  buttonNumber: number
  isActive: boolean
}
const PaginatorButton = ({ buttonNumber, isActive }: IPaginatorButtonProps): JSX.Element => {
  const [searchParams, setSearchParams] = useState<SearchParams>()
  const dispatch = useDispatch()
  const searchWord = useSelector((state: AppState) => state.search.searchParams.searchWord)

  useEffect(() => {
    if (searchParams !== undefined) {
      dispatch(requestSetSearchParams(searchParams))
    }
  }, [searchParams])

  return (
    <Button isActive={isActive} onClick={ () => { setSearchParams({ pageNumber: buttonNumber, searchWord }) }
    }>
      {buttonNumber}
    </Button>
  )
}

export default PaginatorButton
