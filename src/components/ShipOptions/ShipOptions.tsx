import React from 'react'
import {
  ShipSearch,
  ShipTab,
  NationFilter,
  ClassFilter,
  LoadingIcon,
  OverflowControlStyled,
  SubInfoBlockStyled
} from './components'
import { useSelector } from 'react-redux'
import { useGetShipsDataQuery } from '../../services/shipsData'
import { type IShipClass, type IShipLevel } from '../ShipDisplay/components/ShipInfo/types'
import { nationSelector } from './components/NationFilter/components/NationItem/nationItemSelectors'
import { searchSelector } from './shipOptionsSelectors'
import { type IShipToList } from './types'
import { classSelector } from './components/ClassFilter/components/ClassItem/classItemSelectors'
import { emptySearch, errorText } from './constants'
import { ShipOptionsStyled } from './ShipOptions.styled'

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
        <ShipOptionsStyled >
            <ShipSearch />
            <NationFilter />
            <ClassFilter />
             <OverflowControlStyled>
              { isAnyShip && data?.shipsList.map((ship) => checkSearch(ship, search) && <ShipTab
                  key={ ship.id }
                  shipId={ ship.id }
                  shipName={ ship.name }
                  shipClass={ ship.class as IShipClass }
                  shipLevel={ ship.level as IShipLevel }
                  shipContour={ ship.contour }
              />)}
                 { error && <SubInfoBlockStyled>{errorText}</SubInfoBlockStyled>}
                 { !isAnyShip && !isLoading && !error && <SubInfoBlockStyled>{emptySearch}</SubInfoBlockStyled>}
             </OverflowControlStyled>
            { isLoading && <SubInfoBlockStyled><LoadingIcon /></SubInfoBlockStyled>}
        </ShipOptionsStyled>
  )
}
