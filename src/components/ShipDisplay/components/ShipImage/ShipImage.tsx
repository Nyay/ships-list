import React from 'react'
import { ShipImageStyled } from './ShipImage.styled'
import { ShipStyled, FlagStyled } from './components'

interface IShipImage {
  shipImage: string
  nation: string
}

export const ShipImage = ({ shipImage, nation }: IShipImage): JSX.Element => {
  return (
        <ShipImageStyled>
            <FlagStyled
                key={`${nation}_bg`}
                alt={ nation }
                src={`src/shared/${nation}.png`}/>
            <ShipStyled
                key={ shipImage }
                alt=''
                src={ shipImage }
            />
        </ShipImageStyled>
  )
}
