import React, { useEffect, useState } from 'react'
import { Column, Data, DataName, Row } from './MovieModal.styles'

export interface IMovieSpec {
  dataName: string
  data: number
  icon?: JSX.Element
}

const MovieSpec = ({ dataName, data, icon }: IMovieSpec): JSX.Element => {
  const [dataString, setDataString] = useState<string>()

  useEffect(() => {
    switch (dataName) {
      case 'VOTES':
        data > 1000
          ? setDataString(Math.round(data / 1000).toString() + 'M')
          : setDataString(data.toString() + 'k')
        break
      case 'BUDGET':
        setDataString(data.toString() + 'M')
        break
      case 'RUNTIME':
        setDataString(data.toString() + 'm')
        break
      default:
        setDataString(data.toString())
    }
  }, [dataName, data])
  return (
        <Column>
            <DataName>
                {dataName}
            </DataName>
            <Row>
                {icon}
                <Data>
                    {dataString}
                </Data>
            </Row>
        </Column>
  )
}

export default MovieSpec
