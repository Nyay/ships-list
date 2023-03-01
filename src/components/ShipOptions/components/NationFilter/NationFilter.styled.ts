import styled from '@emotion/styled'
import { fontSizeVariables } from '../../../../constants'

const { fontSizeLarge } = fontSizeVariables

export const NationFilterStyled = styled.div`
  min-height: 60px;
  max-height: 60px;
  padding: 0 27px;
  position: sticky;
  top: 0;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: ${fontSizeLarge};
  display: flex;
  overflow-x: scroll;
  align-items: center;
  gap: 20px;
  text-transform: uppercase;
  font-weight: 700;
  
  &::-webkit-scrollbar {
    display: none;
  }
`
