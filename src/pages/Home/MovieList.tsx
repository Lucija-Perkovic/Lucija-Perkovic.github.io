import React, { useEffect, useState } from 'react'
import '../../App.css'
import { useSelector } from 'react-redux'
import { SEARCH_MOVIE_REQUEST, SEARCH_MOVIE_SUCCESS } from '../../app/store/actions/movieActions'
import { type AppState } from '../../app/store/reducers'
import { type MovieSearch } from '../../app/models/movies'
import MovieCard from '../../components/MovieCard/MovieCard'
import { checkIfLoading } from '../../app/store/reducers/uiReducer'
import Spinner from '../../components/Spinner/Spinner'
import { Div, Grid } from './MovieList.styles'
import Paginator from '../../components/Paginator/Paginator'
import { SET_SEARCH_PARAMS } from '../../app/store/actions/searchActions'

const MovieList = (): JSX.Element => {
  const [movieListToggle, setMovieListToggle] = useState<boolean>(false)

  const movies: MovieSearch[] = useSelector((state: AppState) => state.movies.movies)
  const isLoading: boolean = useSelector((state: AppState) => checkIfLoading(state, SET_SEARCH_PARAMS, SEARCH_MOVIE_REQUEST, SEARCH_MOVIE_SUCCESS))
  const searchParams = useSelector((state: AppState) => state.search.searchParams)
  useEffect(() => {
    if (searchParams.searchWord !== '') {
      setMovieListToggle(true)
    } else setMovieListToggle(false)
  }, [searchParams])
  return (
      <>
        {
            isLoading
              ? <Div> <Spinner/> </Div>
              : <>
                    {
                        movieListToggle &&
                        <>
                            {movies.length !== 0 ? <Paginator/> : <Div>No movies for your search. Try searching something else..</Div>}
                            <Grid data-cy="movie-grid">
                                {
                                    movies.map((movie: MovieSearch, index: number) => (
                                      movie.poster_path !== null && movie.backdrop_path !== null && <MovieCard movie={movie} key={index} />
                                    ))
                                }
                            </Grid>
                        </>
                    }

                </>
        }
      </>
  )
}

export default MovieList
