import { type Movie } from '../app/models/movies'
import React, { useEffect, useState } from 'react'
import { getImageUrl } from '../services/ImageService'
import { useDispatch } from 'react-redux'
import { requestOpenModal } from '../app/store/actions/modalActions'
import MovieModal from './modals/MovieModal'
import { Button, Img, Wrapper } from './MovieCard.styles'

interface IMovieProp {
  movie: Movie
}

function MovieCard ({ movie }: IMovieProp): JSX.Element {
  const [imageUrl, setImageUrl] = useState<string>()
  const [isValidUrl, setIsValidUrl] = useState<boolean>(Boolean(movie.backdrop_path))
  const dispatch = useDispatch()
  const openModal = (movie: Movie): any => {
    dispatch(requestOpenModal(movie))
  }

  useEffect(() => {
    setImageUrl(getImageUrl(movie.backdrop_path))
  }, [movie.backdrop_path])

  return (
      <>
        <Wrapper>
          {isValidUrl
            ? (
                  <Img
                      src={imageUrl}
                      alt={movie.original_title}
                      onError={() => { setIsValidUrl(false) }}
                      onClick={() => openModal(movie)}
                  />
              )
            : (
                  <Button onClick={() => openModal(movie)}>{movie.original_title}</Button>
              )}
            {movie.title}
        </Wrapper>
        <MovieModal/>
      </>
  )
}

export default MovieCard
