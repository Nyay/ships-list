import styled from '@emotion/styled'
import { colorsVariables, fontSizeVariables, timeoutVariables } from '../../../../constants'

const { buttonLightOrange, lightWhite } = colorsVariables
const { navTransitionTimeout } = timeoutVariables
const { fontSizeSmall } = fontSizeVariables

export const MenuButtonStyled = styled.button`
  -webkit-appearance: none;
  width: 190px;
  height: 44px;
  background: ${buttonLightOrange};
  border: none;
  color: ${lightWhite};
  font-family: 'Roboto Condensed', sans-serif;
  font-size: ${fontSizeSmall};
  text-transform: uppercase;
  transition: background-color ${navTransitionTimeout} linear;
  position: relative;
  
  & > p {
    margin: 0;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    position: absolute;
  }
  
  &:hover > div {
    opacity: 0;
  }
`
