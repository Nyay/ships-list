import React from 'react'
import { NavigationItem, NavigationLogoStyled } from './components'
import uniqid from 'uniqid'
import { imgLink, navLabels } from './constants'
import { NavigationStyled } from './Navigation.styled'

export const Navigation = (): JSX.Element => (
    <NavigationStyled>
        <NavigationLogoStyled
            src={ imgLink }
            alt='Logo'
        />
        { navLabels.map((label) => <NavigationItem
            text={label}
            key={uniqid()}
            selected={label === 'Флотилия'}
        />)
        }
    </NavigationStyled>
)
