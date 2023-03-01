import styled from '@emotion/styled'
import { colorsVariables, timeoutVariables } from '../../../../../../constants'

const { unselectedWhite, lightWhite } = colorsVariables
const { navTransitionTimeout } = timeoutVariables

interface INationItemStyled {
  isSelected: boolean
}

export const NationItemStyled = styled.div<INationItemStyled>`
  color: ${props => props.isSelected ? lightWhite : unselectedWhite};
  white-space: nowrap;
  text-space: small;
  transition: color ${navTransitionTimeout} ease-in;
  
  &:hover {
    color: ${lightWhite}
  }
`
