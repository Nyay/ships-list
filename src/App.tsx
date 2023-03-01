import { Menu, ShipDisplay, ShipOptions } from './components'
import React from 'react'
import { AppStyled } from './App.styled'

function App (): JSX.Element {
  return (
    <AppStyled>
        <Menu />
        <ShipOptions />
        <ShipDisplay />
    </AppStyled>
  )
}

export default App
