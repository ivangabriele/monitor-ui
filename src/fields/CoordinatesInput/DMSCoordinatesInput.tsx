import { useCallback, useMemo } from 'react'
import CoordinateInput from 'react-coordinate-input'
import styled from 'styled-components'

import type { CoordinatesFormat } from './constants'

type DMSCoordinatesInputProps = {
  coordinates: number[]
  coordinatesFormat: CoordinatesFormat
  onChange: (nextCoordinates: number[], coordinates: number[]) => void
}
export function DMSCoordinatesInput({ coordinates, coordinatesFormat, onChange }: DMSCoordinatesInputProps) {
  /** Convert the coordinates to the [latitude, longitude] string format */
  const showedValue = useMemo(() => {
    if (!coordinates?.length || !coordinatesFormat) {
      return ''
    }

    return coordinates?.join(', ') || ''
  }, [coordinates, coordinatesFormat])

  const update = useCallback(
    nextCoordinates => {
      onChange(nextCoordinates, coordinates)
    },
    [coordinates, onChange]
  )

  return (
    <Body>
      <CoordinateInput
        data-cy="dms-coordinates-input"
        ddPrecision={6}
        onChange={(_, { dd }) => update(dd)}
        value={showedValue}
      />
      <CoordinatesType>(DMS)</CoordinatesType>
    </Body>
  )
}

const CoordinatesType = styled.span`
  margin-left: 7px;
`

const Body = styled.div`
  font-size: 13px;
  text-align: left;

  input {
    background: ${p => p.theme.color.gainsboro};
    border: none;
    height: 27px;
    margin-top: 7px;
    padding-left: 8px;
    width: 200px;
  }
`
