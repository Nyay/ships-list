import React, { useCallback } from 'react'
import { type IShipTab } from './types'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentShip } from '../../shipOptionsSlice'
import { type store } from '../../../../store/store'
import { shipLevels, ShipTypeImgPath } from '../../../constants'
import {
  ShipTabClassStyled,
  ShipTabCounterStyled,
  ShipTabNameStyled,
  ShipTabShortInfoStyled
} from './components'
import { ShipTabStyled } from './ShipTab.styled'

export const ShipTab = ({ shipName, shipId, shipClass, shipLevel, shipContour }: IShipTab): JSX.Element => {
  const currentShip = useSelector((state: ReturnType<typeof store.getState>) => state.setCurrentShip.value)
  const isCurrentShip = currentShip === shipId

  const dispatch = useDispatch()

  const handleOnClick = useCallback(() => {
    dispatch(setCurrentShip({ value: shipId }))
  }, [])

  return (
        <ShipTabStyled isSelected={isCurrentShip}
            onClick={ handleOnClick }
        >
            <ShipTabNameStyled>{ shipName }</ShipTabNameStyled>
            <ShipTabShortInfoStyled>
            { !isCurrentShip
              ? <>
                    <ShipTabClassStyled
                        key={`${currentShip}_class`}
                        alt={ shipClass }
                        src={ ShipTypeImgPath[shipClass] }
                    />
                    { shipLevels[shipLevel] }
                </>
              : <ShipTabCounterStyled
                    alt={`${currentShip}_counter`}
                    key={`${currentShip}_counter`}
                    src={`https://glossary-wows-global.gcdn.co/icons/${shipContour}`}
                />
            }
            </ShipTabShortInfoStyled>
        </ShipTabStyled>
  )
}
