import { type CustomAction } from '../actions/uiActions'
import { SET_SEARCH_PARAMS } from '../actions/searchActions'
import { type SearchParams } from '../../models/search'

export interface SearchState {
  searchParams: SearchParams
}

const initialState: SearchState = {
  searchParams: {
    searchWord: '',
    pageNumber: 0
  }
}

const searchReducer = (state: SearchState | undefined, action: CustomAction): SearchState => {
  if (typeof state === 'undefined') {
    return initialState
  }
  switch (action.type) {
    case SET_SEARCH_PARAMS:
      return {
        ...state,
        searchParams: action.searchParams
      }
    default:
      return state
  }
}

export default searchReducer
