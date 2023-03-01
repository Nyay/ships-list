import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { timeoutVariables } from '../../../../../../../../constants'

const { navTransitionTimeout } = timeoutVariables

interface IClassNotationStyled {
  isActive: string | false | null
}

const activeKeyframe = keyframes`
  0% {
    display: none;
    opacity: 0;
  }
  1% {
    display: block;
    opacity: 0;
  }
  100% {
    display: block;
    opacity: 1;
  }
`

export const ClassNotationStyled = styled.div<IClassNotationStyled>`
  font-size: 24px;
  display: ${props => props.isActive ? 'inline' : 'none'};
  animation: ${activeKeyframe} ${navTransitionTimeout} linear;
`
