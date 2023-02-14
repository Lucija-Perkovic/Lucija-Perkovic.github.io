import axios, { type AxiosResponse } from 'axios'
import { type SearchParams } from '../app/models/search'

const BASE_URL = 'https://api.themoviedb.org/3'
const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AUTHORIZATION_BEARER_TOKEN}`
  },
  params: {
    api_key: process.env.REACT_APP_API_KEY_MOVIE_DB
  }
})

export async function getSearchedMovies (searchParams: SearchParams): Promise<AxiosResponse<any>> {
  const response = client.get('/search/movie', {
    params: {
      query: searchParams.searchWord,
      page: searchParams.pageNumber
    }
  })
  return await response
}

export async function getMovie (movieId: number): Promise<AxiosResponse<any>> {
  const response = client.get(`/movie/${movieId}`)
  return await response
}
