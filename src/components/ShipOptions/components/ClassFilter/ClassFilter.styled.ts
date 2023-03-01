import styled from '@emotion/styled'
import { fontSizeVariables } from '../../../../constants'

const { fontSizeSmall } = fontSizeVariables

export const ClassFilterStyled = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${fontSizeSmall};
  text-transform: uppercase;
  font-family: 'Roboto Condensed', sans-serif;
  
  &::-webkit-scrollbar {
    display: none;
  }
`
