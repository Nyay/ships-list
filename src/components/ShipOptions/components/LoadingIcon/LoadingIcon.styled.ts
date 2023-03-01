import styled from '@emotion/styled'
import { colorsVariables } from '../../../../constants'
import { keyframes } from '@emotion/react'

const { unselectedWhite } = colorsVariables

const loadingKeyframe = keyframes`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, 30px);
  }
  100% {
    transform: translate(0, 0);
  }
`

export const LoadingIconStyled = styled.div`
  & > div {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    background-color: ${unselectedWhite};
  }

  & div:nth-last-child(1) {
    animation: ${loadingKeyframe} 0.8s 0.1s linear infinite;
  }
  & div:nth-last-child(2) {
    animation: ${loadingKeyframe} 0.8s 0.2s linear infinite;
    margin: 0 20px 0 20px;
  }
  & div:nth-last-child(3) {
    animation: ${loadingKeyframe} 0.8s 0.3s linear infinite;
  }
`
