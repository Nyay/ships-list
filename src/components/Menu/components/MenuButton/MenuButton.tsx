import React from 'react'
import { GradientStyled, ButtonTextStyled } from './components'
import { MenuButtonStyled } from './MenuButton.styled'
import { buttonText } from './constants'

export const MenuButton = (): JSX.Element => (
    <MenuButtonStyled >
        <GradientStyled />
        <ButtonTextStyled>{ buttonText }</ ButtonTextStyled>
    </MenuButtonStyled>
)
