import styled from '@emotion/styled'
import { colorsVariables, fontSizeVariables } from '../../../../../../constants'

const { lightWhite } = colorsVariables
const { fontSizeLarge } = fontSizeVariables

export const ShipInfoHeaderStyled = styled.div`
  display: flex;
  color: ${lightWhite};
  font-family: 'Roboto', sans-serif;
  font-size: ${fontSizeLarge};
  align-items: center;
  gap: 22px;
  margin-top: 40px;
`
