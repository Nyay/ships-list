import React from 'react'
import './Menu.css'
import { Navigation } from '../Navigation/Navigation'
import { MenuButton } from './components'

export const Menu = (): JSX.Element => {
  return (
        <div className='top-menu'>
            <Navigation />
            <MenuButton />
        </div>
  )
}
