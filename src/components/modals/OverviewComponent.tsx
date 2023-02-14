import React from 'react'
import {
  Column,
  Data,
  DataName,
  Img,
  OverviewContainer,
  Row,
  StyledChart,
  StyledMoney,
  StyledStar, StyledTime
} from './MovieModal.styles'
import { type Genre, type Movie } from '../../app/models/movies'
import GenreComponent from './GenreComponent'

interface IOverviewComponentProps {
  movie: Movie
  imageUrl: string | undefined
}
const OverviewComponent = ({ movie, imageUrl }: IOverviewComponentProps): JSX.Element => {
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
                    <Column>
                        <DataName>
                            POPULARITY
                        </DataName>
                        <Row>
                            <StyledChart/>
                            <Data>
                                {Math.floor(movie.popularity)}
                            </Data>
                        </Row>
                    </Column>
                    <Column>
                        <DataName>
                            RATING
                        </DataName>
                        <Row>
                            <StyledStar/>
                            <Data>
                                {Math.round(movie.vote_average * 10) / 10}
                            </Data>
                        </Row>
                    </Column>
                    <Column>
                        <DataName>
                            VOTE COUNT
                        </DataName>
                        <Row>
                            <Data>
                                {movie.vote_count}
                            </Data>
                        </Row>
                    </Column>
                    <Column>
                        <DataName>
                            BUDGET
                        </DataName>
                        <Row>
                            <StyledMoney/>
                            <Data>
                                {Math.round(movie.budget / 1000000)}M
                            </Data>
                        </Row>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <DataName>
                            RUNTIME
                        </DataName>
                        <Row>
                            <StyledTime/>
                            <Data>
                                {movie.runtime}m
                            </Data>
                        </Row>
                    </Column>
                </Row>
            </Column>
            <Img
                src={imageUrl}
                alt={movie.original_title}
            />
        </OverviewContainer>
  )
}

export default OverviewComponent
