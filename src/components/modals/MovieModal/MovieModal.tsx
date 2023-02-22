import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { type AppState } from '../../../app/store/reducers'
import {
  Container,
  Div,
  Header,
  HeaderDiv,
  Modal,
  StyledCloseButton
} from './MovieModal.styles'
import { requestCloseModal } from '../../../app/store/actions/modalActions'
import { type Movie } from '../../../app/models/movies'
import { getImageUrl } from '../../../services/ImageService'
import MovieOverview from './MovieOverview'
import { checkIfLoading } from '../../../app/store/reducers/uiReducer'
import { GET_MOVIE_DETAILS_REQUEST, GET_MOVIE_DETAILS_SUCCESS } from '../../../app/store/actions/movieActions'
import Spinner from '../../Spinner/Spinner'

const MovieModal = (): JSX.Element => {
  const dispatch = useDispatch()
  const [imageUrl, setImageUrl] = useState<string>()
  const showModal = useSelector((state: AppState) => state.modal.showModal)
  const movie: Movie = useSelector((state: AppState) => state.movies.movie)
  const isLoading: boolean = useSelector((state: AppState) => checkIfLoading(state, GET_MOVIE_DETAILS_REQUEST, GET_MOVIE_DETAILS_SUCCESS))

  useEffect(() => {
    setImageUrl(getImageUrl(movie.poster_path))
  }, [movie.poster_path])

  return (
        <Modal show={showModal} data-cy="modal">
          <Container>
              {
                  isLoading
                    ? <Spinner/>
                    : <>
                          <HeaderDiv>
                              <Header>{movie.title}</Header>
                              <StyledCloseButton
                                  onClick={() => dispatch(requestCloseModal())}/>
                          </HeaderDiv>
                          {movie.original_title !== movie.title && <Div> {movie.original_title}</Div>}
                          <Div>{movie.release_date}</Div>
                          <MovieOverview movie={movie} imageUrl={imageUrl}/>
                      </>
              }
          </Container>
        </Modal>
  )
}

export default MovieModal
