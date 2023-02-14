import { type Movie, type MovieList } from '../../models/movies'
import { type CustomAction } from '../actions/uiActions'
import { GET_MOVIE_DETAILS_SUCCESS, SEARCH_MOVIE_SUCCESS } from '../actions/movieActions'

export interface MovieState {
  movies: MovieList[]
  totalNrOfPages: number
  currentPage: number
  movie: Movie
}

const initialState: MovieState = {
  movies: [],
  totalNrOfPages: 0,
  currentPage: 0,
  movie: {
    adult: false,
    budget: 0,
    genres: [],
    homepage: '',
    id: 0,
    imdb_id: 0,
    original_language: '',
    original_title: '',
    overview: '',
    popularity: 0,
    poster_path: '',
    production_companies: [],
    release_date: '',
    revenue: 0,
    runtime: 0,
    status: '',
    tagline: '',
    title: '',
    vote_average: 0,
    vote_count: 0
  }
}

const movieReducer = (state: MovieState | undefined, action: CustomAction): MovieState => {
  if (typeof state === 'undefined') {
    return initialState
  }
  switch (action.type) {
    case SEARCH_MOVIE_SUCCESS:
      return {
        ...state,
        movies: action.payload.results,
        totalNrOfPages: action.payload.total_pages,
        currentPage: action.payload.page
      }
    case GET_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        movie: action.payload
      }
    default:
      return state
  }
}

export default movieReducer
