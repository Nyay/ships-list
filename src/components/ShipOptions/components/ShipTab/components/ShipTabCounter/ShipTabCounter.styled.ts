import styled from '@emotion/styled'
import { displayKeyframe, timeoutVariables } from '../../../../../../constants'

const { shipImagesTimeout } = timeoutVariables

export const ShipTabCounterStyled = styled.img`
  width: 100%;
  max-height: 20px;
  animation: ${displayKeyframe} ${shipImagesTimeout} linear;
`
