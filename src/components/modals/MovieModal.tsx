import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { type AppState } from '../../app/store/reducers'
import { Container, Div, Header, HeaderDiv, Modal, StyledCloseButton } from './MovieModal.styles'
import { requestCloseModal } from '../../app/store/actions/modalActions'
import { type Movie } from '../../app/models/movies'

const MovieModal = (): JSX.Element => {
  const showModal = useSelector((state: AppState) => state.modal.showModal)
  const movie: Movie = useSelector((state: AppState) => state.movies.movie)
  const dispatch = useDispatch()

  return (
        <Modal show={showModal}>
          <Container>
              <HeaderDiv>
                  <Header>{movie.title}</Header>
                      <StyledCloseButton
                          onClick={() => dispatch(requestCloseModal())}/>
              </HeaderDiv>
              {movie.original_title !== movie.title && <Div> {movie.original_title}</Div>}
              <Div>{movie.release_date}</Div>
              <Div>{movie.overview}</Div>
          </Container>
        </Modal>
  )
}

export default MovieModal
