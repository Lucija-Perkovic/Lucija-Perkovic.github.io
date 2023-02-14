import { call, put, takeLatest } from 'redux-saga/effects'
import { getMovie, getSearchedMovies } from '../../../services/BackendService'
import {
  GET_MOVIE_DETAILS_FAILURE, GET_MOVIE_DETAILS_REQUEST,
  GET_MOVIE_DETAILS_SUCCESS,
  SEARCH_MOVIE_FAILURE, SEARCH_MOVIE_REQUEST,
  SEARCH_MOVIE_SUCCESS
} from '../actions/movieActions'
import { type CustomAction, SHOW_ERROR_TOAST, startAction, stopAction } from '../actions/uiActions'
import { SET_SEARCH_PARAMS } from '../actions/searchActions'
import { OPEN_MODAL } from '../actions/modalActions'

function * handleSearchedMovies (action: CustomAction): any {
  try {
    yield put({ type: SEARCH_MOVIE_REQUEST })
    yield put(startAction(action.type))
    const movies: any = yield call(getSearchedMovies, action.searchParams)
    yield put({ type: SEARCH_MOVIE_SUCCESS, payload: movies.data })
  } catch (e: any) {
    console.error(e)
    yield put({ type: SEARCH_MOVIE_FAILURE })
    yield put({ type: SHOW_ERROR_TOAST, message: e.message })
  } finally {
    yield put(stopAction(action.type))
  }
}

function * handleGetMovieRequest (action: CustomAction): any {
  try {
    yield put(startAction(action.type))
    const movie: any = yield call(getMovie, action.movieId)
    yield put({ type: GET_MOVIE_DETAILS_SUCCESS, payload: movie.data })
    yield put({ type: OPEN_MODAL })
  } catch (e: any) {
    console.error(e)
    yield put({ type: GET_MOVIE_DETAILS_FAILURE })
    yield put({ type: SHOW_ERROR_TOAST, message: e.message })
  } finally {
    yield put(stopAction(action.type))
  }
}
function * moviesSaga (): any {
  yield takeLatest(SET_SEARCH_PARAMS, handleSearchedMovies)
  yield takeLatest(GET_MOVIE_DETAILS_REQUEST, handleGetMovieRequest)
}

export default moviesSaga
