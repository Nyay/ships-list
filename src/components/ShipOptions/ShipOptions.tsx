import React from 'react'
import './ShipOptions.css'
import { ShipSearch } from './components/ShipSearch/ShipSearch'
import { useSelector } from 'react-redux'
import { type store } from '../../store/store'
import { ShipTab } from './components/ShipTab/ShipTab'
import { useGetShipsDataQuery } from '../../services/shipsData'
import { type IShipClass, type IShipLevel } from '../ShipDisplay/components/ShipInfo/types'

export const ShipOptions = (): JSX.Element => {
  const search = useSelector((state: ReturnType<typeof store.getState>) => state.shipSearch.value)
  const checkSearch = (shipName: string, search: string): boolean =>
    shipName.toLowerCase().includes(search.toLowerCase())
  const { data } = useGetShipsDataQuery('')

  return (
        <div className='ship-options' >
            <ShipSearch />
            <div className='overflow-control'>
              { data?.shipsList.map((ship) => checkSearch(ship.name, search) && <ShipTab
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
