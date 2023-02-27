import React from 'react'
import './ShipImage.css'

interface IShipImage {
  shipImage: string
  nation: string
}

export const ShipImage = ({ shipImage, nation }: IShipImage): JSX.Element => {
  return (
        <div className='ship-image-container'>
            <img key={shipImage} className='ship-nation-flag' src={`src/shared/${nation}.png`} alt=''/>
            <img
                key={ shipImage }
                className='ship-image'
                alt=''
                src={ shipImage }
            />
        </div>
  )
}
