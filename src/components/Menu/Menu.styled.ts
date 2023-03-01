import styled from '@emotion/styled'
import { colorsVariables } from '../../constants'

const { menuGrey } = colorsVariables

export const MenuStyled = styled.div`
  grid-area: 1 / 1 / 2 / 3;
  min-height: 60px;
  background: ${menuGrey};
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
