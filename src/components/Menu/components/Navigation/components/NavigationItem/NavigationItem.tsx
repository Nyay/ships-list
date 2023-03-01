import React from 'react'
import { type INavigationItem } from './types'
import { NavigationItemStyled } from './NavigationItem.styled'

export const NavigationItem = ({ text, selected }: INavigationItem): JSX.Element => {
  return <NavigationItemStyled selected={selected}> {text} </NavigationItemStyled>
}
