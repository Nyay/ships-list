import styled from '@emotion/styled'
import { colorsVariables, fontSizeVariables } from '../../../../constants'

const { fontSizeSmall } = fontSizeVariables
const { unselectedWhite } = colorsVariables

export const SubInfoBlockStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  color: ${unselectedWhite};
  font-family: 'Roboto', sans-serif;
  font-size: ${fontSizeSmall};
  padding: 0 20px;
  text-transform: uppercase;
  text-align: center;
`
