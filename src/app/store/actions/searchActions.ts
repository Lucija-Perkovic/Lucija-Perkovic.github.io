import { type SearchParams } from '../../models/search'

export const SET_SEARCH_PARAMS = 'SET_SEARCH_PARAMS'

export const requestSetSearchParams = (searchParams: SearchParams): any => {
  return { type: SET_SEARCH_PARAMS, searchParams }
}
