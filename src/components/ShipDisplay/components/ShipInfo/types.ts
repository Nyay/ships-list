export type IShipLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type IShipClass = 'AirCarrier' | 'Battleship' | 'Cruiser' | 'Destroyer';

export interface IShipInfo {
    shipName: string,
    shipClass: IShipClass,
    shipLevel: IShipLevel,
    shipDescription: string,
}