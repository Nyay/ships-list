import React from 'react'
import { Navigation, MenuButton } from './components'
import { MenuStyled } from './Menu.styled'

export const Menu = (): JSX.Element => {
  return (
        <MenuStyled>
            <Navigation />
            <MenuButton />
        </MenuStyled>
  )
}
