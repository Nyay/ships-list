import React from 'react'
import './ShipDisplay.css'
import { useGetShipsDataQuery } from '../../services/shipsData'
import { useSelector } from 'react-redux'
import { type store } from '../../store/store'
import { ShipImage, ShipInfo } from './components'
import { type IShipClass, type IShipLevel } from './components/ShipInfo/types'

export const ShipDisplay = (): JSX.Element => {
  const { data } = useGetShipsDataQuery('')
  const currentShip = useSelector((state: ReturnType<typeof store.getState>) => state.setCurrentShip.value)

  return ((!!currentShip && data)
    ? <div className='ship-display'>
            <ShipImage
                shipImage={ `https://glossary-wows-global.gcdn.co/icons/${data.fullData[currentShip].icons.large}` }
                nation={ data.fullData[currentShip].nation } />
            <ShipInfo
                shipName={ data.fullData[currentShip].localization.mark.ru }
                shipClass={ data.fullData[currentShip].tags[0] as IShipClass }
                shipDescription={ data.fullData[currentShip].localization.description.ru }
                shipLevel={ data.fullData[currentShip].level as IShipLevel }
            />
        </div>
    : <></>
  )
}
