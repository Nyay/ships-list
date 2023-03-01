import styled from '@emotion/styled'
import { colorsVariables, fontSizeVariables } from '../../../../../../constants'

const { lightWhite } = colorsVariables
const { fontSizeMedium } = fontSizeVariables

export const ShipTabShortInfoStyled = styled.div`
  display: flex;
  align-items: center;
  font-size: ${fontSizeMedium};
  color: ${lightWhite};
  width: 85px;
  justify-content: space-between;
`
