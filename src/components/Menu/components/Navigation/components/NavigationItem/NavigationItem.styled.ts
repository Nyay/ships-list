import styled from '@emotion/styled'
import { colorsVariables, timeoutVariables } from '../../../../../../constants'

interface INavigationItemStyled {
  selected: boolean | undefined
}

const { lightWhite, darkWhite, menuCyan, menuCyanTransparent } = colorsVariables
const { navTransitionTimeout } = timeoutVariables

export const NavigationItemStyled = styled.div<INavigationItemStyled>`
  position: relative;
  color: ${(props) => props.selected ? lightWhite : darkWhite};
  text-transform: uppercase;
  margin-left: 28px;
  height: 100%;

  display: flex;
  align-items: center;
  box-sizing: border-box;
  
  transition: color ${
    navTransitionTimeout
  } ease-in;

  &::after {
    content: '';
    display: block;
    height: 3px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: ${(props) => props.selected ? menuCyan : menuCyanTransparent};
    opacity: ${(props) => props.selected ? 1 : 0};
    transition: opacity ${
      navTransitionTimeout
    } ease-in;
  }
  
  &:hover {
    color: ${lightWhite};
  }
  
  &:hover::after {
    opacity: 1;
  }
`
