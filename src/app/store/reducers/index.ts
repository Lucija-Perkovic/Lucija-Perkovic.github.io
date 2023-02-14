import { combineReducers } from 'redux'
import movieReducer, { type MovieState } from './movieReducer'
import { type UiState } from './uiReducer'
import uiReducer from './uiReducer'
import modalReducer, { type ModalState } from './modalReducer'
import searchReducer, { type SearchState } from './searchReducer'

export interface AppState {
  movies: MovieState
  ui: UiState
  modal: ModalState
  search: SearchState
}

const createRootReducer = (): any =>
  combineReducers({
    movies: movieReducer,
    ui: uiReducer,
    modal: modalReducer,
    search: searchReducer
  })

export default createRootReducer
