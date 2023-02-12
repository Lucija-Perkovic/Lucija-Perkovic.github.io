import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { type AppState } from '../../app/store/reducers'
import { Container, Div, Header, HeaderDiv, Modal } from './MovieModal.styles'
import { RiCloseCircleLine } from 'react-icons/ri'
import { requestCloseModal } from '../../app/store/actions/modalActions'

function MovieModal (): JSX.Element {
  const showModal = useSelector((state: AppState) => state.modal.showModal)
  const movie = useSelector((state: AppState) => state.modal.movie)
  const dispatch = useDispatch()

  return (
        <Modal show={showModal}>
          <Container>
              <HeaderDiv>
                  <Header>{movie.original_title}</Header>
                  <RiCloseCircleLine onClick={() => dispatch(requestCloseModal())} size="3em"/>
              </HeaderDiv>
              {movie.original_title !== movie.title && <Div> {movie.title}</Div>}
              <Div>{movie.release_date}</Div>
              <Div>{movie.overview}</Div>
          </Container>
        </Modal>
  )
}

export default MovieModal
