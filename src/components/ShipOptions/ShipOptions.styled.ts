import styled from '@emotion/styled'
import { colorsVariables } from '../../constants'

const { lightBlack } = colorsVariables

export const ShipOptionsStyled = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  background: ${lightBlack};
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  min-width: 300px;
  
  &::-webkit-scrollbar {
    display: none;
  }
`
