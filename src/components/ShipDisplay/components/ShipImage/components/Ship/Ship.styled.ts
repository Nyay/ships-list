import styled from '@emotion/styled'
import { colorsVariables, timeoutVariables, displayKeyframe } from '../../../../../../constants'

const { lightBlack, globalTransparent } = colorsVariables
const { shipImagesTimeout } = timeoutVariables

export const ShipStyled = styled.img`
  z-index: -1;
  background: radial-gradient( at bottom, ${lightBlack} 30%, ${globalTransparent} 70%, ${globalTransparent} 100%);
  animation: ${displayKeyframe} ${shipImagesTimeout} linear;
`
