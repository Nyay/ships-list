import React, { useCallback, useState } from 'react'
import './ShipTab.css'
import { type IShipTab } from './types'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentShip } from '../../shipOptionsSlice'
import { type store } from '../../../../store/store'
import classNames from 'classnames'
import { shipLevels, ShipTypeImgPath } from '../../../constants'

export const ShipTab = ({ shipName, shipId, shipClass, shipLevel, shipContour }: IShipTab): JSX.Element => {
  const [isIconLoaded, setIsIconLoaded] = useState(false)

  const currentShip = useSelector((state: ReturnType<typeof store.getState>) => state.setCurrentShip.value)
  const isCurrentShip = currentShip === shipId

  const dispatch = useDispatch()

  const handleOnClick = useCallback(() => {
    dispatch(setCurrentShip({ value: shipId }))
  }, [])

  return (
        <div
            className={ classNames('ship-tab', { 'current-ship': isCurrentShip }) }
            onClick={ handleOnClick }
        >
            <div className='ship-tab-name'>
                { shipName }
            </div>
            <div className='ship-tab-short-info'>
            { !isCurrentShip
              ? <>
                    <img
                        key={`${currentShip}_class`}
                        className='ship-tab-class'
                        alt={ shipClass }
                        src={ ShipTypeImgPath[shipClass] }
                    />
                    { shipLevels[shipLevel] }
                </>
              : <img
                    alt={`${currentShip}_counter`}
                    key={`${currentShip}_counter`}
                    style={ isIconLoaded ? {} : { opacity: 0 }}
                    className='ship-tab-counter'
                    src={`https://glossary-wows-global.gcdn.co/icons/${shipContour}`}
                    onLoad={() => { setIsIconLoaded(true) }}
                />
            }
            </div>
        </div>
  )
}
