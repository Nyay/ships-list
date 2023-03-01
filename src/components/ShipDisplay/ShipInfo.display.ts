import styled from '@emotion/styled'
import { colorsVariables } from '../../constants'

const { lightBlack, globalTransparent } = colorsVariables

export const ShipInfoDisplay = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  background: linear-gradient(180deg, ${globalTransparent} 42.71%, ${lightBlack} 99.99%, rgba(0, 0, 0, 0.969841) 100%);
  display: flex;
  flex-direction: column;
`
