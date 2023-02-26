import { IShipClass, IShipLevel } from '../../../ShipDisplay/components/ShipInfo/types';

export interface IShipTab {
    shipName: string;
    shipId: number;
    shipClass: IShipClass;
    shipLevel: IShipLevel;
    shipContour: string;
}