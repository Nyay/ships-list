import styled from '@emotion/styled'
import { timeoutVariables, displayKeyframe } from '../../../../../../constants'

const { shipImagesTimeout } = timeoutVariables

export const FlagStyled = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -2;
  animation: ${displayKeyframe} ${shipImagesTimeout} linear;
`
