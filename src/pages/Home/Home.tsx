import React, { useEffect, useState } from 'react'
import '../../App.css'
import { useDispatch, useSelector } from 'react-redux'
import { SEARCH_MOVIE_REQUEST, SEARCH_MOVIE_SUCCESS } from '../../app/store/actions/movieActions'
import { type AppState } from '../../app/store/reducers'
import { type MovieList } from '../../app/models/movies'
import MovieCard from '../../components/MovieCard/MovieCard'
import { checkIfLoading } from '../../app/store/reducers/uiReducer'
import Spinner from '../../components/Spinner/Spinner'
import { Div, Grid, Header, HeaderButton, Input, NavBar } from './Home.styles'
import Paginator from '../../components/Paginator/Paginator'
import { type SearchParams } from '../../app/models/search'
import { requestSetSearchParams, SET_SEARCH_PARAMS } from '../../app/store/actions/searchActions'

const Home = (): JSX.Element => {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    searchWord: '',
    pageNumber: 0
  })
  const [showHelpText, setShowHelpText] = useState<boolean>(false)
  const dispatch = useDispatch()

  useEffect(() => {
    if (searchParams?.searchWord != null && searchParams?.searchWord.length > 0) {
      dispatch(requestSetSearchParams(searchParams))
      setShowHelpText(false)
    } else setShowHelpText(true)
  }, [searchParams?.searchWord, searchParams?.pageNumber])

  const movies: MovieList[] = useSelector((state: AppState) => state.movies.movies)
  const isLoading: boolean = useSelector((state: AppState) => checkIfLoading(state, SET_SEARCH_PARAMS, SEARCH_MOVIE_REQUEST, SEARCH_MOVIE_SUCCESS))

  return (
      <>
        <NavBar>
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
            />
          </form>
        </NavBar>
          {!showHelpText && <Paginator/>}
            {
                isLoading
                  ? <Div> <Spinner/> </Div>
                  : !showHelpText
                      ? <Grid>
                            {
                                movies.map((movie: MovieList, index: number) => (
                                  movie.poster_path !== null && movie.backdrop_path !== null && <MovieCard movie={movie} key={index} />
                                ))
                            }
                        </Grid>
                      : <Div>Try searching for a movie..</Div>
            }
      </>
  )
}

export default Home
