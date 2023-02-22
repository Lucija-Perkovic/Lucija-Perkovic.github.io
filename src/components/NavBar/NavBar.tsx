import React, { useEffect, useState } from 'react'
import { Header, HeaderButton, Input, NavBarContainer } from './NavBar.styles'
import { type SearchParams } from '../../app/models/search'
import { useDispatch } from 'react-redux'
import { requestSetSearchParams } from '../../app/store/actions/searchActions'

const NavBar = (): JSX.Element => {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    searchWord: '',
    pageNumber: 0
  })
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestSetSearchParams(searchParams))
  }, [searchParams?.searchWord, searchParams?.pageNumber])

  return (
        <NavBarContainer>
            <HeaderButton onClick={() => { setSearchParams({ searchWord: '' }) }}>
                <Header>
                    Movie Searcher
                </Header>
            </HeaderButton>
            <form>
                <Input
                    type='search'
                    placeholder="Search movies..."
                    onChange={(e: React.FormEvent<HTMLInputElement>) => { setSearchParams({ searchWord: e.currentTarget.value }) }}
                    value={searchParams?.searchWord}
                    name="search"
                />
            </form>
        </NavBarContainer>
  )
}

export default NavBar
