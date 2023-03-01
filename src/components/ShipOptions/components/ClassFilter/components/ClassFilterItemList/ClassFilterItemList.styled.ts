import styled from '@emotion/styled'
import { colorsVariables, fontSizeVariables } from '../../../../../../constants'

const { fontSizeLarge } = fontSizeVariables
const { menuGrey } = colorsVariables

export const ClassFilterItemListStyled = styled.div`
  min-height: 60px;
  max-height: 60px;
  padding: 0 27px;
  position: sticky;
  top: 0;
  font-size: ${fontSizeLarge};
  display: flex;
  overflow-x: scroll;
  align-items: center;
  gap: 20px;
  text-transform: uppercase;
  font-weight: 700;
  border-bottom: solid 1px ${menuGrey};

  &::-webkit-scrollbar {
    display: none;
  }
`
