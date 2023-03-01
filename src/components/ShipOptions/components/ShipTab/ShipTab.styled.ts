import styled from '@emotion/styled'
import { colorsVariables, fontSizeVariables } from '../../../../constants'

const { lightWhite, darkWhite, selectedTabGrey } = colorsVariables
const { fontSizeMedium } = fontSizeVariables

interface IShipTabStyled {
  isSelected: boolean
}

export const ShipTabStyled = styled.div<IShipTabStyled>`
  display: flex;
  align-items: center;
  min-height: 60px;
  min-width: 350px;
  padding: 0 24px 0 56px;
  font-size: ${fontSizeMedium};
  color: ${props => props.isSelected ? lightWhite : darkWhite};
  box-sizing: border-box;
  opacity: 1;
  transition: all 200ms ease-in;
  justify-content: space-between;
  background-color: ${props => props.isSelected && selectedTabGrey};
  
  &:hover {
    color: ${lightWhite};
  }
`
