import React from 'react'
import './ShipOptions.css'
import { ShipSearch, ShipTab, NationFilter } from './components'
import { useSelector } from 'react-redux'
import { useGetShipsDataQuery } from '../../services/shipsData'
import { type IShipClass, type IShipLevel } from '../ShipDisplay/components/ShipInfo/types'
import { nationSelector } from './components/NationFilter/components/NationItem/nationItemSelectors'
import { searchSelector } from './shipOptionsSelectors'
import { type IShipToList } from './types'

export const ShipOptions = (): JSX.Element => {
  const search = useSelector(searchSelector)
  const currentNation = useSelector(nationSelector)
  const checkSearch = (shipName: IShipToList, search: string): boolean =>
    shipName.name.toLowerCase().includes(search.toLowerCase()) && (currentNation === 'all' || shipName.nation === currentNation)
  const { data } = useGetShipsDataQuery('')

  return (
        <div className='ship-options' >
            <ShipSearch />
            <NationFilter />
            <div className='overflow-control'>
              { data?.shipsList.map((ship) => checkSearch(ship, search) && <ShipTab
                  key={ ship.id }
                  shipId={ ship.id }
                  shipName={ ship.name }
                  shipClass={ ship.class as IShipClass }
                  shipLevel={ ship.level as IShipLevel }
                  shipContour={ ship.contour }
              />)}
            </div>
        </div>
  )
}
