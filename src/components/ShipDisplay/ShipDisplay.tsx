import React from 'react'
import './ShipDisplay.css'
import { useGetShipsDataQuery } from '../../services/shipsData'
import { useSelector } from 'react-redux'
import { type store } from '../../store/store'
import { ShipImage } from './components/ShipImage/ShipImage'
import { type IShipClass, type IShipLevel } from './components/ShipInfo/types'
import { ShipInfo } from './components/ShipInfo/ShipInfo'

export const ShipDisplay = (): JSX.Element => {
  const { data } = useGetShipsDataQuery('')
  const currentShip = useSelector((state: ReturnType<typeof store.getState>) => state.setCurrentShip.value)

  return ((!!currentShip && data)
    ? <div className='ship-display'>
            <ShipImage
                shipImage={ `https://glossary-wows-global.gcdn.co/icons/${data.data[currentShip].icons.large}` }
                nation={ data.data[currentShip].nation } />
            <ShipInfo
                shipName={ data.data[currentShip].localization.mark.ru }
                shipClass={ data.data[currentShip].tags[0] as IShipClass }
                shipDescription={ data.data[currentShip].localization.description.ru }
                shipLevel={ data.data[currentShip].level as IShipLevel }
            />
        </div>
    : <></>
  )
}
