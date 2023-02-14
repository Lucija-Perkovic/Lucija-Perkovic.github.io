export interface MovieList {
  poster_path: string | null
  adult: boolean
  overview: string
  release_date: string
  genre_ids: []
  id: number
  original_title: string
  original_language: string
  title: string
  backdrop_path: string
}

export interface Movie {
  adult: boolean
  budget: number
  genres: Genre[]
  homepage: string
  id: number
  imdb_id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: ProductionCompany[]
  release_date: string
  revenue: number
  runtime: number
  status: string
  tagline: string
  title: string
  vote_average: number
  vote_count: number
}

export interface Genre {
  id: number
  name: string
}

export interface ProductionCompany {
  name: string
  id: number
  logo_path: string
  origin_country: string
}
