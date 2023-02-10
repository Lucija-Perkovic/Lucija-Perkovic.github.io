import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { type AppState } from '../../app/store/reducers'
import { Container, Modal } from './MovieModal.styles'

function MovieModal (): JSX.Element {
  const showModal = useSelector((state: AppState) => state.modal.showModal)
  const movie = useSelector((state: AppState) => state.modal.movie)

  return (
        <Modal show={showModal}>
          <Container>
            {movie.id}
          </Container>
        </Modal>
  )
}

export default MovieModal
