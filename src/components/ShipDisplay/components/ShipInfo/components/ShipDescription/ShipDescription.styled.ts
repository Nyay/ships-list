import styled from '@emotion/styled'
import { colorsVariables, fontSizeVariables } from '../../../../../../constants'

const { lightWhite } = colorsVariables
const { fontSizeMedium } = fontSizeVariables

export const ShipDescriptionStyled = styled.div`
  color: ${lightWhite};
  font-size: ${fontSizeMedium};
  text-transform: uppercase;
  margin-top: 16px;
`
