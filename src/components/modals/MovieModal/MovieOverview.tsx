import React from 'react'
import {
  Column,
  Img,
  OverviewContainer,
  Row,
  StyledChart,
  StyledMoney,
  StyledStar, StyledTime
} from './MovieModal.styles'
import { type Genre, type Movie } from '../../../app/models/movies'
import GenreComponent from './GenreComponent'
import MovieSpec, { type IMovieSpec } from './MovieSpec'

interface IOverviewComponentProps {
  movie: Movie
  imageUrl: string | undefined
}
const MovieOverview = ({ movie, imageUrl }: IOverviewComponentProps): JSX.Element => {
  const voteCount = Math.round(movie.vote_count * 1000 / 1000)
  const movieSpecs: IMovieSpec[] = [
    {
      dataName: 'POPULARITY',
      data: Math.floor(movie.popularity),
      icon: <StyledChart/>
    },
    {
      dataName: 'RATING',
      data: Math.round(movie.vote_average * 10) / 10,
      icon: <StyledStar/>
    },
    {
      dataName: 'VOTES',
      data: voteCount
    },
    {
      dataName: 'BUDGET',
      data: Math.round(movie.budget / 1000000),
      icon: <StyledMoney/>
    },
    {
      dataName: 'RUNTIME',
      data: movie.runtime,
      icon: <StyledTime/>
    }
  ]
  return (
        <OverviewContainer>
            <Column>
                <Row>
                    {movie.genres.map((genre: Genre, index) => (
                        <GenreComponent key={index} genre={genre}/>
                    ))}
                </Row>
                <Row>
                    {movie.overview}
                </Row>
                <Row>
                    {
                        movieSpecs.map((movieSpec: IMovieSpec, index) => (
                            <MovieSpec key={index} dataName={movieSpec.dataName} data={movieSpec.data} icon={movieSpec.icon}/>
                        ))
                    }
                </Row>
            </Column>
            <Img
                src={imageUrl}
                alt={movie.original_title}
            />
        </OverviewContainer>
  )
}

export default MovieOverview
