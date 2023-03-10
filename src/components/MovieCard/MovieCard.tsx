import { type MovieSearch } from '../../app/models/movies'
import React, { useEffect, useState } from 'react'
import { getImageUrl } from '../../services/ImageService'
import { useDispatch } from 'react-redux'
import MovieModal from '../modals/MovieModal/MovieModal'
import { Img, Wrapper } from './MovieCard.styles'
import { requestGetMovieDetails } from '../../app/store/actions/movieActions'

interface IMovieProp {
  movie: MovieSearch
}

const MovieCard = ({ movie }: IMovieProp): JSX.Element => {
  const [imageUrl, setImageUrl] = useState<string>()
  const dispatch = useDispatch()
  const openModal = (movie: MovieSearch): any => {
    dispatch(requestGetMovieDetails(movie.id))
  }

  useEffect(() => {
    setImageUrl(getImageUrl(movie.poster_path))
  }, [movie.poster_path])

  return (
      <>
        <Wrapper>
          <Img
              src={imageUrl}
              alt={movie.original_title}
              onClick={() => openModal(movie)}
              data-cy="image"
          />
        {movie.title}
        </Wrapper>
        <MovieModal/>
      </>
  )
}

export default MovieCard
