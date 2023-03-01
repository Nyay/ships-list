import styled from '@emotion/styled'
import { colorsVariables } from '../../../../constants'

const { globalTransparent, lightBlack } = colorsVariables

export const ShipInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 76px;
  background: linear-gradient(180deg, ${globalTransparent} 0%, rgba(0, 0, 0, 0.969841) 19.79%, ${lightBlack} 99.99%);
  height: 100%;
  margin-top: -190px;
`
