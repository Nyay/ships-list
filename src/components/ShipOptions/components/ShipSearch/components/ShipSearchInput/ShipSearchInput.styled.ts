import styled from '@emotion/styled'
import { colorsVariables, fontSizeVariables } from '../../../../../../constants'

const { lightWhite } = colorsVariables
const { fontSizeMedium } = fontSizeVariables

export const ShipSearchInputStyled = styled.input`
  height: 100%;
  width: 100%;
  padding: 0;
  border: 0;
  background: #00ffff00;
  -webkit-appearance: none;
  color: ${lightWhite};
  font-family: 'Roboto Condensed', sans-serif;
  font-size: ${fontSizeMedium};
  margin-left: 18px;
  
  &:focus {
    outline: none;
  }
`
