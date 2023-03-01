import React from 'react'
import { ShipTypeImgPath, shipLevels } from '../../../constants'
import { type IShipInfo } from './types'
import {
  ShipDescriptionStyled,
  ShipInfoClassStyled,
  ShipInfoHeaderStyled,
  ShipInfoNameStyled
} from './components'
import { ShipInfoStyled } from './ShipInfo.styled'

export const ShipInfo = ({ shipName, shipClass, shipLevel, shipDescription }: IShipInfo): JSX.Element => {
  return (
        <ShipInfoStyled>
            <ShipInfoHeaderStyled>
                <ShipInfoNameStyled>{ shipName }</ShipInfoNameStyled>
                <ShipInfoClassStyled alt={ shipClass } src={ ShipTypeImgPath[shipClass] }/>
                { shipLevels[shipLevel] }
            </ShipInfoHeaderStyled>
            <ShipDescriptionStyled>
                {shipDescription}
            </ShipDescriptionStyled>
        </ShipInfoStyled>
  )
}
