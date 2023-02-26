import React from 'react'
import './ShipInfo.css'
import { ShipTypeImgPath, shipLevels } from '../../../constants'
import { type IShipInfo } from './types'

export const ShipInfo = ({ shipName, shipClass, shipLevel, shipDescription }: IShipInfo): JSX.Element => {
  return (
        <div className='ship-info'>
            <div className='ship-info-header'>
                <h2 className='ship-info-header-text'>{ shipName }</h2>
                <img className='ship-info-header-class' alt={ shipClass } src={ ShipTypeImgPath[shipClass] }/>
                { shipLevels[shipLevel] }
            </div>
            <div className='ship-info-description'>
                {shipDescription}
            </div>
        </div>
  )
}
