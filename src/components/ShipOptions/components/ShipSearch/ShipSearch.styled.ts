import styled from '@emotion/styled'
import { colorsVariables } from '../../../../constants'

const { menuGrey } = colorsVariables

export const ShipSearchStyled = styled.div`
  min-height: 60px;
  border-bottom: solid 1px ${menuGrey};
  display: flex;
  align-items: center;
  padding: 0 26px;
  position: sticky;
  top: 0;
`
