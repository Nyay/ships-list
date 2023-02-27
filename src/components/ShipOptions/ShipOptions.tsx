import React from 'react'
import './ShipOptions.css'
import { ShipSearch, ShipTab, NationFilter, ClassFilter } from './components'
import { useSelector } from 'react-redux'
import { useGetShipsDataQuery } from '../../services/shipsData'
import { type IShipClass, type IShipLevel } from '../ShipDisplay/components/ShipInfo/types'
import { nationSelector } from './components/NationFilter/components/NationItem/nationItemSelectors'
import { searchSelector } from './shipOptionsSelectors'
import { type IShipToList } from './types'
import { classSelector } from './components/ClassFilter/components/ClassItem/classItemSelectors'
import { LoadingIcon } from './components/LoadingIcon/LoadingIcon'
import { emptySearch, errorText } from './constants'

export const ShipOptions = (): JSX.Element => {
  const search = useSelector(searchSelector)
  const currentNation = useSelector(nationSelector)
  const currentClass = useSelector(classSelector)
  const checkSearch = (shipName: IShipToList, search: string): boolean =>
    shipName.name.toLowerCase().includes(search.toLowerCase()) &&
      (currentNation === 'all' || shipName.nation === currentNation) &&
      (currentClass === 'all' || shipName.class === currentClass)
  const { data, isLoading, error } = useGetShipsDataQuery('')
  const isAnyShip = data?.shipsList.some((ship) => checkSearch(ship, search))

  return (
        <div className='ship-options' >
            <ShipSearch />
            <NationFilter />
            <ClassFilter />
             <div className='overflow-control'>
              { isAnyShip && data?.shipsList.map((ship) => checkSearch(ship, search) && <ShipTab
                  key={ ship.id }
                  shipId={ ship.id }
                  shipName={ ship.name }
                  shipClass={ ship.class as IShipClass }
                  shipLevel={ ship.level as IShipLevel }
                  shipContour={ ship.contour }
              />)}
                 { error && <div className='sub-info-block'>{errorText}</div>}
                 { !isAnyShip && !isLoading && !error && <div className='sub-info-block'>{emptySearch}</div>}
             </div>
            { isLoading && <div className='sub-info-block'><LoadingIcon /></div>}
        </div>
  )
}
