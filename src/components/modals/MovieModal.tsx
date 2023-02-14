import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { type AppState } from '../../app/store/reducers'
import {
  Container,
  Div,
  Header,
  HeaderDiv,
  Modal,
  StyledCloseButton
} from './MovieModal.styles'
import { requestCloseModal } from '../../app/store/actions/modalActions'
import { type Movie } from '../../app/models/movies'
import { getImageUrl } from '../../services/ImageService'
import OverviewComponent from './OverviewComponent'

const MovieModal = (): JSX.Element => {
  const [imageUrl, setImageUrl] = useState<string>()
  const showModal = useSelector((state: AppState) => state.modal.showModal)
  const movie: Movie = useSelector((state: AppState) => state.movies.movie)
  useEffect(() => {
    setImageUrl(getImageUrl(movie.poster_path))
  }, [movie.poster_path])
  const dispatch = useDispatch()
  useEffect(() => {
    console.log(movie)
  }, [movie])
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
              <OverviewComponent movie={movie} imageUrl={imageUrl}/>
          </Container>
        </Modal>
  )
}

export default MovieModal
