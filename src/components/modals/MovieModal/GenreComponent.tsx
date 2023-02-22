import React from 'react'
import { type Genre } from '../../../app/models/movies'
import { GenreContainer } from './GenreComponent.styles'

interface IGenreProps {
  genre: Genre
}
const GenreComponent = ({ genre }: IGenreProps): JSX.Element => {
  return (
        <GenreContainer>
            {genre.name}
        </GenreContainer>
  )
}

export default GenreComponent
