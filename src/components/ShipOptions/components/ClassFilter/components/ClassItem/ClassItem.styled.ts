import styled from '@emotion/styled'
import { colorsVariables } from '../../../../../../constants'

const { lightWhite, unselectedWhite } = colorsVariables

interface IClassItemStyled {
  isCurrent: boolean
}

export const ClassItemStyled = styled.div<IClassItemStyled>`
  display: flex;
  align-items: center;
  color: ${props => props.isCurrent ? lightWhite : unselectedWhite};
  
  &:hover {
    color: ${lightWhite};
  }
  
  &:hover > img {
    opacity: 1;
  }

  ${props => props.isCurrent && `
    & > img {
      opacity: 1;
    }
  `}  
`
