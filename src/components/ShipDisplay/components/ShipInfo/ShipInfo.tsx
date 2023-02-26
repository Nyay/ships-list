import React from 'react';
import './ShipInfo.css'
import {ShipTypeImgPath, shipLevels} from "../../../constants";

export type IShipLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type IShipClass = 'AirCarrier' | 'Battleship' | 'Cruiser' | 'Destroyer';

interface IShipInfo {
    shipName: string,
    shipClass: IShipClass,
    shipLevel: IShipLevel,
    shipDescription: string,
}

export const ShipInfo = ({ shipName, shipClass, shipLevel, shipDescription }: IShipInfo) => {
    return(
        <div className='ship-info'>
            <div className='ship-info-header'>
                <h2 className='ship-info-header-text'>{ shipName }</h2>
                <img className='ship-info-header-class' alt={ shipClass } src={ShipTypeImgPath[shipClass]}/>
                { shipLevels[shipLevel]}
            </div>
            <div className='ship-info-description'>
                {shipDescription}
            </div>
        </div>
    )
}