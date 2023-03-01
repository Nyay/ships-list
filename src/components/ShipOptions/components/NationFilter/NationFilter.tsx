import React from 'react'
import { NationItem } from './components'
import { nations } from './constants'
import { NationFilterStyled } from './NationFilter.styled'

export const NationFilter = (): JSX.Element => {
  return (
        <NationFilterStyled>
          { nations.map((nation) => <NationItem nationInfo={ nation } key={`filter_item_${nation.name}`} />)}
        </NationFilterStyled>
  )
}
