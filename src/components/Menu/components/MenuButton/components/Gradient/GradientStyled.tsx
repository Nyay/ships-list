import styled from '@emotion/styled'
import { colorsVariables, timeoutVariables } from '../../../../../../constants'

const { buttonDarkOrange, globalTransparent } = colorsVariables
const { navTransitionTimeout } = timeoutVariables

export const GradientStyled = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, ${globalTransparent} 0%, ${buttonDarkOrange} 100%);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  transition: opacity ${navTransitionTimeout} linear;
  
  &:hover {
    opacity: 0;
  }
`
