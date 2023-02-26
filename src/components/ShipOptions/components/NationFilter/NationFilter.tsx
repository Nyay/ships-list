import React from 'react'
import './NationFilter.css'
import { NationItem } from './components'
import { nations } from './constants'

export const NationFilter = (): JSX.Element => {
  return (
        <div className='nation-filter'>
          { nations.map((nation) => <NationItem nationInfo={ nation } key={`filter_item_${nation.name}`} />)}
        </div>
  )
}
