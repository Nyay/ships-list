import React from 'react'
import { ClassItem, ClassFilterHeaderStyled, ClassFilterItemListStyled } from './components'
import { classList } from './constants'
import { ClassFilterStyled } from './ClassFilter.styled'

export const ClassFilter = (): JSX.Element => {
  return (
      <ClassFilterStyled>
          <ClassFilterHeaderStyled>Класс корабля</ClassFilterHeaderStyled>
          <ClassFilterItemListStyled>
              { classList.map((value) => <ClassItem key={`class_item_${value.name}`} classInfo={ value } />)}
          </ClassFilterItemListStyled>
      </ClassFilterStyled>
  )
}
