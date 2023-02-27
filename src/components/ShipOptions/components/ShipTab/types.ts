import { type IShipClass, type IShipLevel } from '../../../ShipDisplay/components/ShipInfo/types'

export interface IShipTab {
  shipName: string
  shipId: string
  shipClass: IShipClass
  shipLevel: IShipLevel
  shipContour: string
}
